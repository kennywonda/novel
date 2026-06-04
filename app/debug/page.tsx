'use client';

import { useStoryStore } from '@/lib/store';

export default function DebugPage() {
  const { answers, reset } = useStoryStore();

  return (
    <div style={{ padding: '40px', color: 'white' }}>
      <h1>Debug - Current Answers</h1>
      <pre style={{ background: '#222', padding: '20px', borderRadius: '8px' }}>
        {JSON.stringify(answers, null, 2)}
      </pre>
      
      <button
        onClick={() => {
          reset();
          window.location.href = '/';
        }}
        style={{
          background: '#c9a84c',
          color: '#0a0a1a',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '1rem',
          marginTop: '20px',
        }}
      >
        Reset All Answers & Go Home
      </button>
    </div>
  );
}
