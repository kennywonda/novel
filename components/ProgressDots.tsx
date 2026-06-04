'use client';

interface ProgressDotsProps {
  total: number;
  current: number;
}

export default function ProgressDots({ total, current }: ProgressDotsProps) {
  return (
    <div
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 50,
      }}
    >
      {Array.from({ length: total }, (_, i) => (
        <div
          key={i}
          style={{
            width: i + 1 === current ? '24px' : '8px',
            height: '8px',
            borderRadius: '4px',
            background: i + 1 <= current
              ? 'linear-gradient(90deg, #c9a84c, #f0d080)'
              : 'rgba(201,168,76,0.2)',
            transition: 'all 0.4s ease',
          }}
        />
      ))}
    </div>
  );
}
