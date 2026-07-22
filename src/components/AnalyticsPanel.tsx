import { useEffect, useState } from 'react';

// Live readout for /analytics. Fetches aggregates from /api/analytics and
// renders honestly by state: unprovisioned and empty states are shown as-is,
// never padded (deploy rule). Single data series throughout → one hue
// (--color-telemetry), no legend; identity is never color-alone (direct
// labels + table view below).

type Aggregates = {
  provisioned: boolean;
  error?: string;
  total?: number;
  capped?: boolean;
  firstStatement?: string | null;
  last7?: number;
  byPage?: { page: string; count: number }[];
  byDay?: { date: string; count: number }[];
};

const TELEMETRY = 'var(--color-telemetry)';
const INK = 'var(--color-ink)';
const MUTED = 'var(--color-ink-muted)';
const BORDER = 'var(--color-border)';
const SURFACE = 'var(--color-surface)';
const MONO = 'var(--font-mono, ui-monospace, monospace)';

// The root route arrives as the bare path "/"; annotate it so the row reads as
// the homepage without altering the underlying key or the honest URL scheme.
const pageLabel = (page: string) => (page === '/' ? '/ (home)' : page);

const s: Record<string, React.CSSProperties> = {
  state: { fontFamily: MONO, fontSize: 'var(--text-sm)', color: MUTED },
  tiles: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(9.5rem, 1fr))', gap: '1rem', margin: '1.5rem 0' },
  tile: { background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '6px', padding: '0.9rem 1rem' },
  tileLabel: { fontFamily: MONO, fontSize: 'var(--text-xs)', color: MUTED, margin: 0 },
  tileValue: { fontSize: 'var(--text-xl)', color: INK, margin: '0.2rem 0 0', fontWeight: 600 },
  sectionLabel: { fontFamily: MONO, fontSize: 'var(--text-xs)', color: MUTED, margin: '2rem 0 0.75rem' },
  barRow: { display: 'grid', gridTemplateColumns: 'minmax(6rem, 12rem) 1fr auto', gap: '0.6rem', alignItems: 'center', marginBottom: '0.45rem' },
  barPath: { fontFamily: MONO, fontSize: 'var(--text-sm)', color: INK, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
  barTrack: { position: 'relative', height: '8px' },
  barFill: { position: 'absolute', insetBlock: 0, left: 0, background: TELEMETRY, borderRadius: '0 4px 4px 0' },
  barCount: { fontFamily: MONO, fontSize: 'var(--text-sm)', color: MUTED, minWidth: '2ch', textAlign: 'right' },
  tableWrap: { marginTop: '2rem', fontSize: 'var(--text-sm)' },
  th: { textAlign: 'left', color: MUTED, fontFamily: MONO, fontWeight: 400, borderBottom: `1px solid ${BORDER}`, padding: '0.3rem 1rem 0.3rem 0' },
  td: { color: INK, padding: '0.3rem 1rem 0.3rem 0', borderBottom: `1px solid ${BORDER}` },
};

function DayColumns({ byDay }: { byDay: { date: string; count: number }[] }) {
  const [hover, setHover] = useState<number | null>(null);

  // Last 30 calendar days, zero-filled so quiet days are visible truth.
  const days: { date: string; count: number }[] = [];
  const counts = new Map(byDay.map((d) => [d.date, d.count]));
  for (let i = 29; i >= 0; i--) {
    const date = new Date(Date.now() - i * 86_400_000).toISOString().slice(0, 10);
    days.push({ date, count: counts.get(date) ?? 0 });
  }
  const max = Math.max(...days.map((d) => d.count), 1);
  const maxIdx = days.findIndex((d) => d.count === max);

  const W = 600, H = 120, PAD = 4;
  const slot = W / 30;
  const barW = Math.min(8, slot - 2); // thin marks, ≥2px gap between fills

  return (
    <div style={{ position: 'relative' }}>
      <svg
        viewBox={`0 0 ${W} ${H + 18}`}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        role="img"
        aria-label={`Statements per day, last 30 days. Peak: ${max} on ${days[maxIdx]?.date}.`}
      >
        <line x1="0" y1={H + 0.5} x2={W} y2={H + 0.5} stroke={BORDER} strokeWidth="1" />
        {days.map((d, i) => {
          const h = d.count === 0 ? 0 : Math.max((d.count / max) * (H - PAD), 3);
          const x = i * slot + (slot - barW) / 2;
          return (
            <g key={d.date}>
              {/* hit target wider than the mark */}
              <rect
                x={i * slot} y="0" width={slot} height={H}
                fill="transparent"
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
              />
              {d.count > 0 && (
                <rect
                  x={x} y={H - h} width={barW} height={h}
                  rx="4" ry="4"
                  fill={TELEMETRY}
                  opacity={hover === null || hover === i ? 1 : 0.45}
                  pointerEvents="none"
                />
              )}
              {/* selective direct label: peak day only */}
              {i === maxIdx && max > 0 && (
                <text x={x + barW / 2} y={H - h - 6} textAnchor="middle"
                  style={{ font: `10px ${MONO}`, fill: MUTED }}>{max}</text>
              )}
            </g>
          );
        })}
        <text x="0" y={H + 14} style={{ font: `10px ${MONO}`, fill: MUTED }}>{days[0].date.slice(5)}</text>
        <text x={W} y={H + 14} textAnchor="end" style={{ font: `10px ${MONO}`, fill: MUTED }}>{days[29].date.slice(5)}</text>
      </svg>
      {hover !== null && (
        <div style={{
          position: 'absolute', left: `${(hover / 30) * 100}%`, top: '-0.4rem',
          transform: 'translateX(-50%)', background: INK, color: 'var(--color-bg)',
          font: `11px ${MONO}`, padding: '0.2rem 0.5rem', borderRadius: '4px',
          pointerEvents: 'none', whiteSpace: 'nowrap',
        }}>
          {days[hover].date} · {days[hover].count}
        </div>
      )}
    </div>
  );
}

