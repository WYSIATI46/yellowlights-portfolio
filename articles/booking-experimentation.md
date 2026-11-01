At Booking.com, even a chief executive's preferred logo could become a hypothesis. In researcher Stefan Thomke's account, an incoming leader announced a design; employees proposed testing it. The result is not in the public account. We cannot say the logo lost, that employees defeated the CEO, or even which executive was involved.[^1]

What makes the episode remarkable is not a victory but a permission: the person at the top could propose an answer without putting it beyond question. Booking.com built systems that gave many employees similar permission to challenge product assumptions.

Then came a less flattering experiment in self-examination. In March 2026, company engineers reported that 80 percent of the experiments in an initial quality assessment lacked a calculation of whether the sample was large enough to detect the intended effect. Some tests also ran for arbitrary periods, or were extended in search of a statistically convincing result.[^2]

The company known for testing its assumptions had discovered weaknesses in the way it tested. Its story is no longer just about replacing executive instinct with evidence. It is about building an organization willing to question the evidence itself.

## Permission to find out

Booking.com began as a Dutch startup in 1996. Priceline acquired it in 2005 and combined it with ActiveHotels. Its subsequent development into a major travel platform is the background to the experimentation story, rather than proof of it.[^3]

By October 2017, company researchers described more than a decade of controlled testing. Their account emphasized decentralization across the process, including forming hypotheses, running experiments, analyzing results, and making decisions. Testing extended beyond the consumer website to products for accommodation providers and internal systems.[^4]

This mattered because a familiar organizational bottleneck sits upstream of most analytics. Before anyone can evaluate a proposal, someone decides whether it deserves consideration. If that screening depends entirely on managerial conviction, ideas that contradict prevailing beliefs can disappear before producing evidence.

Experiments offer another route. An employee need not first persuade the hierarchy that an unfamiliar idea is correct. The organization can authorize a bounded attempt to discover whether it is.

The test is not simply a trial launch followed by a favorable chart. In a basic A/B experiment, users are randomly assigned to the existing experience or a changed version. Comparing people exposed to each at the same time helps separate the change's effect from seasonal demand or other influences.[^5] A dashboard can show that bookings rose; a well-run experiment can help establish why.

Consider a small example with a real result. One Booking.com menu asked families for children's ages 'at checkout.' Did that mean today or the date of their hotel stay? The team tested a clearer reference to the checkout date. A Harvard Business School account reports an improvement in the key measure and adoption of the change, without specifying the size of the effect.[^6] No dramatic redesign was needed. A confusing instruction became a testable problem.

The cultural commitment becomes even more visible when a proposal threatens something established. In December 2017, Booking.com considered a radically simplified homepage before Christmas. Senior leaders doubted its effect on bookings.[^7] The underlying choice was larger than visual taste: should accumulated confidence in the existing product prevent a different approach from being tested?

The public sources reviewed do not establish that experiment’s measured result or final rollout. Its defensible lesson concerns willingness to investigate, not a documented victory for the redesign. An institution can protect a question without knowing which answer it will receive.

## Autonomy needs infrastructure

Decentralization sounds like the removal of controls. At Booking.com, important controls were built into shared infrastructure.

Its 2017 technical paper describes a searchable history containing hypotheses, iterations, outcomes, and decisions, including unsuccessful experiments. The authors also describe independent aggregation pipelines and A/A tests, in which no meaningful treatment difference is introduced, to check whether the measurement machinery behaves as expected. Employees could intervene to stop harmful experiments.[^4]

These are organizational arrangements expressed in software. A shared record makes it harder for each team to preserve only its flattering stories. Common measurement reduces the need to negotiate whose spreadsheet deserves belief. The ability to stop a damaging test makes wider permission to begin one more tolerable.

Another company engineering account explains how experimental controls separated deploying code from exposing customers to a feature. Changes could be released selectively and switched off quickly.[^8] That separation changes the economics of disagreement: finding out need not require betting the entire customer experience on a manager’s confidence.

