---
title: "Tokenomics for Code: Value per Token in the Agentic Era"
date: 2025-10-06
summary: "Think about how much will change in the AI landscape during the lifetime of your next application. I propose Value Per Token (VPT) as the buy-side equivalent to hyperscaler cost-per-million-token mindset."
---

Think about how much will change in the AI landscape during the lifetime of your next application. You can bet on improvements to code generation models, hardware, talent, review capabilities and more. This leads us to the need for a new metrics: something like TCO, but that also represents efficiency. I propose Value Per Token (VPT) as the buy-side equivalent to hyperscaler cost-per-million-token mindset.

VPT = (Business Value Delivered) / (Tokens Consumed)

Cost per token is and was never the real objective. It's just the lowest common denominator right now, like compute power or memory. The real objective is value per token. If every token you issue does not generate enough business logic, maintainability or architectural clarity, you're burning budget on noise. This is tokenomics in action.

The primary goal of tokenomics in software engineering is to collapse the costs and friction of the software development lifecycle: spec, iteration, debugging, integration, maintenance…all of it, by orders of magnitude. Let's say a 1000x reduction in complete SDLC for a product. How do we achieve that when even the most forward thinking companies are settling around 10-30% productivity improvements using GenAI? One way is by lowering our material costs. Both labor and capital. This blog is about the capital side of the problem.

To realize that goal, we will need to teach FinOps teams Tokenomics, and engineering teams prompting strategies, model selection, provider arbitrage (time of day, hardware class), routing inference among agents with cost awareness…all of that is part of the optimization space of Tokenomics. We will need to embed FinOps practices and guidelines into the agents themselves, including realtime adjustment.

When your agents embody FinOps, you convert token-level discipline into ROI at the project and portfolio level. In fact, one of the design aims of the inference-scheduler in llm-d is set to bake in cost-awareness and semantic routing so that your agents orchestrate themselves under token budget constraints.

If you agree with the concepts then as an engineering leader, your minimum budget requirements are the lowest possible feature set and lowest possible quality bar that you are willing/able to ship. The lowest possible.

Simply a function of your company's Tokenomics.

Each token carries AI slop or "value". Rarely both. This is where I have started to advocate for the application of spec-driven and test-driven development. SO THAT: you have far more deterministic control over the output, but not SO deterministic as to lose sight of the reason for using LLMs in the first place – speed.

This balance is again down to how much money you have or are willing to spend, to deliver a feature. And herein lies the challenge around the coming Agentic Brownfield…if you cut corners on cost now, expect to eventually pay it in sustaining engineering. Which can now also be trivially calculated with metered billing APIs. The same model can either produce ~50% waste or ~90% utility depending on how carefully you drive it. We have to pivot this from art to engineering.

NVIDIA posted a [blog](https://blogs.nvidia.com/blog/ai-tokens-explained/) detailing the impact of Tokenomics that their vertically integrated stack has. To quote

> Developers have to strike a balance between these metrics to deliver high-quality user experiences

Value per token is formalizing that^, and considering it from the buyer's perspective.

And now that we can (possibly) afford to ship the app, what does a day in the life of a modern, AI-first SWE look like?
