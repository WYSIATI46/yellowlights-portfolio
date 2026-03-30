# Confidence Is Not Accuracy: A Field Guide to Knowing What You Don’t Know

## Overview

Decision makers routinely treat confidence as a proxy for accuracy, especially when stakes are high and time is short.
Yet decades of research in psychology, forecasting, and high-stakes professions show that subjective certainty and objective correctness often diverge, sometimes catastrophically.
This essay surveys that evidence and outlines practical tools for treating confidence as a noisy signal to be calibrated, not a credential to be trusted blindly.

## When Expert Confidence Meets Reality

Autopsy studies offer a stark check on medical confidence.
Across hundreds of cases in one Brazilian death verification service, clinical diagnostic hypotheses disagreed with autopsy findings in 28 percent of deaths, meaning that in more than one in four cases the main diagnosis at the time of death was wrong.[^1]
In intensive care units, major missed diagnoses that could have changed management have been found in around 7.5 percent of patients who received an autopsy, even with modern imaging and lab testing.[^2]
A comprehensive review in the American Journal of Medicine concludes that diagnostic errors remain common, that physicians are typically more confident than accurate, and that this overconfidence is a contributing cause of missed and delayed diagnoses.[^3][^4]

The pattern is not unique to medicine.
In a twenty–year study of 284 political and economic experts who collectively made over 80,000 probabilistic forecasts about world events, Philip Tetlock found that, on average, experts with strong reputations and confident narratives performed little better than chance and often worse than simple statistical benchmarks.[^5]
High confidence made predictions sound compelling, but it did not reliably signal that they were correct.

## The Confidence–Accuracy Illusion

### Three flavors of overconfidence

Don Moore and Paul Healy summarize three distinct ways people can be overconfident: overestimation (thinking performance is better than it is), overplacement (believing one ranks higher than others), and overprecision (being too sure about the accuracy of a belief or estimate).[^6]
In laboratory tasks, people often overestimate how many quiz questions they answered correctly, overplace themselves relative to peers, and give intervals around numerical estimates that are far too narrow given their true hit rates.[^7][^6]

Calibration studies of subjective probabilities reveal a characteristic "hard–easy" pattern.
When questions are difficult, people express confidence that is higher than their actual proportion correct, whereas for very easy questions they may be mildly underconfident.[^8][^7]
At extreme levels such as 95 or 100 percent, people are wrong far more often than those numbers would imply, revealing a chronic mismatch between the feeling of certainty and the empirical frequency of being right.[^9][^7]

Overprecision is particularly insidious for decision makers because it manifests as excessively tight confidence intervals and categorical language, which can discourage contingency planning and dissent.[^10][^6]
Even when point estimates are unbiased, compressed uncertainty bands can make a portfolio, a product launch, or a military operation look safer than it really is.

### Expertise does not immunize against miscalibration

Overconfidence is not confined to novices.
In stock market surveys, professional forecasters as a group are "egregiously overconfident": their interval forecasts for future market levels miss the realized value far more often than the stated 90 percent or 75 percent confidence levels would predict.[^11][^12]
Strikingly, greater experience and past success are associated with higher, not lower, overconfidence, suggesting that short-term reinforcement can teach experts the wrong lessons about how much to trust their judgment.[^13][^11]

Lawyers show a similar pattern.
In a large study of 481 U.S. attorneys, participants stated a minimum acceptable litigation outcome and then estimated the probability of achieving it.[^14]
Overall, lawyers were overconfident: their stated probabilities exceeded the actual success rate, calibration did not improve with years of experience, and generating reasons they might lose did not reliably reduce overconfidence.[^15][^14]

## Dunning–Kruger Revisited: What the Data Actually Show

The Dunning–Kruger effect is often summarized in popular culture as "stupid people are too stupid to know they are stupid."
The original research is subtler and more informative for decision science.

In their 1999 paper, Justin Kruger and David Dunning asked participants to complete tests of humor, logic, and grammar, then estimate both their raw scores and their percentile rank relative to others.[^16]
Participants in the bottom quartile on these tasks grossly overestimated their standing, believing they were around the 62nd percentile when they actually averaged near the 12th.[^16]
High performers, by contrast, tended to slightly underestimate their relative performance, assuming that what was easy for them was also easy for others.[^16]

