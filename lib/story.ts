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
    inputPrompt: "What do you remember most about that evening? 🎬",
    inputKey: "perfectEvening",
    getContent: (answers) => [
      `There was one evening the stranger would never forget — the night they went to the cinema together.`,
      `It started simply enough. Pizza, laughter, and ${answers.name} somehow turning a simple order into the most entertaining performance the stranger had ever witnessed. He tried to keep a straight face. He failed completely.`,
      `Then came the ice cream. ${answers.name} had chosen it with such confidence — and proceeded to wear a good portion of it on her dress, completely unbothered, dancing like no one was watching and laughing like the whole world was in on the joke.`,
      `The stranger watched all of this and thought — quietly, to himself — that he had never seen someone so effortlessly, brilliantly themselves.`,
      `${answers.perfectEvening ? `And when she said she remembered "${answers.perfectEvening}" — he smiled, because he remembered everything.` : `He remembered everything about that night. Every laugh. Every moment.`}`,
      `The movie played. The lights dimmed. But honestly? He wasn't watching the screen.`,
    ],
  },
  // fianl story
  {
    id: 4,
    title: "The Spell",
    inputPrompt: "If you could relive one moment from that night, what would it be? ✨",
    inputKey: "dreamPlace",
    getContent: (answers) => [
      `But the evening wasn't done with its surprises.`,
      `Out of nowhere, someone moved a little too close — a little too intentionally. And before the stranger could even process what was happening, ${answers.name} had already stepped in.`,
      `She protected him. Boldly. Without hesitation. The same girl who had ice cream on her dress minutes earlier was now standing like an absolute guardian.`,
      `The stranger didn't know whether to laugh or be genuinely moved. He did both.`,
      `${answers.dreamPlace ? `If he could relive one moment, he knew she might say "${answers.dreamPlace}" — and he would say: all of it.` : `If he could relive any moment from that night — he would choose all of it. Every single second.`}`,
      `It was the kind of evening that quietly rewrites things inside you. The kind you replay when the room goes quiet.`,
      `And so, he did what he knew best — he built something to remember it by. A story. This story.`,
    ],
  },
];

export function getFinalChapter(name: string): string[] {
  return [
    `Dear ${name},`,

    `Every chapter before this was a story, but this page is real.`,

    `I didn't create this because I was nervous to ask you something. I created it because you're someone worth doing something different for.`,

    `The truth is, plenty of people can send a text message, plenty of people can say hello, and plenty of people can ask someone out in the usual way.`,

    `But I wanted this moment to feel a little more memorable. A little more intentional. Something built specifically for you.`,

    `As you moved through these pages, you probably noticed that this story slowly became less about a fairy tale and more about a real person.`,

    `That's because behind every chapter was me.`,

    `I've enjoyed getting to know you, and I'd genuinely like the opportunity to know you better.`,

    `So rather than ending this story with a grand magical twist, I'll end it with a simple and honest question.`,

    `Would you like to go out with me sometime?`,

    `Whatever it is, I'd love the chance to create a real story together and see where it leads.`,

    `The next page is yours to write.`,
  ];
}