export default function AnalyticsPanel() {
  const [data, setData] = useState<Aggregates | null | 'error'>(null);

  useEffect(() => {
    fetch('/api/analytics')
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData('error'));
  }, []);

  if (data === null) return <p style={s.state}>// querying the pipeline…</p>;
  if (data === 'error' || (data.provisioned && data.error))
    return <p style={s.state}>// pipeline reachable, LRS is not — data unavailable right now</p>;
  if (!data.provisioned)
    return (
      <p style={s.state}>
        // pipeline built, LRS not yet connected — no data has been collected.
        This readout goes live when the credentials land; it will start from zero, in public.
      </p>
    );

  const { total = 0, last7 = 0, capped, firstStatement, byPage = [], byDay = [] } = data;

  if (total === 0)
    return <p style={s.state}>// pipeline live — zero statements collected so far. Honest zero.</p>;

  const maxPage = Math.max(...byPage.map((p) => p.count), 1);
  const topPages = byPage.slice(0, 10);

  return (
    <div>
      <div style={s.tiles}>
        <div style={s.tile}>
          <p style={s.tileLabel}>statements</p>
          <p style={s.tileValue}>{total}{capped ? '+' : ''}</p>
        </div>
        <div style={s.tile}>
          <p style={s.tileLabel}>last 7 days</p>
          <p style={s.tileValue}>{last7}</p>
        </div>
        <div style={s.tile}>
          <p style={s.tileLabel}>pages reached</p>
          <p style={s.tileValue}>{byPage.length}</p>
        </div>
        <div style={s.tile}>
          <p style={s.tileLabel}>collecting since</p>
          <p style={s.tileValue}>{firstStatement ? firstStatement.slice(0, 10) : '—'}</p>
        </div>
      </div>

      <p style={s.sectionLabel}>// statements per day — last 30 days</p>
      <DayColumns byDay={byDay} />

      <p style={s.sectionLabel}>// statements by page{byPage.length > 10 ? ' — top 10' : ''}</p>
      <div>
        {topPages.map((p) => (
          <div key={p.page} style={s.barRow} title={`${p.page} — ${p.count} statements`}>
            <span style={s.barPath}>{pageLabel(p.page)}</span>
            <span style={s.barTrack}>
              <span style={{ ...s.barFill, width: `${(p.count / maxPage) * 100}%` }} />
            </span>
            <span style={s.barCount}>{p.count}</span>
          </div>
        ))}
      </div>

      <details style={s.tableWrap}>
        <summary style={{ ...s.sectionLabel, cursor: 'pointer', margin: 0 }}>// data as table</summary>
        <table style={{ borderCollapse: 'collapse', marginTop: '0.75rem' }}>
          <caption style={{ ...s.tileLabel, textAlign: 'left', marginBottom: '0.4rem' }}>Statements by page</caption>
          <thead><tr><th style={s.th} scope="col">page</th><th style={s.th} scope="col">statements</th></tr></thead>
          <tbody>
            {byPage.map((p) => (
              <tr key={p.page}><td style={{ ...s.td, fontFamily: MONO }}>{pageLabel(p.page)}</td><td style={s.td}>{p.count}</td></tr>
            ))}
          </tbody>
        </table>
      </details>
    </div>
  );
}
