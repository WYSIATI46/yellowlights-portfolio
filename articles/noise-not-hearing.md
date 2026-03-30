# The Noise You’re Not Hearing

## Executive overview

Professionals obsess over bias, yet in most institutions a quieter, larger source of error dominates: unwanted variability in judgments that are supposed to be interchangeable.
In *Noise: A Flaw in Human Judgment*, Kahneman, Sibony, and Sunstein distinguish between **bias** (systematic directional error) and **noise** (random scatter in judgments), and show that most organizations dramatically underestimate the latter.[^1][^2][^3]
This report synthesizes evidence from psychology, law, medicine, finance, and algorithmic decision-making to outline what noise is, why it is so underappreciated, how to measure it, and what actually reduces it in practice.[^4][^5]


## Opening: same judge, same case, different day

Imagine a defendant facing sentencing in federal court for a routine drug offense.
Technically, the guidelines, case law, and facts are the same regardless of which judge receives the case, or what mood that judge happens to be in.
Empirically, the sentence can vary widely.
A large analysis of more than 370,000 federal cases between 2007 and 2011 documented “extensive and hard-to-explain differences” in average sentences imposed by judges in the same district for similar cases, even under the same guidelines.[^6]
A separate study of 1.5 million cases found that sentences were harsher when judges ruled on days after the local football team lost than after a win, again for similar offenses.[^7]

From the defendant’s point of view, this is a pure lottery.
Nothing about the crime, the law, or the person has changed.
Only the judge and the day have.
This is **noise** in judicial judgment: variability in outcomes across interchangeable decision-makers or occasions that should not matter.
Bias, like systematically harsher treatment of one group, is also present and morally urgent, but it is not the whole story.[^3][^7]


## The bias–noise distinction: direction vs variance

Kahneman and colleagues formalize noise as unwanted variability in judgments of the same case, holding the target constant.[^1][^3]
If a team of archers all hit the target high and to the right, they are biased but precise; if their arrows are scattered all over the board, they are noisy; most organizations, unfortunately, are both.[^8][^5]

Bias is **systematic deviation** from the correct answer in a particular direction.
Noise is **random dispersion** of judgments around some central tendency.
In statistical terms, overall mean squared error (MSE) of judgment can be decomposed into squared bias plus variance:

\[ \text{MSE} = \text{Bias}^2 + \text{Noise}^2. \] [^9]

Reducing either term reduces error, but they behave differently.
Bias can often be seen by looking at average outcomes (for example, consistently underestimating risk for a subgroup), whereas noise can be measured even when the true target is unknown by looking at the spread of judgments for the same cases.[^5]

The distinction matters because the remedies differ.
Debiasing aims to correct direction, often by changing beliefs or highlighting systematic distortions.
Noise reduction aims to narrow dispersion, by structuring how judgments are formed so that interchangeable professionals converge more tightly on the same answer.[^10][^4]


## Evidence: how much noise exists in professional judgment?

### Forensic science

Latent fingerprint analysis was long treated as a gold standard in forensics, assumed to be both unbiased and nearly infallible.
A large performance study of examiners showed otherwise.
When multiple examiners evaluated the same mated fingerprint pairs, it was “not unusual” for one examiner to render an inconclusive decision while another concluded individualization, and about 23 percent of decisions on mated pairs were something other than individualization even though at least one examiner correctly individualized the same pair.[^11]
Roughly 7.7 percent of examinations on mated pairs produced outright contradictory conclusions (individualization versus exclusion), with exclusion more often the error in those cases.[^11]

Similar issues appear in forensic psychiatry and violence risk assessment.
Unstructured clinical judgment of violence risk is notoriously unreliable; early work by Monahan found clinicians predicting future violence correctly in only about one out of three cases, which drove a shift toward structured instruments.[^12]
Systematic reviews of structured risk assessment tools for youth and adults show that even with common instruments, interrater reliability for individual items ranges from poor to good, and only aggregated risk levels reach good to excellent reliability, indicating substantial judgment noise at the item level.[^13][^12]

