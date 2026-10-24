import relevance from './articles/relevance-an-unfinished-education.md?raw';
import yellowLight from './articles/yellow-light.md?raw';
import systemicHeuristics from './articles/systemic-heuristics.md?raw';
import designingSecondThought from './articles/designing-second-thought.md?raw';
import architectsOfJudgment from './articles/architects-of-judgment.md?raw';
import soldierMappedMind from './articles/soldier-mapped-mind.md?raw';
import mindBehindMirror from './articles/mind-behind-mirror.md?raw';
import twoMindsOneIdea from './articles/two-minds-one-idea.md?raw';
import runningOldSoftware from './articles/running-old-software.md?raw';
import speedTrap from './articles/speed-trap.md?raw';
import confidenceNotAccuracy from './articles/confidence-not-accuracy.md?raw';
import preDecision from './articles/pre-decision.md?raw';
import noiseNotHearing from './articles/noise-not-hearing.md?raw';
import foxesHedgehogs from './articles/foxes-hedgehogs.md?raw';
import biasAlwaysBug from './articles/bias-always-bug.md?raw';
import biasedOracle from './articles/biased-oracle.md?raw';
import decisionHygiene from './articles/decision-hygiene.md?raw';
import rabbleRouserThaler from './articles/rabble-rouser-thaler.md?raw';
import mostCitedManSunstein from './articles/most-cited-man-sunstein.md?raw';
import michaelLewis from './articles/michael-lewis.md?raw';
import failureToDisagree from './articles/failure-to-disagree.md?raw';

export interface Article {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  content: string;
  audio?: {
    title: string;
    url: string;
    downloadUrl: string;
    durationSeconds: number;
  };
}

