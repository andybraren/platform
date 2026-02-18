---
title: "Lethain has finally weighed in on AI adoption"
date: 2025-12-11
summary: "Will Larson published a post on facilitating AI adoption at Imprint. It's one of the most practical things I've read on the topic because it speaks from hands-on experience."
---

[Will Larson](https://www.linkedin.com/in/will-larson-a44b543) published a post last week on facilitating [AI adoption](https://lethain.com/company-ai-adoption/) at Imprint. It's one of the most practical things I've read on the topic. It's that way because it speaks from hands-on experience. If you're an engineering leader trying to figure out where to start, read, then do.

The post maps to a lot of what I've learned and witnessed after 16 years at Red Hat. Some of it extends what I'm seeing or sits in tension with the research I've been tracking.

Here's my attempt to sort through it.

## In agreement

**Build your intuition first.**

Will spent 2-10 hours on bounded projects. He calls this "prework." It's the most underrated advice in the post. At a recent team f2f, I was upfront with my peers (SWE directors): you yourselves have to spend multiple weekends discovering what your job needs to become. The post echo'd that "In an era of crushing optics, senior leaders immersing themselves in the details is one of our few defenses."

If you skipped this step throw a 180 – it's not too late. Folks read about agents, attend demos, approve budgets. Then they're surprised when adoption stalls. You can't lead a transformation you don't understand first-hand.

## "Pave the path" beats mandates

The post's strategy: remove obstacles, assume good intent, don't be skeptical of teams who aren't adopting. His framing: "If they aren't adopting tooling, we predominantly focus on making it *easier* rather than spending time being skeptical or dismissive."

We faced many of the same upskilling and "[Who moved My Cheese](https://a.co/d/9PVeV16)" challenges moving to cloud. Which were the most successful modernizations? Those who took [a movement approach? Or a mandate](https://hbr.org/2017/06/changing-company-culture-requires-a-movement-not-a-mandate)?

This tracks with what [McKinsey found](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/unlocking-the-value-of-ai-in-software-development) in their November 2025 study. Top performers invest in "personalized, intensive training" – hands-on workshops and one-on-one coaching. 57% of top performers do this vs. 20% of bottom performers. Mandates don't work. Making it easier does.

## Real adoption needs all three: domain context, AI experience, and IT fundamentals.

Explicitly: "I'm deeply skeptical of any initiative for internal AI adoption that doesn't anchor on all three." He points out this is easier at smaller companies where one person might have all three. At larger companies, you need three different *organizations* working together. The pilot teams that struggle are usually missing one leg of the stool. I wonder if that's down to orgs moving at different speeds.

This is the case at Red Hat. Context is over here, engineering is over there, and IT is under yet another business unit. And a solution involves them all. Typically, these business units are unified through budgetary processes and API contracts that embody business logic. These are the same structures and processes being challenged by an AI that provides a faster-than-human-cognition option.

## Non-adopters are rational

I feel it – it's about trust in the tools, and more broadly psychological safety in a period of global, generational ambiguity. This makes us human, and my advice is to lean-in.

## Extend the picture?

Slack bots, Jira routing, Notion commenting, customer support triage. That's valuable work much different from using AI to write enterprise software with licensing, lifecycles, lawyers and larger teams.

## The learning curve might stay high

"the learning curve for effective AI adoption in important or production-like workflows remains meaningfully high." I agree, and the more I talk with engineers the more I am convinced that real, step-wise value lies in a rethink of the enterprise PDLC:

The [McKinsey PDLC research](https://www.mckinsey.com/industries/technology-media-and-telecommunications/our-insights/how-an-ai-enabled-software-product-development-life-cycle-will-fuel-innovation) describes a bigger shift. They see AI transforming the entire product development lifecycle: discovery, prototyping, coding, testing, deployment. The PM role absorbing product marketing, product owner, and some UX functions. Engineers becoming "AI-stack developers" who understand both the tech and business implications of what they're building.

## Codebase quality determines AI ceiling

The post doesn't address this specifically, but it's been central to my experience. [AgentReady](https://github.com/ambient-code/agentready) is meant to identify prompting, patterns and structure that maintains a low "agent interrupt rate". Like many other companies, Red Hat has mountains of legacy code. I don't know these folks, but it looks like [CoreStory](https://corestory.ai/) might be trying to address this systematically?

Stanford's finding was that "Most codebases lack sufficient verifiability." Humans work around incomplete test suites, missing documentation, implicit knowledge. Agents can't join those hallway conversations, so if they're going to be effective, you have to let them join the club.

## Measurement needs to evolve

Will tracks tool adoption and asks "why aren't you using it?" Always a good idea to start with why. There are startups like [Span](https://www.span.app/) or [Jellyfish](https://jellyfish.co/) targeting engineering management visibility of AI impact.

McKinsey's top performers track outcomes: quality improvements (79%), speed gains (57%). They hold teams accountable for impact, not usage. The best managers I've had tracked outcomes too.

[DX Research](https://getdx.com/research/measuring-ai-code-assistants-and-agents/) is doing work on what metrics capture value.

I heard Impact articulated as "share of sprint". Here it's called Human-equivalent hours, or HEH. What percentage of development work can agents complete without human intervention? According to GitHub's 2025 Octoverse report, "Generative AI is now standard in development." [GitHub reports](https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/).

A METR study found experienced developers were *slowed* 19% by AI tools – on codebases they knew deeply. Meanwhile, [Anthropic's](https://www.anthropic.com/research/how-ai-is-transforming-work-at-anthropic) internal research shows their engineers use Claude in 60% of work and report 50% productivity gains. This could be a case of "The future is already here – it's just not very evenly distributed". This is what I can say will change in H1 2026. No regrets.

## Working through tensions

Build small agents. Centralize prompts. Remove friction. Measure adoption. Iterate.

McKinsey's top performers built incrementally too. They implement AI across 4+ use cases end-to-end. They create AI-native roles. They restructure teams around new workflows.

Is that approach right for where we are now? Or does it risk the trap "creating the impression of adopting AI, rather than focusing on creating additional productivity"? This would indicate whether, or how much, of a bubble there is.

I don't have a clean answer. My current thinking:

## Build intuition

Provide frictionless access to tooling. "Nuke your B-priority". Fix where the pain is greatest to build interest, momentum and get more at-bats. Over-invest in new tooling for situational-awareness because we are building trust in LLMs. Pave the path – understand your non-adopters so that you can build a better team.

## Plan for bigger swings

The companies seeing 30%+ gains are rethinking what a PM does, what an engineer does, how code gets validated. That's harder, and seems to involve details that are difficult to find. Anthropic built an [Interviewer](https://www.anthropic.com/news/anthropic-interviewer) to find these details proactively: Why would an engineer need access to a price-book? Because that's where the undocumented business logic resides. This rethink requires the kind of operating model swap that could take 12-18 months to land.

## Watch for signal that you're ready

When your pilot teams hit ceilings – when they've adopted the tools but can't go further and start sending you startup vendor pitches – that's when the structural questions matter. What's the codebase quality? What's the test coverage? Can you actually delegate features, not just functions?

Looking for solutions externally is a sign that your team has built a deeper appreciation for their core technical challenges. It's a good time to push them for your own clarity.

## What I'm trying next

On one hand, we're trying to skate to where the puck is going by exploring *what needs to be possible*, in a hands-on way. On the other, Will's post made me think we should also build simpler things. The Slack router. The Jira triage bot. The stuff that teaches teams what agents can and can't do, without betting the roadmap on it. In a previous blog, I referenced the quote "no regrets work" – from Capital One engineer Max Kanat-Alexander. My no regrets project was to create a [utility](https://github.com/ambient-code/agentready) to test and measure brownfield codebases.

Maybe that's the real lesson here…balance. Incremental work that builds intuition. And the structural bets that capture bigger gains.

Thanks to Will for sharing his working notes and for the variety of his books I've enjoyed, especially [Staff Engineer](https://lethain.com/staff-engineer/) which was published at a very timely moment for me personally.

Sharing is how our field moves forward – people publishing what they're actually doing, not what sounds impressive. Maybe this vulnerability and sharing is the most important pattern we learned with open source software.