Crucially, Kruger and Dunning argued that low performers lacked the metacognitive skill needed to recognize their errors: the same deficits that produced poor performance also impaired their ability to evaluate that performance.[^17][^16]
When participants received training that improved their underlying skills, their self-assessments became more realistic, consistent with the idea that metacognitive monitoring can improve with feedback and learning.[^17][^16]

### Statistical critiques and updates

Gilles Gignac and Marcin Zajenkowski revisited the Dunning–Kruger pattern using individual-differences data on intelligence and self-assessed comparative IQ.[^18]
They reported that the degree of misprediction of IQ scores was roughly similar across the full intelligence range, leading them to argue that much of the classic Dunning–Kruger curve could reflect regression to the mean and measurement artifacts rather than a special metacognitive deficit among the least skilled.[^18]

Subsequent commentary has pushed back on strong "it is just a statistical artifact" claims.
Avram Hiller, for example, showed that some of the homoscedasticity Gignac and Zajenkowski observed depends on recoding ordinal self-ratings onto a linear IQ scale and that alternative scaling choices recover patterns more consistent with genuine skill-linked miscalibration.[^19][^20]

Taken together, the literature suggests two points relevant for practitioners.
First, people across the ability spectrum miscalibrate, often in predictable ways tied to task difficulty and feedback; the problem is not confined to the "bottom quartile."
Second, lower-skill individuals on a given task are at particular risk of severe overestimation because they both lack knowledge and lack reliable cues that they are wrong, but this is a matter of domain-specific skill and feedback, not a fixed trait.[^18][^16]

## Depth of Understanding vs. Depth of Feeling

Leonid Rozenblit and Frank Keil coined the term "illusion of explanatory depth" to describe how people systematically overestimate how well they understand complex mechanisms.[^21]
Participants in their studies rated how well they understood everyday objects such as zippers, toilets, or helicopters, then were asked to write detailed step-by-step explanations of how those objects work.[^21]
After attempting the explanations, participants sharply downgraded their self-ratings, revealing that the initial sense of understanding had little to do with the ability to articulate a coherent causal model.[^22][^21]

The illusion of explanatory depth is strongest for mechanistic, "how" questions and weaker for simple factual or procedural knowledge.[^21]
This matters in organizations because strategic narratives, causal diagrams, and technology roadmaps can generate a powerful feeling of grasp without guaranteeing that anyone could, for example, specify the detailed failure modes, data dependencies, or implementation steps.
For decision makers, a simple test is to attempt to explain a belief in writing or to a colleague; the ease or difficulty of this exercise often reveals whether confidence is grounded in real structure or in a vague gestalt.

## How Calibration Is Measured

### Probability calibration

A forecaster is perfectly calibrated if, among all events they assign 60 percent probability, approximately 60 percent occur, and similarly for 70 percent, 80 percent, and so on.[^7][^9]
When plotted, a well-calibrated forecaster’s points fall along the diagonal line of a reliability diagram, whereas an overconfident forecaster’s curve falls below the diagonal, indicating that reality is less favorable than their stated odds.

The Brier score is the standard scoring rule used to quantify the accuracy of probabilistic forecasts.
For a single yes/no event with predicted probability \(p\) and outcome \(o\) coded as 1 if the event occurs and 0 otherwise, the Brier score is \((p - o)^2\).[^23]
Average Brier scores range from 0 for perfect forecasts, through 0.5 for uninformative 50–50 guesses, to 2 for being maximally confident and wrong, with lower scores indicating better performance.[^24][^23]
Because the Brier score is a proper scoring rule, it rewards both sharpness (moving probabilities away from 50 percent when warranted) and calibration (aligning probabilities with frequencies).

### Interval calibration and overprecision

For numerical quantities such as revenue, market size, or time-to-completion, calibration is often assessed via confidence intervals.
If a decision maker specifies 90 percent confidence intervals for a series of quantities, then roughly 90 percent of the realized values should fall within those intervals if the person is well calibrated.[^7]
Consistently observing only 50 or 60 percent coverage at the stated 90 percent level is a clear sign of overprecision: confidence intervals are too tight relative to reality.[^10]

