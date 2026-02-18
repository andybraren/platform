---
title: "Lessons learned from using Claude (in ~anger)"
date: 2026-01-08
summary: "From Development Friction to Ambient Flow: five impactful AI-assisted development patterns that systematically remove friction from the development process."
---

From Development Friction to Ambient Flow:

If you're a developer, you know the feeling. The day is filled with small but significant points of friction: waiting on a code review for a simple change, wrestling with a generic AI suggestion, or spending twenty minutes on the manual ceremony of creating a new branch and pull request. These tedious tasks accumulate, bogging down progress and draining creative energy.

What if you could smooth out these rough edges? This is the core idea behind "AI-assisted development patterns" and the concept of "Ambient Code." The goal is to use smart, targeted automation to create a more fluid and efficient development environment – one where you can focus on solving complex problems instead of fighting tools or process.

Inspired by the concepts listed in the Ambient Code [reference](https://github.com/jeremyeder/reference) repository, this article explores five impactful AI-assisted development patterns. We will expand on the problems they aim to solve and analyze the potential impact of their implementation.

### 1. I never want to see one-shot code again.

**The Pattern: Codebase Agent**

It's a common frustration: you ask an AI assistant for a code suggestion, and it provides a generic, one-size-fits-all answer. The code might be syntactically correct, but it lacks any awareness of your project's specific conventions, existing modules, or architectural constraints, leading to inconsistent and often unusable results. How can an agent know your resource requirements? Hardware topology? You have to tell it.

The "Codebase Agent" pattern is a solution. This pattern describes a specialized AI assistant that is deeply integrated with your specific repository. It has access to your entire codebase allowing it to understand the context, patterns, and nuances of your project. Its suggestions are no longer generic but are tailored, relevant, and consistent with your team's established practices.

It can be summoned from Slack, or a GitHub @ comment or issue label. Ask questions of your codebase agent, get answers tailored to the change that landed 5 seconds ago without any RAG.

This transforms the AI from a simple autocompletion tool into a true collaborative partner. A context-aware agent can help with complex refactoring, adhere to internal API contracts, and reduce the kinds of subtle errors that generic models often introduce. It speeds up development by providing answers that are right the first time. This transforms the AI into an ambient presence, seamlessly providing contextually perfect information without breaking the developer's concentration.

Your first AI "teammate" ensures you never have to see one-shot code again.

### 2. AI-Generated Bugs

**The Pattern: Self-Review Reflection**

AI code generators are powerful, but they can also be confidently incorrect. A common and dangerous issue is when an AI produces code that contains hidden bugs or logical flaws. This creates a new, time-consuming burden for developers, who must now carefully verify every line of AI-generated code, defeating much of the purpose of the automation.

The "Self-Review Reflection" pattern introduces a critical quality check into the AI's process. Instead of just outputting code, the AI is prompted to perform a second step: critically re-evaluate its own suggestion. It actively looks for potential flaws, edge cases, and bugs in the code it just wrote and suggests improvements before a human ever sees it. It pulls in architecture agents, code simplifiers, linters and attempts to manicure the code according to your style guide conventions, ADRs, and the code itself.

The brilliance of this pattern is that it builds a layer of self-critique into the generation process. Teaching an AI to be its own first reviewer is a crucial step toward building trust and reliability. It helps shift the AI from a "fast but sloppy" coder into a more dependable assistant, catching obvious bugs automatically and saving developers from tedious debugging cycles. This makes the interaction feel more fluid and trustworthy, reducing the cognitive load of constant verification and keeping developers in a state of flow.

This has another subtle benefit of keeping the humans on-task, too. I've myself gotten distracted or sent off in the wrong direction by code or comments I should have never seen.

### 3. Pull Requests Take Forever to Create

**The Pattern: Issue-to-PR Automation**

Every developer knows the fun ceremony of ticket-to-branch boilerplate. You context-switch from the issue tracker, name a new branch according to convention, create empty files, and write a boilerplate PR description, all before writing a single line of meaningful code. It's a 10-minute momentum killer. Why?

Supported by both the Codebase agent and self-review and reflection patterns, the "Issue-to-PR Automation" GHA pattern streamlines this entire process.

With this automation in place, a new, draft pull request can be generated instantly and directly from a project issue or ticket. The system automatically creates a correctly named branch, populates it with starter code if applicable, and pre-fills the PR description with relevant details from the issue.

The productivity gains from automating this ceremony are significant. It eliminates setup time and allows developers to dive immediately into solving the core engineering problem. By removing the manual, repetitive steps, this pattern helps developers maintain flow and focus their mental energy on what truly matters: writing quality code. This is a prime example of ambient automation; the necessary but distracting administrative work simply happens in the background, preserving the developer's creative momentum.

### 4. Code Reviews Are a Bottleneck

**The Pattern: PR Auto-Review**

The 'PR pending review' column is where momentum is also impacted. A developer pushes a critical fix, only to be blocked waiting for a sign off on what (often) amounts to style nits or obvious mistakes. The cost of this context-switching across the team is immense. Imagine switching from work-mode to parent-mode, over and over everyday. If nothing else, it's exhausting.

The "PR Auto-Review" pattern addresses this by using an AI to perform an automated first-pass review the moment a pull request is opened. This AI reviewer can instantly check for common issues like style guide violations, potential null pointer exceptions, inefficient queries, or security anti-patterns. It provides immediate feedback to the author, who can address the simple issues before a human reviewer ever gets involved. Importantly it does not vomit on your issue/PR.

Importantly, how it does this is entirely customizable – have it your way by teaching your Codebase agent exactly how you want your reviews to look.

This pattern augments, rather than replaces, human reviewers. By handling the routine, low-level checks, the AI frees up senior developers to focus their valuable time on the more critical aspects of a PR, such as architectural soundness, business logic, and overall implementation strategy. The review cycle becomes an ambient, continuous process rather than a jarring stop-and-wait bottleneck.

### 5. Dependency Updates Pile Up

**The Pattern: Dependabot Auto-Merge**

In any modern project, dependency update pull requests, like those from GitHub's Dependabot, are a constant stream. While crucial for security and stability, these small, low-risk updates are often seen as low-priority chores. As a result, they accumulate in the PR queue, becoming tedious to review and merge individually, and potentially leaving security vulnerabilities unpatched.

The "Dependabot Auto-Merge" pattern provides a simple and effective solution that hooks your Codebase agent into the review flow.

The impact of this pattern extends to both security and stability. By ensuring dependencies are kept constantly up-to-date, teams avoid the risky, time-consuming "big bang" updates that happen after months of neglect. More importantly, it ensures that security vulnerabilities are patched almost as soon as a fix is available, improving security that protects the project without manual toil.

### Conclusion: Reshape the Future of Development

The central theme of "Ambient Code" is about systematically identifying and removing friction from the development process to improve productivity.

By applying targeted AI and automation patterns to the most common bottlenecks…from inconsistent suggestions to review delays, we can create a workflow that is faster, smarter, and more focused. While I've focused on five core workflow patterns, the [Ambient Code repository](https://github.com/jeremyeder/reference) also points toward solutions for stale issue management, ad-hoc security and testing, proving how broadly these principles can be applied.

To begin, audit your team's workflow. Identify and quantify the time lost to the most common points of friction – be it review latency or setup ceremony, and cherry-pick a solution out of the reference repo.

What is the single biggest friction point in your team's workflow, and which of these patterns could solve it? What patterns help you scale development from 1 to many? What coordination issues could be solved agentically?
