---
title: "Sowing the Agentic Brownfield"
date: 2025-10-01
summary: "In the near future, it's entirely plausible that your entire codebase will be written, refactored, and evolved by AI agents. But the brownfield you'll inherit won't be legacy human code, it will be legacy AI decisions."
---

In the near future, it's entirely plausible that your entire codebase will be written, refactored, and evolved by AI agents. But the "brownfield" you'll inherit won't be legacy human code, it will be legacy AI decisions. And those decisions will stem from choices you make today. For example, whether and when to adopt an AI-first development paradigm, and how to prepare your stack to reach that point.

I believe this shift requires a revival of spec-driven development: a discipline that ensures an agentic brownfield can be safely maintained, evolved, and understood by multiple future generations of engineers and product leaders. The challenges were detailed at the beginning of this [video](https://www.youtube.com/watch?v=x2-rSnhpw0g) on the [c4model](https://c4model.com/). I happen to be preferring this at the moment, but are there are others as widely supported as UML/PlantUML/Mermaid?

Consider what's necessary to successfully build even medium sized features today.

- Context engineering is difficult. I am to build systems and process to make it easy and repeatable –> Agents are mostly stateless…we'll need external memory or knowledge graphs that retain architectural history, modules, invariants, bug history, decisions, prompt lineage. Vendors are going to build this and it's lock-in will be similar to a deep investment in any cloud provider or devops platform. Agents are also for sale. How will they behave?

- For state I've been toying with GitHub tickets, branches and attachments. In the future some tooling would use cloud storage so that the "notebookLM" for the RFE captures the entire state used during creation, and the system that generates tickets ensures they're independently cold-startable. There are other artifacts like the specification or refinement documents, LLM chat logs, ground truth attachments, etc. It is possible contexts themselves need to be treated as state well. Only a handful of codegen providers will be able to service enterprise software teams.

- Architectural rationale and business logic deserve structured representation adjacent to code so that future agents or humans (or spec-generators) can reference, query, or evolve them reliably.

I am concerned about missing opportunities for pattern-recognition and learning that humans are particularly good at. The ability to notice that Feature A and B share a latent interaction surface, or to identify emergening anti-patterns may degrade if we yield too much to opaque agent generation.

This could also impact cross-feature coherence. We are going to require a sufficient trail of SDLC breadcrumbs to follow as necessary. This raises the requirements of audit and explainability tools…we'll need tools that answer:

- Who or what is responsible for this change?
- Which prompt or spec change and PR triggered this divergence?
- Why did the agent structure this module this way?

Trust in these systems is going to take time to develop for professional SWE, and failing to build and leverage these will likely result in a tangled, opaque agentic codebase that no human can safely evolve. For operators and developers alike, situational awareness in an ambient environment is more important than ever.

And now we introduce a new problem: [Tokenomics for Code: Value per Token in the Agentic Era](/posts/2025-10-06-tokenomics-for-code-value-per-token-in-the-agentic-era/)