Methods such as Subjective Probability Interval Estimates (SPIES), which ask people to assign probabilities to ranges across the full spectrum of possible values, have been shown to reduce overprecision and produce wider, better calibrated intervals than traditional "low–high" questions.[^25]

## Superforecasters: Calibration in Practice

The U.S. intelligence community’s Aggregative Contingent Estimation (ACE) program sponsored large geopolitical forecasting tournaments to test whether judgmental accuracy could be systematically improved.[^26][^27]
The Good Judgment Project (GJP), led by Tetlock, Barbara Mellers, and colleagues, recruited thousands of volunteers to forecast hundreds of real-world events such as elections, conflicts, and economic indicators.[^28][^26]
Top performers, dubbed "superforecasters," consistently outperformed both the average participant and other research teams, achieving Brier scores 30 to 70 percent better than competitors and even beating intelligence analysts with access to classified information.[^29][^26]

Superforecasters display several recurring traits and habits.
They think in fine-grained probabilities rather than binary yes/no answers, frequently updating their estimates as new information arrives.[^30][^24]
They break big questions into smaller subquestions, consult base rates and reference classes, and are comfortable revising beliefs when the evidence changes.[^30][^29]
Psychologically, they tend to be open-minded, reflective, and actively skeptical of their own first reactions.[^28][^29]

Training and environment matter as well.
A brief cognitive-debiasing module known as "CHAMPS KNOW" taught forecasters basic principles such as comparing inside and outside views, considering alternative hypotheses, and avoiding common fallacies.[^31][^32]
Despite taking less than an hour, this training improved forecast accuracy, as measured by Brier scores, by 6 to 11 percent relative to controls.
Ongoing tournaments that provided immediate feedback, team discussion, and aggregation algorithms further enhanced performance and helped sustain calibration gains over multiple years.[^27][^29]

## Metacognition: Learning to Monitor Your Own Knowledge

John Flavell introduced the term "metacognition" to describe knowledge about one’s own cognitive processes and the ability to monitor and regulate them.[^33]
He distinguished metacognitive knowledge (beliefs about how memory, attention, and problem solving work), metacognitive experiences (the feelings that accompany cognitive activity, such as doubt or familiarity), goals or tasks, and strategies.[^33]

Work summarized by John Dunlosky and Janet Metcalfe shows that metacognitive judgments such as confidence ratings, judgments of learning, and feelings of knowing are imperfect but informative signals that can be improved with practice and feedback.[^34]
For example, when people study material and then delay their judgment of how well they have learned it, their predictions of later recall become more accurate; similarly, spacing and testing can sharpen the link between subjective difficulty and objective performance.[^34]

### Feelings of knowing and tip-of-the-tongue states

Asher Koriat and collaborators have developed influential models of the "feeling of knowing" (FOK) that arises when a person cannot immediately retrieve an answer but senses that they would recognize it if seen.[^35][^36]
FOK judgments appear to rely partly on cue familiarity and partly on the accessibility of partial information, and they can show above-chance validity in predicting later recognition while still producing dramatic errors on individual items.[^35]

Tip-of-the-tongue (TOT) states, in which a person is intensely confident that they know a word or name but cannot produce it, are a vivid example of metacognitive experience decoupled from immediate success.[^37][^38]
Recent work using signal-detection models suggests that experiencing TOT or high FOK states can, under some conditions, enhance later metacognitive sensitivity, improving the alignment between confidence and recognition accuracy.[^39]
These findings underscore that calibration is not fixed; it can be shaped by experience and by how people attend to their own cognitive signals.

## Tools for Calibrating Your Own Confidence

### 1. Express beliefs in explicit probabilities and ranges

Moving from categorical statements ("this will work") to probabilistic ones ("there is a 60 percent chance this will work within 12 months") creates a format that can be tracked, scored, and improved.
Keeping a simple forecast log for key decisions, with date, probability or interval, and outcome, allows organizations to compute calibration curves and Brier scores over time and to spot systematic overconfidence.[^24][^7]

