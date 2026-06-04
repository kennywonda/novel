import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const messages = {
  book_opened: (name: string) => ({
    subject: '💌 She just opened the book!',
    body: `${name} just opened your story at ${new Date().toLocaleString()}. She's reading right now! 🎉`,
  }),
  chapter_1_started: (name: string) => ({
    subject: '📘 Chapter 1: The Kingdom Awaits',
    body: `${name} just started Chapter 1 at ${new Date().toLocaleString()}. The story begins! ✨`,
  }),
  chapter_2_started: (name: string) => ({
    subject: '📗 Chapter 2: The Mysterious Stranger',
    body: `${name} is now reading Chapter 2 at ${new Date().toLocaleString()}. She's meeting "you" in the story... 👀`,
  }),
  chapter_3_started: (name: string) => ({
    subject: '📙 Chapter 3: The Enchanted Evening',
    body: `${name} reached Chapter 3 at ${new Date().toLocaleString()}. The connection is building! 💫`,
  }),
  chapter_4_started: (name: string) => ({
    subject: '📕 Chapter 4: The Spell (Final Chapter)',
    body: `${name} is reading the final chapter at ${new Date().toLocaleString()}. Almost at the big question! 🤞`,
  }),
  story_completed: (name: string) => ({
    subject: '📖 She finished reading the story!',
    body: `${name} has read all the chapters! The final question is now in front of her. Fingers crossed! 🤞`,
  }),
  she_said_yes: (name: string) => ({
    subject: '🎉 SHE SAID YES!!!',
    body: `${name} said YES! 🎊🎉💃 Go celebrate, you romantic developer, you!`,
  }),
  ask_later: (name: string) => ({
    subject: '😅 She chose "Ask me again later"',
    body: `${name} picked "ask me again later". Don't worry — she read the whole thing. That means something. Keep being awesome. 💪`,
  }),
};

export async function POST(req: NextRequest) {
  try {
    const { event, name = 'She' } = await req.json();
    const to = process.env.YOUR_EMAIL;
    const gmailUser = process.env.GMAIL_USER;
    const gmailPass = process.env.GMAIL_APP_PASSWORD;

    if (!to || !gmailUser || !gmailPass) {
      return NextResponse.json({ error: 'Email configuration missing' }, { status: 500 });
    }

    const { subject, body } = messages[event as keyof typeof messages](name);

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Story Notifications" <${gmailUser}>`,
      to,
      subject,
      text: body,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