None of this abolishes expertise. It relocates some expertise into a service that others can use. Product teams need room to investigate customer problems; specialists need to maintain credible methods and help teams interpret uncertain results. A central team that approves every idea may recreate the bottleneck. A platform that offers unlimited freedom without reliable measurement merely distributes the ability to be misled.

The numbers are impressive but easy to misuse. Thomke’s 2020 account estimated more than 25,000 tests annually.[^9] Booking.com’s March 2026 engineering report describes approximately 1,000 experiments running in parallel.[^2] These measure different things. Neither is a count of successful innovations, and a concurrent count cannot establish a current annual total without knowing test durations and counting conventions.

An experiment can reject a feature, uncover a defect, produce an inconclusive result, or improve an existing process. Counting all these activities as breakthroughs would confuse the machinery of learning with its achievements.

## Making it possible to be wrong

The psychological appeal of hierarchy is understandable. Experience can be valuable, and assigning decisions to a responsible leader avoids endless debate. The difficulty arises when responsibility acquires the status of evidence.

Organizational psychology gives this tension several names. Experiments by Nathanael Fast and colleagues show that power can increase overconfidence in some settings.[^10] Raymond Nickerson's review of confirmation bias documents our tendency to favor evidence that supports what we already believe.[^11] People may also defer to authority or suppress objections to preserve harmony. None of these studies diagnoses Booking.com's leadership. They explain why a right to test an idea can matter, and why permission on paper does not guarantee candor in practice.

Amy Edmondson’s research associated team psychological safety with learning behavior.[^12] The practical implication is demanding. Employees need to believe that reporting a disappointing result will not be treated as disloyalty or incompetence. Otherwise, the formal freedom to test coexists with an informal obligation to win.

Leadership incentives matter here even without a special bonus formula. Rewarding only positive results invites safe hypotheses, selective reporting, or flexible definitions of success. A more useful standard asks whether the team chose a worthwhile question, investigated it credibly, and acted honestly on the answer. Public sources reviewed do not establish that Booking.com used a particular executive compensation scheme to achieve this.

Nor does the research support removing executives from experimentation. A 2020 working paper by Sourobh Ghosh, Thomke, and Hazjier Pourkhalkhali examined 6,375 Optimizely experiments. Senior involvement was associated with bolder exploration but weaker cause-and-effect learning useful for optimization. The findings were observational, and the data were not Booking.com’s.[^13]

The implication is a division of responsibilities rather than the disappearance of leadership. Executives can identify consequential uncertainties, fund investigations, and settle trade-offs. Their own predictions still deserve examination.

## The experiment needs a test, too

The 2026 quality review introduced at the beginning was not an isolated surprise. Five years earlier, Booking.com's platform team had already argued that the number of experiments was the wrong measure of its own success. It wanted teams to meet standards for designing tests, running them, and deciding what to launch. Those standards included specifying the expected change in important business measures before seeing the result.[^14]

The later audit showed how hard that principle was to maintain at scale. A test without a plan for how many observations it needs may fail to detect a real improvement. A test left running until an attractive result appears may announce a false one. Booking.com's 2026 report describes responses including staff training, local experts, reviews, and better platform defaults, with reported improvements after intervention.[^2]

These are company-reported improvements, not an independent audit. The significance is nevertheless clear: an experimentation system can accumulate bad habits of its own. The organization had to apply the same skepticism to its methods that it asked employees to apply to product ideas.

There are several ways a convincing-looking experiment can mislead. Test enough ideas and some apparent wins will be coincidences. Check the results repeatedly and stop only when the numbers look good, and the risk of a false discovery grows. Sound testing requires rules chosen in advance or statistical methods designed for repeated monitoring.[^15]

Another warning is a mismatch between the planned and observed group sizes. If a test intended to divide customers evenly ends up recording far more people in one group, the measurement system itself may have a problem. Microsoft researchers have shown that missing or filtered users can even reverse the apparent result.[^16]

And a benefit averaged across all customers might conceal harm to a particular group. Investigating those differences matters, but searching dozens of groups after the fact can generate yet more coincidences.[^15] The answer is disciplined design, not abandoning experimentation.