### 2. Use reference class forecasting

Daniel Kahneman and Amos Tversky argued that planners systematically underestimate costs, durations, and risks because they adopt an "inside view" focused on the specific plan instead of the "outside view" grounded in outcomes of similar past projects.[^40]
Reference class forecasting inverts this by first identifying a relevant class of comparable projects, then examining the empirical distribution of outcomes and locating the current project within that distribution.[^41][^40]
Consistently applying this method reduces planning-fallacy optimism by tying confidence to base rates rather than narratives.

### 3. Deliberately consider how you might be wrong

Simply exhorting people to "be unbiased" does little to reduce bias.
However, instructing decision makers to "consider the opposite" to what they currently believe, and to generate concrete reasons why their favored view might be wrong, has been shown to reduce several judgment biases more effectively than generic fairness instructions.[^42][^43]
In organizational settings, this logic underpins premortems, red teams, and devil’s advocate roles, which institutionalize systematic challenge to high-confidence views.

It is important to recognize limits: in the lawyer-prediction study, asking some attorneys to think about reasons they might not achieve their goals did not fully eliminate overconfidence.[^14]
Debiasing techniques help, but overconfidence is persistent enough that structural correctives and continuous feedback are also needed.

### 4. Train with feedback and scoring

Calibration improves when people receive frequent, individualized feedback on their probabilistic judgments.
Studies of automated calibration training that provide forecasters with performance feedback and visualization of miscalibration show reductions in overconfidence and closer alignment between stated probabilities and observed frequencies, especially on controlled forecasting tasks.[^44]
Earlier work by Lichtenstein and Fischhoff similarly found that extensive, personalized feedback on quiz questions could reduce but not eradicate classic overconfidence effects.[^10][^7]

The forecasting tournaments discussed earlier demonstrate that even a brief debiasing module, combined with regular scoring via Brier scores and exposure to others’ reasoning, can yield durable improvements in judgmental accuracy.[^29][^31]
Organizations can approximate this by scoring internal forecasts, discussing large misses in postmortems, and highlighting examples where more cautious, well-calibrated forecasts added value.

### 5. Widen intervals using structured elicitation

To combat overprecision, replace ad hoc "give me a 90 percent interval" questions with structured methods such as SPIES that force consideration of low-probability tails.[^25]
By allocating probability mass across a range of mutually exclusive intervals, forecasters become more aware of alternative possibilities and tend to produce intervals that achieve closer to nominal coverage.

### 6. Test the depth of your understanding

Borrowing from illusion-of-explanatory-depth experiments, use explanation as a diagnostic tool.
Before committing to a confident view, attempt to write a detailed, mechanism-level explanation or implementation plan and, if possible, have a colleague interrogate it.[^22][^21]
Unexpected gaps, hand-waving, or reliance on slogans are signals that confidence should be downgraded and that further analysis or experimentation is needed.

### 7. Build metacognitive habits and culture

Metacognition is a learnable skill set that benefits from explicit norms.
Routinely asking "How do we know?", "What would change our mind?", and "How often has this kind of thing worked before?" embeds monitoring into group decision processes.[^34][^33]
Encouraging people to label their confidence numerically, to flag when they feel they are in a tip-of-the-tongue or low-visibility state, and to seek disconfirming evidence creates a culture where epistemic humility is expected rather than punished.

## Epistemic Humility as a Competitive Advantage

Humility in judgment is often mistaken for weakness or indecision, especially in environments that reward bold narratives and decisive action.
The research reviewed here points to a different conclusion.
Decision makers and organizations that separate confidence from accuracy, relentlessly measure and train calibration, and design systems that surface and learn from error, tend to outperform more certain but less reflective competitors.

Superforecasters illustrate this attitude in practice: they are willing to make precise bets, but they treat every forecast as provisional, update quickly in response to evidence, and take pride not in being invincible but in being correctable.[^30][^29]
In medicine, law, and finance, acknowledging the gap between how right something feels and how right it actually is opens the door to second opinions, audits, checklists, and structured feedback that can save lives, money, and careers.[^3][^11][^14]

