import { useState, useEffect } from 'react';

interface Props {
  repo: string; // full GitHub URL
}

interface CommitData {
  sha: string;
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
    fontSize: 'var(--text-xs)',
    color: 'var(--color-ink-muted)',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '0.25rem',
    columnGap: '0.5rem',
    marginTop: 'var(--space-3)',
  },
  label: { color: 'var(--color-telemetry)' },
  key: { color: 'var(--color-ink-muted)' },
  sep: { color: 'var(--color-border)' },
  val: { color: 'var(--color-ink)' },
  dot: { color: 'var(--color-border)', paddingInline: '0.25rem' },
  msg: {
    color: 'var(--color-ink-muted)',
    maxWidth: '44ch',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  loading: { color: 'var(--color-border)' },
};

export default function GitHubTelemetry({ repo }: Props) {
  const [data, setData] = useState<CommitData | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const match = repo.match(/github\.com\/([^/?#]+\/[^/?#]+)/);
    if (!match) return;

    fetch(`https://api.github.com/repos/${match[1]}/commits?per_page=1`)
      .then(r => (r.ok ? r.json() : Promise.reject()))
      .then(([c]) =>
        setData({
          sha: c.sha.slice(0, 7),
          message: c.commit.message.split('\n')[0],
          date: c.commit.committer.date,
        })
      )
      .catch(() => setError(true));
  }, [repo]);

  if (error) return null;

  const repoName = repo.replace(/^https?:\/\/github\.com\//, '');

  return (
    <p style={s.wrap}>
      <span style={s.label}>// {repoName}</span>
      {data ? (
        <>
          <span style={s.key}>sha</span>
          <span style={s.sep}>:</span>
          <span style={s.val}>{data.sha}</span>
          <span style={s.dot}>·</span>
          <span style={s.key}>last commit</span>
          <span style={s.sep}>:</span>
          <span style={s.val}>{timeAgo(data.date)}</span>
          <span style={s.dot}>·</span>
          <span style={s.msg}>"{data.message}"</span>
        </>
      ) : (
        <span style={s.loading}>fetching…</span>
      )}
    </p>
  );
}
