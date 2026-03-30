# The Architects of Judgment: A History of Decision Science

## Executive overview

Across more than two millennia, a single question keeps resurfacing in different guises: how should finite, biased, social animals choose well when the world is uncertain?
From Aristotle’s practical wisdom to Bayes, Bentham, von Neumann and Morgenstern, Simon, Kahneman, Thaler, Tetlock, Gigerenzer, and contemporary thinkers, decision science is an evolving answer to that problem.[^1][^2][^3][^4][^5][^6][^7][^8]
This essay traces that lineage and argues that decision science advances whenever it takes human cognitive limits, environmental structure, and institutional consequences seriously, and stalls when it treats decision makers as frictionless optimizers.

The field became empirical only in the twentieth century because it required three converging developments: a mature mathematical theory of probability and utility, laboratories and data-rich organizations that exposed the gap between theory and human behavior, and statistical methods powerful enough to quantify that gap.[^9][^3][^10][^11][^6]
Simon’s bounded rationality, Kahneman and Tversky’s heuristics-and-biases program, and Gigerenzer’s ecological rationality can be read as successive corrections to the rationalist dream, each making different tradeoffs between norm and description.[^4][^10][^12][^13][^7][^14]
Today, AI and algorithmic systems force a new turn: from asking what isolated individuals ought to do, to asking how human–AI teams can combine complementary strengths, mitigate each other’s weaknesses, and institutionalize better judgment at scale.[^15][^16][^17][^18]


## The oldest question: how do we choose well?

In the *Nicomachean Ethics*, Aristotle distinguishes three kinds of intellectual excellence: *episteme* (scientific knowledge of necessary truths), *techne* (craft knowledge oriented to production), and *phronesis* (practical wisdom about action in contingent situations).[^19][^20][^1]
*Episteme* aims at universal, context‑independent laws, *techne* at reliable methods for making things, but *phronesis* is about deliberating well about what is good and expedient for a human life here and now, given particular circumstances and character.[^20][^1][^19]

Aristotle explicitly links moral virtue to this kind of reasoning: virtue is a disposition “involving choice” guided by a mean “determined by reasoning such as the practically wise person (*phronimos*) would use.”[^20]
Already, decision quality is not just about getting outcomes right, but about integrating facts, values, and character in concrete contexts, a theme that will reappear in modern debates about whether decision science can be purely formal or must be inseparable from ethics and institutions.[^21][^1][^20]


## The rationalist dream: from Aristotle to von Neumann

### Enlightenment probability and the calculus of belief

Seventeenth‑ and eighteenth‑century mathematicians transformed questions of judgment under uncertainty into questions of probability, laying the groundwork for modern decision theory.[^2][^22][^23][^9]
Blaise Pascal’s famous “wager” in the *Pensées* frames religious belief as a bet whose expected value dominates all others: a finite cost of belief for a potentially infinite reward, using early notions of probability and payoff to argue that rational agents should live as if God exists.[^24][^25][^26][^27]

Thomas Bayes’s posthumously published “Essay Towards Solving a Problem in the Doctrine of Chances” (1763) tackles the “inverse problem”: given observed successes and failures, what is the probability of the underlying chance parameter.[^28][^29][^2][^9]
Bayes introduces what is now called Bayes’ theorem and, with Richard Price’s editorial additions, shows how prior beliefs can be updated by evidence, foreshadowing a view of rational judgment as coherent belief revision.[^2][^28][^9]

Daniel Bernoulli’s solution to the St Petersburg paradox in 1738 introduces expected utility: instead of maximizing expected monetary value, he argues that one should maximize expected utility, with diminishing marginal utility of wealth, captured by a logarithmic function.[^30][^31][^32][^33]
This move, from objective payoffs to subjective utilities, anticipates later models in which rational agents choose among risky prospects by weighting utilities by probabilities, while also acknowledging that psychological responses to gains are non‑linear.[^32][^33][^30]

Pierre‑Simon Laplace’s *Théorie analytique des probabilités* (1812) consolidates and extends these ideas, deriving results such as the central limit theorem, and presenting probability theory as a universal logic of inference from imperfect observations.[^34][^22][^23][^35]
Laplace treats probability as a measure of rational belief for a finite mind that, unlike an imaginary omniscient intelligence, must reason under ignorance, again linking rational judgment to mathematically tractable rules for updating beliefs.[^23][^35][^34]

### Utilitarianism and homo economicus

In parallel, utilitarian philosophers tried to turn ethical and political judgment into a calculus of pleasure and pain.  
Jeremy Bentham’s *Introduction to the Principles of Morals and Legislation* (1789) proposes the “principle of utility,” under which actions are evaluated by their tendency to promote the greatest happiness for the greatest number, and sketches a “felicific calculus” that, in principle, could quantify the intensity, duration, certainty, and extent of pleasures and pains.[^36][^37][^38][^21]

John Stuart Mill develops and modifies Bentham’s program, introducing distinctions among higher and lower pleasures and linking utility to liberal institutions, while still treating humans as agents who, at least ideally, respond systematically to incentives and sanctions.[^37][^39][^21]
In nineteenth‑century economics, these ideas are formalized as *homo economicus*: an agent with stable, complete, transitive preferences who maximizes utility subject to constraints, becoming the normative and often descriptive baseline for later decision theory.[^39][^3][^21]

### Von Neumann, Morgenstern, and formal expected utility