There is a further distinction between detecting an effect and explaining it. In September 2026, Booking.com described a hypothesis-quality initiative requiring clearer accounts of prior evidence, the intervention, the audience, expected behavior, and observable outcomes. Its advisory checker uses an LLM to assess the written hypothesis.[^17]

That makes reasoning more inspectable. It does not make the reasoning true. A well-written hypothesis can be wrong, and a quality score is itself a proxy. The useful discipline is keeping the explanation available for challenge.

## What counts as better?

The children's-age example showed how a clearer instruction could improve a measured outcome. In that case, making the product easier to understand and helping the business appeared to point in the same direction. They will not always do so. A short-term increase in bookings does not, by itself, establish a better experience for travelers.

The company’s technical framework supported metrics including booking behavior and commission, and its data systems tracked cancellations.[^4] Those capabilities do not establish how every experiment weighed customer welfare or long-term value. A booking is an intermediate event in a journey whose quality may become apparent months later.

Research on online experimentation distinguishes the main outcome from guardrails and diagnostic measures.[^5] For a travel business, an evaluation could consider cancellations, complaints, service burden, repeat use, and the eventual stay alongside conversion. This is a recommendation, not a verified description of Booking.com’s universal decision policy.

Longer measurement is not a simple cure. Researchers have documented problems including unstable identifiers and survivorship bias in long-running experiments.[^18] An August 2026 industry workshop paper nevertheless argues that well-run long-term experiments remain essential for learning and validating useful short-term proxies. It presents expert propositions rather than definitive causal findings.[^19]

Consumer-protection interventions expose the ethical stakes. In February 2019, the UK Competition and Markets Authority announced commitments from six accommodation sites, including Booking.com, addressing concerns involving pressure selling, discount claims, rankings, and hidden charges. The CMA explicitly said not every company engaged in every practice and that the undertakings were not admissions of illegality.[^20]

Separately, Dutch and European authorities secured Booking.com commitments concerning price transparency, availability information, discounts, and other presentation practices.[^21]

These records do not prove that a particular experiment generated a criticized practice. They demonstrate that an organization can possess sophisticated evidence systems while facing legitimate challenges to what its interfaces encourage customers to do.

An experiment can identify which message changes behavior. Whether that message informs or manipulates requires a broader judgment. Customer protections must constrain the search for a winner before a favorable conversion result makes the tactic harder to abandon.

## The authority to ask another question

Did experimentation make Booking.com successful? The evidence supports a narrower conclusion than the corporate legend. There are documented accounts of useful changes and infrastructure designed to prevent damaging releases. There is not a credible counterfactual showing how the same company would have grown without its experimentation system.

Separate research on technology startups links A/B testing adoption to improved performance and organizational learning.[^22] It strengthens the broader case for experimentation. It cannot assign Booking.com’s growth to testing while holding its acquisitions, distribution, market conditions, and other advantages constant.

Other organizations can still learn from the case without copying its scale. Begin with a consequential uncertainty that can be investigated safely. Establish the outcome and protections in advance. Give a team the authority and statistical support to run a credible comparison. Preserve its reasoning and result, including an honest decision to stop.

That may require fewer experiments than an executive expects, especially where traffic is limited or outcomes take time to mature. It also requires protecting questions that existing metrics cannot answer. A backlog of easy tests is no substitute for deciding which uncertainties matter.

The enduring leadership obligation is to make revision possible. That includes revising a product, a preferred explanation, an experiment’s methods, or the definition of success itself.

The logo anecdote needs no invented defeat. The important transfer of authority occurred when an announcement became a hypothesis. The 2026 audit showed that the same organization also needed the courage to question its own testing habits.

An experiment is only as valuable as the decision it helps improve. The deeper accomplishment is not having more tests than anyone else, but creating a place where even the method used to declare a winner can be challenged.

## References