export const ARTICLES: Article[] = [
  {
    id: '21',
    slug: 'relevance-an-unfinished-education',
    title: 'Relevance: An Unfinished Education',
    subtitle: 'The unlikely journey from working-class Portland to behavioral decision science, and the people, risks, and ideas behind Yellowlights.ai.',
    date: 'October 2026',
    readTime: '24 min read',
    content: relevance,
    audio: {
      title: 'How Trace Hancock Built Yellowlights.ai',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Trace_Hancock_Built_Yellowlights_AI_96k.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Trace_Hancock_Built_Yellowlights_AI_96k.m4a?download=1',
      durationSeconds: 1404.087438,
    },
  },
  {
    id: '1',
    slug: 'yellow-light',
    title: 'The Yellow Light: In Praise of the Intentional Pause',
    subtitle: "In a world calibrated for instant clicks, the most radical design intervention is a deliberate hesitation. Mapping the benefits of \"Choice Sludge.\"",
    date: 'March 2026',
    readTime: '11 min read',
    content: yellowLight,
    audio: {
      title: 'How Frictionless Design Triggers Instant Regret',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_frictionless_design_triggers_instant_regret_96k-Yzu1ztVeEB0lhNOus37Ehx1xGknnyr.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_frictionless_design_triggers_instant_regret_96k-Yzu1ztVeEB0lhNOus37Ehx1xGknnyr.m4a?download=1',
      durationSeconds: 1248.281542,
    },
  },
  {
    id: '2',
    slug: 'systemic-heuristics',
    title: 'Systemic Heuristics in Institutional Logic',
    subtitle: 'How organizations inherit the biases of their founders and architects. A structural analysis of decision-making inheritance.',
    date: 'March 2026',
    readTime: '15 min read',
    content: systemicHeuristics,
    audio: {
      title: 'How Institutional Autopilot Blinds Companies',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Institutional_Autopilot_Blinds_Companies_96k-5L4vpivyKgQ10DR0tjYW5bzXG8IK6V.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Institutional_Autopilot_Blinds_Companies_96k-5L4vpivyKgQ10DR0tjYW5bzXG8IK6V.m4a?download=1',
      durationSeconds: 1489.72263,
    },
  },
  {
    id: '3',
    slug: 'designing-second-thought',
    title: 'Designing for the Second Thought',
    subtitle: 'Why modern UX is failing human psychology by optimizing exclusively for speed, and how we can re-engineer friction.',
    date: 'March 2026',
    readTime: '8 min read',
    content: designingSecondThought,
    audio: {
      title: 'Why Frictionless Design Makes You Miserable',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_Frictionless_Design_Makes_You_Miserable_96k-X8pb47qH2iq7hfGOg0wIYHDR5Pytoy.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_Frictionless_Design_Makes_You_Miserable_96k-X8pb47qH2iq7hfGOg0wIYHDR5Pytoy.m4a?download=1',
      durationSeconds: 1409.799546,
    },
  },
  {
    id: '4',
    slug: 'architects-of-judgment',
    title: 'The Architects of Judgment: A History of Decision Science',
    subtitle: "From Aristotle's phronesis to AI-augmented forecasting, the lineage of thinkers who built the science of how we choose.",
    date: 'March 2026',
    readTime: '14 min read',
    content: architectsOfJudgment,
    audio: {
      title: 'Human Judgment from Aristotle to AI',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Human_judgment_from_Aristotle_to_AI_96k-vSW81gYzpMZE9qOT2jc19F5xYg2lLP.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Human_judgment_from_Aristotle_to_AI_96k-vSW81gYzpMZE9qOT2jc19F5xYg2lLP.m4a?download=1',
      durationSeconds: 1456.123356,
    },
  },
  {
    id: '5',
    slug: 'soldier-mapped-mind',
    title: 'The Soldier Who Mapped the Mind: A Portrait of Amos Tversky',
    subtitle: "He was the most brilliant psychologist of his generation. He died at fifty-nine. History has been catching up ever since.",
    date: 'March 2026',
    readTime: '12 min read',
    content: soldierMappedMind,
    audio: {
      title: 'The Soldier Who Decoded Human Risk',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/The_soldier_who_decoded_human_risk_96k-YGXgycRGaWZlkskoCBx6jhGJhQbU70.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/The_soldier_who_decoded_human_risk_96k-YGXgycRGaWZlkskoCBx6jhGJhQbU70.m4a?download=1',
      durationSeconds: 1341.41678,
    },
  },
  {
    id: '6',
    slug: 'mind-behind-mirror',
    title: 'The Mind Behind the Mirror: A Portrait of Daniel Kahneman',
    subtitle: "He spent his life mapping the flaws in human judgment. At ninety, he made his final decision. The most deliberate of all.",
    date: 'March 2026',
    readTime: '12 min read',
    content: mindBehindMirror,
    audio: {
      title: 'How Daniel Kahneman Designed His Final Act',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Daniel_Kahneman_designed_his_final_act_96k-konU7Bvn1I21xrdDBNQVuRlswDTMnV.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Daniel_Kahneman_designed_his_final_act_96k-konU7Bvn1I21xrdDBNQVuRlswDTMnV.m4a?download=1',
      durationSeconds: 1347.570068,
    },
  },
  {
    id: '7',
    slug: 'two-minds-one-idea',
    title: 'Two Minds, One Idea: The Collaboration That Rewired How We Think',
    subtitle: "For a decade, Kahneman and Tversky were inseparable. What they built changed economics, law, and medicine — and how any honest person looks at their own mind.",
    date: 'March 2026',
    readTime: '13 min read',
    content: twoMindsOneIdea,
    audio: {
      title: 'How Two Clashing Minds Mapped Human Irrationality',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Two_Clashing_Minds_Mapped_Human_Irrationality_96k-vqk2fZetmqphVJfVcoS3albmsVy9hG.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Two_Clashing_Minds_Mapped_Human_Irrationality_96k-vqk2fZetmqphVJfVcoS3albmsVy9hG.m4a?download=1',
      durationSeconds: 1435.689796,
    },
  },
  {
    id: '8',
    slug: 'running-old-software',
    title: "You're Not Irrational. You're Running Old Software.",
    subtitle: "Cognitive bias isn't a character flaw. It's an evolutionary mismatch — ancient hardware running in a modern environment.",
    date: 'March 2026',
    readTime: '10 min read',
    content: runningOldSoftware,
    audio: {
      title: 'Your Brain Is Optimized for the Past',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Your_brain_is_optimized_for_the_past_96k-8Wikciz0RXvFF9RUT7G4DpGxIk1Nlu.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Your_brain_is_optimized_for_the_past_96k-8Wikciz0RXvFF9RUT7G4DpGxIk1Nlu.m4a?download=1',
      durationSeconds: 1325.209252,
    },
  },
  {
    id: '9',
    slug: 'speed-trap',
    title: 'The Speed Trap: How Urgency Hijacks Your Best Thinking',
    subtitle: "Modern work culture rewards urgency. It penalizes deliberation. Here's the cognitive cost nobody's accounting for.",
    date: 'March 2026',
    readTime: '10 min read',
    content: speedTrap,
    audio: {
      title: 'Why Rushing Destroys Good Decisions',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_Rushing_Destroys_Good_Decisions_96k-epCfXlkFlzy6D95O8VoYn9Chg9ATPv.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_Rushing_Destroys_Good_Decisions_96k-epCfXlkFlzy6D95O8VoYn9Chg9ATPv.m4a?download=1',
      durationSeconds: 1164.294966,
    },
  },
  {
    id: '10',
    slug: 'confidence-not-accuracy',
    title: "Confidence Is Not Accuracy: A Field Guide to Knowing What You Don't Know",
    subtitle: "The most dangerous thing a decision-maker can do is confuse how certain they feel with how right they are.",
    date: 'March 2026',
    readTime: '11 min read',
    content: confidenceNotAccuracy,
    audio: {
      title: "Why Confidence Doesn't Mean You're Right",
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_Confidence_Doesn_t_Mean_You_re_Right_96k-SZZarbe9TPPRIKkiai0vWOELeNV4XS.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_Confidence_Doesn_t_Mean_You_re_Right_96k-SZZarbe9TPPRIKkiai0vWOELeNV4XS.m4a?download=1',
      durationSeconds: 1436.897234,
    },
  },
  {
    id: '11',
    slug: 'pre-decision',
    title: 'The Pre-Decision: Why What Happens Before the Choice Matters Most',
    subtitle: "The quality of most decisions is determined before deliberation begins. Everything is framing.",
    date: 'March 2026',
    readTime: '10 min read',
    content: preDecision,
    audio: {
      title: 'How Pre-Decisions Dictate Your Choices',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Pre-Decisions_Dictate_Your_Choices_96k-O5HIJeaxbgxOGXdyW6xezpNatLZpYn.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Pre-Decisions_Dictate_Your_Choices_96k-O5HIJeaxbgxOGXdyW6xezpNatLZpYn.m4a?download=1',
      durationSeconds: 1442.400363,
    },
  },
  {
    id: '12',
    slug: 'noise-not-hearing',
    title: "The Noise You're Not Hearing",
    subtitle: "Everyone talks about bias. Almost no one is talking about the larger problem: random variability in judgments that should be identical.",
    date: 'March 2026',
    readTime: '11 min read',
    content: noiseNotHearing,
    audio: {
      title: 'How Noise Distorts Human Decisions',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Noise_Distorts_Human_Decisions_96k-cTu93BFgWVqcmKkcoWOPd49jx3kDai.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Noise_Distorts_Human_Decisions_96k-cTu93BFgWVqcmKkcoWOPd49jx3kDai.m4a?download=1',
      durationSeconds: 1386.997551,
    },
  },
  {
    id: '13',
    slug: 'foxes-hedgehogs',
    title: 'Foxes, Hedgehogs, and the Discipline of Being Wrong Less Often',
    subtitle: "Philip Tetlock spent decades studying expert prediction. What he found should unsettle anyone who trusts their own convictions.",
    date: 'March 2026',
    readTime: '11 min read',
    content: foxesHedgehogs,
    audio: {
      title: 'How Superforecasters Beat the Experts',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Superforecasters_Beat_the_Experts_96k-tQUiqkcRDUrSMbeFGvRNxTmm4Gpm2x.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/How_Superforecasters_Beat_the_Experts_96k-tQUiqkcRDUrSMbeFGvRNxTmm4Gpm2x.m4a?download=1',
      durationSeconds: 1433.205261,
    },
  },
  {
    id: '14',
    slug: 'bias-always-bug',
    title: 'Is Bias Always a Bug? The Adaptive Case for Heuristics',
    subtitle: "The debiasing industry assumes your intuitions are the enemy. Gerd Gigerenzer disagrees — and so does the data.",
    date: 'March 2026',
    readTime: '11 min read',
    content: biasAlwaysBug,
    audio: {
      title: 'Your Biases Are Features, Not Bugs',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Your_Biases_Are_Features_Not_Bugs_96k-Tx0S8C4n8W8nKXMmo35xMGXpnuAH93.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Your_Biases_Are_Features_Not_Bugs_96k-Tx0S8C4n8W8nKXMmo35xMGXpnuAH93.m4a?download=1',
      durationSeconds: 1504.281542,
    },
  },
  {
    id: '15',
    slug: 'biased-oracle',
    title: 'The Biased Oracle: What LLMs Get Wrong About Judgment',
    subtitle: "AI doesn't just inherit human cognitive biases — in key domains, it amplifies them. The question isn't whether to use it. It's how.",
    date: 'March 2026',
    readTime: '12 min read',
    content: biasedOracle,
    audio: {
      title: 'Why AI Is a Sycophantic Yes-Man',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_AI_is_a_sycophantic_yes-man_96k-bmMS7wNiiGpfMEbr7VQATgxMT1BIrE.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_AI_is_a_sycophantic_yes-man_96k-bmMS7wNiiGpfMEbr7VQATgxMT1BIrE.m4a?download=1',
      durationSeconds: 1326.370249,
    },
  },
  {
    id: '16',
    slug: 'decision-hygiene',
    title: 'Decision Hygiene as Organizational Infrastructure',
    subtitle: "Training individuals to think better rarely works. Redesigning the environment they decide inside of usually does.",
    date: 'March 2026',
    readTime: '11 min read',
    content: decisionHygiene,
    audio: {
      title: 'Why Decision Hygiene Beats Gut Instinct',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_Decision_Hygiene_Beats_Gut_Instinct_96k-4RvuJCYRSOlVcI2ezRLruVeUOFOGoe.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Why_Decision_Hygiene_Beats_Gut_Instinct_96k-4RvuJCYRSOlVcI2ezRLruVeUOFOGoe.m4a?download=1',
      durationSeconds: 1560.288073,
    },
  },
  {
    id: '17',
    slug: 'rabble-rouser-thaler',
    title: 'The Rabble-Rouser Who Made Economics Human: A Portrait of Richard Thaler',
    subtitle: "He kept a chalkboard nobody else could read. Four decades later, it earned him a Nobel Prize.",
    date: 'July 2026',
    readTime: '10 min read',
    content: rabbleRouserThaler,
    audio: {
      title: 'How Richard Thaler Made Economics Human',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/Thaler_Audio_Journal_Pilot_96k_complete.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/Thaler_Audio_Journal_Pilot_96k_complete.m4a?download=1',
      durationSeconds: 22 * 60 + 19,
    },
  },
  {
    id: '18',
    slug: 'most-cited-man-sunstein',
    title: 'The Most Cited Man in Law: A Portrait of Cass Sunstein',
    subtitle: "He's the most frequently cited legal scholar in America. The real question is whether there's anything he hasn't written about.",
    date: 'July 2026',
    readTime: '9 min read',
    content: mostCitedManSunstein,
    audio: {
      title: 'Cass Sunstein and the Architecture of Choice',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Cass_Sunstein_and_the_Architecture_of_Choice_96k-n156xlNHLDQsEU61WzDavNF8sechYm.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Cass_Sunstein_and_the_Architecture_of_Choice_96k-n156xlNHLDQsEU61WzDavNF8sechYm.m4a?download=1',
      durationSeconds: 1277.120726,
    },
  },
  {
    id: '19',
    slug: 'michael-lewis',
    title: 'The Man Who Explained Us to Ourselves: A Portrait of Michael Lewis',
    subtitle: "A review he didn't like led him, eight years and one unlikely friendship later, to write the truest book of his career.",
    date: 'July 2026',
    readTime: '15 min read',
    content: michaelLewis,
    audio: {
      title: 'The Storytelling Blind Spot of Michael Lewis',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/The_storytelling_blind_spot_of_Michael_Lewis_96k-j59ZBbMaBS1F9inMavwo6VCzeayWn8.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/The_storytelling_blind_spot_of_Michael_Lewis_96k-j59ZBbMaBS1F9inMavwo6VCzeayWn8.m4a?download=1',
      durationSeconds: 1374.923175,
    },
  },
  {
    id: '20',
    slug: 'failure-to-disagree',
    title: 'The Failure to Disagree: How Two Rival Schools of Decision Science Found Common Ground',
    subtitle: "Two camps spent decades talking past each other. Then they wrote a paper together and, to their own surprise, couldn't find a fight worth having.",
    date: 'July 2026',
    readTime: '13 min read',
    content: failureToDisagree,
    audio: {
      title: 'Trusting Intuition in Wicked Environments',
      url: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Trusting_intuition_in_wicked_environments_96k-FoHpQVu1Riqgqt3RAxL1rwwdUIILR0.m4a',
      downloadUrl: 'https://v6sltbivoauquric.public.blob.vercel-storage.com/journal/Trusting_intuition_in_wicked_environments_96k-FoHpQVu1Riqgqt3RAxL1rwwdUIILR0.m4a?download=1',
      durationSeconds: 1482.036825,
    },
  },
];
