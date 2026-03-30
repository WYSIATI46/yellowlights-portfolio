# Foxes, Hedgehogs, and the Discipline of Being Wrong Less Often

## Executive overview

Philip Tetlock spent two decades tracking how 284 political and economic experts tried to see around the corner of history, logging more than 80,000 probabilistic predictions about elections, wars, coups, and economic shocks. The headline result was uncomfortable: as a group, experts were only slightly better than chance and often no better than simple statistical baselines, despite their confidence and prestige. Yet buried in the data was a more hopeful finding. Some forecasters did noticeably better, and their edge came not from ideology or credentials but from how they thought about uncertainty.[^1][^2][^3][^4]

Tetlock borrowed Isaiah Berlin’s fox and hedgehog metaphor to describe these contrasting cognitive styles. Foxes draw on many small ideas, integrate diverse sources of evidence, and revise their views; hedgehogs organize the world around one big theory and explain everything through its lens. In Tetlock’s data, fox-like experts were systematically better calibrated and less error prone than hedgehogs, although neither group beat simple algorithmic extrapolations over long horizons.[^5][^6][^7][^3]

Later, in the Good Judgment Project (GJP), a large forecasting tournament sponsored by IARPA’s Aggregative Contingent Estimation (ACE) program, a small fraction of volunteers dubbed “superforecasters” dramatically outperformed control groups, intelligence analysts, and prediction markets when judged by Brier scores and related metrics. These superforecasters, especially when combined in carefully constructed teams, were 30 to 70 percent more accurate than comparison groups and could see events hundreds of days further into the future than typical analysts.[^8][^9][^10][^11][^12][^13][^14]

Across these studies, the most predictive traits were not deep domain credentials but actively open-minded thinking, probabilistic discipline, and fox-like habits of decomposing problems, integrating base rates, and updating frequently. At the same time, Tetlock’s work exposed a pervasive form of “epistemic cowardice” in institutions: a preference for vague, non-quantified, and non-falsifiable statements that protect reputations at the cost of collective learning.[^15][^16][^17][^18][^3][^4]

The rise of powerful AI systems complicates this picture. Hybrid human–AI ensembles often outperform either humans or algorithms alone on predictive tasks when their inputs are combined thoughtfully, yet poorly designed interactions can yield worse decisions than either component on its own. The practical challenge for leaders is therefore not to replace human forecasters with machines, but to cultivate fox-like cultures that use probabilistic, testable forecasts, leverage human strengths in sense-making and value judgment, and integrate algorithmic models as complementary tools.[^19][^20][^21]

The remainder of this report examines the empirical distinction between foxes and hedgehogs, the anatomy of a superforecaster, the roles of calibration and resolution, the dangers of epistemic cowardice, the changing landscape under AI, and the contours of a fox-like decision culture.

## Forecasting tournaments and why they matter

Tetlock’s Expert Political Judgment (EPJ) project recruited 284 experts whose jobs involved commenting on political and economic trends and asked them to assign explicit probabilities to future outcomes, often in the form of ternary questions about improvement, status quo, or deterioration. Over roughly twenty years, this yielded more than 80,000 forecasts on topics ranging from the fate of the Soviet Union to trade policy and regional conflicts, with outcomes scored using proper scoring rules such as Brier scores. The key design choice was to treat punditry like a lab experiment: record predictions in advance, shut off ex post rationalization, and compare them to simple baselines such as “no change” or historical base rates.[^2][^3][^22][^23][^1]

The results showed that subject-matter expertise beyond a minimal level did relatively little for predictive accuracy. Experts as a group only barely outperformed a “chimp” benchmark based on random guessing, and they often failed to beat naïve statistical models such as extrapolations of recent trends or unconditional base rates. More knowledge often produced more elaborate stories, not more accurate probability distributions.[^24][^3][^4]

