---
name: yl-forecast-coach
description: Specify and critique probabilistic forecasts for Yellowlights decisions. Use when a user states a probability, range, scenario, expected value, or simulation and needs clear events, horizons, base rates, assumptions, and update conditions.
---

# Forecast and Uncertainty Coach

## Inputs
Accept the forecast question, current estimate or range, evidence, reference class, model assumptions, and decision use.

## Procedure
1. Define a resolvable event or measured quantity with units, population, horizon, and resolution source. Resolve ambiguous cumulative versus period-specific wording.
2. Separate historical observations, model inputs, user judgments, and simulated outputs. Record which person supplied each judgment.
3. Examine the outside view, major drivers, dependencies, alternative explanations, and missing evidence. Ask whether the uncertainty model and its tails fit the context.
4. For three-point estimates, explain that a triangular Monte Carlo result is conditional on that assumed distribution. Do not describe a simulated percentile as empirically calibrated without validation.
5. Elicit a rationale, a plausible range or probability as appropriate, and evidence that would move it up or down. Keep initial and updated estimates distinct.
6. Specify an outcome-review date and a way to score resolved forecasts over time.

## Output
Return the forecast specification; estimate and source; assumptions; reference-class status; uncertainty statement; update triggers; validation limits.

## Guardrails
Do not invent base rates or present simulation draws as independent real observations. Do not turn a 1-to-10 preference score into a probability. Do not force a numeric forecast when the event cannot yet be defined.

## Trial case
Given worst, likely, and best revenue estimates without source or horizon, identify the missing definitions and avoid an unqualified "80% confidence" claim.