### Judicial sentencing

The TRAC analysis of U.S. federal sentencing revealed that the “typical sentence” for similar cases could differ markedly across judges in the same district, despite formal guidelines meant to standardize outcomes.[^6]
The football-loss study cited by Kahneman and colleagues found that entirely extraneous factors such as local sports outcomes measurably shifted sentencing severity for similar offenses.[^7]
Across a broader set of 1,473 cases in Europe, researchers likewise reported high unexplained variability in both imprisonment thresholds and sentence lengths across judges, consistent with substantial noise.[^14]

### Medicine and diagnostics

Medical diagnosis is another domain that aspires to consistency but often falls short.
Studies of diagnostic mammography have repeatedly found “wide unexplained variability in accuracy among radiologists,” with false-positive rates, sensitivity, and AUC varying with both patient and radiologist characteristics.[^15]
In a large U.S. sample of over 274,000 diagnostic mammograms read by 244 radiologists, false-positive rates ranged around 7–12 percent and sensitivity around 84–90 percent, with academic affiliation associated with higher sensitivity.[^15]
These data imply that purely by drawing a different radiologist, a woman can face different probabilities of unnecessary callback or missed cancer, even with the same images.

### Organizational decisions: performance, hiring, underwriting

Noise is pervasive in internal organizational judgments as well.
Research on performance appraisals finds that managers in the same company often use “entirely different performance criteria,” even when rating similar roles.[^16]
In a study of more than 500 managers evaluating vignettes of employees in common jobs, there were clear clusters of raters who emphasized task performance, citizenship, or counterproductive behavior, leading to divergent ratings for the same hypothetical performance.[^16]

Underwriting and credit decisions show similar variance.
Industry analyses highlight income calculation, asset interpretation, and liability assessment as “variance-prone parts of underwriting,” where different underwriters make different calls on the same file, leading to rework and inconsistent risk assessment until processes are standardized.[^17]
Academic work on algorithmic underwriting in high-risk mortgage markets likewise treats the move from human to algorithmic rules as a change in the variance and bias structure of approvals and defaults.[^18]

Hiring decisions are often even noisier, although the evidence is mostly indirect.
Meehl’s classic work on clinical versus statistical prediction, and subsequent meta-analyses, show that simple actuarial models combining a few cues typically match or outperform unstructured interviews and holistic judgments across clinical, educational, and personnel settings, precisely because human judgments vary excessively from case to case and assessor to assessor.[^19][^20]


## Why we do not see noise: the perceptual asymmetry

If noise is so large, why is it so rarely on the agenda of risk committees or DEI programs?
Kahneman and colleagues argue that organizations are subject to a **bias–noise asymmetry in perception**.[^4][^3]

Bias, by definition, is directional and therefore easier to see.
Average sentencing that is systematically harsher for Black defendants, or average performance ratings that are consistently lower for women in a unit, naturally attract attention because group-level statistics reveal the pattern and because they map directly onto moral narratives about fairness.[^7][^16]
Noise, in contrast, is **dissipated error**; from any one person’s vantage point, it looks like “normal disagreement.”[^3]

Several mechanisms hide noise from view:

- **Naïve realism and the illusion of agreement.** People tend to believe that others see the world roughly as they do, and do not spontaneously imagine alternative reasonable judgments for the same case.[^3]
- **Discomfort with disagreement.** Leaders often suppress or quickly resolve visible disagreements, which prevents them from appreciating the true degree of internal dispersion in judgments.[^3]
- **Outcome focus and resulting.** Organizations pay attention to large visible failures or scandals, not to the invisible distribution of near-miss judgments that happened to work out.
- **Single-observation experience.** Each decision-maker usually sees only their own judgment and outcome, not the counterfactual judgments their colleagues would have made.