The Good Judgment Project extended this experimental logic at scale. Under IARPA’s ACE program, several university-based teams competed to recruit thousands of online volunteers, elicit probabilistic forecasts on 100–150 geopolitical questions per year, and aggregate them to maximize accuracy. The GJP approach, led by Tetlock and Barbara Mellers, combined brief training in probabilistic reasoning, performance tracking, and sophisticated aggregation algorithms that weighted forecasters by both past accuracy and current extremity. In this setting, differences in accuracy between individuals, teams, and aggregation methods could be measured cleanly.[^25][^12][^14][^15]

GJP’s superforecasters emerged as the top few percent of participants by Brier score and maintained their lead year after year, defying regression to the mean and outperforming professional intelligence analysts with access to classified information by about 30 percent or more. Their success demonstrated that forecasting skill is measurable, improvable, and not confined to credentialed elites.[^9][^26][^14]

## Foxes and hedgehogs as forecasting styles

Isaiah Berlin’s 1953 essay The Hedgehog and the Fox revived an ancient Greek fragment, “the fox knows many things, but the hedgehog knows one big thing,” and used it to categorize thinkers who either relate everything to a single central vision (hedgehogs) or draw on a plurality of ideas and experiences (foxes). Berlin himself treated this as a playful metaphor rather than a psychological theory, but Tetlock recognized that it mapped cleanly onto variations he observed in expert judgment.[^27][^28][^6][^5]

In EPJ, experts were coded along a fox–hedgehog continuum based on their cognitive style: hedgehogs tended to endorse one grand ideological framework and extended it confidently across domains, whereas foxes mixed and matched theories, entertained multiple causal paths, and acknowledged exceptions and “on the other hand” caveats. Hedgehogs offered bold, media-friendly predictions with high narrative coherence; foxes sounded more qualified and tentative, often hedging with probability ranges and scenario analyses.[^29][^3][^4]

Empirically, foxes outperformed hedgehogs on key accuracy metrics. Tetlock found that fox-like experts produced forecasts that were closer to observed frequencies, had lower Brier scores, and were less prone to catastrophic overconfidence where events assigned near-zero probability occurred. Foxes updated their beliefs more readily in response to disconfirming evidence and were more likely to admit error, whereas hedgehogs tended to reinterpret misses to preserve their core theory.[^3][^23][^5][^24]

Later commentary emphasizes that foxes still did not match the performance of simple algorithmic baselines, yet they were consistently less wrong than hedgehogs, especially over shorter horizons and in environments where incremental information mattered. The fox–hedgehog distinction therefore captures not perfection versus failure, but a meaningful gradient in error rates and learning behavior.[^7][^24]

## What the data showed: experts, foxes, and superforecasters

### Expert performance in EPJ

Across EPJ, aggregate expert performance was only slightly better than chance and often statistically indistinguishable from a random-guessing benchmark. Louis Menand’s review of the book, along with subsequent summaries, note that on average experts did not significantly outperform educated non-experts or simple extrapolation models, despite decades of experience and specialized knowledge. The more famous and ideologically extreme experts were, the worse their predictive track records tended to be.[^30][^4][^23][^3]

Within this generally poor performance, foxes did meaningfully better than hedgehogs. Reviews of EPJ report that foxes’ probabilistic forecasts were better calibrated and produced lower mean error scores than hedgehogs’ forecasts, although effect sizes varied by domain and horizon. Frank Keil’s overview highlights Tetlock’s central claim: across a wide swath of political prediction tasks, foxes “tend to make more accurate predictions than do hedgehogs,” and this difference appears robust across methodological checks.[^31][^5][^7][^3]

### Superforecasters in ACE

The ACE tournaments raised the bar by scoring thousands of forecasters over hundreds of questions using Brier scores, where lower values indicate better probabilistic accuracy. A Brier score for a binary event is defined as the mean squared difference between forecast probabilities and realized outcomes: \( \text{BS} = \frac{1}{N} \sum_{i=1}^N (f_i - o_i)^2 \). Typical untrained forecasters might achieve Brier scores around 0.30 or higher on challenging geopolitical questions, whereas top GJP superforecasters clustered closer to 0.20–0.25, indicating substantially tighter probability assignments around realized outcomes.[^32][^33]