The rationalist dream reaches its most elegant formulation in John von Neumann and Oskar Morgenstern’s *Theory of Games and Economic Behavior* (1944, with an axiomatic appendix in the 1947 edition).[^3][^40][^41][^42]
They show that if an agent’s preferences over risky “lotteries” satisfy a small set of axioms (completeness, transitivity, continuity, and independence), then there exists a utility function such that the agent behaves as if maximizing expected utility.[^40][^41][^3]

This von Neumann–Morgenstern utility representation provides an axiomatic foundation for expected utility theory and turns rational choice under risk into a mathematical problem: choose the act that maximizes the expectation of a cardinal utility function over outcomes.[^41][^43][^3][^40]
Combined with later work on subjective probability (for example, Savage’s 1954 framework), this gives classical decision theory its canonical answer to the unifying problem: a decision is good if it is consistent with probability theory and utility maximization.[^43][^42][^41]

Yet this framework also imports strong, often implicit, assumptions: that agents know the relevant states, probabilities, and consequences; that they can compute expectations; and that their preferences are stable and context‑independent.  
These assumptions will become targets for the twentieth‑century empirical turn.


## Simon’s revolution: bounded minds in complex worlds

Herbert A. Simon, a polymath spanning economics, psychology, and computer science, attacks the central fiction of classical rationality: omniscience.[^10][^11][^44]
In mid‑1950s papers and, later, in his 1978 Nobel lecture “Rational Decision Making in Business Organizations,” Simon argues that the failures of the neoclassical model in organizational settings stem from limited cognitive resources, incomplete information, and environmental complexity.[^44][^45][^4][^10]

Simon’s concept of bounded rationality replaces global optimization with search and *satisficing*: instead of evaluating all possible alternatives, decision makers generate options sequentially and adopt the first one that meets an aspiration level.[^46][^4][^10]
This is not a psychological quirk layered on top of an otherwise rational core, but a different conception of rationality, one that treats algorithms of search, attention, and stopping as central objects of study.[^11][^4][^10]

What Simon gets right, in retrospect, is threefold.  
First, he re‑embeds decision makers in organizations and environments, insisting that real decisions are constrained by routines, communication channels, and institutional rules, not just individual preferences.[^47][^10][^11]
Second, he shifts the focus from static coherence (avoiding Dutch books) to process models that can be implemented by finite minds, anticipating both cognitive psychology and computer simulations of decision making.[^4][^10][^11]
Third, he opens the door to viewing deviations from expected utility not just as “irrationalities,” but as adaptations to information costs and computational limits, a theme that Gigerenzer will later radicalize.[^14][^48][^10]

At the same time, Simon’s program leaves open questions about normative benchmarks.  
If rationality is bounded, how should aspiration levels be set, and when is a satisficing rule good enough relative to what could be achieved with better tools, training, or institutions?  
These questions will shape later debates between behavioral economists and proponents of ecological rationality.


## The heuristics‑and‑biases program: Kahneman and Tversky’s long game

In the 1970s, Daniel Kahneman and Amos Tversky launch what becomes the most influential empirical program in decision science: the study of systematic judgmental heuristics and the biases they generate relative to probability theory and expected utility.[^49][^50][^12][^5]

Their Science paper “Judgment Under Uncertainty: Heuristics and Biases” (1974) identifies three core heuristics.  
Representativeness leads people to judge probabilities by similarity, producing base‑rate neglect and insensitivity to sample size.[^50][^5][^49]
Availability leads them to assess frequency by the ease with which instances come to mind, generating biases from salience and recency.[^12][^5][^49]
Anchoring and adjustment leads to insufficient movement away from arbitrary starting points in numerical judgments, even when those anchors are clearly irrelevant.[^49][^50][^12]

Prospect theory (Econometrica, 1979) extends this descriptive project to risky choice.  
Kahneman and Tversky show that people evaluate outcomes as gains or losses relative to a reference point, exhibit loss aversion (losses loom larger than equivalent gains), and overweight small probabilities while underweighting moderate and large ones.[^51][^6]
Their value function is concave for gains, convex for losses, and steeper in losses, directly violating expected utility’s requirement that only final wealth levels matter.[^6][^51]

This program reframes the unifying problem of decision science: instead of asking only how an ideal agent should decide, it asks how real people actually form judgments and choices, and how those processes systematically diverge from normative rules such as Bayes’ theorem and expected utility.[^5][^50][^6]
The evidence suggests that bounded rationality is not just random noise around an optimal baseline, but structured in ways that can be predicted, measured, and sometimes corrected.

Kahneman’s later work, including *Thinking, Fast and Slow* and, with Olivier Sibony and Cass Sunstein, *Noise: A Flaw in Human Judgment*, generalizes this perspective from individual choices to systems of judgment.[^8][^52][^53][^6]
Bias refers to consistent directional errors (for example, overconfidence), while noise is unwanted variability in judgments that should be identical, such as large differences in sentencing by judges for the same crime or divergent insurance premiums for identical applicants.[^54][^53][^8]
Both undermine the reliability and fairness of decision systems, motivating structured debiasing and “decision hygiene.”


## From the lab to policy: Thaler, Sunstein, and the applied turn

Richard Thaler imports behavioral insights into economics and policy design, helping to found behavioral economics as a field and winning the 2017 Nobel Prize for “groundbreaking contributions” in connecting psychology and economics.[^55][^56][^6]
His work on mental accounting shows how people treat money in separate mental buckets, leading to patterns like saving in low‑interest accounts while carrying high‑interest debt, and framing gains and losses differently depending on context.[^55][^6]

