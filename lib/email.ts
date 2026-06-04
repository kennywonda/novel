export type NotificationEvent = 
  | 'book_opened'
  | 'chapter_1_started'
  | 'chapter_2_started'
  | 'chapter_3_started'
  | 'chapter_4_started'
  | 'story_completed'
  | 'she_said_yes'
  | 'ask_later';

interface NotificationData {
  event: NotificationEvent;
  name?: string;
  timestamp: string;
}

export async function sendNotification(data: NotificationData) {
  try {
    const response = await fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      console.error('Failed to send notification');
    }
  } catch (error) {
    console.error('Notification error:', error);
  }
}
