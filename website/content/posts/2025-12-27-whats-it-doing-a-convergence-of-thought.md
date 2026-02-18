---
title: "What's it doing? A convergence of thought."
date: 2025-12-27
summary: "Something strange is happening to original thinking. Engineers who've never met each other are arriving at eerily similar ideas within days of each other."
---

Something strange is happening to original thinking. Engineers who've never met each other are arriving at eerily similar ideas within days of each other. Everyone is using the same tools to "think" now, and those tools are shaping thought in ways we don't fully appreciate. When millions of people ask similar questions to the same AI, they get similar answers, and over time those answers start to feel like original ideas. Our stack of $20/month subscriptions are quietly commoditizing thought itself.

What's unsettling is how fast this happened and how few people noticed. Everyone is focused on capability gains, on shipping faster, on keeping up with the earthquake.

> I've never felt this much behind as a programmer. The profession is being dramatically refactored as the bits contributed by the programmer are increasingly sparse and between. I have a sense that I could be 10X more powerful if I just properly string together what has become…
>
> — Andrej Karpathy (@karpathy) [December 26, 2025](https://twitter.com/karpathy/status/2004607146781278521)

Meanwhile a convergence of thought occurred at an astonishing rate. And, depending on who is building + running the models, convergence of thought sits uncomfortably close to control of thought. That's not a conspiracy theory, just an observation about what happens when a few providers shape how millions of people frame problems and generate solutions.

What gets suggested to users is what they'll pick, right? That in and of itself is a source of bias. This happened to me recently:

1, just me interacting with AI  
2, gets to AskUserQuestion, its first answer is a specific vendor followed by open source options  
3, I google typeform to see if its an OSS project or vendor. It's a vendor I've never heard of.

I doubt this is "paid placement" but I get a weird vibe about which options are shown to me. I find myself nearly always choosing "other" and combining or overriding what's given. If I am a competitor here, I am pissed off. Very pissed. Because it's either a) deep in the training data, so nearly impossible to guardrail around, indicating a natural moat around who is in the training data (by the way, who chooses what data to train on?) or 2) an advertisement.

## The Friction Problem

Original thinking requires friction. The kind you get from arguing with people who don't already agree with you, from defending ideas that might be wrong or from having budget constraints. At $20/mo, we completely lack that friction right now.

Fighting this requires deliberately reintroducing the friction that used to come naturally throughout the product development lifecycle. Personas designed to challenge assumptions rather than reinforce them.

It seems to work, but the fact that it has to be done *consciously* says something important about how to differentiate within tasks.

## The Measurement Problem

There's something tricky about building on systems that are mathematically probabilistic while expecting them to produce deterministic results. You also cannot improve what you cannot measure – these two ideas seem at odds with each other.

Right now the measurements are focused on speed and success. That's proving function, but not much else.

And then there's the infrastructure question. Context7 posted benchmark results yesterday showing a 65% reduction in token usage and 38% lower latency with a new architecture, and the quality actually went up slightly. Same task, fraction of the resources:

> Context7 new architecture — results:
> - Tokens ↓ 65%
> - Latency ↓ 38%
> - Tool calls ↓ 30%
> - Quality ↑ (slight)
>
> — Enes Akar (@enesakar) [December 26, 2025](https://twitter.com/enesakar/status/2004605689445187721)

Tokenomics is a subject I've been writing about as [Value Per Token](/posts/2025-10-06-tokenomics-for-code-value-per-token-in-the-agentic-era/), arguing that the same model can produce 50% waste or 90% utility depending on how carefully you drive it. These benchmarks are proving that out. The optimization headroom is enormous, which means we're building datacenters at a panic pace before we've figured out how to use what we already have.

## The Seniority Question

Another unavoidable question is what specifically "senior engineer" means when the junior hire has access to the same AI. The visible success stories are mostly vibe-coded. Does that translate into a hiring rubric or a career ladder? I haven't seen good public debates or answers on this, even on HBR.

Seniority could come down to whether you can specify meaningful constraints (including cost) before generation, whether you can trace what happened after, and whether you can still think originally even though the tools are gently pushing everyone toward the same conclusions.

## The Honest Position

Andrej Karpathy called this a "magnitude 9 earthquake" and admitted there's no manual, which sounds about right.

The tools are powerful and strange and genuinely new, and the honest position is that nobody has this figured out yet.

So maybe we should stop pretending otherwise and start treating this era like what it actually is: a giant collective experiment. We're building for the sake of building because we don't know how to build yet. Why pretend the learning phase is over?

What could help is a leaderboard, a competitive place where people share AI-generated work that they're proud of. Not demos built for Twitter impressions, but real things that solved real problems, with enough context to learn from. What constraints did you set? What broke along the way? What would you do differently? Gold mining…

This convergence problem gets solved by making divergence visible, by creating a shared record of the approaches that produced something genuinely new. Right now all the incentives point toward sameness. A leaderboard of interesting failures and unexpected successes might start pointing somewhere else.
