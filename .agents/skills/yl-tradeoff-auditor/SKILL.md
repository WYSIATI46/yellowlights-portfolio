---
name: yl-tradeoff-auditor
description: Audit multi-criteria scoring for a Yellowlights decision. Use when alternatives are weighted and ranked, especially when criteria overlap, score scales are unclear, stakeholder weights differ, or ranking robustness is unknown.
---

# Criteria and Trade-off Auditor

## Inputs
Accept objectives, alternatives, criteria, scoring definitions, weights, scores, stakeholder perspectives, and their rationales. If values are absent, report that rather than assuming neutral scores.

## Procedure
1. Map each criterion to a stated objective. Flag missing objectives, duplicated benefits, mixed directions (e.g. risk level versus risk reduction), and non-compensatory constraints that should not be averaged.
2. Require a defined 1-to-10 anchor or other measurable scale for each criterion. Separate observed measures from subjective ratings and preserve the rationale for each rating.
3. Check weight sum and score completeness. Never impute missing scores as 5 without explicit user choice.
4. Recalculate rankings using the stated formula. Vary disputed weights and plausible score ranges to identify rank reversals and thresholds. State the exact changes that cause them.
5. Show meaningful stakeholder disagreements and identify where more evidence could resolve them.

## Output
Return data-quality issues; calculated ranking labeled as a preference model, not confidence; sensitivity findings; unresolved tradeoffs; proposed revisions.

## Guardrails
Do not equate a weighted score with probability of success, certainty, or expected monetary value. Do not use a high score to bypass hard constraints or vetoes. Let the decision owner choose.

## Trial case
Two criteria both reward growth, and a one-point score change flips the winner. Flag double counting and rank fragility.
