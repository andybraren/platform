---
title: "The Path to Vibe Coding for the Enterprise"
date: 2025-09-23
summary: "I've been spending a lot of time thinking about how we write software. What I found was a series of opportunities that we'll need to tackle in order to make 'vibe coding for the enterprise' possible."
---

Hey folks,

I've been spending a lot of time thinking about how we write software. Actually, this was spurred on by a recent project: I thought, how can I drive inference workloads to llm-d? How can I keep vLLM "hot"? codegen is an inference-heavy workload, so let me look deeper.

What I found was a series of opportunities that we'll need to tackle in order to make "vibe coding for the enterprise" possible… Opportunities that I feel uniquely positioned and experienced to effect 😉

First, we have to face the problem. The need for software…truly secure software is obvious and growing in urgency. The solution to this is to stop writing software entirely.

Like every other career path that transforms and evolves, often suddenly and without warning, your entire career is about to transform and evolve.

In companies trending towards AI-first development, existing staff will transition from meticulously crafting code to becoming "shepherds" of codebases, focusing on establishing guidelines and policies that optimize project goals and wielding entire development teams themselves.

The future software and hardware systems looks like a beehive of activity. Agents replacing autoscalers, replacing algorithms, in order to constantly regenerate in every direction…north, south, east, west…coordinating things with each other, being as proactive as safely possible. The system is constantly regenerating itself like humans do.

## The Problem With How We Build Software Today

Software development has always been bottlenecked by cognitive load. We've tried everything to work around this: better languages, smarter IDEs, copy-paste from Stack Overflow, type-ahead code-generating LLMs. We're still fundamentally limited by the speed at which humans can translate ideas into useful machine syntax.

I spent years in the performance engineering space, squeezing microseconds out of systems. What I learned was that the biggest latency in any system isn't the code, it's the time between "I know what I want" and "its useful to customers" That gap is where ambient code concepts fit in.

## Concepts

Ambient Code is the acknowledgment that code generation has become so capable that the code itself becomes fungable. It's just there, generated on-demand, like background music that plays exactly what you need to hear, when you want to hear it, at the volume you prefer.

We don't consciously think about each muscle movement when walking. Your brain just decides "go to the kitchen" and your body handles the implementation details. That's what Ambient Code brings. You define the destination; the system handles the journey.

Natural or systemic delays (like release cycles) trigger recency bias in decision making. There is inherent capability-erosion within human systems. To maximize the efficiency of applying codegen models to enterprise SDLC, we have to be courageous enough to deal with both.

## Why Now? (The Convergence)

Three things had to happen simultaneously for a "vibe coding for the enterprise" pattern to emerge:

1. We hit the complexity wall – Modern systems are too complex for any single human to hold in their head. Even with AI-assisted development and platform engineering tools, the cognitive load feels unsustainable. We need to boost ourselves using AI and specification layers that actually deliver simplicity.
2. Test-Driven Development – TDD, which many developers resist(ed), becomes the control mechanism that makes generated code trustworthy. Tests define behavior. If the code passes the tests, it works. Period. Doesn't matter if a human or AI wrote it. I'm interested to see how open source communities grapple with this approach.
3. LLMs got scary good – Not just at generating code, but at understanding intent, maintaining context, reducing cost, and reasoning about systems. We are nearing a threshold where AI-generated code is "good enough" for enough scenarios.

## Formula

TDD + Application Specs + CodeGen LLMs + Code Shepherds + Caching = Enterprise-Ready Ambient Code

Let me break this down:

- Caching provides acceleration and "GPU avoidance" (don't regenerate what works)
- Code Shepherds provide the specifications and continuous guidance
- CodeGen LLM provides the implementation (the actual code)
- Application Specs provide the constraints (how it should be shaped)
- TDD provides the guardrails (what must be true)

This isn't theoretical, our teams are starting to build this way today. Some upstreams already are. The code their users run was largely written by AI, validated by tests, and reviewed by humans who rarely fuss over the implementation details.

To be clear, we are at the beginning…the above is "what can be done creatively, NOW". Opportunities abound, and I'll be following up with several blog posts detailing gaps and how to wire this all together.

## The (Un)comfortable Truth

Most of the code written is boring, repetitive, and for known scenarios. CRUD operations. Data transformations. API integrations. How many App Stores do we really need? The value of converting business requirements into machine syntax will approach zero.

This philosophy doesn't remove developers, it eliminates the mundane parts of development. It's like when we moved from assembly to high-level languages. Did assembly programmers disappear? No, they became systems programmers, compiler writers, performance engineers. They moved up the stack. Quickly, AI proved its utility BELOW humans in the stack. This is rare, but as I laid out, it does happen, and it's exciting!

## Our Place in This Future

If you're reading this and feeling anxious, good. Comfort is the enemy of growth. But here's the thing: you have a deep understanding of systems. You can reason about trade-offs. You have experience with what goes wrong in production. That's becoming more valuable.

In the Ambient Code era, we want people who can:

- Bridge between business needs and technical implementation
- Architect systems that are AI-generation friendly (tokenomics)
- Debug when things go sideways (and they will).
- Validate that generated code makes sense (code review with business context)
- Define what "correct" means (tests and specifications).

## The systems thinkers time has come

And these are some of our BEST people. See what happens when we turn them loose with these superpowers.

Ambient Code is our next transformation. Like VMs, containers, DevOps, and LLMs, it is a natural revolution taking place where the entire system is now treated as a whole, and we operate at the software factory level or above.

Read more … [Evolving what Development Means](/posts/2025-09-30-evolving-what-development-means/)
