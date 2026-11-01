An automotive replacement part can look like a mistake on a spreadsheet and an insurance policy on a shelf. It occupies space, ties up money, and may wait a long time for a buyer. Yet when that buyer arrives with a broken car, availability matters immediately. The merchant has to decide how much patience the business can afford.

An algorithm can make that calculation consistently. A merchant might know something the data misses: an upcoming promotion, a supplier warning, or a local change in demand. Before the results arrive, though, a useful exception and an expensive hunch can look identical.

Two field experiments make that difficulty unusually concrete. In a 2020 paper, Saravanan Kesavan and Tarun Kushwaha reported that merchants' authority to override a retailer's data-driven decisions reduced profitability by 5.77%. A subsequent paper, with Dayton Steele, reported that allowing merchants to adjust forecast inputs increased profitability by 4.92% relative to automation alone.[^1][^2]

Both studies concerned automotive replacement-parts retail. But they tested different forms of intervention. In the first, merchants could reverse an inventory decision: keep a product the system recommended removing. In the second, they could change a demand estimate *before* an algorithm made its inventory recommendation.

The opposite results invite an appealing rule: let people inform the machine, but don't let them overrule it. The studies cannot establish that rule. The retailers, samples, systems, and profit calculations have not been shown to be equivalent. The more useful question is what, exactly, a person contributes at each step.

The more consequential story concerns the decisions hidden inside the word *judgment*, and the distance between predicting what will happen and deciding what to do about it.

## The authority to make an exception

The earlier experiment concerned an especially revealing decision: whether to keep products that an automated system had identified for removal. George Mason University's account of its faculty member's research describes a trial in which merchant overrides were implemented in some stores and ignored in randomly selected others. It ran for twelve months and involved more than 30,000 products.[^3]

The published paper reports that the average loss concealed a meaningful difference. Overrides improved profitability for growth-stage products but reduced it for mature and declining products.[^1]

There is a plausible informational explanation. Suppliers can observe demand through channels that a replacement-parts retailer cannot fully see. During a vehicle's warranty period, repairs may flow through dealerships. Conversations with suppliers can therefore give merchants clues about demand before that demand becomes legible in their own sales histories. The university account reports that interviews identified such information-sharing relationships.[^3]

This is an advantage in access, not proof of superior instinct. Someone can know a fact the model lacks without being better at combining every fact into a stocking decision.

The later paper moved human intervention upstream, to forecast inputs supplied to an inventory algorithm. Its appendix describes a sample of 17,476 distinct products, 24 merchants, and 96 suppliers. The journal's special-issue introduction identifies larger profit benefits for products with high gross-margin contribution, limited historical data, and large suppliers.[^2][^4][^5]

Here, 'high margin' needs care. The researchers grouped products using the previous year's unit sales multiplied by the profit contribution per unit. A frequently sold part with a modest markup could therefore matter more than a rarely sold part with a high markup.[^4]

The authors interpret differences through motivation, opportunity, and ability: reasons to invest attention, opportunities to contribute information, and the capacity to do so. These are explanations to investigate, not independently randomized treatments of motivation or supplier relationships.[^2]

There are also boundaries to the comparison. The accessible original abstracts and newer appendix do not establish identical samples, algorithms, accounting definitions, or an experiment that randomly assigned input adjustment against final-decision override. The full methods sections could not be inspected for this article. Neither the same corporate identity nor the precise cause of the reversal should be assumed.

What the evidence does establish is narrower and useful: human discretion has produced both gains and losses in this business, and its value varies with the products and the intervention being evaluated.

## A forecast is not a purchase order

Suppose a retailer expects to sell ten replacement parts next week. That is a forecast. Ordering ten, twelve, or twenty is a decision.

The right order also depends on what each sale earns, how much it costs to hold unsold parts, how quickly stock can be replaced, and what happens when a repair shop finds an empty shelf. A more accurate prediction will not necessarily produce a more profitable order. It may even improve average accuracy while making the costliest mistakes worse.

Imagine two items with equally predictable demand. One is cheap to store and costly to run out of. The other deteriorates quickly and produces little contribution when sold. The same forecast error has different economic consequences. A business should not expect one accuracy score to capture both.

