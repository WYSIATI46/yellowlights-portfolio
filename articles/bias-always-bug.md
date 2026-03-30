# Is Bias Always a Bug? The Adaptive Case for Heuristics

## Executive overview

Many contemporary decision-science books and corporate "debiasing" workshops start from a simple premise: intuitive judgment is mainly a source of systematic error, and the route to rationality is to suppress these biases with more statistics and more deliberation.  Gerd Gigerenzer, Gary Klein, and the fast‑and‑frugal heuristics research program argue that this picture is at best incomplete and often flatly wrong.  They claim that in many real environments, simple heuristics that ignore information outperform more complex models and even expert analysis, not despite their bias but because of it.[^1][^2][^3][^4][^5][^6][^7]

This report surveys the empirical and theoretical basis of that claim and contrasts it with the Kahneman/Tversky bias‑and‑fix framework.  It focuses on fast‑and‑frugal heuristics, ecological rationality, the recognition‑primed decision model, the social heuristics hypothesis, and evidence on when debiasing interventions help, fail, or backfire.  The goal is not to declare a winner but to extract a practical framework for decision architects: when to intervene on intuition and when to protect or even design for it.[^8][^9][^2][^5][^10][^11][^12]

## The debiasing assumption and its blind spot

The debiasing industry rests on the heuristics‑and‑biases tradition initiated by Tversky and Kahneman, which framed heuristics as cognitive shortcuts that systematically depart from the laws of probability and logic.  From this perspective, biases like representativeness, availability, and anchoring generate predictable errors such as base‑rate neglect, conjunction fallacies, and overconfidence, all of which degrade decision quality across domains.[^9][^13][^14]

Training programs built on this view tend to assume that better decisions follow from making people more aware of their biases, teaching them normative rules, and encouraging slower, more reflective reasoning ("System 2").  Yet post‑mortems of this research program have long noted that bias‑awareness often fails to transfer to real decisions, and that people revert to intuitive habits under time pressure and noise.  Kahneman himself has argued that "you cannot improve intuition" in any broad sense, only cue analytic reasoning in specific contexts, and that the world rarely provides such cues.[^6][^15][^7]

The blind spot in this approach is that it treats the statistical norm (e.g., Bayesian updating, expected‑utility maximization) as the unique standard of rationality, largely independent of the structure of the environment in which decisions are made.  It is precisely this assumption that the ecological rationality program rejects.[^16][^5]

## The Kahneman model: heuristics as systematic error

In the heuristics‑and‑biases model, humans are viewed as relying on fast, automatic, associative processes (System 1) that apply simple rules like representativeness or availability in order to answer difficult questions by substitution.  These rules are adaptive in that they reduce cognitive effort, but they are considered globally irrational because they produce large, predictable deviations from normative benchmarks when applied outside their narrow domain of validity.[^13][^9][^16]

A central empirical achievement of this framework is the catalog of biases replicated across many tasks: for example, the conjunction fallacy in probability judgment, the planning fallacy in time estimation, loss aversion in choices under risk, and base‑rate neglect in diagnostic reasoning.  The conclusion is that unaided intuitive judgment is unreliable in most complex domains, especially where feedback is sparse or noisy.[^9][^13]

Kahneman and Klein's joint article "Conditions for Intuitive Expertise" reframes this view in a more moderate way: they agree that some expert intuitions are genuinely skilled, but only when two conditions hold, namely a sufficiently regular environment and long practice with high‑quality feedback.  Absent those conditions, intuitive impressions are likely to be overconfident, biased, and untrustworthy, even when held by professionals.[^14][^9]

## The Gigerenzer counter: heuristics as ecological rationality

Gigerenzer's ecological rationality framework starts from a different question: not whether a heuristic conforms to a general norm like Bayesianism, but whether it achieves good performance (accuracy, speed, robustness) in a particular environment given realistic constraints on information, time, and computation.  A heuristic is ecologically rational when its structural "biases" match the statistical structure of the environment and the payoff function of the task.[^2][^5][^1]