Mellers and colleagues’ analysis shows that superforecasters had significantly better Brier scores than both ordinary volunteers and members of high-performing teams, even when controlling for question selection and response time. They were better calibrated, achieved higher resolution (sharper distinctions between likely and unlikely outcomes), and improved more rapidly with feedback. Subsequent summaries from Good Judgment report that simple medians of superforecasters’ estimates were 35 to 72 percent more accurate than any other research team’s aggregation in ACE, and that superforecasters as a group achieved more than 50 percent improvement over control groups, the largest effect size then seen in the forecasting literature.[^34][^33][^35][^8]

One intuitive way to grasp these differences is in time horizon. Analyses cited by Good Judgment and others indicate that superforecasters looking 300–400 days out were about as accurate as regular forecasters only 100–150 days before resolution, effectively seeing several extra months into the future. Good Judgment also notes that in subsequent professional practice, superforecasters placed the highest probability on the correct outcome on roughly 73 percent of forecast days and beat hybrid human–machine benchmarks on nearly 80 percent of forecasts in some domains.[^10][^11][^13]

Together, EPJ and ACE suggest that fox-like, probabilistic thinkers can be substantially “less wrong” than typical experts, and that with the right incentives and environments, their edge can be amplified.

## The anatomy of a superforecaster

Mellers and colleagues identify four clusters of factors that distinguish superforecasters: cognitive abilities and styles, task-specific skills, motivation and effort, and enriched environments. Cognitively, superforecasters tend to score higher on measures of fluid intelligence, numerical reasoning, and cognitive reflection, but equally important are dispositional traits such as intellectual humility, comfort with ambiguity, and an actively open-minded thinking style.[^26][^15][^9]

Actively open-minded thinking (AOT), developed by Jonathan Baron and elaborated by Keith Stanovich and Richard West, captures a disposition to seek out disconfirming evidence, consider alternative viewpoints, postpone closure, and reflect on one’s own reasoning. AOT scales measure willingness to revise beliefs in light of new evidence, sensitivity to argument strength rather than conclusion agreement, and resistance to belief bias in reasoning tasks. High AOT scores predict better performance on heuristics-and-biases tasks, reduced susceptibility to conspiratorial and superstitious thinking, and improved calibration.[^36][^16][^37][^17]

Superforecasters also excel at task-specific skills such as decomposing complex questions into conditionals, identifying and integrating base rates, and using Bayesian-style updating heuristics. They are disciplined about translating verbal intuitions into numerical probabilities, distinguishing between, for example, 60/40 and 55/45 bets, and they keep records so that feedback can inform future forecasts. Many explicitly adopt an “outside view first” strategy, anchoring on historical frequencies for similar events before adjusting based on case-specific information.[^18][^38][^15][^32]

Motivationally, superforecasters treat forecasting like a craft. They invest more time, revisit questions frequently as news arrives, and engage in “cognitive altruism” on teams by sharing rationales and sources rather than merely copying point estimates. Mellers et al. report that team communication, combined with performance-based selection into “elite” superforecaster teams, functioned like a “steroid injection” for accuracy and learning, further improving both Brier scores and speed of updating.[^33][^25]

Finally, superforecasters benefit from enriched environments that provide frequent, properly scored feedback, incentives aligned with accuracy rather than entertainment, and aggregation algorithms that reward both calibration and well-justified extremizing when warranted. These features are largely absent from most organizations, where predictions are rarely recorded, rarely quantified, and almost never scored.[^39][^15]

## Calibration and resolution

Calibration and resolution are two orthogonal dimensions of forecast quality that jointly determine Brier scores and practical usefulness. Calibration refers to the correspondence between stated probabilities and observed frequencies: among all events forecast at 70 percent, do approximately 70 percent occur? A perfectly calibrated forecaster might still be unhelpful if all their forecasts cluster near 50 percent.[^35][^33]