Thaler’s collaboration with Cass Sunstein on *Nudge: Improving Decisions about Health, Wealth, and Happiness* (2008) popularizes “choice architecture” and “libertarian paternalism.”[^57][^58][^59][^60]
The core idea is that there is no neutral way to present options: defaults, framing, and ordering all influence behavior, so designers of systems (governments, firms) have a responsibility to structure choices in ways that help people achieve their own long‑term goals without forbidding alternatives or imposing large incentives.[^59][^61][^57]

Automatic enrollment in retirement savings plans, with opt‑out rather than opt‑in, is the paradigmatic example: participation rates rise dramatically when inertia is harnessed in favor of saving.[^58][^62][^6]
This applied turn answers one of decision science’s core questions in a pragmatic way: if individuals are bounded and biased, social institutions can be designed to help them choose better, at least along selected dimensions.[^63][^57][^6]

Sunstein’s later work, especially *Noise* (with Kahneman and Sibony), extends behavioral policy thinking from bias correction to the reduction of judgmental noise through procedures like structured interviews, checklists, algorithmic support, and “noise audits” in organizations.[^52][^53][^64][^8]
Here, the architect of judgment is increasingly an institution, not just an individual, and the target becomes the statistical properties of whole distributions of judgments, not only average bias.


## The forecasting front: Tetlock and the science of being less wrong

Phillip Tetlock brings a different empirical lens: instead of internal lab tasks, he studies externally verifiable forecasts about complex real‑world events.  
In *Expert Political Judgment* (2005), he tracks the accuracy of hundreds of domain experts over years and finds that, on average, their probabilistic forecasts are only slightly better than chance, and that more famous experts are often worse calibrated, especially when wedded to a single “big idea.”[^65][^66][^67][^68]

Yet Tetlock also discovers a subset of “fox‑like” thinkers who make significantly more accurate predictions, characterized by traits such as probabilistic reasoning, openness to updating, and integrative thinking across diverse sources.[^66][^65]
The Good Judgment Project (GJP), run under IARPA’s Aggregative Contingent Estimation program, crowdsources forecasting from thousands of volunteers, uses training and aggregation algorithms, and produces “superforecasters” who outperform intelligence analysts with access to classified information by substantial margins.[^69][^65][^66]

In *Superforecasting* (2015), Tetlock and Dan Gardner codify practices that improve judgment under uncertainty: breaking problems into smaller questions, thinking in explicit probabilities, updating incrementally, keeping score with proper scoring rules like Brier scores, and collaborating in error‑correcting teams.[^69][^65]
Tetlock’s work answers the unifying problem in a new register: good judgment is not an innate gift but a trainable skill set, and its quality can be measured by calibration and discrimination over large sets of predictions.

Forecasting also creates a bridge to AI: many modern machine‑learning systems, from demand forecasting to geopolitical risk models, are probabilistic forecasters embedded in decision pipelines, raising questions about how human and algorithmic judgments should be combined.[^16][^70][^17][^15]


## The counterargument: Gigerenzer and the defense of intuition

Gerd Gigerenzer offers perhaps the most sustained critique of the heuristics‑and‑biases framing.  
Where Kahneman treats heuristics as cognitively cheap strategies that systematically deviate from logical or probabilistic norms, Gigerenzer advances the theory of ecological rationality: a heuristic is rational if it exploits environmental structure to achieve high accuracy with low information and computation in that environment.[^13][^71][^7][^72]

Fast‑and‑frugal heuristics, such as “take‑the‑best” (choose based on the first cue that discriminates) or recognition‑based rules, can, in some conditions, outperform more complex statistical models like multiple regression by reducing overfitting and variance.[^71][^7][^72]
Empirical work in domains such as medical diagnosis, legal decision making, and managerial hiring shows cases where simple heuristics match or exceed the accuracy of more elaborate models, despite using fewer cues and simpler computations.[^73][^7][^74][^71]

Gigerenzer argues that much of the heuristics‑and‑biases literature treats logical rationality, as defined by content‑free rules like Bayes’ theorem, as the sole normative standard, ignoring the environment’s role and the costs of information and computation.[^13][^14]
In his view, the key question is not whether people obey logic in the abstract, but whether the cognitive tools they actually use typically lead to true beliefs or successful actions in the ecologies that shaped them.[^75][^7][^48]

This disagreement, sometimes labeled the “rationality wars,” pits two visions of the field’s mission against each other.  
Kahneman emphasizes the need to reveal and correct systematic biases relative to formal norms, especially when decisions have high stakes and when institutions can redesign environments.[^6][^14][^8]
Gigerenzer emphasizes that many heuristics are “smart,” that statistical norms may be ill‑suited to real‑world uncertainty, and that focusing on errors in artificial tasks risks pathologizing adaptive intuitions.[^76][^7][^14][^13]

Who is “winning” this productive tension depends on the domain.  
In policy and finance, Kahneman‑style debiasing and Thaler‑style nudges have been widely institutionalized, giving the heuristics‑and‑biases tradition practical clout.[^62][^57][^6]
In organizational decision making, management, and AI‑adjacent work on simple rules, ecological rationality and fast‑and‑frugal heuristics are increasingly influential, especially where interpretability, speed, and robustness to model error matter.[^7][^72][^71][^73]
A growing body of work suggests a reconciliation: heuristics can be both sources of bias relative to strict norms and ecologically rational tools when matched to appropriate environments.[^48][^7][^14]


## Contemporary practitioners and the democratization of decision science