In this view, heuristics are not approximations to optimization algorithms but specialized strategies that exploit regularities such as cue validities, redundancies, and distributions of outcomes.  For instance, the take‑the‑best (TTB) heuristic orders cues by validity and bases its choice entirely on the first cue that discriminates between options, ignoring all others; it is "biased" in that it never integrates all available information.  Yet in many simulated and empirical environments, TTB matches or outperforms multiple regression and other complex models in out‑of‑sample accuracy while using far less information and computation.[^17][^18][^19][^4][^2]

The key contrast is normative: where Kahneman's program treats deviations from statistical norms as prima facie irrational, ecological rationality treats norms as local to task environments, so the same heuristic can be rational in one ecology and disastrous in another.  The crucial question shifts from "Is this biased?" to "Biased relative to what environment?".[^5][^2]

## The adaptive toolbox: a different theory of mind

The adaptive toolbox metaphor captures Gigerenzer's proposal about cognitive architecture: instead of a single general‑purpose optimizer, the mind contains a repertoire of simple, domain‑specific heuristics, each tuned to particular cues and environmental structures.  These heuristics share building blocks such as search rules (which cues to look at and in what order), stopping rules (when to stop searching), and decision rules (how to map cues to a choice).[^20][^1][^2]

From this perspective, bias is not a uniform deficit but the signature of a tool designed for specific conditions. A one‑reason decision strategy like TTB is biased toward the most valid cue and blind to the others, which is maladaptive in environments where many small cues must be integrated, but highly adaptive when cue validities are steeply ordered and data are noisy.  The same logic underlies the recognition heuristic, which chooses the recognized object when recognition correlates with the criterion (e.g., larger cities are more likely to be recognized than smaller ones), producing the "less‑is‑more" effect: people with partial knowledge can outperform those with more detailed but noisier information.[^18][^19][^2][^17]

This toolbox picture directly challenges the bias‑and‑fix model, which assumes a default tendency toward fallacious reasoning that must be corrected by adding more information, more computation, or more statistical education.  Instead, ecological rationality predicts regimes in which adding information, incentives, or computation not only fails to help but actively harms performance through overfitting and overthinking.[^3][^4][^2][^16][^5]

## Where fast‑and‑frugal heuristics beat deliberation

The less‑is‑more effect is the most direct empirical challenge to the assumption that more information and computation always improve judgment.  Goldstein and Gigerenzer's analyses show formally that under certain distributions of cue validities and redundancies, a heuristic that ignores some cues will have lower variance and better out‑of‑sample performance than a fully parameterized model.  The result is not an accident of human limitation but a structural property of prediction under uncertainty, where overfitting past data carries a high cost.[^4][^1][^2][^3][^18]

Empirically, TTB and related heuristics have matched or outperformed linear models and more complex algorithms across domains such as city size inference, consumer choice, and medical diagnosis, especially when the number of observations per parameter is small and cues are highly correlated.  In medical decision making, "fast‑and‑frugal trees" that use a handful of binary questions in a fixed order have equaled or exceeded the accuracy of more elaborate scoring systems for tasks like predicting heart attack risk, while being easier to learn, apply, and audit.[^19][^1][^17][^5]

These successes are highly conditional. They arise in environments characterized by uncertainty (unknown probabilities and dependencies), noisy feedback, limited sample sizes, and skewed cue validities.  In well‑structured, high‑data environments with stable statistical relationships and low noise, such as credit scoring or weather forecasting, more complex models with many parameters and explicit integration of all cues tend to dominate.  The ecological rationality claim is not that heuristics are always superior, but that any evaluation of their rationality must be conditional on environmental structure.[^2][^16][^5]

## The naturalistic decision‑making evidence