Resolution, by contrast, measures the extent to which forecasts move away from undifferentiated baselines and sort events into high- and low-probability bins that track actual outcomes. A forecaster who always predicts 60 percent for every event might be reasonably calibrated but have low resolution, while another who confidently and accurately assigns 90 percent to events that occur and 10 percent to those that do not would have high resolution.[^33]

Mellers et al. decompose tournament performance and show that superforecasters dominate comparison groups on both calibration and resolution. They are less prone to overconfidence, as seen in narrower gaps between forecast bins and realized frequencies, and they also take more advantage of available information by pushing probabilities further from baselines when justified. Aggregation algorithms often “extremize” average forecasts toward 0 or 1 because well-calibrated, independent forecasters collectively contain more information than any individual’s moderate estimate reveals.[^39][^35][^33]

In practical decision contexts, the calibration–resolution distinction matters because different errors have different costs. Overconfident but poorly calibrated forecasts can drive disastrous bets, while perfectly calibrated but low-resolution forecasts may justify inaction or hedging when bolder moves are warranted. A fox-like decision culture aims for both, with explicit trade-offs framed around the value of information and the cost of errors.

## Epistemic cowardice and the avoidance of being wrong

Despite Tetlock’s evidence that probabilistic, testable forecasting improves accuracy, many experts and institutions prefer vague, qualitative predictions that are hard to falsify. Superforecasting commentators note that media pundits often avoid clear numerical probabilities or time-bounded claims, instead using hedged language and conditional caveats that preserve reputations whether or not events occur. This pattern reflects a kind of epistemic cowardice: a preference for ambiguity and deniability over clarity and learning.[^15][^18]

In EPJ, Tetlock documented multiple strategies experts used to evade acknowledging error, such as claiming that events were “almost” predicted, that they were “off on timing but not direction,” or that disruptive interventions invalidated the original model. Because no explicit probability thresholds or scoring rules were agreed in advance, these narratives could salvage perceived competence at the expense of honest feedback.[^22][^3]

Psychological work on epistemic norms suggests that excessive fear of believing something false can lead to an opposite error, the refusal to commit to justified beliefs and the systematic suspension of judgment. In forecasting, this manifests in reluctance to move off baselines, chronic use of uninformative verbal hedges, and institutional cultures where nobody wants their name attached to a precise statement that might later be audited.[^40][^41]

The practical upshot is that organizations often optimize for reputational safety rather than predictive clarity. Vague statements like “risks are elevated” or “there is a significant possibility” generate little accountability and almost no data for learning. A fox-like discipline, by contrast, treats forecasts as bets that must be stated numerically, time-stamped, and scored so that both individuals and institutions can become wrong less often.

## Base rates and being specific without being naive

Base rate neglect is a central failure mode in intuitive forecasting: people overweight vivid case details and underweight the background frequency of similar events. Kahneman and Tversky’s classic “Steve the librarian or farmer” vignette shows how representativeness drives judgments away from simple ratio-based priors, even when the base rate ratio is as skewed as 20 to 1. In geopolitical and business contexts, this leads to neglect of historical frequencies for coups, defaults, new product failures, or technology adoption curves.[^38][^18]

Tetlock and Gardner emphasize that superforecasters counteract base rate neglect by systematically seeking “outside views” before indulging “inside views.” They ask, for example, how often a randomly chosen country in a given income bracket has experienced a successful coup over the past few decades, or how many similar startups have reached product–market fit within a specified time frame. Forecasts then start from that base rate and adjust incrementally based on case-specific information, rather than leaping to implausibly high or low probabilities based solely on narratives.[^18][^32]

Cultivate Labs’ summary of superforecasting practice describes this as “everything has a base rate” and illustrates how prediction markets can anchor on historical frequencies for classes of political candidates or events, even when media coverage focuses on salient but atypical features. Good Judgment training materials similarly present base rate identification as the first step in disciplined probability estimation, noting that many workshop participants initially ignore or underestimate base rates, to their forecasting detriment.[^38][^18]