A newer generation of writers and practitioners translates these theoretical debates into tools for individuals and organizations.

Annie Duke, a former professional poker player with training in cognitive psychology, argues in *Thinking in Bets: Making Smarter Decisions When You Don’t Have All the Facts* that life is more like poker than chess: outcomes are driven by both skill and hidden information.[^77][^78][^79][^80]
She emphasizes “resulting,” the tendency to judge decisions by outcomes rather than by the quality of the decision process, and advocates thinking explicitly in probabilities, treating every choice as a bet with odds and payoffs.[^81][^82][^83][^77]

Julia Galef’s *The Scout Mindset* reframes rationality as a motivation problem rather than a sheer computational one.[^84][^85][^86][^87]
She distinguishes the “soldier mindset,” which treats thinking as defending existing beliefs and identities, from the “scout mindset,” which treats thinking as mapping reality as accurately as possible, even at the cost of ego and tribe.[^88][^86][^84]
The book offers concrete techniques for noticing motivated reasoning, expressing graded confidence, and updating beliefs, echoing Tetlock’s superforecasters and Bayesian ideals while focusing on everyday epistemic virtues.[^87][^84][^88]

Spencer Greenberg, through ClearerThinking.org and related projects, builds interactive tools and training programs that help users diagnose cognitive biases, calibrate confidence, and structure important decisions.[^89][^90][^91][^92]
His work exemplifies a broader movement to operationalize decision science in accessible digital formats, allowing non‑experts to benefit from decades of research without reading the underlying literature.[^90][^91][^93]

Adam Grant and other organizational psychologists similarly import behavioral and decision‑science insights into leadership, culture, and career choices, promoting norms of rethinking, dissent, and evidence‑based practice.[^93][^90]
Together, these contemporary voices treat good judgment not as the preserve of experts, but as a set of skills, habits, and environments that can be cultivated widely.


## The next frontier: AI, human–AI teams, and what the field still has not solved

The advent of modern machine learning and large‑scale data has created a parallel decision ecosystem populated by algorithms: credit scoring models, diagnostic systems, recommender engines, and forecasting models that, in effect, implement their own decision rules.[^70][^17][^15][^16]

Recent work on human–AI teaming for decision making stresses that AI excels at pattern recognition over vast data, consistent application of learned rules, and rapid updating, while humans contribute contextual understanding, ethical judgment, causal reasoning, and responsibility for consequences.[^18][^15][^16]
Frameworks grounded in collective intelligence argue that effective human–AI teams require calibrated trust, shared mental models, and task designs that exploit complementarity rather than treating AI as either an infallible oracle or an untrustworthy black box.[^17][^15][^16]

Research on AI‑augmented decision making in organizations highlights characteristic failure modes: automation bias (over‑reliance on algorithmic recommendations), algorithm aversion (premature rejection after visible errors), distributional shift, and embedded biases in training data.[^16][^17][^18]
Proposed remedies include explainable AI, hybrid decision rules where humans can override or adjust algorithmic outputs, and governance structures that audit both human and machine contributions for bias and noise.[^15][^17][^16]

At the same time, algorithmic systems force decision science to confront unresolved normative questions.

* Whose utilities and whose risks are encoded in objective functions used to train models, especially in domains like criminal justice, hiring, or healthcare?  
* How should tradeoffs among accuracy, fairness, privacy, and autonomy be evaluated, and by whom?  
* When should we prefer a simple, transparent heuristic that stakeholders can understand and contest, over a more accurate but opaque model?

These are not only technical questions; they revive Aristotle’s concern with *phronesis*: integrating facts, values, and institutional design in concrete situations, now in sociotechnical systems where “the decision maker” is a human–machine ensemble.[^1][^17][^15][^16]


## What unifies the lineage?

Seen across centuries, the unifying problem of decision science can be stated as: how can finite agents, embedded in institutions, make choices under uncertainty that are both internally coherent and externally responsible?

Different eras emphasize different pieces of this puzzle.  
The Enlightenment focuses on internal coherence and probabilistic consistency.[^9][^34][^23][^2]
Utilitarianism foregrounds aggregating welfare across persons.[^21][^36][^37]
Classical decision theory formalizes rational choice under known risks.[^3][^40][^41]
Simon and behavioral economists highlight psychological and organizational constraints.[^10][^4][^6]
Gigerenzer and ecological rationalists emphasize environmental structure and the adaptiveness of heuristics.[^71][^7][^48]
AI researchers now grapple with embedding these concerns in code and governance.[^17][^15][^16]

It took until the twentieth century for decision science to become empirical because only then did the necessary infrastructure exist: experimental psychology labs, large organizations generating behavioral and performance data, statistical methods capable of parsing noisy measurements, and a prior body of formal theory to serve as a benchmark.[^50][^5][^10][^6]
Empirical anomalies such as Allais‑type violations of expected utility, robust cognitive biases, and forecasting failures could be systematically documented, not just intuited, pushing the field from armchair rationalism to data‑driven diagnostics.[^5][^50][^6]

Simon’s key correction to expected utility theory is to insist that rationality is about feasible procedures, not just idealized preference orderings.  
Expected utility can still function as a valuable normative ideal for small, well‑specified problems, but in complex, dynamic environments with limited attention and computational resources, search, heuristics, and satisficing rules are the real levers available to human decision makers.[^11][^4][^10]
That insight underpins both Kahneman’s focus on predictable shortcuts and Gigerenzer’s argument that some of those shortcuts are adaptively rational.