Operations researchers have long studied this gap. One review observes that forecasting research often stops at predicting demand, just where inventory decisions begin.[^6] The handoff is easy to overlook because both tasks involve numbers, but they answer different questions.

The newer automotive study explicitly examines both forecasts and profits, and warns against treating forecast performance as an economic endpoint.[^2] Its appendix adds a useful caution: having private information does not guarantee a more accurate adjustment. Reviewing a forecast introduces variability of its own. Information must correct enough of the model's error to outweigh the additional noise.[^4]

The organizational implication is substantial. A forecasting team can win its accuracy contest while the business loses money. An inventory team can improve availability by buying too much. A markdown team can clear the shelves by surrendering revenue unnecessarily.

Each has improved a metric. Whether it has improved the decision remains an open question.

## The merchant may be correcting the objective

Sometimes disagreement reveals a problem further downstream than the forecast.

Karel van Donselaar and colleagues studied automated replenishment in a supermarket chain, using data covering 19,417 item–store combinations across five stores. Managers shifted orders away from peak days. Their analysis suggested that managers were incorporating handling costs and opportunities to improve availability that the automated system neglected. A method learned from their behavior produced a more balanced handling workload with similar average inventory coverage.[^7]

This was observational evidence and a policy-development exercise, not a randomized demonstration of a profit increase. Its importance lies in the diagnosis. A system can calculate competently while optimizing an incomplete account of the work.

The appropriate response in that situation may be to revise the objective or constraints. If receiving capacity matters, put receiving capacity into the decision. Repeatedly altering demand forecasts to compensate for a crowded loading bay would make the information less truthful and the system harder to diagnose.

At Zara, the difficulty ran in another direction. Felipe Caro and Anna Sáez de Tejada Cuenca studied managers using a decision-support system for clearance pricing. Their analysis was consistent with managers giving disproportionate attention to inventory and sales rather than the revenue objective. Interface changes made revenue consequences easier to interpret. A difference-in-differences analysis estimated that the combined interventions increased franchise managers' adherence by 9.5 percentage points from a 46.4% baseline.[^8]

That is an adherence estimate, not a profit percentage, and the interventions were not randomly assigned. Still, the contrast is revealing. In one setting, managers appeared to supply neglected operational considerations. In another, their attention appeared to favor a salient consideration over the stated objective.

Neither case can be resolved by telling employees to trust their experience or trust the software. The organization first has to locate the disagreement.

## The small adjustment that feels like work

Much intervention arrives without a dramatic revelation. A planner nudges a number upward because it seems conservative, or changes it slightly because leaving it untouched feels like failing to contribute.

Robert Fildes and colleagues examined more than 60,000 forecasts and outcomes from four supply-chain companies. Judgmental adjustments improved accuracy on average in three. But smaller adjustments often made forecasts worse, and upward revisions were less likely to help than downward ones. The pattern suggested optimism bias.[^9]

These were observed adjustments, not randomly assigned ones. The findings do not establish a universal rule that large changes are good or increases are bad. They do undermine the assumption that every small exercise of professional discretion is harmless.

Herbert Simon's account of bounded rationality offers a more useful starting point than the ideal of an all-seeing manager. People decide with limited information, attention, and computational capacity.[^10] Reviewing thousands of forecasts does not remove those limits. It creates a setting in which shortcuts become necessary.

Daniel Kahneman and Gary Klein sharpened the question of expertise: can the environment support reliable learning, and has the individual had the opportunity to learn its regularities? Confidence alone cannot answer either question.[^11]

Retail feedback complicates that learning. A product that sells after an override may also have sold under the original policy. A stockout hides demand that never becomes a transaction. A successful intervention is visible; the successful decision to leave the system alone is easy to overlook.

Experience can accumulate under these conditions without providing a clean account of when intervention helped.

## Trust has more than one failure mode

Giving people final authority does not eliminate the psychological risks. It can expose the system to two seemingly opposite tendencies. In experiments by Berkeley Dietvorst and colleagues, people rejected a superior forecasting algorithm after seeing it make mistakes.[^12] In experiments by Jennifer Logg and colleagues, people often favored advice described as algorithmic over advice described as human.[^13] Different tasks and comparisons produced different reactions; there is no single universal attitude toward machines.