Integrating base rates does not mean being blind to unique features. Rather, it means using history as a prior that must be explicitly overridden when truly exceptional evidence arises. Foxes and superforecasters are distinguished less by encyclopedic knowledge than by this disciplined dance between statistical regularities and case-level nuance.

## AI and the changing forecasting landscape

Recent work on human–AI hybrid prediction and decision-making highlights both the promise and pitfalls of integrating machine forecasts with human judgment. Theoretical analyses of hybrid predictive ensembles show that when human and algorithmic errors are only partially correlated, combined forecasts can outperform either humans or AI alone, a form of complementarity that depends on diversity of information and error structures. These models emphasize that humans contribute “thick,” contextual data and adaptive reasoning, while AI contributes scalable pattern recognition from large datasets.[^19]

Empirical studies on human–AI teaming in decision-making echo this mixed picture. Meta-analyses and conceptual work suggest that hybrid teams can achieve complementary team performance that neither component can reach alone, but only when collaboration is well designed and when humans understand when to trust or override AI recommendations. Poorly calibrated reliance, such as blind trust in opaque models or systematic neglect of model output, can produce outcomes worse than either independent human or algorithmic performance.[^20][^21]

In forecasting specifically, AI systems can aid by generating baseline probability estimates from historical data, detecting subtle correlations across large news and economic datasets, and rapidly updating priors as new information arrives. Hybrid forecasting competitions and expert panels increasingly incorporate machine-generated forecasts as inputs alongside human judgments, although detailed quantitative results from recent large-scale experiments remain relatively limited in public sources. Early indications from longitudinal expert–AI panels and hybrid tournaments suggest that carefully weighted combinations of superforecasters and machine models can further reduce Brier scores, particularly when models capture slow-moving structural trends and humans specialize in regime change and narrative interpretation.[^21][^42][^43][^19]

The strategic question is not whether AI will replace human forecasters, but how to design interfaces, incentives, and training so that human–AI ensembles exhibit fox-like virtues: explicit probabilities, error tracking, base rate awareness, and active openness to revising both human and machine priors.

## What a fox-like decision culture looks like

A fox-like decision culture inside an organization is characterized less by who holds what title and more by how predictions are made, recorded, challenged, and learned from. At least five features stand out.

First, forecasts are explicit, probabilistic, and time-bounded. Product launches, market entry bets, hiring decisions, and strategic initiatives are accompanied by quantitative forecasts about key outcomes, stated as probability distributions rather than categorical yes/no claims. These are stored in lightweight forecasting logs or platforms modeled on ACE-style tournaments, enabling later scoring with Brier or related metrics.[^12][^15]

Second, base rates are institutionalized. Strategy reviews and investment committees begin with outside views: historical failure and success rates for similar initiatives, industry-level statistics, and reference classes for timelines and costs. Tools and dashboards surface these base rates by default so that enthusiastic narratives must argue explicitly against them, rather than ignoring them.[^18][^38]

Third, cognitive style and AOT are valued in hiring and promotion. Organizations screen for and reward people who change their minds in response to evidence, who seek out disagreement, and who can articulate conditions under which they would update their forecasts. Meeting norms encourage stating “I am 60 percent confident” instead of “I am sure,” and leaders model graceful belief revision rather than punishing it.[^16][^17]

Fourth, aggregation and team processes are designed along GJP lines. Cross-functional teams contribute independent probabilistic estimates before discussion, reducing herding, and then share rationales and sources to converge on refined forecasts. Performance tracking identifies consistently accurate forecasters, who can be grouped into elite “red teams” for critical decisions, mirroring the superforecaster team model that functioned as a “steroid injection” in ACE.[^25][^9][^33]

Fifth, AI tools are integrated as explicit layers in the forecasting stack rather than opaque oracles. Algorithmic models provide baseline probabilities, scenario generators, or early-warning signals, with interfaces that make assumptions and limitations transparent. Human forecasters are trained to treat these models as inputs to be weighed, not authorities to be obeyed or ignored, and hybrid performance is routinely evaluated to ensure complementarity is realized rather than assumed.[^20][^21][^19]