Fast‑and‑frugal models focus on cognitive algorithms, but Gary Klein's naturalistic decision‑making (NDM) research approaches the same question from field observation: how do experienced professionals actually make high‑stakes decisions in time‑pressured, uncertain environments?  In classic studies of fireground commanders, Klein and colleagues found that in over 80 percent of critical decisions, commanders did not compare multiple options; instead, they recognized a familiar pattern, mentally simulated a single course of action, and implemented it unless the simulation revealed obvious problems.[^21][^22][^23]

This recognition‑primed decision (RPD) model treats expert intuition as pattern recognition rooted in rich tacit knowledge, not as an unstructured bundle of biases.  Expertise develops through prolonged exposure to meaningful feedback in regular environments, allowing experts to extract high‑validity cues and link them to effective actions in a way that is often difficult to articulate.  Under such conditions, forcing experts into slow, deliberative comparison of options can impair performance by disrupting their ability to exploit honed pattern‑matching capabilities.[^24][^22][^21]

The NDM findings align with the conditions for intuitive expertise identified by Kahneman and Klein in their joint paper: a high‑validity environment plus extended practice with feedback.  Where they disagree is not about whether such expertise exists but about its scope: NDM researchers emphasize that many critical domains, from firefighting to surgery and military command, meet these conditions more often than laboratory tasks suggest, whereas Kahneman stresses that many professional environments, such as long‑term economic forecasting or stock picking, do not.[^13][^14][^9]

## The surgeon's experience effect and choking under pressure

The idea that over‑deliberation can impair expert performance is well documented in motor skills and increasingly studied in surgery and other complex tasks. Explicit monitoring theories of "choking under pressure" show that proceduralized skills, once automatized, become vulnerable when performers are induced to consciously control movements that normally run outside awareness.  In Beilock and Carr's experiments, expert golfers asked to attend closely to swing mechanics under pressure performed worse than when allowed to rely on their practiced routines, consistent with the claim that too much conscious control can disrupt fluid execution.[^25][^26]

Similar mechanisms have been demonstrated in surgical simulation. Malhotra and colleagues found that trainees with a high propensity for conscious monitoring and control ("reinvestment") showed larger performance decrements under time pressure in a laparoscopic task than low‑reinvestment peers, even though both groups had been trained to the same level of technical proficiency.  The authors conclude that intraoperative stressors that trigger reinvestment can degrade technical performance by disrupting automatized skills, implying that not all increases in conscious reflection are beneficial in the operating room.[^27][^28]

These findings do not imply that intuition always beats analysis in surgery, where deliberate planning, checklists, and outcome monitoring clearly improve safety.  They do, however, support the ecological rationality claim that in environments where skills are highly proceduralized and time pressure is acute, "protecting" automaticity from intrusive monitoring can be performance‑enhancing.[^29][^30]

## Social heuristics: intuition as internalized cooperation

The social heuristics hypothesis (SHH), developed by David Rand and colleagues, extends ecological rationality into the social domain: many intuitive responses are thought to encode cooperative strategies that are usually, but not always, payoff‑maximizing in everyday life.  On this view, humans internalize social heuristics like "cooperate with partners" or "be fair" because in repeated, reputation‑laden interactions, such strategies typically yield long‑run benefits, even though in one‑shot anonymous games, selfishness is individually optimal.[^31][^11][^32]

Meta‑analytic evidence across dozens of cooperation experiments in economic games shows that promoting intuitive processing (through time pressure or cognitive load) tends to increase cooperation in "pure" cooperation contexts where there are few future consequences for behavior, while having little effect in more strategic settings.  In one meta‑analysis, intuition increased pure cooperation by roughly 17 percent relative to deliberation, consistent with the idea that reflective thinking often involves overriding pro‑social heuristics in favor of short‑term self‑interest.  Subsequent work that tightened experimental controls around time pressure and task understanding has replicated intuitive cooperation effects, addressing concerns that earlier findings might be artifacts of noncompliance or confusion.[^10][^11][^33]