Confidence is not the enemy of good decision making; uncalibrated confidence is.
Treating feelings of certainty as data to be interrogated, rather than as proof, is a practical form of epistemic humility that improves both accuracy and trust.
In high-stakes environments, that humility is not a virtue signal but a hard-edged competitive advantage.

---

## References

1. [Evaluation of the discrepancy between clinical diagnostic ... - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC6735273/) - Despite advances in Medicine, the level of discrepancy between clinical and autopsy diagnoses remain...

2. [Clinical diagnoses and autopsy findings: discrepancies in critically ill ...](https://psnet.ahrq.gov/issue/clinical-diagnoses-and-autopsy-findings-discrepancies-critically-ill-patients) - Autopsies are an important tool for detecting diagnostic errors and improving clinicians' diagnostic...

3. [Overconfidence as a Cause of Diagnostic Error in Medicine](https://www.sciencedirect.com/science/article/abs/pii/S0002934308000405) - The review covers the incidence and impact of diagnostic error, data on physician overconfidence as ...

4. [Overconfidence as a cause of diagnostic error in medicine. | PSNet](https://psnet.ahrq.gov/issue/overconfidence-cause-diagnostic-error-medicine) - This comprehensive review analyzes the frequency of diagnostic errors, addresses research on contrib...

5. [Philip E. Tetlock. 2005. Expert Political Judgment: How Good is it ...](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1153126) - Tetlock's book reports the results of a two-decade long study of expert predictions. He recruited 28...

6. [The trouble with overconfidence](https://pubmed.ncbi.nlm.nih.gov/18426301/) - The authors present a reconciliation of 3 distinct ways in which the research literature has defined...

7. [[PDF] The Calibration of Probabilities in Theory and Practice](http://bear.warrington.ufl.edu/brenner/mar7588/Papers/koehlerbrennergriffin2002.pdf) - The study of how people use subjective probabilities is a remarkably modern concern, and was largely...

8. [[PDF] Running head: DYADIC CONFIDENCE AND INDIVIDUAL ... - CDN](https://cpb-us-e1.wpmucdn.com/blogs.cornell.edu/dist/4/3419/files/2014/07/Schuldt-Chabris-Woolley-Hackman-in-press-1xbf89m.pdf) - on high-accuracy tasks. Known as the hard-easy effect (Baranski & Petrusic, 1994; Lichtenstein. & Fi...

9. [Knowing with Certainty: The Appropriateness of Extreme ...](https://nuovoeutile.it/wp-content/uploads/2014/10/Knowing-with-certainty.pdf)

10. [[PDF] Construction of the Test for Measuring Overconfidence For the ...](https://mpra.ub.uni-muenchen.de/34478/1/MPRA_paper_34478.pdf) - Lichtenstein and Fischhoff (1980) studied the impact of extensive, personalized calibration feedback...

11. [[PDF] The Dynamics of Overconfidence: Evidence from Stock Market ...](https://www.econstor.eu/bitstream/10419/24179/1/dp0583.pdf) - The purpose of this paper is to examine both the statics and dynamics of overconfidence of stock mar...

12. [The dynamics of overconfidence: Evidence from stock market ...](https://ideas.repec.org/a/eee/jeborg/v75y2010i3p402-412.html) - What's more, more experienced forecasters have learned to be overconfident, and hence are more susce...

13. [The Dynamics of Overconfidence: Evidence from Stock Market ...](https://www.zew.de/publikationen/the-dynamics-of-overconfidence-evidence-from-stock-market-forecasters-2) - What's more, more experienced forecasters have “learned to be overconfident,” and hence are more sus...

14. [Are lawyers any good at predicting the outcomes of their cases?](https://bakadesuyo.com/2010/07/are-lawyers-any-good-at-predicting-the-outcom/) - Overall, lawyers were overconfident in their predictions, and calibration did ... Source: “Insightfu...

15. [Lawyer Confidence May Be Poor Indicator of Results](https://www.thebusinessdivorcelawyer.com/lawyer_confidence_may_be_poor_indicator_of_results/) - Lawyers must evaluate cases and try to predict the most likely outcome. To be successful, to attract...

16. [[PDF] Unskilled and unaware of it: how difficulties in recognizing one's own incompetence lead to inflated self-assessments. | Semantic Scholar](https://www.semanticscholar.org/paper/Unskilled-and-unaware-of-it:-how-difficulties-in-to-Kruger-Dunning/f2c80eef3585e0569e93ace0b9770cf76c8ebabc) - Across 4 studies, the authors found that participants scoring in the bottom quartile on tests of hum...

17. [Unskilled and unaware--but why? A reply to Krueger and Mueller (2002) - PubMed](https://pubmed.ncbi.nlm.nih.gov/11831409/) - J. Kruger and D. Dunning (1999) argued that the unskilled suffer a dual burden: Not only do they per...

18. [[PDF] The Dunning-Kruger effect is (mostly) a statistical artefact](https://www.semanticscholar.org/paper/The-Dunning-Kruger-effect-is-(mostly)-a-statistical-Gignac-Zajenkowski/7f5b1c7dbf5f96b37a9128158894f422ec7903bf) - The Dunning-Kruger effect is (mostly) a statistical artefact: Valid approaches to testing the hypoth...

19. ["Comment on Gignac and Zajenkowski, “The Dunning-Kruger ...](https://pdxscholar.library.pdx.edu/phl_fac/85/) - Gignac and Zajenkowski (2020) find that “the degree to which people mispredicted their objectively m...

20. [[PDF] Comment on Gignac and Zajenkowski, “The Dunning-Kruger effect ...](https://pdxscholar.library.pdx.edu/context/phl_fac/article/1085/viewcontent/Hiller_Comment_on_Gignac_PrePrint.pdf) - (2020). The Dunning-Kruger effect is (mostly) a statistical artefact: Valid approaches to testing th...

21. [The misunderstood limits of folk science: an illusion of explanatory depth - PubMed](https://pubmed.ncbi.nlm.nih.gov/21442007/) - People feel they understand complex phenomena with far greater precision, coherence, and depth than ...

22. [The Illusion of Explanatory Depth - Edge.org](https://www.edge.org/response-detail/27117)

23. [Compromising improves forecasting - PMC - NIH](https://pmc.ncbi.nlm.nih.gov/articles/PMC10189590/) - We test this by analysing 5 years of data from the Good Judgement Project and comparing the accuracy...

24. [Evidence on good forecasting practices from the Good Judgment ...](https://aiimpacts.org/evidence-on-good-forecasting-practices-from-the-good-judgment-project-an-accompanying-blog-post/) - Experience and data from the Good Judgment Project (GJP) provide important evidence about how to mak...

25. [[PDF] A Simple and Effective Way to Reduce Overprecision in Judgment](https://www.cmu.edu/sites/default/files/cmu-tepper-site-files/2025-06/organizational-behavior-and-theory-haran-dissertation.pdf) - In this dissertation, I present a novel elicitation method which can reduce overprecision, sometimes...

26. [The Good Judgment Project - Wikipedia](https://en.wikipedia.org/wiki/The_Good_Judgment_Project) - The project spawned a 2015 book by Tetlock and coauthored by Dan Gardner, Superforecasting - The Art...

27. [Forecasting Tournaments: Tools for Increasing Transparency and ...](https://www.academia.edu/13898016/Forecasting_Tournaments_Tools_for_Increasing_Transparency_and_Improving_the_Quality_of_Debate) - This article describes a massive geopolitical tournament that tested clashing views on the feasibili...

28. [[PDF] Identifying and Cultivating Superforecasters as a Method of ...](https://stanford.edu/~knutson/nfc/mellers15.pdf) - The Good Judgment Project (GJP). In this article, we describe the best-performing strategy of the wi...

29. [Identifying and Cultivating Superforecasters as a Method of Improving Probabilistic Predictions - Barbara Mellers, Eric Stone, Terry Murray, Angela Minster, Nick Rohrbaugh, Michael Bishop, Eva Chen, Joshua Baker, Yuan Hou, Michael Horowitz, Lyle Ungar, Philip Tetlock, 2015](https://journals.sagepub.com/doi/abs/10.1177/1745691615577794) - Across a wide range of tasks, research has shown that people make poor probabilistic predictions of ...

30. [Evidence on good forecasting practices from the Good Judgment ...](https://aiimpacts.org/evidence-on-good-forecasting-practices-from-the-good-judgment-project/) - Tetlock has ideas for how to handle longer-term, nebulous questions. He calls it “Bayesian Question ...

31. [Judgment and Decision Making, Vol. 11, No. 5, September 2016, pp. 509–526](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/123EB18425391D05FA6581FDBB3F309F/S1930297500004599a.pdf/developing_expert_political_judgment_the_impact_of_training_and_practice_on_judgmental_accuracy_in_geopolitical_forecasting_tournaments.pdf)

32. [Developing expert political judgment: The impact of training - RePEc](https://ideas.repec.org/a/cup/judgdm/v11y2016i5p509-526_8.html) - This article tests the power of a cognitive-debiasing training module (“CHAMPS KNOW”) to improve pro...

33. [American Psychologist Volume 34 Issue 10 1979 [Doi 10.1037_0003-066x.34.10.906] Flavell, John H.](https://www.scribd.com/document/360131552/American-Psychologist-Volume-34-Issue-10-1979-Doi-10-1037-0003-066x-34-10-906-Flavell-John-H) - This document discusses metacognition and cognitive monitoring. It proposes that metacognition invol...

34. [Metacognition by John Dunlosky, Janet Metcalfe | eBook](https://www.barnesandnoble.com/w/metacognition-john-dunlosky/1119454576) - Metacognition is the first textbook to focus on people′s extraordinary ability to evaluate and contr...

35. [The combined contributions of the cue-familiarity and accessibility ...](https://pubmed.ncbi.nlm.nih.gov/11204106/) - Koriat, 1993). Both cue familiarity and accessibility are assumed to contribute asynchronously to FO...

36. [Feelings of Knowing and Tip-of-the-Tongue States](https://uk.sagepub.com/sites/default/files/upm-assets/24469_book_item_24469.pdf) - Koriat and Levy-Sadot (2001) investigated how two cues—cue famil- iarity ... included memory monitor...

37. [Tip-of-the-tongue states predict enhanced feedback processing and subsequent memory](http://www.columbia.edu/cu/psychology/metcalfe/PDFs/Bloom_2018.pdf)

38. [Tip-of-the-tongue (TOT) states: retrieval, behavior, and ...](http://www.columbia.edu/cu/psychology/metcalfe/PDFs/Schwartz_Metcalfe_inPress.pdf)

39. [Tip-of-the-Tongue and Feeling-of-Knowing Experiences Enhance ...](https://pmc.ncbi.nlm.nih.gov/articles/PMC12047626/) - The results showed that experiencing a TOT or a high FOK is associated with an increase in metacogni...

40. [Reference class forecasting - Wikipedia](https://en.wikipedia.org/wiki/Reference_class_forecasting) - The theories behind reference class forecasting were developed by Daniel Kahneman ... Planning falla...

41. [Planning Fallacy - Causes and Solutions for Project Expectations - PMI](https://www.pmi.org/learning/library/planning-fallacy-causes-solutions-project-expectations-6374) - This general tendency of projects to overpromise and under-deliver is called the Planning Fallacy (K...

42. [Jourotl of Pcnorality ind Social Psychology](https://citeseerx.ist.psu.edu/document?doi=e71bbae72f8ad78e97c54f5ec88c9af2c70759f2&repid=rep1&type=pdf)

43. [Considering the opposite: a corrective strategy for social judgment.](https://www.semanticscholar.org/paper/Considering-the-opposite:-a-corrective-strategy-for-Lord-Lepper/e71bbae72f8ad78e97c54f5ec88c9af2c70759f2) - In two separate but conceptually parallel experiments, the induction of a consider-the-opposite stra...

44. [Automated calibration training for forecasters - Wiley Online Library](https://onlinelibrary.wiley.com/doi/full/10.1002/bdm.2334) - In two studies, we investigated the effectiveness of an automated form of calibration training via i...