Nor is a human supervisor necessarily an effective safeguard. Automation researchers have documented both following incorrect recommendations and overlooking failures the system does not flag.[^14] A person who must inspect hundreds of routine decisions may gradually stop inspecting any of them carefully.

Even limited control can change adoption. In later experiments, Dietvorst and colleagues found that allowing people to modify an algorithm made them more willing to use it and improved their performance compared with relying on their own forecasts.[^15] Yet greater acceptance is not proof that the edits made the model itself better.

Adoption, prediction accuracy, and profit are three different outcomes. A company should know which one its intervention improved.

## Collaboration has to earn its place

The reassuring phrase *human in the loop* hides a demanding coordination problem. The person must contribute something useful and recognize when contributing would make matters worse.

A 2024 review of 106 experiments found that human–AI teams generally did better than people working alone, but worse than whichever standalone option, human or AI, performed best in each comparison.[^16] Combining the two did not automatically improve on the stronger partner.

Those studies involved varied tasks and systems available through mid-2023; the result is not a profitability estimate or a judgment about today's AI models. The lesson lies in the comparison. Doing better than an unaided employee does not prove that keeping employee discretion improves on the automated system alone.

There are more deliberate ways to combine the contributions. Blair Flicker's *Managerial Insight and “Optimal” Algorithms* develops a method that uses historical forecasting performance to translate a manager's demand estimate into a probability distribution for an inventory decision. Across eight experiments, the method outperformed the other ordering approaches tested, including when information arrived through nonnumerical perceptual signals.[^17]

Those experiments do not promise the same result in a retail deployment. They illustrate a productive distinction: obtaining information from someone and asking that person to perform the entire optimization are different requests.

For organizations, decision hygiene begins with preserving that distinction. Record the original forecast and recommendation before intervention. Ask what new information justifies a change, where it belongs in the process, and when it expires. Preserve the unchanged cases too, so that review does not become a collection of memorable exceptions.

Then evaluate the outcome the business cares about, alongside service, inventory, and the cost of review. Where feasible, randomize whether eligible adjustments are implemented. Where experimentation is impractical, acknowledge the assumptions behind comparisons and test whether apparent gains survive alternative explanations. Segment the results without mistaking a promising retrospective subgroup for a validated operating rule.

This requires analytical capability, usable interfaces, credible feedback, and incentives that reward leaving a good recommendation alone. An employee should be able to contribute by identifying a missing signal, improving a constraint, or demonstrating that an intervention was unnecessary.

The merchant's strongest claim is that the business knows something its system has not yet learned. That claim deserves an avenue into the decision and a fair test afterward.

A useful human intervention should leave behind more than a changed number. It should leave the organization better able to explain what mattered, measure what improved, and decide who should handle the next case.

## References