The upshot is that institutions can live for decades with large, costly judgment dispersion without ever labeling it a “noise problem.”[^2][^8]


## The cost: what noisy judgment does at scale

Because overall error is the sum of bias and variance components, noisy systems accumulate error even in the absence of directional bias.[^5]
High dispersion means that for any given case, some clients are over-treated, some under-treated, some overcharged, some undercharged.
These errors **do not cancel out** because they apply to different people and assets.
An overpriced insurance premium for one customer does not compensate for an underpriced premium for another; the firm still bears additional risk, and some customers are treated unfairly.[^5]

At scale, noise has at least four concrete costs:

- **Fairness and legitimacy.** When outcomes depend on which judge, underwriter, or manager a person happens to get, systems lose moral legitimacy, even if there is no directional bias against a group.[^6][^7]
- **Financial performance.** Noisy underwriting and pricing generate excess volatility in loss ratios and margins; some risks are underpriced and others are declined unnecessarily, both of which hurt long-run profitability.[^17][^18]
- **Talent allocation and engagement.** Noisy hiring and performance ratings misallocate promotions, bonuses, and development opportunities, which both wastes talent and undermines trust in the system.[^16]
- **Learning and feedback.** When judgments are noisy, it becomes difficult to evaluate policies or interventions because outcome variation reflects not only underlying reality, but also who happened to decide and on what day.

In a sense, noise acts as an invisible tax on every decision a system makes.
It drains value quietly, through thousands of small misjudgments that rarely rise to the level of scandal but cumulatively shape careers, portfolios, and patient trajectories.


## How to measure noise in a system

The central methodological innovation in *Noise* is the **noise audit**: a systematic way to make noise visible.[^7][^3]
In a noise audit, a set of actual or simulated cases, representative of the domain, is evaluated independently by a group of professionals who are supposed to be interchangeable, such as underwriters, claims adjusters, or recruiters.
Their numerical judgments are then compared.

The key statistics are:

- **Level noise:** differences in average judgment levels between individuals (for example, some judges or underwriters are consistently harsher or more lenient than others).
- **Pattern noise:** differences in how individuals rank or respond to cases, even after adjusting for their average level.
Two decision-makers may give similar averages but disagree sharply on which cases are high or low risk.[^1][^3]
- **Occasion noise:** variability in the same person’s judgments of the same case on different occasions, due to transient factors like mood, fatigue, or context.[^9][^21]

Noise can be quantified via standard deviation of judgments across raters, or via mean squared deviation from a chosen benchmark, even when the true “correct” answer is unknown.[^5]
Kahneman and colleagues report multiple corporate noise audits where median pairwise differences in monetary judgments for the same case were surprisingly large relative to management’s expectations, sometimes on the order of 40–60 percent.[^3]

Organizations can adapt this methodology with minimal tooling: select a realistic case set, recruit a cross-section of decision-makers, require independent ratings, and compute basic dispersion metrics.
The mere act of surfacing these numbers often changes how executives think about the quality of their judgment processes.[^7][^3]


## Decision hygiene: beyond debiasing

“Decision hygiene” is Kahneman’s term for a family of practices that reduce error, especially noise, without targeting any particular bias.[^2][^4]
The metaphor is deliberate.
Like handwashing, decision hygiene practices are often unglamorous, preventative, and only probabilistically linked to any specific bad outcome.

Where debiasing seeks to correct directionally skewed beliefs, decision hygiene seeks to **standardize the process** by which judgments are formed, so that equivalent professionals who follow the same steps will produce more consistent outputs.
Core principles include:[^10][^4]

