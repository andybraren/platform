---
title: "6 thoughts on my first AI.engineer CODE + AI Native DevCon"
date: 2025-12-02
summary: "AI.engineer was exceptional. I wanted to reflect on some common trends across talks from Stanford, McKinsey, Capital One, Every, Tessl, Human Layer, and others."
---

AI.engineer was exceptional. We should crowd-source somehow keeping it the way it is. Larger conferences typically operate at a higher altitude and there is a useful niche for smaller technical events. Recordings here.

I wanted to reflect on some common trends across talks from Stanford, McKinsey, Capital One, Every, Tessl, Human Layer, and others.

[But first, 80+ people starred the repo for AgentReady. I bootstrapped that in real-time during AIE](https://github.com/ambient-code/agentready).

Since then, I found this [tweet](https://x.com/bibryam/status/1994763401176695186) acknowledging the need for measuring codebases against up-to-the-minute guidance on what makes a codebase "Agent Ready".

I've since added an [align](https://github.com/ambient-code/agentready/blob/main/src/agentready/cli/align.py) verb that can be used to level-set your repo interactively, or run it headless/CI to prevent drift or implement new techniques as things evolve.

> "Your codebase isn't broken — it just wasn't built for AI."
>
> Your Codebase Is Probably Fighting Claude
>
> — Bilgin Ibryam (@bibryam) [November 29, 2025](https://twitter.com/bibryam/status/1994763401176695186)

To this point I hadn't seen a measurement angle on assessing brownfield codebases for introducing agents. People are still figuring it out and it had only just gotten started being discussed in the abstract. Capital One had it nailed during their talk though.

So – we can measure things now, at least relatively. Is it accurate? Claude [thinks](https://github.com/ambient-code/agentready/blob/main/agent-ready-codebase-attributes.md) so. This is an area I would love Issues, PRs or even just discussions on [social media](https://x.com/jeremyeder).

On to my conference take-aways:

1. Many codebases don't have their context documented anywhere. It lives in Slack threads, in engineers' heads, in commit history that nobody reads. This is an area where I think tooling can help, and it's something I'm actively working on and it leads me to my first and most important conclusion:

**Context gathering is the most important thing to get good at (and scale) right now.** What needs to go in the context? Do we even have that data? Is it clean?

Several of the talks showed that context gathering consumes more engineering time than any other part of AI-assisted development. Not prompting. Not reviewing output or integrating changes. Just figuring out what information the agent needs and how to provide it. I come from a big org. That approach doesn't scale, and is a waste of time and money. Businesses need to be about [value per token](/posts/2025-10-06-tokenomics-for-code-value-per-token-in-the-agentic-era/), *yesterday*. To that end, Tobi Lütke's quote appeared on multiple slides throughout the conference.

2. **"Share of sprint"** is a metric to track for progress on agentic development effectiveness (different than adoption). What are some metrics for share of sprint? In my head I had this as "agentic IRQs/day". But I believe now that interrupt rate is what we might add to existing promotion criteria, as a measure of what Tobi said above. And, we would track share of sprint as the percentage of total development work that agents complete without human intervention. We intend to use a langfuse setup for interrupt type of monitoring. If you have a better idea, send me a message. Like a processor, an interrupt causes humans to context switch. It's a violent act that every developer struggles to minimize.

I heard most teams are at 5-15% share of sprint. Teams that have invested heavily in agent-ready infrastructure report 40-60%. A few claim higher. Can any of that be independently validated? Who's got the messiest repo? Our AI community seems to like leaderboards … 🙂

But the "pattern" that kept coming up was share of sprint correlates with codebase quality. The teams delegating the most work to agents are the ones who already invested in testing, typing, documentation, and modular architecture years ago. They didn't do it for AI. They did it because those practices make software better, and now AI agents benefit from those investments as a co-worker would.

I would love for folks from forward-thinking orgs to run AgentReady. How good or bad is your situation, and most importantly, why is it that way? Do you spot any patterns among high-scoring repos? What rules would you add/remove? Do they come from a certain engineering leader or project? These are the somewhat subtle signs that a team can adopt agents (successfully).

3. **Stanford's Software Engineering Productivity Research Group** showed a slide titled "Most Codebases Lack Sufficient Verifiability." The core observation was humans work around incomplete information, but AI agents cannot. We must become successful enablers of agents through BPM and workflow automation around them. That's what this is, by the way. Business process design and basic economics. This is complicated, and undifferentiated for me in the long term.

Look at what Tessl is doing to steer agents. Look at the Progressive Loading Strategy. Pretty cool.

I had scoped out factory.ai as the main vendor I wanted to hear from. Their CEO Eno Reyes spoke, and made a similar point about what he is calling 8 pillars of automated validation. His claim: agents need complete, systemic coverage across all pillars. Partial coverage isn't good enough. If you have strong tests but weak typing, or good typing but flaky CI, agents will produce output that fails in ways humans wouldn't.

This connects to something I've been working on with AgentReady. When I ran it against the a set of internal repos, the heatmap showed exactly what the Stanford and factory.ai folks were describing: partial coverage most places, systemic coverage nowhere. Plenty of places with zero coverage (measured by the presence of AGENTS.md or CLAUDE.md in the repo).

4. **Too many cooks in the kitchen:** What is the optimal number of engineers working within a given repo? If > 1, where are the tools to make that sane? We may need to refactor repos to allow for better isolation between capabilities, so that we can effectively do that. AgentReady will try to help by providing guidance. This isn't a new problem, just exacerbated by the speed of codegen.

5. **"No regrets work"** – this is a quote from Capital One engineer Max Kanat-Alexander. To me, this is: the pace of AI has introduced ambiguity on compressed time-scales. Look out for one-way doors and make sure you keep the trains on time. Capital One presented a checklist of investments in this area. The idea: these things pay off regardless of how AI coding tools evolve.

The list included

- raise the bar on review quality
- speed up code review response time
- write down external context and intentions
- refactor for testability
- improve deterministic validation through tests and linters
- make CLIs and APIs available at development time
- standardized development environments

Max also talked about compounding benefits or problems after introducing agents. If your codebase is "bad", agents compound the problem in a variety of ways: spreading bad habits, copying flawed architecture, carrying unnecessary technical debt.

Every item on their list makes codebases better for human developers too. Even if AI tools plateau tomorrow, you still benefit!

6. **Actually what is new here?** Two things stood out to me across all these talks. First, the problems people are solving today aren't exclusively AI problems. They're the same code quality, documentation and communications problems we've had forever. AI makes the cost of ignoring them more obvious.

Second, the teams succeeding with AI agents aren't doing anything magical. They invested in fundamentals. Tests, types, docs, fast CI, clear boundaries. The same stuff every engineering blog has recommended for years. The leads of these teams (important) also share a willingness to trade absolute control for velocity.

## Bonus thoughts

On adoption: a team at Microsoft spent the majority of their time tailoring a review workflow. Some things they added by developer request into their PR threads:

- interactive q&a
- suggest code fixes
- automated reviews
- summarization

[Scout Agent](https://zapier.com/agents/templates/apps/help-scout) from Zapier … that needs a whole day to even appreciate, let alone understand.

How do we measure the overall ROI for our AI investments? Stanford Engineering Productivity Research Group [provided](https://softwareengineeringproductivity.stanford.edu/) a rubrik.

I love Spotify. 90% of the incident work just…gone. I'm jealous so I created a background agent for the ACP codebase and added an issue-to-PR GHA. Here's our first one: [https://github.com/ambient-code/platform/pull/391](https://github.com/ambient-code/platform/pull/391)

Lastly – one of my favorite parts was a section from Every CEO Dan Shipper. He's making the case for the async work by saying that while some of his team can be productive using 4 interactive Claude terminals, that's "insane".

I can't agree more. Async is a new option for different types of development going forward. I think everyone will adopt it. For example, while on the train, I schedule a prototype research workflow. Later, even days or weeks, I can review the report.

All in all, a fantastic week that both confirmed this direction and generated new and exciting possibilities. Hopefully I will make it to London next April :+1:

[AI.engineer Recordings](https://www.youtube.com/@aiDotEngineer/videos). Check the comments for timestamps to each presentation.

- Day 2: [https://www.youtube.com/watch?v=xmbSQz-PNMM](https://www.youtube.com/watch?v=xmbSQz-PNMM)
- Day 1: [https://www.youtube.com/watch?v=cMSprbJ95jg](https://www.youtube.com/watch?v=cMSprbJ95jg)

AI Native DevCon Recordings.

The workshops weren't recorded, but one was previously delivered

- [https://github.com/lexler/Talks/blob/main/augmented_coding_patterns_masterclass.md](https://github.com/lexler/Talks/blob/main/augmented_coding_patterns_masterclass.md)
- [https://www.youtube.com/watch?v=M-zOSEJFNos](https://www.youtube.com/watch?v=M-zOSEJFNos)
