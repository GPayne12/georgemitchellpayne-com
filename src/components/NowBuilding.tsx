import { useState, useEffect } from 'react';

interface CommitData {
  message: string;
  date: string;
}

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000);
  const mins = Math.floor(diff / 60000);
  if (days > 30) return `${Math.floor(days / 30)}mo ago`;
  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  return `${mins}m ago`;
}

const s: Record<string, React.CSSProperties> = {
  wrap: {
    fontFamily: 'var(--font-mono)',
    fontSize: 'var(--text-sm)',
    color: 'var(--color-ink-muted)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0.25rem',
    columnGap: '0.5rem',
  },
  key: { color: 'var(--color-ink-muted)' },
  sep: { color: 'var(--color-border)' },
  val: { color: 'var(--color-ink)' },
  dot: { color: 'var(--color-border)', paddingInline: '0.25rem' },
  live: { color: 'var(--color-telemetry)' },
  msg: { color: 'var(--color-ink-muted)' },
};

export default function NowBuilding() {
  const [commit, setCommit] = useState<CommitData | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/GPayne12/georgemitchellpayne-com/commits?per_page=1')
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(([c]) =>
        setCommit({
          message: c.commit.message.split('\n')[0],
          date: c.commit.committer.date,
        })
      )
      .catch(() => {});
  }, []);

  return (
    <p style={s.wrap}>
      <span style={s.key}>site</span>
      <span style={s.sep}>:</span>
      <span style={s.val}>georgemitchellpayne.com</span>
      <span style={s.dot}>·</span>
      <span style={s.key}>phase</span>
      <span style={s.sep}>:</span>
      <span style={s.val}>02 — builds &amp; telemetry</span>
      {commit && (
        <>
          <span style={s.dot}>·</span>
          <span style={s.key}>last push</span>
          <span style={s.sep}>:</span>
          <span style={s.val}>{timeAgo(commit.date)}</span>
          <span style={s.dot}>·</span>
          <span style={s.msg}>"{commit.message}"</span>
        </>
      )}
      <span style={s.dot}>·</span>
      <span style={s.key}>status</span>
      <span style={s.sep}>:</span>
      <span style={s.live}>in-progress</span>
    </p>
  );
}
