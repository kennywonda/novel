import { StoryAnswers } from './store';

export interface Chapter {
  id: number;
  title: string;
  inputPrompt?: string;
  inputKey?: keyof StoryAnswers;
  getContent: (answers: StoryAnswers) => string[];
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "The Kingdom Awaits",
    inputPrompt: "What is your favorite time of day?",
    inputKey: "favoriteTime",
    getContent: (answers) => [
      `Once upon a time, in a kingdom where dreams danced on the breeze, there lived a remarkable soul named ${answers.name || 'a gentle heart'}.`,
      `As the ${answers.favoriteTime || 'golden hour'} painted the sky with its tender light, the kingdom whispered of her grace.`,
      `She moved through her days with a quiet strength that made even the stars pause to admire her.`,
      `Little did she know, her story was about to take the most unexpected turn...`,
    ],
  },
  {
    id: 2,
    title: "The Mysterious Stranger",
    inputPrompt: "What quality do you value most in a person?",
    inputKey: "valuedQuality",
    getContent: (answers) => [
      `In the bustling marketplace of the kingdom, a stranger had arrived.`,
      `He was unlike the others—a builder of dreams, a weaver of code, someone who crafted magic from logic.`,
      `Among all in the land, ${answers.name} sought someone who was truly ${answers.valuedQuality || 'kind'}.`,
      `And though she didn't know it yet, the stranger had noticed her long before this tale began.`,
      `He watched from afar, wondering if he'd ever find the courage to step into her light.`,
    ],
  },
  {
    id: 3,
    title: "The Enchanted Evening",
    inputPrompt: "What's your favorite thing to do on a perfect evening?",
    inputKey: "perfectEvening",
    getContent: (answers) => [
      `Fate has a funny way of writing its own chapters.`,
      `One evening, their paths finally crossed—not by accident, but by the quiet pull of something neither could name.`,
      `They spent the evening ${answers.perfectEvening || 'talking beneath the moonlight'}, and for the first time in a long while, the stranger felt seen.`,
      `${answers.name} had a way of making the world feel softer, safer, more full of wonder.`,
      `The stranger thought to himself: "What if this could be more than just one evening?"`,
    ],
  },
  {
    id: 4,
    title: "The Spell",
    inputPrompt: "If you could go anywhere in the world, where would it be?",
    inputKey: "dreamPlace",
    getContent: (answers) => [
      `Days turned to weeks, and the stranger found himself lost in thought.`,
      `He had dreamed of taking ${answers.name} to ${answers.dreamPlace || 'a place where magic still lives'}, just the two of them.`,
      `He imagined all the little moments they could share—the laughter, the quiet conversations, the way time slows when you're with someone who makes your heart feel full.`,
      `But how does one ask for such a thing? How does a builder of dreams dare to dream for himself?`,
      `And so, he did what he knew best—he built something for her. A story. This story.`,
    ],
  },
];

export function getFinalChapter(name: string): string[] {
  return [
    `Dear ${name},`,
    `If you've made it this far, then you know by now—this was never just a fairy tale.`,
    `This was me, trying to find the words I've been too nervous to say out loud.`,
    `You are the person who makes ordinary moments feel like magic. The one I think about when I'm building something new, when I'm laughing at something silly, when I'm just... existing.`,
    `I don't know if you feel the same way. But I had to ask.`,
    `So here it is, the question I built an entire storybook to ask:`,
    `Would you go out with me? Not in a fairy tale—in real life. Coffee, dinner, a walk, whatever feels right. Just you and me.`,
    `What do you say?`,
  ];
}
