# Ambient Code Platform: Community & Documentation Revitalization Plan

> **Status**: Draft | **Created**: 2026-02-18 | **Owner**: Community Lead

## Executive Summary

The Ambient Code Platform has strong technology and genuine developer interest, but is losing potential contributors at every step of the funnel due to documentation duplication, stale references, decision paralysis from too many paths, and invisible community infrastructure. This plan addresses all ten identified problems through a phased approach prioritizing quick wins that immediately reduce friction, followed by structural changes that prevent regression.

**The core thesis**: ACP's documentation should shrink by ~40%, its onboarding paths should collapse from four to one, and every page a newcomer touches should answer "what do I do next?" within 10 seconds.

---

## Table of Contents

- [1. Community Strategy Assessment](#1-community-strategy-assessment)
- [2. Documentation Architecture Redesign](#2-documentation-architecture-redesign)
- [3. README Rewrite Spec](#3-readme-rewrite-spec)
- [4. CONTRIBUTING.md Rewrite Spec](#4-contributingmd-rewrite-spec)
- [5. Good First Issues & Contributor Funnel Strategy](#5-good-first-issues--contributor-funnel-strategy)
- [6. Day 1 Experience Design](#6-day-1-experience-design)
- [7. Documentation Audit Checklist](#7-documentation-audit-checklist)
- [8. Roadmap & Governance Visibility](#8-roadmap--governance-visibility)
- [9. Implementation Phasing](#9-implementation-phasing)
- [10. Success Metrics](#10-success-metrics)
- [Appendix: Exemplar Projects](#appendix-exemplar-projects)

---

## 1. Community Strategy Assessment

### Current State Analysis

**What's working:**

- The project has real technology substance (K8s-native AI orchestration is genuinely interesting)
- 55 forks and 26 contributors suggest organic interest
- Kind-based local dev (`make kind-up`) is a genuinely good golden path when you find it
- Component READMEs are well-structured
- ADRs document decision rationale (best practice most projects skip)
- Amber automation is innovative and differentiating

**What's broken:**

| Problem | Severity | Evidence |
|---------|----------|----------|
| **"vTeam" naming confusion** | Critical | Clone URLs in README, CONTRIBUTING, QUICK_START all say `vTeam.git`. A newcomer clones the repo and immediately wonders if they're in the right place. |
| **Four setup paths, no clear default** | Critical | README links Kind, Minikube, CRC, Hybrid. CONTRIBUTING.md lists Minikube in prerequisites (line 79) but recommends Kind below (line 347). QUICK_START.md is Kind-only. The signal is contradictory. |
| **README `make local-up` doesn't exist** | Critical | The contributing snippet on README line 111 tells people to run `make local-up`. This command likely doesn't exist — `make kind-up` is the real command. First contribution attempt fails immediately. |
| **Zero community infrastructure visible** | High | No Slack/Discord link, no community meeting schedule, no "who to ask" guide, no roadmap. The repo feels like an internal project that was open-sourced, not a community project. |
| **Documentation duplication** | High | Local dev setup is documented in: README, QUICK_START.md, CONTRIBUTING.md, docs/developer/local-development/kind.md. Four copies means four places to go stale. |
| **CLAUDE.md is a wall** | Medium | 2000+ lines of internal standards. Excellent for AI assistants, but linked from README and CONTRIBUTING as if human contributors should read it. No human will. |
| **No contributor journey design** | Medium | No "good first issues" strategy, no welcome bot, no response time commitment, no way to track whether people who visit actually contribute. |

### Top 7 Highest-Impact Problems (Prioritized)

1. **Fix broken clone URLs and `make local-up`** — People literally can't follow the README instructions
2. **Collapse to one golden path** — Kind is the answer; make it impossible to miss
3. **Rewrite README for humans** — First 30 seconds determine whether someone stays
4. **Add community infrastructure** — Slack/Discord, meetings, roadmap
5. **Eliminate documentation duplication** — Single source of truth per topic
6. **Create "good first issues" pipeline** — Convert interest into contributions
7. **Separate human docs from AI docs** — CLAUDE.md is for Claude, not for contributors

### Contributor Journey: Today vs. Ideal

**Today's journey:**

```
Find repo → Read README → Confused by vTeam references →
Try to clone vTeam URL → Fail or succeed with confusion →
See 4 local dev options → Decision paralysis →
Try make local-up (doesn't exist) → Give up OR
Eventually find make kind-up → Succeed but exhausted →
Want to contribute → Read CONTRIBUTING.md → See Minikube prereqs →
Confused again → No Slack to ask → Leave
```

**Ideal journey:**

```
Find repo → README hooks them in 10 seconds →
"Quick Start: make kind-up" → Running in 2 minutes →
"Your First Contribution" guide → Fix a typo, see it work →
Join Slack, introduce themselves → Welcome bot responds →
Pick a "good first issue" → Mentor assigned →
PR merged within 48 hours → Repeat contributor
```

### Community Infrastructure Recommendations

| Infrastructure | Tool | Why |
|---------------|------|-----|
| **Real-time chat** | Discord (free, public, threaded) | Lower barrier than Slack for open source. Channels: `#general`, `#help`, `#development`, `#showcase` |
| **Community meetings** | Bi-weekly 30-min video call, recorded | Backstage model. Agenda in GitHub Discussion, recording on YouTube. Start with monthly, increase with demand. |
| **Roadmap** | GitHub Projects board, linked from README | Public board with "Now / Next / Later" columns. Exemplar: Argo CD's public roadmap. |
| **Discussions** | GitHub Discussions (already available) | For questions, proposals, show-and-tell. Better than issues for open-ended conversation. |
| **Welcome bot** | GitHub Actions + `first-timers-bot` | Auto-comment on first PR/issue with welcome message and helpful links |
| **Response SLA** | Team commitment: issues triaged < 48h, PRs reviewed < 72h | This is the single biggest competitive advantage for a small project. "We are on top of it so you don't have to be." |

---

## 2. Documentation Architecture Redesign

### Guiding Principles

1. **Single source of truth**: Every topic has exactly one canonical location
2. **Proximity to code**: Component-specific docs live with components
3. **Progressive disclosure**: README → QUICK_START → Component docs → Deep reference
4. **Freshness by default**: If a doc can't be kept current, it should be archived or deleted
5. **Human-first, AI-assisted**: CLAUDE.md is tooling infrastructure, not contributor documentation

### Proposed Structure

**Repo root (5 files, down from 8):**

| File | Purpose | Action |
|------|---------|--------|
| `README.md` | Hook, quick start, navigation hub | **Rewrite** (see Section 3) |
| `CONTRIBUTING.md` | Contributor golden path | **Rewrite** (see Section 4) |
| `CLAUDE.md` | AI assistant standards | **Keep**, remove from contributor-facing links |
| `AGENTS.md` | Symlink to CLAUDE.md | **Keep** (Cursor convention) |
| `LICENSE` | MIT license | **Keep** |
| ~~`QUICK_START.md`~~ | Duplicates README quick start | **Delete** — merge into README |
| ~~`AMBER_SETUP.md`~~ | Internal Amber config | **Move** to `docs/tools/amber/setup.md` |
| ~~`TESTING_SUMMARY.md`~~ | One-time CI summary | **Delete** — stale artifact |

**docs/ directory (reorganized, ~60% fewer files):**

```
docs/
├── index.md                        # MkDocs landing page
├── getting-started.md              # SINGLE getting started guide (consolidated)
├── architecture/
│   ├── overview.md                 # Architecture overview (merge README.md into this)
│   ├── diagrams/                   # Mermaid diagrams (keep)
│   └── decisions/                  # ADRs (moved from adr/, keep all 5)
├── guides/
│   ├── local-development.md        # ONE guide: Kind (golden path) + brief CRC/Hybrid notes
│   ├── deployment.md               # Production deployment (consolidate 7 files → 1)
│   ├── integrations/
│   │   ├── github.md               # GitHub App setup
│   │   ├── gitlab.md               # GitLab (merge 5 files → 1)
│   │   └── google-workspace.md     # Keep
│   ├── observability.md            # Langfuse (merge 3 files → 1)
│   └── testing.md                  # Testing strategy (merge 4 files → 1)
├── reference/
│   ├── glossary.md                 # Keep
│   ├── model-pricing.md            # Keep
│   └── api.md                      # API reference (merge proposals + gitlab endpoints)
├── tools/
│   └── amber.md                    # Amber (merge 4+ Amber docs → 1)
└── archive/                        # Clearly labeled archive
    ├── README.md                   # "These docs are historical. May be outdated."
    ├── agents/                     # All agent personas (active + archived)
    ├── design/                     # Internal design docs
    ├── implementation-plans/       # Historical plans
    ├── labs/                       # Training labs
    ├── minikube.md                 # Old Minikube guide
    └── hybrid.md                   # Old hybrid guide
```

### What Gets Deleted, Merged, or Archived

| Current Location | Action | Rationale |
|-----------------|--------|-----------|
| `QUICK_START.md` | **Delete** | Content merged into README |
| `AMBER_SETUP.md` | **Move** to `docs/tools/amber.md` | Not a repo-root concern |
| `TESTING_SUMMARY.md` | **Delete** | One-time artifact, stale |
| `docs/DOCUMENTATION_MAP.md` | **Delete** | Replace with simpler docs/index.md |
| `docs/README.md` | **Merge** into `docs/index.md` | Duplicate of DOCUMENTATION_MAP |
| `docs/developer/local-development/minikube.md` | **Archive** | Kind is the golden path |
| `docs/developer/local-development/hybrid.md` | **Archive** | Niche use case |
| `docs/developer/local-development/crc.md` | **Keep** (move to guides/) | OpenShift users need it, but secondary |
| `docs/developer/local-development/kind.md` | **Merge** into `docs/guides/local-development.md` | Single local dev guide |
| `docs/developer/local-development/README.md` | **Delete** | Comparison page adds confusion |
| `docs/agents/active/` (6 files) | **Archive** | Internal persona definitions, not contributor docs |
| `docs/agents/archived/` (17 files) | **Archive** | Historical |
| `docs/design/` (6 files) | **Archive** | Internal design docs |
| `docs/implementation-plans/` | **Archive** | Historical |
| `docs/labs/` | **Archive** | Training exercises, low traffic |
| `docs/proposals/` | **Archive** | Historical proposals |
| `docs/diagrams/amber-workflow.md` | **Archive** | Internal |
| `docs/gha-optimization-testing-guide.md` | **Delete** | One-time optimization guide |
| `docs/testing/amber-workflow-validation.md` | **Archive** | Internal testing |
| `docs/testing/testing-summary.md` | **Delete** | Duplicate of root TESTING_SUMMARY.md |
| `docs/integrations/gitlab-integration-test-plan.md` | **Delete** | Internal test plan |
| `docs/integrations/gitlab-testing-procedures.md` | **Delete** | Internal QA |
| `docs/reference/constitution.md` | **Archive** | Internal governance |
| `docs/amber-quickstart.md` + `docs/amber-automation.md` | **Merge** into `docs/tools/amber.md` | Three Amber docs → one |
| `docs/user-guide/` (4 files) | **Merge** into `docs/getting-started.md` + `docs/tools/amber.md` | Simplify user entry |

**Net result**: ~100+ files → ~20 active files + archive folder. Massive reduction in cognitive load.

### Ownership Model

| Area | Owner | Review Cadence |
|------|-------|---------------|
| `README.md`, `CONTRIBUTING.md` | Community lead / maintainer | Every release |
| Component READMEs | Component maintainer | With component changes |
| `docs/guides/` | Whoever changes the feature | With feature PRs |
| `docs/architecture/` | Tech lead | Quarterly |
| `docs/reference/` | Community contributor | As needed |
| `CLAUDE.md` | AI tooling maintainer | With dev standard changes |

### Freshness Strategy

1. **Doc-as-code reviews**: Every PR that changes behavior must update associated docs (enforced by PR template checklist)
2. **Quarterly doc audit**: GitHub Action that lists docs not modified in 90+ days → creates tracking issue
3. **Archive by default**: If a doc hasn't been updated in 6 months and isn't core (getting-started, contributing, architecture), it moves to `docs/archive/`
4. **Single ownership**: Every doc file has an owner in a CODEOWNERS-style comment at the top
5. **Link checking**: MkDocs plugin or GitHub Action that checks for broken internal links on every PR

---

## 3. README Rewrite Spec

### Target Structure (in exact order)

```markdown
# Ambient Code Platform

[One-line description that hooks]

[3-sentence value proposition paragraph]

[Screenshot or GIF placeholder] [Demo link if available]

[Badges: License, Stars, Contributors, Latest Release, CI Status]

---

## What is Ambient Code Platform?
[2-3 paragraphs explaining what it does in human terms, not architecture terms]
[Link to blog/about page for deeper context]

## Quick Start
[ONE path: make kind-up, 5 steps maximum]
[No alternatives in this section]

## How It Works
[Simple diagram: User → Frontend → Backend → Operator → Runner → Results]
[Component table with one-line descriptions]

## Documentation
[4-5 links max, organized by role:]
### I want to...
- **Deploy ACP to my cluster** → Deployment Guide
- **Contribute code** → Contributing Guide
- **Understand the architecture** → Architecture Overview
- **Report a bug or request a feature** → GitHub Issues

## Community
- **Chat**: [Discord/Slack link]
- **Meetings**: [Calendar/schedule link]
- **Roadmap**: [GitHub Projects link]
- **Blog**: https://ambient-code.ai/

## Contributing
[3-4 sentences that feel welcoming]
[Link to CONTRIBUTING.md]
[Link to good-first-issues]

## License
MIT

---
_Formerly known as "vTeam" — some internal artifacts use this name for backward
compatibility._
```

### Key Changes from Current README

1. **Kill the architecture table as the first substantive content.** Replace with human-readable "What is this?" section. Architecture moves down.
2. **Remove all alternative setup paths from Quick Start.** Kind is the answer. Period. CRC and Minikube are linked from the developer guide, not README.
3. **Fix the clone URL.** `github.com/ambient-code/platform` — not `vTeam`.
4. **Fix `make local-up`** → `make kind-up`.
5. **Remove Amber from README.** Amber is a development tool, not part of the platform value proposition. It gets a one-line mention under "Tools" at most.
6. **Add community section.** Discord, meetings, roadmap — make it feel alive.
7. **Remove CLAUDE.md from contributor-facing links.** Contributors should read CONTRIBUTING.md. CLAUDE.md is for AI tools.
8. **Add "I want to..." navigation.** Role-based entry points that answer "where do I start?" for each persona.
9. **Move vTeam note to bottom.** A footnote, not a distraction.

### Exemplars to Study

- **Backstage README** (https://github.com/backstage/backstage): Great "What is Backstage?" section, clear demo link, single getting started path
- **Dapr README** (https://github.com/dapr/dapr): Excellent badges, quick start, community links
- **Argo CD README** (https://github.com/argoproj/argo-cd): Clean architecture diagram, clear "Getting Started" section

---

## 4. CONTRIBUTING.md Rewrite Spec

### Target Structure (in exact order)

```markdown
# Contributing to Ambient Code Platform

## Welcome!
[2-3 sentences: "We're glad you're here. Here's what contributing
feels like: you'll have a running environment in 2 minutes,
a mentor if you need one, and your PR reviewed within 72 hours."]

## Your First Contribution

### Quick Wins (10 minutes)
1. Find a typo or unclear doc
2. Fork the repo: `git clone https://github.com/ambient-code/platform.git`
3. Make the fix on a branch
4. Open a PR — we'll take it from there!

### Good First Issues
[Link to filtered issue list]
These issues are specifically labeled for newcomers. Each one has:
- Clear description of what to change
- Which files to look at
- A mentor who can help

### Full Development Setup (15 minutes)
**Prerequisites**: Docker, kubectl, Kind, Git
**One command**: `make kind-up` → http://localhost:8080

[Detailed steps: fork, clone, branch, make changes, test, PR]

## Types of Contributions

### Fix a Bug
[What to include in the issue, how to write the fix, testing expectations]

### Add a Feature
[Propose first via GitHub Discussion or Issue, get buy-in, then implement]

### Improve Documentation
[Where docs live, how to preview MkDocs locally, what makes a good doc PR]

### Frontend Development
[Prerequisites, npm commands, design guidelines link, component patterns]

### Backend / Operator Development
[Prerequisites, Go commands, testing patterns, CLAUDE.md reference for standards]

### Python Runner Development
[Prerequisites, virtual env setup, testing]

## Development Workflow
[Branch naming, commit conventions, PR template, review process]

## Code Standards (Brief)
[3-4 bullet points per language with links to detailed guides]
[NOT the full CLAUDE.md — just highlights with "See X for full details"]

## Getting Help
- **Stuck on setup?** → #help channel in [Discord/Slack]
- **Not sure where to start?** → [Good first issues]
- **Want to discuss an idea?** → GitHub Discussions
- **Found a bug?** → GitHub Issues

## Code of Conduct
[Brief, link to full CoC]
```

### Key Changes from Current CONTRIBUTING.md

1. **Lead with warmth, not process.** Current version opens with a table of contents. New version opens with "Welcome, here's what it feels like to contribute here."
2. **Fix ALL vTeam references.** Lines 88, 93 currently say `vTeam.git` and `ambient-code/vTeam.git`.
3. **Remove Minikube from prerequisites.** Currently line 79 lists Minikube. Kind is the only prerequisite.
4. **Remove "Test locally with Minikube if possible."** (line 315). Kind.
5. **Add role-based sections.** Frontend dev, backend dev, docs contributor each get their own mini-guide.
6. **Add "Your First Contribution" golden path.** Currently missing entirely.
7. **Add good-first-issues link.** Currently no mention.
8. **Add community/help channels.** Currently the "Getting Help" section just points to documentation.
9. **Separate quick wins from full contributions.** "Fix a typo" should be a 10-minute path, not buried in the same flow as "add a feature."

---

## 5. Good First Issues & Contributor Funnel Strategy

### Creating and Maintaining Good First Issues

**Target**: Maintain 10-15 open good-first-issues at all times (Kubernetes aims for 25% of issues).

**Issue Template for Good First Issues:**

```markdown
## Description
[Clear 2-3 sentence description of what needs to change]

## Files to Look At
- `path/to/file.go` (lines ~50-70)

## Expected Outcome
[What the fix/feature should do when complete]

## Helpful Context
- [Link to relevant doc or code]
- Mentor: @username (ping if you need help)

## Labels
good-first-issue, help-wanted, [component label]
```

**Sources of Good First Issues** (systematic, not ad-hoc):

| Source | Frequency | Example Issues |
|--------|-----------|---------------|
| **vTeam → ACP naming cleanup** | One-time batch | "Replace 'vTeam' with 'platform' in [file]" — create 10-15 of these |
| **Doc improvements** | Ongoing | "Add troubleshooting section to [guide]", "Fix broken link in [doc]" |
| **Linter warnings** | Monthly | "Fix golangci-lint warning in [file]" |
| **Test coverage gaps** | Monthly | "Add unit test for [function]" |
| **UI improvements** | Ongoing | "Add empty state to [component]", "Add loading indicator to [button]" |
| **Error message improvements** | Ongoing | "Improve error message when [condition]" |

### Contributor Journey Tracking

**Instrumentation (lightweight):**

1. **GitHub Traffic**: Monitor clones, unique visitors, referral sources (built into GitHub)
2. **Issue/PR velocity**: Track time from issue open → first response, PR open → first review, PR open → merge
3. **Contributor cohorts**: Monthly snapshot of new vs. returning contributors
4. **Discord/Slack join rate**: Track growth of community chat

**Automation:**

| Bot/Tool | Purpose | Implementation |
|----------|---------|---------------|
| **Welcome Bot** | Greet first-time contributors on their first issue/PR | GitHub Action: `.github/workflows/welcome.yml` using `actions/first-interaction` |
| **Good First Issue Bot** | Auto-add "help wanted" label when issue gets "good-first-issue" | GitHub Action label sync |
| **Stale Issue Bot** | Close issues with no activity after 90 days (with warning at 60) | `actions/stale` |
| **CodeRabbit** | Automated code review on PRs | Already have corp license — enable on all PRs |
| **PR Size Labels** | Auto-label PRs as XS/S/M/L/XL | GitHub Action based on diff size |

### Response Time as Competitive Advantage

**Commitment:**

- Issues triaged (labeled + acknowledged) within **24 hours**
- PRs receive first review within **48 hours**
- Good-first-issue PRs receive review within **24 hours**

**How:**

- GitHub notification routing to team Slack/Discord channel
- Weekly rotation for "first responder" duty
- Monthly report on response times (GitHub API → simple dashboard)

This directly addresses the community meeting note: *"We will be right on top of all this stuff, no waiting for anything."*

---

## 6. Day 1 Experience Design

### Path A: "I Have 10 Minutes to Evaluate This" (Explorer)

| Step | What They Do | Current Experience | Ideal Experience |
|------|-------------|-------------------|-----------------|
| 1 | Land on repo | See architecture table first, vTeam references | See clear value prop, screenshot, quick start |
| 2 | Scan README | Confused by 4 setup options | See ONE clear path: `make kind-up` |
| 3 | Check stars/activity | 64 stars, recent commits — promising | Same, plus visible roadmap and community links |
| 4 | Look at issues | No "good first issues" labeled consistently | 10-15 labeled good-first-issues, welcoming descriptions |
| 5 | Check community | No Slack/Discord, no meetings | Discord link, next meeting date, blog link |
| 6 | Decision | "Maybe later" (bounce) | "I'll join Discord and try it this weekend" (convert) |

### Path B: "I Have an Afternoon to Contribute" (Builder)

| Step | What They Do | Friction Point | Fix |
|------|-------------|----------------|-----|
| 1 | Clone repo | URL says `vTeam.git` | Fix to `platform.git` |
| 2 | Read CONTRIBUTING.md | Minikube in prereqs, multiple paths | Single golden path: Kind only |
| 3 | Run `make kind-up` | Works! (this is good) | Keep working |
| 4 | See the UI at localhost:8080 | Works! | Keep working |
| 5 | Pick an issue | No clear "good first issue" pipeline | Curated list with mentor assignments |
| 6 | Make a change | Which branch? Commit format? | CONTRIBUTING.md is clear and concise |
| 7 | Run tests | `make test` — does it work? | Validate and document exact test commands per component |
| 8 | Open PR | PR template exists | Enhance with checklist: tests, docs, screenshots |
| 9 | Wait for review | Unknown wait time | "Reviews within 48h" commitment visible |
| 10 | PR merged | Manual squash-merge | Auto-merge after approval + CI green |
| 11 | Celebrate | Nothing happens | Welcome bot celebrates, contributor added to CONTRIBUTORS |

### Friction Points and Fixes (Summary)

| Friction | Fix | Effort |
|----------|-----|--------|
| vTeam clone URL | Find-and-replace across all docs | 30 min |
| `make local-up` doesn't exist | Change to `make kind-up` in README | 5 min |
| Minikube in CONTRIBUTING prereqs | Remove, replace with Kind | 10 min |
| No welcome for first contributors | Add GitHub Action welcome bot | 1 hour |
| No "good first issues" | Create 15 issues from vTeam rename + doc fixes | 2 hours |
| No community chat | Set up Discord server | 2 hours |
| No response time commitment | Document and commit to SLAs | 30 min |
| CLAUDE.md linked as contributor resource | Remove from contributor-facing links | 5 min |

---

## 7. Documentation Audit Checklist

### User Guide (`docs/user-guide/`)

**Current state**: 4 files (index, getting-started, amber-quickstart, working-with-amber). The getting-started guide is thin and overlaps with QUICK_START.md. Two of four files are about Amber.

**Action**: **Merge** `getting-started.md` + root `QUICK_START.md` into `docs/getting-started.md`. Move Amber files to `docs/tools/amber.md`.

**Priority**: P0

**Owner**: Community lead

### Developer Guide (`docs/developer/`)

**Current state**: 6+ files across local-development/ subdirectory. Four competing setup guides (Kind, Minikube, CRC, Hybrid) plus a comparison README. This is the #1 source of confusion.

**Action**: **Consolidate** into single `docs/guides/local-development.md` with Kind as primary. CRC gets a "For OpenShift Users" appendix section. **Archive** Minikube and Hybrid guides.

**Priority**: P0

**Owner**: Backend/operator maintainer

### Architecture (`docs/architecture/`)

**Current state**: README + diagrams subdirectory with Mermaid files. Well-structured, mostly current.

**Action**: **Keep** with minor cleanup. Rename `README.md` to `overview.md`. Ensure diagrams render in MkDocs. Move ADRs here under `decisions/`.

**Priority**: P1

**Owner**: Tech lead

### Deployment (`docs/deployment/`)

**Current state**: 7 files covering OpenShift, OAuth, Git auth, Langfuse, MinIO, S3. Some overlap between deployment and observability sections.

**Action**: **Consolidate** into `docs/guides/deployment.md` (main deployment guide) with integration-specific sections. Move Langfuse to observability section within the same file or a separate `observability.md`.

**Priority**: P1

**Owner**: Platform/infra maintainer

### Testing (`docs/testing/`)

**Current state**: 4 files (README, e2e-guide, amber-workflow-validation, testing-summary). Testing-summary duplicates root TESTING_SUMMARY.md. Amber-workflow-validation is internal QA.

**Action**: **Merge** into `docs/guides/testing.md`. **Delete** duplicates. **Archive** amber-workflow-validation.

**Priority**: P1

**Owner**: QA/testing contributor

### Integrations (`docs/integrations/`)

**Current state**: 8+ files. GitLab alone has 5 files (integration, test-plan, testing-procedures, self-hosted, token-setup). Most are internal QA docs masquerading as user guides.

**Action**: **Merge** 5 GitLab files into 1 `docs/guides/integrations/gitlab.md`. **Delete** test plans and testing procedures. Keep GitHub and Google Workspace as separate files.

**Priority**: P1

**Owner**: Integration maintainer

### Agents (`docs/agents/`)

**Current state**: 6 active + 17 archived agent persona files. These are internal definitions of AI agent personalities. Interesting intellectually but not contributor documentation.

**Action**: **Archive** entire directory. If agent personas are user-facing, add a brief section to the user guide.

**Priority**: P2

**Owner**: AI/agent maintainer

### Observability (`docs/observability/`)

**Current state**: 3 files (Langfuse integration, operator metrics, README). Overlaps with `docs/deployment/langfuse.md`.

**Action**: **Merge** all into `docs/guides/observability.md`. **Delete** duplicates.

**Priority**: P2

**Owner**: Observability contributor

### Design Docs (`docs/design/`)

**Current state**: 6 internal design documents (session initialization, status redesign, etc.). These are historical engineering documents.

**Action**: **Archive** all. Reference from ADRs where relevant.

**Priority**: P2

**Owner**: Tech lead

### Reference (`docs/reference/`)

**Current state**: Glossary, constitution, model pricing, index. Glossary and model pricing are useful. Constitution is internal governance.

**Action**: **Keep** glossary and model pricing. **Archive** constitution. Merge API reference from proposals.

**Priority**: P2

**Owner**: Community lead

### Labs (`docs/labs/`)

**Current state**: Basic lab exercises. Potentially useful but likely stale and untested.

**Action**: **Archive**. Resurface as a "Tutorials" section when quality can be maintained.

**Priority**: P2

**Owner**: Community/education lead

### Proposals (`docs/proposals/`)

**Current state**: 1 file (ACP public REST API). Historical proposal.

**Action**: **Archive**. If the API is implemented, merge relevant content into API reference.

**Priority**: P2

**Owner**: Backend maintainer

### Standalone Docs at docs/ Root

**Current state**: `amber-automation.md`, `amber-quickstart.md`, `decisions.md`, `DOCUMENTATION_MAP.md`, `gha-optimization-testing-guide.md`

**Action**:

- Amber files → merge into `docs/tools/amber.md`
- `decisions.md` → move to `docs/architecture/decisions/`
- `DOCUMENTATION_MAP.md` → **Delete** (replaced by simpler docs/index.md)
- `gha-optimization-testing-guide.md` → **Delete** (one-time artifact)

**Priority**: P0 (these are visible clutter)

**Owner**: Community lead

---

## 8. Roadmap & Governance Visibility

### Making the Roadmap Visible

**Tool**: GitHub Projects (built-in, zero additional tooling).

**Structure:**

| Column | Contains |
|--------|----------|
| **Now** (In Progress) | Currently being worked on. Max 5-7 items. |
| **Next** (This Quarter) | Committed for this quarter. Design complete. |
| **Later** (Future) | On the radar. Open for community input. |
| **Community Wishlist** | Ideas from community that need championing. |

**Link from README**: "See our [Roadmap](link-to-project-board) for what we're building."

**Exemplar**: Argo CD uses a GitHub Project board linked from their README. Dapr uses a public roadmap issue.

### Communicating Direction

1. **Monthly blog post** on https://ambient-code.ai/ summarizing what shipped, what's next
2. **Release notes** on every GitHub Release (already have 25 releases — ensure quality)
3. **"What's New" section** in community meeting agenda
4. **GitHub Discussions "Announcements" category** for major updates

### Community Meetings

**Format** (inspired by Backstage community calls):

- **Frequency**: Bi-weekly, 30 minutes, video (Zoom/Google Meet)
- **Structure**: 5 min updates, 15 min demo/topic, 10 min open discussion
- **Recording**: YouTube playlist, linked from README
- **Agenda**: GitHub Discussion thread created 3 days before, community can add items
- **Time zone rotation**: Alternate between US-friendly and EU/APAC-friendly times monthly

**Start small**: Monthly meetings until there are 5+ regular attendees, then move to bi-weekly.

---

## 9. Implementation Phasing

### Phase 0: This Week (Quick Wins)

**Goal**: Fix everything that's actively broken or misleading. Someone visiting the repo on Friday should have a better experience than someone visiting today.

| Deliverable | Effort | Impact |
|------------|--------|--------|
| Fix all `vTeam` → `platform` references in README, CONTRIBUTING, QUICK_START | 1 hour | Critical — clone URLs actually work |
| Fix `make local-up` → `make kind-up` in README | 5 min | Critical — first command works |
| Remove Minikube from CONTRIBUTING.md prerequisites | 10 min | High — one path, not two |
| Remove CLAUDE.md from contributor-facing links in README/CONTRIBUTING | 15 min | Medium — less intimidation |
| Create 10 "good first issue" issues (vTeam rename cleanup in various files) | 2 hours | High — immediate contribution opportunities |
| Add "Note: formerly vTeam" footer to README (instead of scattered references) | 10 min | Medium — clean explanation |
| Delete `TESTING_SUMMARY.md` from repo root | 5 min | Low — reduce clutter |

**Total effort**: ~4 hours
**Assignee**: Any maintainer

### Phase 1: This Month (Core Restructure)

**Goal**: New README, new CONTRIBUTING.md, documentation consolidation, community infrastructure live.

| Deliverable | Effort | Impact |
|------------|--------|--------|
| Write new README.md per Section 3 spec | 4 hours | Critical |
| Write new CONTRIBUTING.md per Section 4 spec | 4 hours | Critical |
| Delete QUICK_START.md (content in README) | 30 min | Medium |
| Move AMBER_SETUP.md to docs/tools/ | 30 min | Low |
| Consolidate 4 local dev guides → 1 `docs/guides/local-development.md` | 3 hours | High |
| Set up Discord server with channels | 2 hours | High |
| Create GitHub Projects roadmap board | 2 hours | High |
| Enable CodeRabbit on all PRs | 1 hour | Medium |
| Set up welcome bot (GitHub Action) | 1 hour | Medium |
| Update MkDocs nav to match new structure | 2 hours | Medium |
| Enhance PR template with checklist | 1 hour | Medium |
| Create `docs/archive/` and move first batch of files | 2 hours | Medium |

**Total effort**: ~23 hours (1 person-week)
**Assignee**: Community lead + 1-2 contributors

### Phase 2: This Quarter (Full Audit + Automation)

**Goal**: Complete documentation audit, contributor funnel instrumented, stale doc prevention active.

| Deliverable | Effort | Impact |
|------------|--------|--------|
| Merge GitLab 5 docs → 1 | 3 hours | Medium |
| Merge deployment 7 docs → 1-2 | 4 hours | Medium |
| Merge observability 3 docs → 1 | 2 hours | Low |
| Merge testing 4 docs → 1 | 2 hours | Low |
| Archive agents/, design/, labs/, proposals/ | 2 hours | Medium |
| Create doc freshness GitHub Action (90-day warning) | 3 hours | High |
| Create broken link checker GitHub Action | 2 hours | Medium |
| Set up contributor metrics tracking (GitHub API → simple dashboard) | 4 hours | Medium |
| Host first community meeting | 2 hours | High |
| Create "contributor spotlight" template for blog | 1 hour | Medium |
| Add CODEOWNERS for docs/ | 1 hour | Medium |
| Run full vTeam → platform rename across all remaining artifacts | 4 hours | High |
| Review and update all component READMEs for consistency | 4 hours | Medium |

**Total effort**: ~34 hours (1.5 person-weeks)
**Assignee**: Community lead + component maintainers

### Phase 3: Ongoing (Maintenance + Growth)

| Activity | Cadence |
|----------|---------|
| Maintain 10-15 open good-first-issues | Weekly check |
| Triage new issues within 24h | Daily |
| Review PRs within 48h | Daily |
| Community meeting | Monthly → bi-weekly |
| Doc freshness audit | Quarterly |
| Blog post / newsletter | Monthly |
| Contributor metrics review | Monthly |
| Roadmap board grooming | Bi-weekly |
| MkDocs site deployment | With every docs/ PR |

---

## 10. Success Metrics

### Leading Indicators (Early Signal)

| Metric | Current (Estimated) | 3-Month Target | 6-Month Target | How to Measure |
|--------|-------------------|----------------|----------------|----------------|
| **Time to first successful `make kind-up`** | 15+ min (confusion) | < 5 min | < 3 min | Manual testing + contributor surveys |
| **Time from first PR open to first review** | Unknown (days?) | < 48 hours | < 24 hours | GitHub API: `pulls.created_at` vs first review timestamp |
| **Good first issues open** | ~0 | 10-15 | 10-15 (maintained) | GitHub label filter count |
| **Discord/Slack members** | 0 | 20 | 50 | Platform metrics |

### Lagging Indicators (Sustained Health)

| Metric | Current | 3-Month Target | 6-Month Target | How to Measure |
|--------|---------|----------------|----------------|----------------|
| **Monthly unique contributors** (PRs merged) | ~3-5 | 8-10 | 15+ | GitHub Insights → Contributors |
| **New contributors per month** (first PR ever) | ~1 | 3-4 | 5+ | GitHub API: filter contributors by first contribution date |
| **GitHub Stars** | 64 | 100 | 200 | GitHub repo page |
| **Repeat contributors** (2+ PRs in 90 days) | Unknown | 5 | 10 | GitHub API cohort analysis |
| **Docs pages in MkDocs site** | ~30 (many stale) | ~20 (all current) | ~25 (growing with quality) | `find docs/ -name "*.md" \| wc -l` minus archive |

### North Star Metric

**"Time to First Merged Contribution"**: Measure the elapsed time from a new contributor's first interaction (issue comment, fork, or clone) to their first merged PR.

- **Current estimate**: Days to weeks (if they don't give up)
- **Target**: Under 1 week for typo/doc fixes, under 2 weeks for code contributions

### Measurement Infrastructure

- **GitHub Traffic** (built-in): Clone counts, unique visitors, referring sites — check weekly
- **GitHub API script** (build in Phase 2): Monthly report on contributor metrics, PR velocity, issue response times
- **Discord analytics** (built-in): Member growth, active users, message volume
- **Manual survey** (quarterly): Ask recent contributors: "How was your experience? What almost made you give up?"

---

## Appendix: Exemplar Projects

| Project | What They Do Well | Relevant To |
|---------|------------------|-------------|
| **Backstage** (github.com/backstage/backstage) | README structure, community meetings, plugin ecosystem docs | README rewrite, community meetings |
| **Dapr** (github.com/dapr/dapr) | Quick start simplicity, public roadmap, Discord community | Golden path, roadmap visibility |
| **Argo CD** (github.com/argoproj/argo-cd) | Getting started guide, GitHub Projects roadmap | Contributor funnel |
| **Kubernetes** (github.com/kubernetes/kubernetes) | Good first issues strategy, SIG structure, contributor guide | Good first issues, governance |
| **Material UI** (github.com/mui/material-ui) | "How to contribute" page, issue templates, response time | CONTRIBUTING.md, issue templates |
| **Podman** (github.com/containers/podman) | Clean README for complex infra project, tutorials separated from reference | Doc architecture |

---

## Quick Reference: Immediate Actions

If you take away nothing else from this plan, do these seven things this week:

1. **Find-and-replace `vTeam` → `platform`** in README.md, CONTRIBUTING.md, QUICK_START.md
2. **Fix `make local-up` → `make kind-up`** in README.md
3. **Remove Minikube from CONTRIBUTING.md prerequisites** (line 79)
4. **Remove CLAUDE.md from contributor-facing links** in README and CONTRIBUTING
5. **Create 10 "good first issue" GitHub issues** from the vTeam cleanup tasks
6. **Set up a Discord server** and add the link to README
7. **Delete `TESTING_SUMMARY.md`** from the repo root

These seven actions require ~4 hours of effort and will immediately improve the experience for every person who visits your repository starting tomorrow.