Critics note that experimental results are not uniformly supportive and that interpreting response times as a pure index of intuition is fraught, but taken together, SHH studies strengthen the case that some biases toward cooperation and fairness are adaptive products of social ecologies rather than irrational glitches.  In policy contexts, this suggests that designing institutions that align with rather than suppress intuitive cooperation can harness rather than fight these social heuristics.[^33][^32]

## The Kahneman–Gigerenzer détente

The Kahneman–Gigerenzer dispute is often framed as a stark clash between irrational humans and ecologically rational ones. Their joint paper with Klein reveals more convergence than is usually appreciated: both sides agree that intuitive expertise can be genuinely reliable when environments are predictable and feedback is timely, and that it is dangerous in noisy, adversarial, or weak‑feedback domains.[^14][^9]

The core empirical disagreement lies in scope and burden of proof. For Kahneman, the default assumption is that intuitive judgments are suspect, and the onus is on proponents of intuition to show that the conditions for expertise are met in a given domain; for Gigerenzer and Klein, the default is that people possess a rich adaptive toolbox that often works well in their natural ecologies, and the onus is on critics to show that specific heuristics are maladaptive in specific environments.  Kahneman's focus is on norm violations and large error magnitudes relative to statistical models; Gigerenzer's focus is on comparative performance and robustness under realistic constraints.[^22][^5][^2]

Methodologically, the programs differ on what counts as evidence. Heuristics‑and‑biases research tends to use abstract problems and within‑subject manipulations to demonstrate systematic fallacies across individuals, while the ecological rationality and NDM traditions favor modeling specific heuristics, testing them against complex environments, and observing experts in situ.  The resulting rhetorical conflict is partly about which environments are taken as canonical for theorizing about rationality: lab tasks with clear statistical structure or real‑world domains riddled with uncertainty.[^8][^19][^21]

## When debiasing helps, fails, or backfires

If heuristics can be adaptive, indiscriminate debiasing risks breaking what works. Empirically, the record on debiasing interventions is mixed. Some targeted training clearly improves performance: for example, a one‑shot intervention teaching strategies to reduce confirmation bias led graduate students to be significantly less likely to choose inferior, hypothesis‑confirming options in a realistic business case, with improvements observable months later in field‑like settings.  More recent work with national risk analysts shows that structured debiasing training can reduce confirmation bias in geopolitical forecasting without merely inducing generic risk aversion.[^12][^34][^35]

At the same time, other studies find that cognitive debiasing courses increase awareness of biases and the ability to articulate mitigation plans without improving diagnostic accuracy or alignment between trainees and expert judgments.  Reviews in clinical reasoning emphasize that debiasing is hard to maintain in busy, stressful environments and that simply training individuals in generic bias lists, without modifying workflows or feedback structures, yields limited gains.[^15][^7]

There is also emerging evidence that interventions which induce overthinking can impair calibration, both in humans and AI systems. Work on choking under pressure shows that increased self‑conscious monitoring of motor performance can worsen outcomes for experts, while having little benefit for novices once basic skills are in place.  More generally, forcing detailed justification for every decision may undermine intuitive pattern recognition in domains where tacit knowledge is crucial, and can lead to slower, less confident decisions without commensurate accuracy gains.[^28][^26][^27][^25]

The lesson is that debiasing is itself an intervention whose ecological rationality must be evaluated: what types of error does it reduce, at what cost in time, cognitive load, and disruption of expertise, and in what environments does that tradeoff net positive?

## Environments of rationality: when heuristics are adaptive or maladaptive

Across these literatures, a common thread emerges: rationality is relational. The same heuristic can be adaptive in one environment and pathological in another. Kahneman and Klein explicitly argue that the trustworthiness of intuition depends on environmental predictability (cue validity) and the decision maker's opportunity to learn these cues through feedback.  Gigerenzer and colleagues formalize this insight by mapping which heuristics perform well in which environments, defining ecological rationality as the match between cognitive strategy, environmental structure, and goal.[^5][^9][^2][^14]

