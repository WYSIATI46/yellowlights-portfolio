---
name: yl-decision-recorder
description: Create an auditable Yellowlights decision memo from a structured decision record. Use when a choice needs documented rationale, alternatives, evidence, dissent, unresolved questions, owners, update triggers, and outcome learning.
---

# Decision Recorder

## Inputs
Accept the decision record, current recommendation or choice, evidence ledger, scores and sensitivity results if used, forecast assumptions, risks, and stakeholder comments.

## Procedure
1. Distinguish what was decided, who decided it, when, and what action follows. If no final choice was made, label the memo as a draft.
2. Summarize the objectives, options considered, criteria, evidence, key assumptions, material uncertainties, and reasons for the choice. Preserve source references.
3. Explain why plausible alternatives were rejected or deferred. Include dissent and unresolved objections without smoothing them away.
4. Translate model outputs accurately: weighted score as preference score; simulated range as conditional on inputs; AI text as suggested analysis.
5. Record owner, next action, review date, observable update triggers, and how outcome learning will be captured.
6. Check every consequential sentence against the evidence ledger or a named judgment. Mark unsupported claims and request correction before finalizing.

## Output
Return a concise memo with decision status, rationale, evidence, alternatives, uncertainty, dissent, risks, action owner, review date, and update conditions. Add a short missing-information appendix only when needed.

## Guardrails
Do not let an AI polish pass fabricate facts or erase qualifiers. Do not generate a confident recommendation from incomplete inputs. Do not imply the memo was saved or shared unless it was.

## Trial case
Given a preferred option with a fragile scoring lead and stakeholder dissent, preserve both the lead and its fragility in the final memo.