Such a culture will still be wrong often, because the world is noisy and strategic environments respond to forecasts. The point is not omniscience, but disciplined, cumulative learning from error.

## Being wrong less often as a discipline

Tetlock’s core message is that being wrong is inevitable, but being wrong in undisciplined, unmeasured ways is optional. EPJ showed that conventional expert culture, with its hedgehog temptations and reputation-driven epistemic cowardice, produces forecasts that are barely better than chance and resistant to learning. The ACE tournaments and subsequent Good Judgment work demonstrated that fox-like cognitive styles, actively open-minded thinking, and structured feedback can produce superforecasters whose error rates are dramatically lower and whose probabilistic intuitions are trainable.[^4][^9][^10][^3][^30][^15]

From a decision science perspective, the discipline of being wrong less often has several concrete components: always stating beliefs in probabilistic terms, anchoring on base rates before storytelling, treating every forecast as a hypothesis to be scored, and designing social and technical systems that make updating easy and reputationally safe. AI extends this discipline by offering new baselines and pattern detectors, but only if human forecasters remain fox-like stewards of model use rather than hedgehog evangelists for their favorite system.[^16][^21][^19][^38][^18]

For leaders, the uncomfortable implication is that conviction and eloquence are not reliable markers of who will be right about the future. The best guide is a track record generated under conditions that reward calibration, resolution, and humility. Building such conditions inside organizations is less glamorous than bold vision statements, but it is how strategy, intelligence, and policy communities can systematically become wrong less often over time.

---

## References

