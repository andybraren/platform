---
title: "Your Codebase Is Probably Fighting Claude (part 1)"
date: 2025-11-21
summary: "I have been trying to keep our genAI workloads 'in the pocket' of a maximum effective context window. The problem was not Claude. The problem was the code."
---

I have been trying to keep our genAI workloads "in the pocket" of a [maximum effective context window.](https://arxiv.org/abs/2509.21361)

For performance, accuracy and the second order cost control benefits from those. Things work beautifully, but it's not at all efficient (wrote about an efficiency requirement in this [article](/posts/2025-09-23-the-path-to-vibe-coding-for-the-enterprise/)).

## The Real Problem

Most codebases evolved for human developers. They make sense to people who lived through the Git history. They have implicit patterns that tribal knowledge passes down. They rely on context that exists only in Slack channels and old pull requests.

AI agents may not have that context (give it to them). They read what you give them. If your documentation is stale, they use wrong assumptions. If your tests are sparse, they cannot verify correctness. If your architecture is undocumented, they invent their own patterns.

This is not a small issue. Research shows that code quality directly predicts AI success rates. So the problem was not Claude. The problem was the code. As I work more and more, I thought I needed a tool to "onboard" my coding agents to the codebase.

So that's what [AgentReady](https://github.com/ambient-code/agentready) does. It builds on best practices research done by Claude, and extracts+retrofits those best practices. I added a continuous learning GHA to update repomix and my skill-spotter. [repomix](https://repomix.com/) creates a context-optimized representation of your repo. I added a directive to use it to my CLAUDE.md.

skill-spotter is a function of AgentReady that tries to find what it thinks might be reusable patterns, and extract those to Claude Skills.

It spotted several reusable skills. Note it is just proposed. I'll go look to see if they're common enough to promote to an actual skill. That would complete the reinforcing loop.

The test rules come from cited sources [here](https://github.com/ambient-code/agentready/blob/main/agent-ready-codebase-attributes.md). Its output is automation-friendly, or it can create a dashboard.

## AgentReady

AgentReady is a tool that evaluates how ready your codebase is for AI-assisted development. It checks 25 research-backed attributes across four categories: documentation quality, test coverage, architecture clarity, and development practices.

The tool runs in seconds. It produces a scored report with specific fixes. It tells you exactly what is impacting the quality of the code being generated.

Each check maps to published research. Tests that verify behavior let AI validate changes safely. README files that explain architecture give AI the patterns to follow. Contributing guides that document standards prevent style conflicts.

The checks are not abstract quality metrics. They target the specific things AI needs to generate correct code.

The tool weighs each check by impact. Missing tests hurt more than missing diagrams. Undocumented APIs block more than formatting inconsistencies. Missing CLAUDE.md is bad.

## Testing Before and After

You need to measure improvement. Here is a simple test protocol:

Pick three real tasks from your backlog. Tasks that would normally take 2-4 hours. Write them as natural language requirements.

Run AgentReady on your repository. Note your baseline score.

Give Claude the three requirements. Let it generate code. Track: How much code works without modification? How many test failures occur? How many iterations to get working code?

Fix the top 5 issues AgentReady identified. Focus on the high-impact items: add missing tests, update stale documentation, document architecture decisions.

Repeat the three tasks with Claude. Use the same requirements. Track the same metrics.

Compare: Did test pass rates improve? Did Claude need fewer iterations? Was the generated code closer to your standards?

This test isolates the impact of repository quality. Same AI. Same tasks. Different context. The delta shows what better documentation and testing actually buy you.

## Why This Matters

AI coding is not magic. It is pattern matching at scale. The patterns have to exist in your codebase (skill-spotter flywheel). The structure has to be discoverable (repomix). The validation has to be automated. CI tests and TDD via spec-kit.

So while prompt engineering remains critical, I already fixed that. Now I need better repositories.

Your mileage will vary. Every codebase has unique problems. AgentReady finds yours.

## Try It

The tool lives at [https://github.com/ambient-code/agentready](https://github.com/ambient-code/agentready). Run it on a repository. Read the report. Fix the top issues. Then try Claude again.

The tool needs improvement, and the checks need tuning. I built what I needed. Now I need to know what breaks/needs improvement for other environments.

Tell me what you find. Open issues. Suggest checks. Help make it better.

Your codebase does not have to fight Claude. Make them work together! 💪

P.S. part 2 will be A:B test results and more iterations and tweaks I find along the way. Check the open issues…15 or so cold startable prompts. That's next.