The tension between Kahneman and Gigerenzer remains productive precisely because each captures an important piece of rationality.  
Kahneman’s program is strongest where the stakes are high, the environment is stable enough that probabilistic norms apply, and institutions can redesign choice architecture or introduce algorithms to correct biases and reduce noise.[^57][^8][^6]
Gigerenzer’s is strongest where environments are uncertain rather than merely risky, data are sparse or shifting, and simple, transparent heuristics can generalize better and support accountability.[^72][^73][^7][^71]
The emerging consensus is not that one side will “win,” but that rationality is multi‑dimensional: logical coherence, ecological fit, psychological feasibility, and ethical acceptability can come apart, and decision science must negotiate those tradeoffs case by case.[^7][^14][^48]


## Closing reflection: what does a good judgment lineage look like from the inside?

From the vantage point of a practitioner today, the history of decision science offers both humility and guidance.

Humility, because each generation’s best attempt to define rationality later reveals blind spots.  
Aristotle’s *phronesis* largely ignored probability; Enlightenment calculators neglected psychology and institutions; classical economists underplayed bounded rationality and social norms; early behavioral work sometimes over‑pathologized heuristics; current AI enthusiasm can underplay issues of power, equity, and meaning.[^1][^21][^3][^10][^6][^16]

Guidance, because across this lineage, certain patterns recur in those who advance the field.  
They make their assumptions explicit and test them against evidence.  
They treat disagreement not as a war to be won but as a chance to refine models, as in the ongoing dialogue between heuristics‑and‑biases and ecological rationality.[^14][^6][^13][^7]
They build tools and institutions, from Bayes’ theorem to nudge units to superforecasting platforms and human–AI teaming frameworks, that allow communities to embody better judgment in practice.[^2][^57][^69][^15]

For someone standing inside this lineage, good judgment is less a destination than a disciplined posture: probabilistic rather than certain, scout‑like rather than soldier‑like, aware of both cognitive limits and environmental structure, and open to new forms of collaboration between humans and machines.[^84][^88][^87][^15]
Decision science, on this view, is not the replacement of *phronesis* by equations, but the ongoing attempt to give practical wisdom sharper tools and better feedback, so that the architects of judgment, old and new, can help more of us navigate our yellow lights rather than ignore them.

---

## References

