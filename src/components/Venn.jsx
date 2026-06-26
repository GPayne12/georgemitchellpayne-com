import { useState } from 'react';

const DOMAINS = [
  {
    id: 'ld',
    label: ['Learning', 'Design'],
    color: '#b5642a',
    cx: 155, cy: 158,
    labelX: 80, labelY: 46,
  },
  {
    id: 'eng',
    label: ['Engineering', '& Building'],
    color: '#0d7d7d',
    cx: 245, cy: 158,
    labelX: 320, labelY: 46,
  },
  {
    id: 'gov',
    label: ['Leadership', '& Governance'],
    color: '#574a93',
    cx: 200, cy: 238,
    labelX: 200, labelY: 362,
  },
];

const DOMAIN_CASE_KEY = {
  ld: 'learning-design',
  eng: 'engineering',
  gov: 'leadership',
};

const R = 96;
const VB_W = 400;
const VB_H = 386;

// Convert a mouse event to SVG viewBox coordinates
function toSvgPoint(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  return {
    x: (e.clientX - rect.left) * (VB_W / rect.width),
    y: (e.clientY - rect.top)  * (VB_H / rect.height),
  };
}

// Return the id of the circle whose center is closest to (x, y),
// or null if (x, y) is outside every circle.
function nearestCircle(x, y) {
  let best = null;
  let min = Infinity;
  for (const d of DOMAINS) {
    const dist = Math.hypot(x - d.cx, y - d.cy);
    if (dist < R && dist < min) { min = dist; best = d.id; }
  }
  return best;
}

export default function Venn({ cases = [] }) {
  const [hover,    setHover]    = useState(null); // follows cursor
  const [selected, setSelected] = useState(null); // locked by click

  // Selected takes precedence; hover is the fallback while nothing is locked.
  const active = selected ?? hover;
  const activeDomain = DOMAINS.find(d => d.id === active);
  const activeCases  = active
    ? cases.filter(c => c.domains.includes(DOMAIN_CASE_KEY[active]))
    : [];

  function handleMove(e) {
    const { x, y } = toSvgPoint(e);
    const next = nearestCircle(x, y);
    // Only update state when the value actually changes to avoid spurious renders.
    setHover(prev => (prev === next ? prev : next));
  }

  function handleLeave() {
    setHover(null);
  }

  function handleClick(e) {
    const { x, y } = toSvgPoint(e);
    const hit = nearestCircle(x, y);
    // Click the same circle → deselect. Click another → select it. Click empty → deselect.
    setSelected(prev => (prev === hit || hit === null) ? null : hit);
  }

  return (
    <div className="venn-wrap">
      <div className="venn-left">
        <svg
          viewBox="0 0 400 386"
          className="venn-svg"
          role="img"
          aria-label="Three-circle Venn diagram: Learning Design, Engineering & Building, and Leadership & Governance, with 'learning engineer' at the center intersection."
          style={{ cursor: hover ? 'pointer' : 'default' }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          onClick={handleClick}
        >
          <title>The learning engineer Venn</title>

          {DOMAINS.map(d => (
            <circle
              key={d.id}
              cx={d.cx}
              cy={d.cy}
              r={R}
              style={{
                fill: d.color,
                fillOpacity: selected === d.id ? 0.22 : active === d.id ? 0.15 : 0.07,
                stroke: d.color,
                strokeWidth: selected === d.id ? 2.5 : active === d.id ? 2 : 1.5,
                strokeOpacity: 0.65,
                transition: 'fill-opacity 100ms ease, stroke-width 100ms ease',
              }}
            />
          ))}

          {/* Domain labels — y must be explicit on first tspan; without it
              labels default to y=0, bleed above the viewBox, and cause
              layout size to change during opacity transitions. */}
          {DOMAINS.map(d => (
            <text
              key={`lbl-${d.id}`}
              textAnchor="middle"
              style={{
                fill: d.color,
                fontFamily: 'var(--font-mono)',
                fontSize: '11',
                letterSpacing: '0.03em',
                opacity: active && active !== d.id ? 0.35 : 1,
                transition: 'opacity 100ms ease',
              }}
            >
              <tspan x={d.labelX} y={d.labelY}>{d.label[0]}</tspan>
              <tspan x={d.labelX} dy="15">{d.label[1]}</tspan>
            </text>
          ))}

          {/* Center label */}
          <text
            textAnchor="middle"
            style={{
              fill: 'var(--color-ink)',
              fontFamily: 'var(--font-mono)',
              fontSize: '10',
              letterSpacing: '0.07em',
              fontWeight: '500',
            }}
          >
            <tspan x={200} y={186}>learning</tspan>
            <tspan x={200} dy="14">engineer</tspan>
          </text>
        </svg>

        <p className="venn-hint">Hover over a circle to explore cases in that domain.</p>
      </div>

      <div className="venn-panel" aria-live="polite" aria-atomic="true">
        {activeDomain && (
          <>
            <p className="venn-panel-label" style={{ color: activeDomain.color }}>
              {activeDomain.label.join(' ')}
              {selected && (
                <span className="venn-lock-hint"> · click to deselect</span>
              )}
            </p>
            {activeCases.length > 0 && (
              <ul className="venn-case-list">
                {activeCases.map(c => (
                  <li key={c.slug}>
                    <a href={`/practice/${c.slug}`} className="venn-case-link">
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </div>
    </div>
  );
}