For example, recognition is an excellent cue for city size in countries where recognition frequency correlates with population, but useless or misleading where that correlation is weak or reversed.  One‑reason decision strategies thrive when cues are highly redundant and ordered by validity, but fail where many small, independent cues must be integrated or where cue validities are unstable.  Social heuristics favoring cooperation are adaptive in repeated, reputation‑sensitive games but exploitable in anonymous one‑shot interactions.[^11][^32][^17][^18][^19][^2]

From a design standpoint, this implies that the central question is not "Is this heuristic biased?" but "What environment is this heuristic assuming, and how far does the actual environment deviate from that assumption?". Decision support systems that ignore these environmental contingencies risk either flattening helpful structure (e.g., by forcing unnecessary tradeoff analyses) or failing to guard against predictably harmful biases in adversarial or low‑feedback contexts.

## Design implications: when to protect intuition vs. override it

For decision architects, the practical upshot of this debate is a set of conditional rules rather than a blanket endorsement of either intuition or analysis. A useful starting framework combines the conditions for intuitive expertise with ecological rationality:

- **Protect and leverage intuition** when the environment has high cue validity, feedback is timely and specific, and decision makers have extensive experience and demonstrated track records. This describes domains like firefighting, some forms of surgery, emergency medicine, and certain operational control rooms.[^22][^27][^28]
- **Supplement intuition, not replace it**, in environments where expertise is partial, stakes are high, and feedback is imperfect but not absent, for example in many clinical, managerial, and policy decisions. Here, tools like checklists, premortems, and simple predictive models can catch systematic errors (e.g., base‑rate neglect, narrow framing) while still leaving room for expert pattern recognition.[^7][^29]
- **Constrain or override intuition** in environments with low predictability, weak or misleading feedback, or strong adversarial dynamics, such as macroeconomic forecasting, strategic geopolitics, or certain financial markets. In these contexts, the conditions for intuitive expertise are rarely met, and structured analytical tools, statistical models, and explicit decision criteria are more reliable than gut feelings.[^16][^9]

Concrete design levers include whether to: present information in a way that makes key ecological cues salient, preserve time pressure (to harness practiced automaticity) or introduce delays (to allow deliberate checking), require explicit justification or allow tacit pattern‑based decisions, and standardize or individualize decision rules.  Fast‑and‑frugal decision trees and similar heuristics can be embedded directly in interfaces as default strategies, while still allowing expert override based on local knowledge.[^1][^19][^5][^22]

Critically, the goal is not to purge bias but to sculpt it. An emergency physician's bias toward over‑triaging ambiguous chest pain cases may be ecologically rational given asymmetric costs, whereas the same bias would be maladaptive in a resource‑scarce environment where over‑admission has large downstream harms.  Decision architects must therefore make explicit the payoff structures, error asymmetries, and feedback channels of their domain and choose or design heuristics whose built‑in biases line up with those features.[^29][^1]

## The decision architect's dilemma

The unresolved Kahneman–Gigerenzer debate is not a theoretical curiosity but a live design problem. If intuition is always a bug, then the mandate is straightforward: slow people down, show them their biases, and force them toward statistical thinking wherever possible. If intuition is often an adaptive expression of an evolved adaptive toolbox, then indiscriminate debiasing can strip away the very mechanisms that allow humans to function in complex, uncertain, high‑stakes environments.[^2][^22]

The evidence reviewed here supports a middle position that is less satisfying rhetorically but more useful practically. Heuristics are both sources of error and sources of power. Their value depends on the structure of the environment, the decision maker's history of feedback, and the design of the surrounding system. Decision support should therefore aim less at making people "bias‑free" and more at engineering environments in which their biases are aligned with good outcomes.