[^1]: Kesavan, S., & Kushwaha, T. (2020). *Field Experiment on the Profit Implications of Merchants' Discretionary Power to Override Data-Driven Decision-Making Tools*. Management Science, 66(11), 5182–5190. Original abstract verifies the reported average and lifecycle directions. https://doi.org/10.1287/mnsc.2020.3743
[^2]: Kesavan, S., Kushwaha, T., & Steele, D. (2025, online; 2026, issue). *Profit Implications of Judgmental Adjustments to Forecast Inputs: Evidence from a Large-Scale Field Experiment*. Management Science, 72(1), 119–127. Published online July 25, 2025. Original abstract consulted; full main text unavailable. https://doi.org/10.1287/mnsc.2024.06321
[^3]: George Mason University, Costello College of Business (2021). *In an Algorithmic Workplace, How Can Humans Excel?* Institutional account of Kushwaha and Kesavan's research. Used for trial duration, broad allocation description, product count, and supplier-information explanation, rather than as a substitute for unavailable original methods. https://business.gmu.edu/news/2021-12/algorithmic-workplace-how-can-humans-excel
[^4]: Kesavan, Kushwaha, & Steele. *Web Appendix*, WA1, WA4, WA5–WA9. WA1 defines the margin classification and sample; WA4 analyzes information benefits and added variability; later tables document heterogeneity. https://pubsonline.informs.org/doi/suppl/10.1287/mnsc.2024.06321/suppl_file/mnsc.2024.06321.sm1.pdf
[^5]: Caro, F., et al. (2025, online; 2026, issue). *Introduction to the Special Issue on the Human-Algorithm Connection*. Management Science, 72(1), 1–13, section 2.3, item 6. Editors' account used for the directions of profit heterogeneity. https://doi.org/10.1287/mnsc.2023.intro.v72.n1
[^6]: Goltsos, T. E., Syntetos, A. A., Glock, C. H., & Ioannou, G. (2022). *Inventory–forecasting: Mind the gap*. European Journal of Operational Research, 299(2), 397–419. https://doi.org/10.1016/j.ejor.2021.07.040
[^7]: van Donselaar, K. H., Gaur, V., van Woensel, T., Broekmeulen, R. A. C. M., & Fransoo, J. C. (2010). *Ordering Behavior in Retail Stores and Implications for Automated Replenishment*. Management Science, 56(5), 766–784. Original abstract consulted. https://doi.org/10.1287/mnsc.1090.1141
[^8]: Caro, F., & Sáez de Tejada Cuenca, A. (2023). *Believing in Analytics: Managers' Adherence to Price Recommendations from a DSS*. Manufacturing & Service Operations Management, 25(2), 524–542. https://doi.org/10.1287/msom.2022.1166 . Author manuscript: https://www.anderson.ucla.edu/faculty_pages/felipe.caro/papers/pdf_FC34.pdf
[^9]: Fildes, R., Goodwin, P., Lawrence, M., & Nikolopoulos, K. (2009). *Effective forecasting and judgmental adjustments: An empirical evaluation and strategies for improvement in supply-chain planning*. International Journal of Forecasting, 25(1), 3–23. Original abstract and introduction consulted. https://doi.org/10.1016/j.ijforecast.2008.11.010
[^10]: Simon, H. A. (1955). *A Behavioral Model of Rational Choice*. Quarterly Journal of Economics, 69(1), 99–118. https://doi.org/10.2307/1884852
[^11]: Kahneman, D., & Klein, G. (2009). *Conditions for intuitive expertise: A failure to disagree*. American Psychologist, 64(6), 515–526. https://doi.org/10.1037/a0016755
[^12]: Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). *Algorithm Aversion: People Erroneously Avoid Algorithms After Seeing Them Err*. Journal of Experimental Psychology: General, 144(1), 114–126. https://doi.org/10.1037/xge0000033 . Author-hosted text: https://faculty.wharton.upenn.edu/wp-content/uploads/2016/11/20-Dietvorst-Simmons-Massey-2015.pdf
[^13]: Logg, J. M., Minson, J. A., & Moore, D. A. (2019). *Algorithm appreciation: People prefer algorithmic to human judgment*. Organizational Behavior and Human Decision Processes, 151, 90–103. https://doi.org/10.1016/j.obhdp.2018.12.005
[^14]: Parasuraman, R., & Manzey, D. H. (2010). *Complacency and bias in human use of automation: An attentional integration*. Human Factors, 52(3), 381–410. https://doi.org/10.1177/0018720810376055
[^15]: Dietvorst, B. J., Simmons, J. P., & Massey, C. (2018). *Overcoming Algorithm Aversion: People Will Use Imperfect Algorithms If They Can (Even Slightly) Modify Them*. Management Science, 64(3), 1155–1170. https://doi.org/10.1287/mnsc.2016.2643
[^16]: Vaccaro, M., Almaatouq, A., & Malone, T. (2024). *When combinations of humans and AI are useful: A systematic review and meta-analysis*. Nature Human Behaviour, 8, 2293–2303. https://doi.org/10.1038/s41562-024-02024-1 . Open text: https://pmc.ncbi.nlm.nih.gov/articles/PMC11659167/
[^17]: Flicker, B. (2025, online; 2026, issue). *Managerial Insight and “Optimal” Algorithms*. Management Science, 72(1), 128–147. Original abstract consulted. https://doi.org/10.1287/mnsc.2022.03919