- **Decomposition.** Break complex judgments into simpler components (for example, separate assessments of creditworthiness, collateral quality, and income stability) so that raters focus on specific cues rather than vague impressions.[^10]
- **Independence.** Collect assessments on each component independently and, where possible, from different people, to avoid early impressions contaminating later judgments.
- **Delayed holistic judgment.** Aggregate component assessments into an overall judgment only after all pieces have been evaluated, reducing premature closure.[^10]
- **Use of structured tools.** Employ structured risk assessment instruments, scoring rubrics, and checklists that encode what the organization has learned about predictive cues.[^12][^10]
- **Decision observers.** Introduce trained observers or facilitators in high-stakes decisions to enforce process discipline and spot deviations or sources of noise.[^10]

These practices do not require a full psychological diagnosis of specific biases.
They work by constraining and clarifying judgment, which tends to reduce both random variation and the scope for idiosyncratic bias to influence outcomes.[^2][^4]


## What works: structured judgment, reference classes, sequential evaluation

Three broad families of intervention have strong empirical support for reducing noise in professional judgment.

### Structured and actuarial methods

Meehl’s core finding, reinforced by decades of follow-up work, is that **mechanical or actuarial aggregation of information typically outperforms unaided clinical judgment** across diverse domains, from psychiatric prognosis to personnel selection.[^20][^19]
Meta-analyses covering dozens of comparative studies conclude that statistical prediction is equal or superior to clinical prediction in accuracy, and less costly and variable.
Grove and colleagues note that Meehl’s conclusion “has stood up extremely well for half a century.”[^22][^20]

Structured risk assessment instruments (SRAIs) such as the HCR-20 or youth violence tools represent a middle ground, where human judgment is guided by standardized cues and scoring rules rather than left entirely to intuition.
Studies of these tools report fair to excellent interrater reliability at the level of total scores or risk levels, a marked improvement over unstructured judgment.[^13][^12]

### Reference classes and base rates

Reference class forecasting and base-rate thinking implicitly reduce noise by anchoring judgments to statistics about similar cases rather than idiosyncratic impressions.
In the *Noise* framework, this shifts weight from volatile inside views to more stable outside views, narrowing the dispersion of predictions for any given project or candidate.[^5][^3]

### Sequential and independent evaluation

Kahneman and coauthors advocate “structured sequential decision protocols” in which different attributes of a case are evaluated independently, often by different people, before any overall verdict is formed.[^4][^10]
For instance, in a hiring process, separate evaluators might independently score work sample tests, reference checks, and structured interviews on standardized scales, and only then combine scores mechanically.
Research on performance appraisal criteria suggests that making implicit weighting schemes explicit and consistent can reduce variability in ratings across managers.[^16]

The common thread across these interventions is **de-individuation of assessment**.
The more a system relies on idiosyncratic holistic impressions, the noisier it will be; the more it relies on clearly specified cues, structured collection, and explicit aggregation rules, the less noisy it becomes.[^20][^4]


## The algorithm question: less noisy, but at what cost?

Algorithms are, almost by design, noise-free in the narrow sense: given the same inputs, they return the same output every time.
This is in stark contrast to human decision-makers, whose outputs vary with mood, context, and framing.
Recent work on human–algorithm decision-making emphasizes that algorithmic advice nearly eliminates within-system variability in judgments, even when the advice is biased, while human advisors contribute both bias and noise.[^23]

From a classical statistical perspective, a deterministic model that minimizes expected loss over historical data will reduce the variance component of error, though it may encode systematic bias if the data or objective function are themselves biased.
This parallels insights from algorithmic probability and Solomonoff induction: a universal prior assigns probabilities to sequences based on the shortest programs that generate them, favoring regularities over noise, but it is incomputable and must be approximated.[^24]
Real-world predictive systems similarly compress noisy histories into stable patterns, trading some model misspecification risk for large gains in reduced variance.

The tradeoffs are now well known:

- **Reduced noise, potential bias.** Algorithms trained on biased data can replicate or amplify existing group disparities, but they will do so consistently.
This consistency is, paradoxically, what allows regulators and auditors to detect and correct algorithmic unfairness statistically, in a way that is much harder with individually noisy human judges.[^23]
- **Transparency and contestability.** Human decision-makers can, at least in principle, explain their reasoning, whereas complex models may be opaque, raising issues of due process in domains such as criminal justice and lending.
- **Adaptivity and context.** Humans can sometimes pick up on contextual cues or regime shifts faster than static models, at the cost of greater noise.