For a site like yellowlights.ai, the opportunity is to move beyond generic lists of cognitive biases and instead offer tools and concepts that help practitioners diagnose the ecology of their own decisions: Where is feedback rich or poor? Which cues are reliable, and which are noisy or adversarially manipulated? Where has expertise been given time to develop, and where are professionals winging it? Answers to these questions determine when to trust the gut, when to chain it, and, increasingly, how to integrate human heuristics with algorithmic ones in ways that respect the constraints and affordances of both.[^12][^5][^2]

---

## References

1. [Heuristic Decision Making](https://economics.northwestern.edu/docs/events/nemmers/2018/gigerenzer2.pdf)

2. [Homo Heuristicus: Why Biased Minds Make Better Inferences](https://onlinelibrary.wiley.com/doi/10.1111/j.1756-8765.2008.01006.x) - ## Abstract

Heuristics are efficient cognitive processes that ignore information. In contrast to th...

3. [www.mjms.usm.my © Penerbit Universiti Sains Malaysia, 2012](https://eucaslab.github.io/downloads/2012.Brighton.Gigerenzer.MJMS.pdf)

4. [GigerenzerReviewRevision](https://bpb-us-e1.wpmucdn.com/sites.ucsc.edu/dist/0/158/files/2016/02/GigerenzerReviewRevision-1.pdf)

5. [Ecological Rationality | Exploring Economics](https://www.exploring-economics.org/en/study/books/ecological-rationality/) - In this book, we argue that in an uncertain world, more information and computation are not always b...

6. [Training to reduce cognitive bias may improve decision making after ...](https://theconversation.com/training-to-reduce-cognitive-bias-may-improve-decision-making-after-all-126402) - We found that bias-reduction training can improve decision making in field settings even though remi...

7. [Cognitive debiasing 2: impediments to and strategies for change](https://pmc.ncbi.nlm.nih.gov/articles/PMC3786644/) - In a companion paper, we proposed that cognitive debiasing is a skill essential in developing sound ...

8. [Fast and Frugal Heuristics: The Related Debates and Brief ...](https://journal.psych.ac.cn/xlkxjz/EN/abstract/abstract343.shtml) - In the basis of the bounded rationality and ecological rationality hyp...

9. [Conditions for Intuitive Expertise](https://www.hansfagt.dk/Kahneman_and_Klein(2009).pdf)

10. [SpiralUp eBook Solution](https://mitsloan.mit.edu/shared/ods/documents?DocumentID=4626)

11. [Social Heuristics Shape Intuitive Cooperation](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2222683) - Cooperation is central to human societies. Yet relatively little is known about the cognitive underp...

12. [[PDF] Debiasing Training Improves Decision Making in the Field](https://marketing.wharton.upenn.edu/wp-content/uploads/2019/12/01.06.2020-Morewedge-Carey-PAPER-DebiasingTransferstotheField.pdf) - The results provide promising evidence that debiasing-training effects transfer to field settings an...

13. [A summary of Daniel Kahneman and Gary Klein's article called "Conditions for Intuitive Expertise: A failure to disagree"?](https://www.linkedin.com/pulse/summary-daniel-kahneman-gary-kleins-article-called-failure-herbert-zq9be) - The above article was published in American Psychologist in 2009. (Shout out to Janelle Ward for sig...

14. [See discussions, stats, and author profiles for this publication at: https://www.researchgate.net/publication/26798603](https://www.agileleanhouse.com/lib/lib/People/DanielKahneman/DanielKahneman2009_ConditionsForIntuitiveExpertise_AFailureToDisagree.pdf)

15. [The effect of cognitive debiasing training among family medicine ...](https://psnet.ahrq.gov/issue/effect-cognitive-debiasing-training-among-family-medicine-residents) - Participants were better able to form a plan to mitigate a cognitive bias. This work demonstrates so...

16. [The Virtues and Vices of Biased Rationality: An Eco-Cognitive Account](https://escholarship.org/content/qt1qn609k7/qt1qn609k7_noSplash_1daaeb35096b2569436c6a19f4c28944.pdf?t=op2jei)

17. [Take-the-best heuristic - Wikipedia](https://en.wikipedia.org/wiki/Take-the-best_heuristic) - In psychology, the take-the-best heuristic is a heuristic which decides between two alternatives by ...

18. [Pre Test Excerpt](http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/660p54.pdf)

19. [[PDF] The use of the “Take The Best” Heuristic under different conditions ...](http://act-r.psy.cmu.edu/wordpress/wp-content/uploads/2012/12/417Nellen.pdf) - The heuristics presented are not simple and smart per se, but they are “ecologically rational”, i.e....

20. [From Disintegrated Architectures of Cognition to an Integrated ...](https://academic.oup.com/book/37037/chapter/322691621) - Abstract. This chapter demonstrates how grand unified theories of cognition can be combined with the...

21. [The Recognition-Primed Decision Model: How Experts Make ...](https://idtips.substack.com/p/the-recognition-primed-decision-model?action=share) - Think about the last time you watched someone experienced handle a crisis at work.

22. [RPD | garyklein](https://www.gary-klein.com/rpd)

23. [How can leaders make good decisions under a crisis? - Gary Klein on Fresh perspectives](https://www.youtube.com/watch?v=DzErY5ynXXg) - How can leaders make good decisions under the extreme time constraints of a crisis? To find out, res...

24. [A Primer on Recognition Primed Decision-Making (RPD)](https://www.shadowboxtraining.com/news/2025/06/17/a-primer-on-recognition-primed-decision-making-rpd/)

25. [[PDF] What Governs Choking Under Pressure?](https://www.apa.org/pubs/journals/releases/xge-1304701.pdf) - Observing such a pattern would earmark practiced golf putting as a skill that should be susceptible ...

26. [On the fragility of skilled performance](https://pubmed.ncbi.nlm.nih.gov/11757876/) - Experiments 1-2 examined generic knowledge and episodic memories of putting in novice and expert gol...

27. [Conscious monitoring and control (reinvestment) in surgical ... - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3427481/) - The aim of this study was to examine the impact of reinvestment on laparoscopic performance under ti...

28. [Conscious monitoring and control (reinvestment) in surgical ...](https://pubmed.ncbi.nlm.nih.gov/22350243/) - The aim of this study was to examine the impact of reinvestment on laparoscopic performance under ti...

29. [The Effect of Feedback on Surgeon Performance: A Narrative Review](https://pmc.ncbi.nlm.nih.gov/articles/PMC7591966/) - Surgeon-level data provide an important metric for quality improvement and future training. A narrat...

30. ["Evaluating the Impact of Surgeon Self-Awareness by Comparing ...](https://scholarlycommons.henryford.com/surgery_articles/456/) - OBJECTIVE: To evaluate variation in self vs. peer-assessments of surgical skill using surgical video...

31. [Social heuristics shape intuitive cooperation](https://www.academia.edu/33951446/Social_heuristics_shape_intuitive_cooperation) - Cooperation is central to human societies. Yet relatively little is known about the cognitive underp...

32. [Cooperating, Fast and Slow: Testing the Social Heuristics Hypothesis.](https://www.econstor.eu/bitstream/10419/141852/1/cesifo1_wp5875.pdf)

33. [[PDF] Is intuition really cooperative? Improved tests support the social ...](https://journals.plos.org/plosone/article/file?type=printable&id=10.1371%2Fjournal.pone.0190560)

34. [Debiasing training reduces confirmation bias in national risk analysts](https://pmc.ncbi.nlm.nih.gov/articles/PMC12660316/) - State risk forecasts are crucial for allocating resources to address international and domestic thre...

35. [Debiasing Training Improves Decision Making in the Field - PubMed](https://pubmed.ncbi.nlm.nih.gov/31347444/) - The results provide promising evidence that debiasing-training effects transfer to field settings an...

