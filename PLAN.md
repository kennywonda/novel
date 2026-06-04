# 💌 "Once Upon a You" — Romantic Story Book App
### A Developer's Way of Asking Her Out

---

## 🎯 The Concept
A fairy-tale storybook web app where SHE is the main character.
Before each chapter unlocks, she fills in a small field (her name, a favorite memory, a color, etc.)
and the story weaves her answers INTO the narrative — making it feel written just for her.
At the end, the final chapter is the actual ask-out moment.

---

## 🛠 Tech Stack
| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 14 (App Router) | Fast, easy deploy, great for pages |
| Styling | Tailwind CSS + custom CSS animations | Fairy-tale look & feel |
| Animation | Framer Motion | Smooth page turns, floating particles |
| Music | Howler.js | Background music control, fade in/out |
| Email Notification | Resend (or EmailJS) | Notify you when she opens the book |
| Deployment | Vercel | Free, one-click deploy, shareable link |
| Font | Google Fonts (Playfair Display + Dancing Script) | Elegant storybook feel |

---

## 📖 Story Structure — 5 Chapters

### 🔓 Before the Book Opens
- Animated book cover with floating sparkles
- A glowing "Open the Book" button
- **Input:** Her name → used throughout the story
- Email notification fires here (you get notified she started)

---

### 📘 Chapter 1 — "The Kingdom Awaits"
*Setting the fairy-tale world. She is introduced as the main character.*
- **Input before unlock:** "What is your favorite time of day?" (morning / sunset / night)
- Story adapts: "As the [sunset] painted the sky over the kingdom..."
- Animation: Page flip + kingdom landscape fades in

---

### 📗 Chapter 2 — "The Mysterious Stranger"
*A charming developer appears in the kingdom (that's you, subtly)*
- **Input before unlock:** "What quality do you value most in a person?" (free text, short)
- Story uses her answer: "Among all in the land, she sought someone who was truly [honest]..."
- Animation: Character silhouette walking in, candle flicker effect

---

### 📙 Chapter 3 — "The Enchanted Evening"
*The two characters share a magical moment together*
- **Input before unlock:** "What's your favorite thing to do on a perfect evening?" (short text)
- Story adapts: "They spent the evening [dancing under the stars]..."
- Animation: Stars appearing one by one, soft glow effect

---

### 📕 Chapter 4 — "The Spell"
*The story slows down — she realizes the stranger has been thinking about her all along.*
*Letters, little signs, and moments are revealed.*
- **Input before unlock:** "If you could go anywhere in the world, where would it be?" (short text)
- Story: "He had dreamed of taking her to [Paris], just the two of them..."
- Animation: Floating letter/envelope reveal, petals falling

---

### 📓 Chapter 5 — "The Question" *(The Ask-Out Chapter)*
*The actual moment — the stranger steps out of the story and speaks directly to her.*
- No input needed to unlock
- The story breaks the 4th wall: *"But this was never just a story..."*
- YOUR real message to her appears — heartfelt, personal, written by you
- **Two glowing buttons appear:**
  - 💚 "Yes, I'd love to" → Confetti explosion + a sweet thank-you message
  - ❤️ "Ask me again later" → Funny, lighthearted message (no pressure)
- Animation: Fireworks / confetti / rose petals depending on her answer

---

## 📧 Email Notification Flow
| Trigger | What You Receive |
|---|---|
| She opens the book (enters her name) | "💌 She just opened the book! [timestamp]" |
| She completes all chapters | "📖 She finished reading the story!" |
| She clicks Yes | "🎉 SHE SAID YES!! 🎉" |
| She clicks "Ask me again later" | "😅 Not yet... keep being awesome." |

---

## 🎨 Visual Design Direction
- **Color palette:** Deep navy, gold, soft pink, ivory
- **Background:** Animated starfield or slow-moving clouds
- **Book UI:** Actual book with pages that flip (CSS 3D transform)
- **Typography:** Playfair Display for headings, Dancing Script for story text
- **Particles:** Floating hearts, stars, or fireflies in background
- **Music:** Soft piano/orchestra loop (royalty-free) — muted by default, she can toggle

---

## 🗂 Project Folder Structure
```
4_her/
├── app/
│   ├── page.tsx               # Book cover / landing
│   ├── layout.tsx             # Root layout with music provider
│   ├── chapter/
│   │   └── [id]/
│   │       └── page.tsx       # Dynamic chapter pages
│   └── finale/
│       └── page.tsx           # The ask-out page
├── components/
│   ├── BookCover.tsx          # Animated cover
│   ├── ChapterInput.tsx       # Input field before each chapter
│   ├── StoryPage.tsx          # Story renderer with dynamic text
│   ├── MusicPlayer.tsx        # Background music toggle
│   ├── Particles.tsx          # Floating hearts/stars
│   └── AnswerButtons.tsx      # Yes / Ask me later buttons
├── lib/
│   ├── story.ts               # Story text templates with placeholders
│   ├── email.ts               # Email notification logic (Resend)
│   └── store.ts               # Zustand store for her answers
├── public/
│   ├── music/
│   │   └── romantic-bg.mp3
│   └── images/
│       └── (chapter illustrations)
├── styles/
│   └── globals.css            # Custom animations, book styles
├── .env.local                 # API keys (Resend, etc.)
└── PLAN.md                    # This file
```

---

## ✅ Build Checklist

### Setup
- [x] `npx create-next-app@latest 4_her` with TypeScript + Tailwind
- [x] Install dependencies: `framer-motion`, `howler`, `zustand`, `resend`
- [x] Configure Google Fonts in `layout.tsx`
- [x] Set up `.env.local` with Resend API key

### Core Features
- [x] Book cover page with open animation
- [x] Name input on cover (stored in Zustand)
- [x] Email notification on book open
- [x] Chapter 1 — input + dynamic story
- [x] Chapter 2 — input + dynamic story
- [x] Chapter 3 — input + dynamic story
- [x] Chapter 4 — input + dynamic story
- [x] Chapter 5 — final ask-out page
- [x] "Yes" button → confetti + thank you message
- [x] "Ask me later" button → funny fallback message
- [x] Email notification on each major milestone

### Polish
- [x] Background music with toggle button
- [x] Floating particles (hearts/stars)
- [x] Page flip animation between chapters
- [x] Mobile responsive (she'll likely open on her phone)
- [x] Loading/transition animations between chapters
- [x] Smooth scroll and fade-in effects per paragraph

### Deployment
- [ ] Push to GitHub (private repo)
- [ ] Deploy to Vercel
- [ ] Test the full flow end to end
- [ ] Send her the link 💌

---

## 🔑 Environment Variables Needed
```
RESEND_API_KEY=your_resend_api_key
YOUR_EMAIL=your@email.com
NEXT_PUBLIC_APP_URL=https://your-vercel-url.vercel.app
```

---

## 📦 Dependencies to Install
```bash
npm install framer-motion howler zustand resend
npm install @types/howler
```

---

## 💡 Nice-to-Have (Later)
- [ ] A countdown timer before the book opens ("Your story unlocks in...")
- [ ] Custom URL with her name (e.g., `/for-sarah`)
- [ ] Photo of the two of you hidden in the last chapter
- [ ] A "share this moment" button if she says yes

---

## 🚀 Estimated Build Time
| Phase | Time |
|---|---|
| Setup + structure | 1 hour |
| Story content + chapters | 2 hours |
| Animations + music | 2 hours |
| Email notifications | 1 hour |
| Polish + mobile | 1-2 hours |
| **Total** | **~7-8 hours** |

---

*"The best love stories are the ones where someone went the extra mile."* 💛