Critically, algorithms are not always less **total-error-prone** than human judgment.
Studies of algorithmic underwriting, for example, find tradeoffs between default rates, approval rates, and borrower mobility; increased reliance on algorithmic rules can change the distribution of errors even as it stabilizes decisions.[^18]
And simulations of human–algorithm teams suggest that some residual human noise can occasionally mitigate systematic algorithmic bias by introducing variance that counteracts consistent mispredictions, though at the cost of predictability and fairness for individual cases.[^23]

For organizations, the key question is not “algorithm or human?” but **where to put human discretion**.
The evidence supports a design in which algorithms handle the first pass, especially in large-volume, low-validity environments, while human overrides are tightly governed by structured criteria and post-hoc monitoring, to prevent a reintroduction of uncontrolled noise.


## Closing: noise as an invisible tax

Every organization that relies on human judgment is paying an invisible tax in the form of noise.
Judges, underwriters, physicians, and managers make decisions that look defensible in isolation but, taken together, reveal a startling degree of arbitrary variability.[^15][^6][^16]
Bias is still a central ethical and strategic concern, yet a bias-only agenda leaves half of the error budget untouched.

Treating noise as a first-class problem changes how leaders think about decision quality.
It pushes attention from who is “right” in a given disagreement to how the organization decides, from heroic expertise to humble structure, from fixing people to fixing processes.[^8][^4]
The tools are increasingly clear: noise audits, structured judgment, reference classes, and disciplined use of algorithms all help.
What is missing in most institutions is not a solution, but a diagnosis and the will to treat noise with the same seriousness long reserved for bias.

In that sense, the noise you are not hearing is already shaping your outcomes.
Measuring it, naming it, and designing against it is one of the highest-leverage forms of institutional self-knowledge available today.

---

## References

