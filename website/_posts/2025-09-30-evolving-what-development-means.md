---
title: "Evolving what development means"
date: 2025-09-30
summary: "The shift to Ambient Code isn't about replacing developers. It's about evolving what development means. There are valid concerns AND solvable problems."
---

The shift to Ambient Code isn't about replacing developers. It's about evolving what development means. There are valid concerns AND solvable problems. Leaving engineering efficiency on the table is not an option.

### "I Don't Trust AI-Generated Code"

- Trust isn't binary, it's earned through verification. In the kernel performance work I used to do, we'd compile 40 different kernel versions to isolate an issue. Each build was an experiment, each test a verification. We didn't trust without validation.
- Good possibility you have transitive dependencies that you a) don't know about and/or b) haven't audited.
- When was the last time you yolo'd a review for by a co-worker?

Ambient Code works the same way. You don't trust the code because an AI wrote it. You trust it because:

- It performs correctly in production (the ultimate judge)
- It survived review by humans who understand the business context
- It meets specifications you controlled
- It passes comprehensive tests you defined

### "What Happens to My Career?"

This deserves a real answer. Some roles will fundamentally change. If your entire value proposition is "I can write syntactically correct Java faster than others," then yeah, you need to evolve.

Think about what you actually do all day:

- Mentoring junior developers → They need guidance navigating AI tools even more.
- Making architectural trade-offs → Purely human judgment territory. AI-assisted research.
- Debugging production issues → AI can help, but can't replace domain knowledge.
- Understanding system interactions and dependencies → More critical than ever. [Systems thinkers](https://www.phoenix.edu/articles/business/what-is-systems-thinking.html), your time has come.
- Translating vague requirements into specific behaviors → Still needed, now you'd be writing policies, specs and tests. Policy is code. Spec is code.

### "But AI Hallucinates and Makes Mistakes"

This is currently the domain of context engineering and frontier model improvements. Today, with the technologies we have, context can be built and systems put in place to eliminate hallucinations from reaching production. These are nearly identical to systems we use today to measure and improve quality.

### "This Is Just Hype, Like Blockchain"

Fair skepticism. I've seen enough tech hype cycles to be cynical too. Remember when everything was going to be SOA? Then microservices were going to solve everything? What exactly is different now? None of those technologies threatened to commoditize code itself.

When I led the ROSA launch at Red Hat, we were split on whether we were ready. You know what tipped the scale? The realization that waiting for perfect confidence meant we'd already waited too long. The market doesn't wait for your comfort. Competitors are keeping pace.

### The Brutal Truth About Resistance

Some people won't make this transition. Not because they can't, but because they won't. It happens with every paradigm shift.

Reading this is already adapting. You're already thinking about how to ride this wave.

### Your Superpower in the Ambient World

Here's what most people miss: Ambient Code makes experienced developers MORE valuable, not less.

- We're amplifying the impact of experience – SO THAT – we can gain new, more valuable experiences.
- Your war stories about production failures become the test cases that prevent AI from making the same mistakes.
- Code that "smells wrong"? That's your value in review.
- All that intuition you've built about what makes systems fragile? That becomes your superpower in defining constraints.

Trust the process, but validate everything.

Onward, to the "[Agentic Brownfield](/posts/2025-10-01-sowing-the-agentic-brownfield/)"…