1. [BREXIT - Science Proves Project Fear "Expert forecasts .. no better ...](https://www.brugesgroup.com/blog/essential-brexit-reading-expert-political-judgment-how-good-is-it-how-can-we-know) - BREXIT - Science Proves Project Fear "Expert forecasts .. no better than dart-throwing monkeys." · i...

2. [Philip E. Tetlock. 2005. Expert Political Judgment: How Good is it ...](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1153126) - Tetlock's book reports the results of a two-decade long study of expert predictions. He recruited 28...

3. [Expert Political Judgment: How Good Is It? How Can We Know ...](https://www.cxoadvisory.com/investing-expertise/expert-political-judgment-how-good-is-it-how-can-we-know-chapter-by-chapter-review/) - Tetlock finds political experts barely outperform chimps at forecasting, but foxlike thinkers (open-...

4. [Fame v. Accuracy in Persuasion - Marquette University Law School](https://law.marquette.edu/facultyblog/2009/03/fame-v-accuracy-in-persuasion/)

5. [WHEN AND WHY DO HEDGEHOGS AND FOXES DIFFER? - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC3118600/) - Philip E. Tetlock’s finding that “hedgehog” experts (those with one big theory) are worse predictors...

6. [The Hedgehog and the Fox - Wikipedia](https://en.wikipedia.org/wiki/The_Hedgehog_and_the_Fox) - The Hedgehog and the Fox is an essay by philosopher Isaiah Berlin that was published as a book in 19...

7. [[PDF] Tetlock 16 - Wharton Faculty Platform - University of Pennsylvania](https://faculty.wharton.upenn.edu/wp-content/uploads/2012/08/Tetlock-16.pdf)

8. [The first championship season - Good Judgment](https://goodjudgment.com/resources/the-superforecasters-track-record/the-first-championship-season/) - In 2012, the Good Judgment Project research team made a big bet that five 12-person teams of elite f...

9. [Identifying and cultivating superforecasters as a method of ... - PubMed](https://pubmed.ncbi.nlm.nih.gov/25987508/) - In this article, we describe the winning strategy: culling off top performers each year and assignin...

10. [The Superforecasters' Track Record](https://goodjudgment.com/resources/the-superforecasters-track-record/) - Superforecasters represented the cream of the crop of the Good Judgment Project forecasters. And the...

11. [Is there an intuitive way to explain how much better superforecasters ...](https://www.lesswrong.com/posts/yDdBLdTSAEcbjkbGj/is-there-an-intuitive-way-to-explain-how-much-better) - An aggregate of superforecaster predictions had about 60-70% lower brier scores than the control gro...

12. [ACE - IARPA](https://www.iarpa.gov/research-programs/ace) - The goal of the ACE Program is to dramatically enhance the accuracy, precision, and timeliness of in...

13. [FutureFirst - Good Judgment](https://goodjudgment.com/services/futurefirst/) - ... Superforecasters anticipated events 400 days in advance as accurately as regular forecasters cou...

14. [The Good Judgment Project - Wikipedia](https://en.wikipedia.org/wiki/The_Good_Judgment_Project) - The Good Judgment Project (GJP) is an organization dedicated to harnessing the wisdom of the crowd t...

15. [Tetlock's “Ten Commandments...](https://aiimpacts.org/evidence-on-good-forecasting-practices-from-the-good-judgment-project/) - According to experience and data from the Good Judgment Project, the following are associated with s...

16. [Actively Open-Minded Thinking and Its Measurement - PMC](https://pmc.ncbi.nlm.nih.gov/articles/PMC9966223/) - In Stanovich and West (1997), we conceptualized AOT as a thinking disposition encompassing the culti...

17. [Actively Open-Minded Thinking and Its Measurement - PubMed](https://pubmed.ncbi.nlm.nih.gov/36826925/) - Actively open-minded thinking (AOT) is measured by items that tap the willingness to consider altern...

18. [Superforecasting -- Everything has a base rate | Cultivate Labs Blog](https://www.cultivatelabs.com/posts/superforecasting-everything-has-a-base-rate) - Tetlock calls it the inside / outside view technique. He argues that no matter what event they're tr...

19. [Hybrid Predictive Ensembles: Synergies Between Human and ...](https://pmc.ncbi.nlm.nih.gov/articles/PMC9173944/) - An increasing proportion of decisions, design choices, and predictions are being made by hybrid grou...

20. [Complementarity in human-AI collaboration: concept, sources, and ...](https://www.tandfonline.com/doi/full/10.1080/0960085X.2025.2475962) - Our work provides researchers with a comprehensive theoretical foundation of human-AI complementarit...

21. [Toward a science of human–AI teaming for decision making](https://academic.oup.com/pnasnexus/article/5/3/pgag030/8490283) - The key challenge is how to design human–AI teaming in which humans and AI work together effectively...

22. [Book Summary: “Expert Political Judgement: How Good Is It?” by ...](https://techratchet.com/2021/05/26/book-summary-expert-political-judgement-how-good-is-it-by-philip-tetlock/) - Tetlock asks 284 world-renowned experts to make 27,451 verifiable predictions of the future. Many ye...

23. [Could You Be Wrong? - The Science PT](https://thesciencept.com/could-you-be-wrong/) - We all have beliefs – there’s nothing wrong with that. We also all have prejudices, biases, etc. Not...

24. [Foxes vs Hedgehogs: Predictive Success - Overcoming Bias](https://www.overcomingbias.com/p/foxes_vs_hedghohtml) - I want to follow up on my earlier post on Philip E.

25. [[PDF] Mellers et al 2014.pdf](https://learnmoore.org/papers/Mellers%20et%20al%202014.pdf) - Abstract. Five university-based research groups competed to recruit forecasters, elicit their predic...

26. [Identifying and Cultivating Superforecasters as a Method of ...](https://journals.sagepub.com/doi/abs/10.1177/1745691615577794) - In this article, we describe the winning strategy: culling off top performers each year and assignin...

27. [Of hedgehogs and foxes](https://capitalideasonline.com/wordpress/of-hedgehogs-and-foxes/?pdf=89505)

28. [Hedgehogs and Foxes - Classics and Comets](https://textflight.blog/2021/02/06/hedgehogs-and-foxes/) - A description of Berlin's essay, from kobo.com: “The fox knows many things, but the hedgehog knows o...

29. [Philip Tetlock: Why Foxes Are Better Forecasters Than Hedgehogs](https://longnow.org/talks/02007-tetlock/) - The aggregate success rate of Foxes is significantly greater, Tetlock found, especially in short-ter...

30. [Frederik Ploug Søgaard's Post - LinkedIn](https://www.linkedin.com/posts/frederikplougsogaard_philip-e-tetlock-analyzed-82000-forecasts-activity-7432003241883906048-g6xx) - Philip E. Tetlock analyzed 82000 forecasts made by 284 experts ... : experts were, on average, barel...

31. [WHEN AND WHY DO HEDGEHOGS AND FOXES DIFFER? - PubMed](https://pubmed.ncbi.nlm.nih.gov/21698070/) - Philip E. Tetlock's finding that "hedgehog" experts (those with one big theory) are worse predictors...

32. [Superforecasting Part I: becoming a better forecaster | Montaka Global](https://montaka.com/superforecasting-part-i-becoming-a-better-forecaster/) - The goal of Tetlock's GJP was to determine whether some people are naturally better than others at f...

33. [Identifying and Cultivating Superforecasters as a Method of ...](https://web.stanford.edu/~knutson/jdm/mellers15.pdf)

34. [Good Judgment - Longterm Wiki](https://www.longtermwiki.com/wiki/E532) - Good Judgment Inc. is a commercial forecasting organization that emerged from successful IARPA resea...

35. [[PDF] Identifying and Cultivating Superforecasters as a Method of ...](https://stanford.edu/~knutson/nfc/mellers15.pdf) - Thus, the evidence of superforecasters' superiority is robust: They had better overall Brier scores ...

36. [[PDF] Stanovich_Cognition_2019.pdf - Keith Stanovich](http://www.keithstanovich.com/Site/Research_on_Reasoning_files/Stanovich_Cognition_2019.pdf) - Actively open-minded thinking (AOT) is measured by questionnaire items that tap the willingness to c...

37. [[PDF] Actively open-minded thinking: development of a shortened scale ...](https://people.uncw.edu/hakanr/documents/Openmindednessscale.pdf) - Actively open-minded thinking (AOT) is often used as a proxy for reflective thinking in research on ...

38. [Handicapping the odds - Good Judgment](https://goodjudgment.com/gamblers-learn-superforecasters/) - Base rate neglect often leads to poor decisions in forecasting ... Base rate neglect is the mind's i...

39. [[PDF] Two Reasons to Make Aggregated Probability Forecasts More ...](https://faculty.wharton.upenn.edu/wp-content/uploads/2015/07/2015---two-reasons-to-make-aggregated-probability-forecasts_1.pdf) - Jonathan Baron, Barbara A. Mellers, Philip E. Tetlock, Eric Stone, Lyle H. Ungar (2014) Two Reasons ...

40. [Epistemic Courage - Jonathan Ichikawa](http://jichikawa.net/epistemic-courage) - Failure to believe what one should can be a kind of epistemic cowardice. Suspending judgment feels s...

41. [Epistemic Courage, Oppression, and the Duty to Believe](http://jichikawa.net/positive-epistemology) - Not believing when you should can be a form of epistemic cowardice. Virtuous epistemic agents exhibi...

42. [[PDF] The Longitudinal Expert AI Panel - Squarespace](https://static1.squarespace.com/static/635693acf15a3e2a14a56a4a/t/6939ad8392bbfd43752309be/1765387651933/the-longitudinal-expert-ai-panel.pdf) - ... forecasters, many of whom were among the top-2% of forecasters by accuracy in IARPA's ACE tourna...

43. [Phil Tetlock on predicting catastrophes, why keep your politics ...](https://80000hours.org/podcast/episodes/prof-tetlock-predicting-the-future/) - Why are Berkeley undergrads worse forecasters than dart-throwing chimps? ... The studies that provid...