[^1]: Stefan Thomke, interview with Matt Bodnar, [“The Power of Experiments: How To Drive Innovation and Opportunity During Times of Uncertainty,”](https://www.successpodcast.com/show-notes/2020/3/11/the-power-of-experiments-how-to-drive-innovation-and-opportunity-during-times-of-uncertainty-with-stefan-thomke) *The Science of Success*, March 2020, especially 33:15–37:20. Researcher’s reported anecdote; not a contemporaneous recording of the logo decision.
[^2]: Edgar Cano, Daisy Duursma, Nils Skotara, and Melanie Mueller, [“Scaling Experimentation Quality at Booking.com,”](https://booking.ai/scaling-experimentation-quality-at-booking-com-726152ee4ef0) March 24, 2026. Company report; the initial 80 percent observation is not a statement about all 2026 experiments.
[^3]: Booking.com, [“About Booking.com,”](https://news.booking.com/fast-facts) and Booking Holdings, [“History,”](https://www.bookingholdings.com/about/history/) especially the 2005 entry. Company sources for origins and acquisition history.
[^4]: Raphael Lopez Kaufman, Jegar Pitchforth, and Lukas Vermeer, [“Democratizing online controlled experiments at Booking.com,”](https://arxiv.org/abs/1710.08217) October 23, 2017. [Full paper](https://arxiv.org/pdf/1710.08217), especially pp. 1–5. Technical account by company employees.
[^5]: Iavor Bojinov and Somit Gupta, [“Online Experimentation: Benefits, Operational and Methodological Challenges, and Scaling Guide,”](https://hdsr.mitpress.mit.edu/pub/aj31wj81/release/1) *Harvard Data Science Review* 4(3), July 28, 2022, especially sections 1 and 2.1.
[^6]: Michael Blanding, featuring Stefan Thomke, [“Creating the Experimentation Organization,”](https://www.library.hbs.edu/working-knowledge/creating-the-experimentation-organization) HBS *Working Knowledge*, December 4, 2019. Includes the children’s-age example reproduced from *Experimentation Works: The Surprising Power of Business Experiments* (Harvard Business Review Press, 2020). [Publisher’s book record](https://store.hbr.org/product/experimentation-works-the-surprising-power-of-business-experiments/10248).
[^7]: Stefan Thomke, [“At Booking.com, Innovation Means Constant Failure,”](https://hbr.org/podcast/2019/09/at-booking-com-innovation-means-constant-failure) *Cold Call*, September 3, 2019. See also Stefan Thomke and Daniela Beyersdorfer, [*Booking.com*, HBS case 619-015](https://www.iesepublishing.com/bookingcom-english.html), October 15, 2018. Published accounts of the proposed homepage test; no verified outcome asserted here.
[^8]: Iskra and Lukas Vermeer, [“Moving fast, breaking things and fixing them as quickly as possible,”](https://medium.com/booking-com-development/moving-fast-breaking-things-and-fixing-them-as-quickly-as-possible-a6c16c5a1185) Booking.com engineering publication, 2019.
[^9]: Stefan Thomke, [“Building a Culture of Experimentation,”](https://hbr.org/2020/03/building-a-culture-of-experimentation) *Harvard Business Review*, March–April 2020. Historical annual estimate.
[^10]: Nathanael J. Fast, Niro Sivanathan, Nicole D. Mayer, and Adam D. Galinsky, [“Power and overconfident decision-making,”](https://business.columbia.edu/faculty/research/power-and-overconfident-decision-making) *Organizational Behavior and Human Decision Processes* 117(2), 2012, pp. 249–260. [Author-hosted paper](https://msbfile03.usc.edu/digitalmeasures/nathanaf/intellcont/power_and_overconfident_decision_making-1.pdf).
[^11]: Raymond S. Nickerson, [“Confirmation Bias: A Ubiquitous Phenomenon in Many Guises,”](https://doi.org/10.1037/1089-2680.2.2.175) *Review of General Psychology* 2(2), 1998, pp. 175–220. [Full text](https://psy.ucsd.edu/~mckenzie/nickersonConfirmationBias.pdf).
[^12]: Amy Edmondson, [“Psychological Safety and Learning Behavior in Work Teams,”](https://doi.org/10.2307/2666999) *Administrative Science Quarterly* 44(2), 1999, pp. 350–383. [Full text](https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Organizational_Learning_and_Change/Edmondson_1999_Psychological_safety.pdf).
[^13]: Sourobh Ghosh, Stefan Thomke, and Hazjier Pourkhalkhali, [“The Effects of Hierarchy on Learning and Performance in Business Experimentation,”](https://www.hbs.edu/ris/Publication%20Files/20-081_9d2608f9-5a49-4bc3-a902-307d3427477b.pdf) HBS Working Paper 20-081, February 13, 2020. Draft research using Optimizely data; not a Booking.com causal evaluation.
[^14]: Christophe Perrin, Melanie Mueller, and Lukas Vermeer, [“Why we use experimentation quality as the main KPI for our experimentation platform,”](https://medium.com/booking-product/why-we-use-experimentation-quality-as-the-main-kpi-for-our-experimentation-platform-f4c1ce381b81) May 12, 2021.
[^15]: Bojinov and Gupta, [“Online Experimentation,”](https://hdsr.mitpress.mit.edu/pub/aj31wj81/release/1) section 2.2, including heterogeneous effects, multiple testing, and early stopping. See also [“Statistical Challenges in Online Controlled Experiments: A Review of A/B Testing Methodology,”](https://doi.org/10.1080/00031305.2023.2257237) *The American Statistician*, published online in 2023.
[^16]: Microsoft Experimentation Platform, [“Diagnosing Sample Ratio Mismatch in A/B Testing,”](https://www.microsoft.com/en-us/research/articles/diagnosing-sample-ratio-mismatch-in-a-b-testing/) September 14, 2020; accompanying [KDD 2019 research paper record](https://www.microsoft.com/en-us/research/publication/diagnosing-sample-ratio-mismatch-in-online-controlled-experiments-a-taxonomy-and-rules-of-thumb-for-practitioners/).
[^17]: Luka Beverin, [“A problem well-defined is half solved: Measuring Hypothesis Quality at Booking.com,”](https://booking.ai/a-problem-well-defined-is-half-solved-measuring-hypothesis-quality-at-booking-com-a85e845178a3) September 29, 2026. Company-authored description of an advisory tool.
[^18]: Pavel Dmitriev, Brian Frasca, Somit Gupta, Ron Kohavi, and Garnet Vaz, [“Pitfalls of Long-Term Online Controlled Experiments,”](https://www.microsoft.com/en-us/research/publication/pitfalls-of-long-term-online-controlled-experiments/) IEEE International Conference on Big Data, December 2016.
[^19]: Leif Sigerson and colleagues, [“Evaluating for the long term: Learnings from industry,”](https://arxiv.org/abs/2608.08043) preprint, August 8, 2026. Workshop synthesis, not a controlled test of the propositions it reports.
[^20]: Competition and Markets Authority, [“Hotel booking sites to make major changes after CMA probe,”](https://www.gov.uk/government/news/hotel-booking-sites-to-make-major-changes-after-cma-probe) February 6, 2019, including the qualifications in its notes to editors.
[^21]: Netherlands Authority for Consumers and Markets, [“Booking.com commits to adjusting its website following action by European consumer authorities,”](https://www.acm.nl/en/publications/bookingcom-commits-adjusting-its-website-following-action-european-consumer-authorities) December 20, 2019. See the European Commission’s [accommodation-booking enforcement record](https://commission.europa.eu/topics/consumers/consumer-rights-and-complaints/enforcement-consumer-protection/coordinated-actions/accommodation-booking_en).
[^22]: Rembrand Koning, Sharique Hasan, and Aaron Chatterji, [“Experimentation and Start-up Performance: Evidence from A/B Testing,”](https://doi.org/10.1287/mnsc.2021.4209) *Management Science* 68(9), 2022, pp. 6434–6453. [Harvard open-access record and paper](https://dash.harvard.edu/entities/publication/1ca499fb-3a81-4421-9aa4-b06f88b6b8a9).