1. [threeapproaches](https://crab.rutgers.edu/users/goertzel/threeapproaches.htm)

2. [An Essay Towards Solving a Problem in the Doctrine of Chances - Wikipedia](https://en.wikipedia.org/wiki/An_Essay_Towards_Solving_a_Problem_in_the_Doctrine_of_Chances)

3. [von Neumann–Morgenstern utility function](https://www.britannica.com/print/article/1973132) - Explore the fact-checked online encyclopedia from Encyclopaedia Britannica with hundreds of thousand...

4. [Herbert A. Simon - Prize Lecture](https://www.nobelprize.org/uploads/2018/06/simon-lecture.pdf)

5. [Judgment under Uncertainty: Heuristics and Biases: Biases in judgments reveal some heuristics of thinking under uncertainty.](https://www.science.org/doi/10.1126/science.185.4157.1124) - This article described three heuristics that are employed in making judgments under uncertainty: (i)...

6. [Richard H. Thaler: A Nobel Prize for Behavioural Economics](https://www.tandfonline.com/doi/full/10.1080/09538259.2018.1513236) - This paper provides an overview of Richard Thaler’s career and the contributions to behavioural econ...

7. [Ecological Rationality: Fast-and-Frugal Heuristics for Managerial Decision Making under Uncertainty](https://journals.aom.org/doi/10.5465/amj.2018.0172) - Heuristics are often viewed as inferior to “rational” strategies that exhaustively search and proces...

8. [Noise: A Flaw in Human Judgment - Wikipedia](https://en.wikipedia.org/wiki/Noise:_A_Flaw_in_Human_Judgment)

9. [Bayes' theorem - Wikipedia](https://en.wikipedia.org/wiki/Bayes'_theorem)

10. [The Emergence of Ecological...](https://plato.stanford.edu/entries/bounded-rationality/)

11. [Herbert A. Simon - Wikipedia](https://en.wikipedia.org/wiki/Herbert_A._Simon)

12. [Judgment under uncertainty:](https://moodle.swarthmore.edu/pluginfile.php/361177/mod_folder/content/0/TverskyKahneman1982a.pdf)

13. [19 thoughts on “ Gigerenzer on logical rationality vs. ecological rationality ”](https://statmodeling.stat.columbia.edu/2015/04/17/gigerenzer-logical-rationality-vs-ecological-rationality/)

14. [Rationality wars: epistemological boundaries and the limits of reductionism | Behavioural Public Policy | Cambridge Core](https://resolve.cambridge.org/core/journals/behavioural-public-policy/article/rationality-wars-epistemological-boundaries-and-the-limits-of-reductionism/D468AE06999D3216978B5AB4A1644187) - Rationality wars: epistemological boundaries and the limits of reductionism

15. [Toward a science of human–AI teaming for decision making - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC12983458/) - Using this lens, we identify how AI systems can augment these functions within human–AI teams, helpi...

16. [[PDF] Artificial Intelligence-Augmented Decision-Making](https://ecohumanism.co.uk/joe/ecohumanism/article/download/6364/6513/15228) - Abstract. The paper discusses the bright and dark sides of the relationship between human judgment a...

17. [[PDF] Algorithmic Decision-Making Safeguarded by Human Knowledge](https://arxiv.org/pdf/2211.11028.pdf) - In this paper, we provide a general analytical framework to study practical problems in which humans...

18. [[PDF] Human Decision Making in AI Augmented Systems - Semantic Scholar](https://pdfs.semanticscholar.org/9f47/545f3b019c96938b3749b38744966c00e9d7.pdf) - Abstract. The growing consensus that human intelligence and artificial intelligence are complementar...

19. [[PDF] jifoviru_lovuz.pdf - YGM Trading LTD.](https://www.ygmtrading.com/editor-uploads/files/jifoviru_lovuz.pdf)

20. [Notes on Nicomachean Ethics Book VI](https://mason.gmu.edu/~rcherubi/nevi.htm)

21. [The History of Utilitarianism - Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/entries/utilitarianism-history/) - ... Bentham's An Introduction to the Principles of Morals and Legislation in 1789. ... Like Bentham,...

22. [[PDF] Théorie Analytique des Probabilités. Par M. le Marquis de Laplace ...](https://www.york.ac.uk/depts/maths/histstat/laplace.pdf) - Review by Augustus De Morgan. ART. IV.—Théorie Analytique des Probabilités. Par M. le Marquis de Lap...

23. [[PDF] THE ANALYTIC THEORY OF PROBABILITIES Third Edition Book I ...](https://www.probabilityandfinance.com/pulskamp/Laplace/TAP_final-book_I.pdf) - The Théorie analytique des Probabilités, henceforth referenced as the TAP, was published in 1812 wit...

24. [Pascal's wager - Wikipedia](https://en.wikipedia.org/wiki/Pascal's_wager)

25. [Pascal's wager - Wikipedia](https://en.wikipedia.org/wiki/Pascals_Wager)

26. [Pascal's Wager: Where Decision Theory Breaks Down at ...](https://cklixx.people.wm.edu/teaching/math400/Pascal-Wager.pdf)

27. [Pascal's wager - Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/archives/spr2022/entries/pascal-wager/)

28. [1763: Bayes' Theorem - Missing the Forest for the Tree: A Worldview Grounded in Science](https://www.missingtheforest.com/1763-bayes-theorem/) - Bayes’ theorem is a fundamental concept in probability theory. It was formulated in 1763 by the Engl...

29. [Thomas Bayes Advances Probability Theory | History - EBSCO](https://www.ebsco.com/research-starters/history/thomas-bayes-advances-probability-theory) - <p>Thomas Bayes, an 18th-century clergyman and mathematician, significantly advanced the field of pr...

30. [Socioeconomic Institute](https://www.zora.uzh.ch/id/eprint/52391/1/wp0803.pdf)

31. [[PDF] Solving Daniel Bernoulli's St Petersburg Paradox](https://sajems.org/index.php/sajems/article/download/3317/1876)

32. [St. Petersburg Paradox - Stanford Encyclopedia of Philosophy](https://plato.stanford.edu/archives/fall2004/entries/paradox-stpetersburg/)

33. [Decision-Making Under Uncertainty - The St. Petersburg Paradox](http://www.econport.org/econport/request?page=man_ru_basics2)

34. [[PDF] Reading Théorie Analytique des Probabilités - arXiv](https://arxiv.org/pdf/1203.6249.pdf) - “La théorie des probabilités consiste `a réduire tous les événemens qui peuvent avoir lieu dans une ...

35. [Analytic Theory of Probability | work by Laplace - Britannica](https://www.britannica.com/topic/Analytic-Theory-of-Probability) - …Théorie analytique des probabilités (Analytic Theory of Probability), first published in 1812, in w...

36. [[PDF] An Introduction to the Principles of Morals and Legislation](https://www.earlymoderntexts.com/assets/pdfs/bentham1780.pdf)

37. [[PDF] Classical Utilitarianism from Hume to Mill](https://www.utilitarianism.com/classical-utilitarianism.pdf) - This book presents a new and controversial analysis of the idea of utility, its role in the foundati...

38. [An Introduction to the Principles of Morals and Legislation - Econlib](https://www.econlib.org/library/Bentham/bnthPML.html) - The First Edition of this work was printed in the year 1780; and first published in 1789. The presen...

39. [John Stuart Mill (1806—1873) - Internet Encyclopedia of Philosophy](https://iep.utm.edu/milljs/) - Bentham, Jeremy. An Introduction to the Principles of Morals and Legislation. Oxford: Clarendon Pres...

40. [EconPort - Von Neumann-Morganstern Expected Utility Theory](https://www.econport.org/content/handbook/decisions-uncertainty/basic/von.html)

41. [Von Neumann–Morgenstern utility theorem - Wikipedia](https://en.wikipedia.org/wiki/Von_Neumann%E2%80%93Morgenstern_utility_theorem)

42. [Theory of Games and Economic Behavior - Wikipedia](https://en.wikipedia.org/wiki/Theory_of_Games_and_Economic_Behavior)

43. [Towards Formal Foundations for Game Theory](https://project-smart.uibk.ac.at/docs/18/jpck-itp18.pdf)

44. [[PDF] Rational Decision Making in Business Organizations | Semantic Scholar](https://www.semanticscholar.org/paper/Rational-Decision-Making-in-Business-Organizations-Simon/88adbd59eb16ad7d11fe02c30bfd7b9a3f408b85) - Lecture to the memory of Alfred Nobel, December 8, 1978(This abstract was borrowed from another vers...

45. ["Rational Decision Making in Business Organization (The ...](https://digitalcollections.library.cmu.edu/node/37460)

46. [applying Simon's concept of bounded rationality (0069) - SRHEsrhe.ac.uk › arc](https://srhe.ac.uk/arc/16/0069.pdf)

47. [RATIONAL DECISION MAKING IN BUSINESS ...](https://www.studocu.com/ca-es/document/universitat-pompeu-fabra/investigacio-de-mercats-i/rational-decision-making-in-business-organizations-simons-nobel-lecture/156027305) - Explore Herbert A. Simon's insights on decision theory and its implications for economics, emphasizi...

48. [Ecological Rationality and Evolution: The Mind Really Works that Way?](https://pmc.ncbi.nlm.nih.gov/articles/PMC3183440/)

49. [Judgment under Uncertainty:](https://stanford.edu/~jlmcc/Presentations/tversky_kahneman_1974.pdf)

50. [Judgment under Uncertainty: Heuristics and Biases Author(s)](https://sites.socsci.uci.edu/~bskyrms/bio/readings/tversky_k_heuristics_biases.pdf)

51. [Prospect theory - Wikipedia](https://en.wikipedia.org/wiki/Prospect_theory)

52. [Noise: A Flaw in Human Judgment - Cass Sunstein](https://www.hks.harvard.edu/centers/mrcbg/programs/growthpolicy/noise-flaw-human-judgment-cass-sunstein) - 2021, Book: "Imagine that two doctors in the same city give different diagnoses to identical patient...

53. [Sound Judgment: Review of <em> Noise: A Flaw in Human Judgment</em> (2021) by Daniel Kahneman, Olivier Sibony, and Cass R. Sunstein](https://digitalcommons.usf.edu/cgi/viewcontent.cgi?article=1422&context=numeracy)

54. [Daniel Kahneman on 'noise' – the flaw in human ...](https://www.unsw.edu.au/newsroom/news/2021/05/daniel-kahneman-on--noise---the-flaw-in-human-judgement-harder-t)

55. [Economics Nobel nudges economist Richard Thaler into limelight | Science News](https://www.sciencenews.org/article/richard-thaler-nobel-economic-sciences) - Behavioral economist Richard Thaler started influential investigations of behavioral economics, whic...

56. [PO161394-1_ekonomi_2017.indd](https://www.kva.se/app/uploads/2022/06/nobelposter2017economicSciences.pdf)

57. [Nudge (book) - Wikipedia](https://en.wikipedia.org/wiki/Nudge_(book))

58. [How Richard Thaler's 'Simple Insights' Led to a Nobel Prize](https://knowledge.wharton.upenn.edu/podcast/knowledge-at-wharton-podcast/how-richard-h-thalers-clear-thinking-led-to-a-nobel-prize-in-economics/) - Wharton professor Katherine Milkman discusses the ground-breaking ideas that led to the awarding of ...

59. [Richard Thaler Cass Sunstein Nudge ; Cass R. Sunstein Full PDF coc.cmhaonline.org](https://coc.cmhaonline.org/form-library/uploaded-files/download/Richard%20Thaler%20Cass%20Sunstein%20Nudge.pdf)

60. [[PDF] Richard H. Thaler, Cass R. Sunstein, Nudge - Princeton University](https://www.princeton.edu/~tleonard/reviews/nudge.pdf)

61. [Michigan Law Review](https://repository.law.umich.edu/cgi/viewcontent.cgi?article=1278&context=mlr)

62. [Richard Thaler: Nudge Theory & Behavioral Economics - UBS](https://www.ubs.com/microsites/nobel-perspectives/en/laureates/richard-thaler.html) - The brightest economic thinkers of our time, Nobel Laureates, are cutting through the media noise an...

63. [Nudge for Good: Lessons From Nobel Prize Laureate Richard Thaler](https://www.soa.org/news-and-publications/newsletters/innovators-and-entrepreneurs/2018/february/ie-2018-iss-62/nudge-for-good-lessons-from-nobel-prize-laureate-richard-thaler/)

64. [[PDF] A flaw in human judgment, by Kahneman, Sibony, & Sunstein](https://sabeconomics.org/wordpress/wp-content/uploads/JBEP-6-1-BR3.pdf)

65. [Superforecasting: The Art and Science of Prediction - Tetlock, Philip E.](https://www.abebooks.com/9780804136693/Superforecasting-Art-Science-Prediction-Tetlock-0804136696/plp) - In Superforecasting, Tetlock and coauthor Dan Gardner offer a masterwork on prediction, drawing on d...

66. [Philip Tetlock - The Decision Lab](https://thedecisionlab.com/thinkers/political-science/philip-tetlock) - Tetlock is a psychology professor and researcher who is fascinated by decision-making processes and ...

67. [Philip E. Tetlock - Wikipedia](https://en.wikipedia.org/wiki/Philip_E._Tetlock)

68. [[PDF] Expert - Political Judgment - HOW GOOD IS IT?](https://faculty.wharton.upenn.edu/wp-content/uploads/2012/04/Tetlock_2005-EPJ-chapter-1.pdf) - Expert. Political Judgment. HOW GOOD IS IT? HOW CAN WE KNOW? Philip E. Tetlock. PRINCETON UNIVERSITY...

69. [The Good Judgment Project - Wikipedia](https://en.wikipedia.org/wiki/The_Good_Judgment_Project) - It was co-created by Philip E. Tetlock (author of Superforecasting: The Art and Science of Predictio...

70. [AI-Augmented Decision-Making - Beam AI](https://beam.ai/agentic-insights/ai-augmented-decision-making-how-executives-can-leverage-ai-agents) - The integration of AI into decision-making processes has become a critical factor in driving competi...

71. [Ecological Rationality Fast-and-frugal Heuristics](https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/31872712709/CourseNode/1696904938479817006/Luan+et+al.+-+2019+-+Ecological+Rationality+Fast-and-Frugal+Heuristics.pdf)

72. [[PDF] Ecological Rationality: Fast-and-Frugal Heuristics for Managerial ...](https://pure.mpg.de/rest/items/item_3172441_6/component/file_3184539/content)

73. [Heuristic Decision Making](https://economics.northwestern.edu/docs/events/nemmers/2018/gigerenzer2.pdf)

74. [Ecological Rationality: Fast-and-Frugal Heuristics for Managerial Decision Making Under Uncertainty](https://pure.mpg.de/rest/items/item_3172441_6/component/file_3184539/content?download=true)

75. [The Representation of Judgment Heuristics and ...](http://faculty.washington.edu/c3/Lee_2007.pdf)

76. [Review of Gigerenzer, Gerd: Rationality for Mortals: How People Cope with Uncertainty](https://jasss.soc.surrey.ac.uk/12/4/reviews/posada.html) - Review of:Gigerenzer, Gerd (2008) Rationality for Mortals: How People Cope with Uncertainty. Oxford ...

77. [Making a Sure Bet | Optionality, Decision Making, and ... - Annie Duke](https://www.annieduke.com/making-a-sure-bet-optionality-decision-making-and-how-to-embrace-uncertainty/) - We make millions of decisions over the course of our lives. Most of these seem to be small and of li...

78. [Thinking in Bets, by Annie Duke - Evan's Notes](https://evansamek.substack.com/p/thinking-in-bets-by-annie-duke) - My nuanced summary of Duke's unique professional-poker-player perspective on effective decision maki...

79. [Thinking in Bets: Making Smarter Decisions When You ...](https://www.goodreads.com/book/show/35957157-thinking-in-bets) - In Super Bowl XLIX, Seahawks coach Pete Carroll made on…

80. [Thinking in Bets: Making Smarter Decisions When You Don…](https://www.goodreads.com/book/show/41430923) - Poker champion turned business consultant Annie Duke teaches you how to get comfortable with uncerta...

81. [Cliff Notes Version of Thinking in Bets by Annie Duke - HEY World](https://world.hey.com/stockdabba/cliff-notes-version-of-thinking-in-bets-by-annie-duke-6f0f39ab) - Thinking in Bets: Making Smarter Decisions When You Don't Have All the Facts Introduction Winning an...

82. [Thinking in Bets by Annie Duke: Summary & Notes - Graham Mann](https://grahammann.net/book-notes/thinking-in-bets-annie-duke) - Better decisions come from thinking in probabilities rather than certainties—separating decision qua...

83. [Annie Duke - "Thinking in Bets: How To Make Smarter Decisions"](https://www.reddit.com/r/BettermentBookClub/comments/va6wg3/book_summary_annie_duke_thinking_in_bets_how_to/) - A six-step framework to make better decisions. The main key from the books is that making decisions ...

84. [The Scout Mindset - Wikipedia](https://en.wikipedia.org/wiki/The_Scout_Mindset)

85. [Divergent Thinking: Understanding the Scout Mindset with Julia Galef](https://spn.org/an-interview-with-julia-galef/) - Author Julia Galef joined SPN’s Divergent Thinking Show to discuss insights from her new book and ho...

86. [My book - Julia Galef](https://juliagalef.com/my-book/) - The Scout Mindset Coming out April 2021 with Portfolio / Penguin Random House. Pre-order on Amazon “...

87. [The Scout Mindset](https://books.google.com/books/about/The_Scout_Mindset.html?id=Ai_ZDwAAQBAJ) - 'Original, thought-provoking and a joy to read' Tim HarfordWinner of best smart thinking book (Busin...

88. [Outline of Galef's "Scout Mindset" - LessWrong](https://www.lesswrong.com/posts/yFJ7vCjefBxnTchmG/outline-of-galef-s-scout-mindset)

89. [Spencer Greenberg | Cultivating Clearer Thinking for Cloudy Times](https://www.jordanharbinger.com/spencer-greenberg-cultivating-clearer-thinking-for-cloudy-times/) - My friend Julia Galef has a wonderful TED talk about this and is writing a book about this. She call...

90. [The Science of Clearer Thinking with Spencer Greenberg](https://alliancefordecisioneducation.org/podcasts/episode-036-the-science-of-clearer-thinking-with-spencer-greenberg/) - He's the founder of ClearerThinking.org, which provides over 80 free, digital tools to help people e...

91. [Episode 036: The Science of Clearer Thinking with Spencer ...](https://podcasts.apple.com/au/podcast/episode-036-the-science-of-clearer-thinking/id1536587957?i=1000725870128) - Spencer discusses his path from a Ph.D. in applied math to creating interactive tools that help peop...

92. [Workshop: Improve your decision-making | Spencer Greenberg](https://www.youtube.com/watch?v=wHJrGl2osz0) - ... science. He's the founder of ClearerThinking.org, which provides more than 70 free tools and tra...

93. [Level Up Your Decision-Making with Social Scientist Spencer ...](https://www.forcingfunction.com/podcast/spencer-greenberg) - In my view, Spencer's superpower is to translate the best findings from psychological science into a...

