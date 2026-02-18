(function () {
  var searchIndex = null;
  var searchData = null;
  var overlay, input, results;
  var selectedIdx = -1;

  function init() {
    overlay = document.getElementById('search-overlay');
    input = document.getElementById('search-input');
    results = document.getElementById('search-results');
    if (!overlay || !input || !results) return;

    fetch('/search.json')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        searchData = data;
        searchIndex = lunr(function () {
          this.ref('url');
          this.field('title', { boost: 10 });
          this.field('summary', { boost: 5 });
          this.field('content');
          var idx = this;
          data.forEach(function (item) { idx.add(item); });
        });
      });

    input.addEventListener('input', debounce(performSearch, 120));
    input.addEventListener('keydown', handleKeyNav);

    document.querySelectorAll('.search-trigger').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        openSearch();
      });
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeSearch();
    });

    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        toggleSearch();
      }
      if (e.key === 'Escape' && overlay.classList.contains('search-open')) {
        e.preventDefault();
        closeSearch();
      }
    });
  }

  function openSearch() {
    overlay.classList.add('search-open');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(function () {
      input.focus();
    });
  }

  function closeSearch() {
    overlay.classList.remove('search-open');
    input.value = '';
    results.innerHTML = '';
    selectedIdx = -1;
    document.body.style.overflow = '';
  }

  function toggleSearch() {
    overlay.classList.contains('search-open') ? closeSearch() : openSearch();
  }

  function handleKeyNav(e) {
    var items = results.querySelectorAll('.search-result');
    if (!items.length) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      selectedIdx = Math.min(selectedIdx + 1, items.length - 1);
      updateSelection(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      selectedIdx = Math.max(selectedIdx - 1, 0);
      updateSelection(items);
    } else if (e.key === 'Enter' && selectedIdx >= 0 && items[selectedIdx]) {
      e.preventDefault();
      items[selectedIdx].click();
    }
  }

  function updateSelection(items) {
    items.forEach(function (item, i) {
      item.classList.toggle('search-result-selected', i === selectedIdx);
    });
    if (items[selectedIdx]) {
      items[selectedIdx].scrollIntoView({ block: 'nearest' });
    }
  }

  function performSearch() {
    var query = input.value.trim();
    selectedIdx = -1;

    if (!query || !searchIndex) {
      results.innerHTML = '';
      return;
    }

    var hits = [];
    try {
      hits = searchIndex.search(query + '~1');
    } catch (_) { /* ignore lunr parse errors */ }

    if (!hits.length) {
      try {
        hits = searchIndex.search(query + '*');
      } catch (_) { /* ignore */ }
    }

    if (!hits.length) {
      try {
        hits = searchIndex.search(query);
      } catch (_) { /* ignore */ }
    }

    if (!hits.length) {
      results.innerHTML = '<div class="search-empty">No results for &ldquo;' + escapeHtml(query) + '&rdquo;</div>';
      return;
    }

    var html = hits.slice(0, 12).map(function (hit) {
      var item = searchData.find(function (d) { return d.url === hit.ref; });
      if (!item) return '';
      var snippet = getSnippet(item, query);
      return (
        '<a href="' + item.url + '" class="search-result">' +
          '<div class="search-result-meta">' +
            '<span class="search-badge search-badge-' + item.category.toLowerCase() + '">' + item.category + '</span>' +
            (item.date ? '<span class="search-result-date">' + item.date + '</span>' : '') +
          '</div>' +
          '<div class="search-result-title">' + escapeHtml(item.title) + '</div>' +
          (snippet ? '<div class="search-result-snippet">' + escapeHtml(snippet) + '</div>' : '') +
        '</a>'
      );
    }).join('');

    results.innerHTML = html;
  }

  function getSnippet(item, query) {
    var text = item.content || item.summary || '';
    if (!text) return '';
    var lower = text.toLowerCase();
    var qLower = query.toLowerCase().split(/\s+/)[0];
    var idx = lower.indexOf(qLower);

    if (idx === -1) {
      return text.substring(0, 140) + (text.length > 140 ? '...' : '');
    }

    var start = Math.max(0, idx - 50);
    var end = Math.min(text.length, idx + qLower.length + 90);
    var snippet = '';
    if (start > 0) snippet += '...';
    snippet += text.substring(start, end);
    if (end < text.length) snippet += '...';
    return snippet;
  }

  function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function debounce(fn, ms) {
    var timer;
    return function () {
      clearTimeout(timer);
      timer = setTimeout(fn, ms);
    };
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