1. [Daniel Kahneman: The 3 Types of Noise](https://www.shortform.com/blog/daniel-kahneman-noise/) - In their book Noise, Olivier Sibony, Cass R. Sunstein, and Daniel Kahneman explain that there are th...

2. [Groups of experts often differ in their decisions: What are the ...](https://onlinelibrary.wiley.com/doi/full/10.1002/aaai.12135) - The main focus of this book is a discussion of Noise, that is, differences that often occur between ...

3. [Noise: A Flaw in Human Judgment - by Daniel Kahneman, Olivier ...](https://vejdani.org/books/noise/) - Daniel Kahneman's follow-up book from Thinking Fast & Slow; not as good as his first book and clearl...

4. [A Conversation with Daniel Kahneman About 'Noise'](https://behavioralscientist.org/a-conversation-with-daniel-kahneman-about-noise/) - Noise, by definition, is a statistical phenomenon. And when you say that a judgment is noisy, you me...

5. [Book Summary - Noise: A Flaw in Human Judgment - Readingraphics](https://readingraphics.com/book-summary-noise/) - A higher MSE means greater variability or inconsistency, whereas a lower MSE means greater accuracy ...

6. [Surprising Judge-to-Judge Variations Documented In Federal ...](https://tracreports.org/tracreports/judge/274/) - This means that the average or typical sentences of the judges will not be widely different for simi...

7. [Can 'Decision Hygiene' Help Fight 'Noise' Behind Bad Judgment in ...](https://www.lclma.org/2021/05/21/can-decision-hygiene-help-fight-noise-behind-bad-judgment-in-the-legal-profession/) - A new book from Nobel laureate Daniel Kahneman examines the flawed nature of human judgment and offe...

8. [Applying Decision Hygiene to yield better judgment](https://www.theuncertaintyproject.org/threads/applying-decision-hygiene-to-yield-better-judgment) - The authors establish that good judgment can be hampered by two kinds of error: bias and noise. They...

9. [Noise: A Flaw in Human Judgment by Daniel Kahneman | Goodreads](https://www.goodreads.com/book/show/55339408) - From the bestselling author of Thinking, Fast and Slow …

10. [Decision Hygiene - To Summarise](https://www.tosummarise.com/decision-hygiene/) - Kahneman, Sibony and Sunstein suggest that decision observers need to be trained and have some tools...

11. [Accuracy and reliability of forensic latent fingerprint decisions - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3093498/) - This study evaluated examiners on key decision points in the fingerprint examination process; proced...

12. [Forensic Mental Health Practitioners' Use of Structured Risk ...](https://journals.sagepub.com/doi/10.1080/14999013.2021.1895377) - The HCR-20 is an SPJ tool designed to assess psychosocial functioning as it relates to violence risk...

13. [Interrater reliability of the violence risk assessment checklist for youth](https://pmc.ncbi.nlm.nih.gov/articles/PMC11040778/) - Interrater reliability is good for V-RISK-Y sum score, and excellent for the Low-Moderate-High risk ...

14. [The challenges of being imperfect: how do judges and prosecutors ...](https://pmc.ncbi.nlm.nih.gov/articles/PMC11655451/) - Legal decision-making aspires to be objective, a principle regarded as foundational to justice, publ...

15. [Patient and Radiologist Characteristics Associated With Accuracy of ...](https://ajronline.org/doi/10.2214/AJR.14.13672) - OBJECTIVE. Earlier studies of diagnostic mammography found wide unexplained variability in accuracy ...

16. [How Consistent Are Performance Review Criteria?](https://sloanreview.mit.edu/article/human-resources-how-consistent-are-performance-review-criteria/) - Raises, promotions and even continued employment may be predicated on what workers often regard as t...

17. [The mortgage underwriting shift to decision intelligence - Ocrolus](https://www.ocrolus.com/blog/intelligent-mortgage-underwriting-decision-analytics/) - Decision intelligence becomes tangible when it standardizes the most variance-prone parts of underwr...

18. [[PDF] Algorithmic Underwriting in High Risk Mortgage Markets* - MIT Sloan](https://mitsloan.mit.edu/sites/default/files/inline-files/Session1_Paper3_Algorithmic%20Underwriting.pdf) - We study the policy's impact on loan quantities, performance, prices, and household mobility. We fin...

19. [Clinical versus Statistical Prediction - Grove - Wiley Online Library](https://onlinelibrary.wiley.com/doi/abs/10.1002/9781118625392.wbecp200) - He concluded that statistical prediction tends to be more accurate and less costly than clinical pre...

20. [Meehl’s Contribution to Clinical Versus Statistical Prediction](https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=c209996e0c5a421cd843b5329ffb24467e8b6a21)

21. [[PDF] Noise: A Flaw in Human Judgment, Daniel Kahneman (2021)](https://www.globiginvestments.com/attachments/article/164/Noise--A%20Flaw%20in%20Uman%20Judgement.pdf) - Wherever there is judgment there are 2 kinds of error: bias and noise (scatter). It is unacceptable ...

22. [[PDF] Clinical Versus Statistical Prediction: The Contribution of Paul E ...](https://www.psycholosphere.com/Clinical%20versus%20statistical%20prediction%20-%20by%20William%20Grove.pdf) - This controversy concerns the comparative accuracy of two ways of combining predictive data: clinici...

23. [When noise mitigates bias in human–algorithm decision-making](https://pmc.ncbi.nlm.nih.gov/articles/PMC12747352/) - Although algorithms can exhibit bias, they are much less prone to undesirable variability in judgmen...

24. [Algorithmic probability - Wikipedia](https://en.wikipedia.org/wiki/Algorithmic_probability) - Algorithmic probability, also known as Solomonoff probability, is a mathematical method of assigning...

