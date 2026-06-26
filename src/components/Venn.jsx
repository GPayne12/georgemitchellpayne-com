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

export default function Venn({ cases = [] }) {
  const [active, setActive] = useState(null);
  const activeDomain = DOMAINS.find(d => d.id === active);
  const activeCases = active
    ? cases.filter(c => c.domains.includes(DOMAIN_CASE_KEY[active]))
    : [];

  return (
    <div className="venn-wrap">
      <div className="venn-left">
        <svg
          viewBox="0 0 400 378"
          className="venn-svg"
          role="img"
          aria-label="Three-circle Venn diagram showing Learning Design, Engineering & Building, and Leadership & Governance overlapping, with 'learning engineer' at the center intersection."
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
                fillOpacity: active === d.id ? 0.16 : 0.07,
                stroke: d.color,
                strokeWidth: active === d.id ? 2 : 1.5,
                strokeOpacity: 0.65,
                cursor: 'pointer',
                outline: 'none',
                transition: 'fill-opacity 140ms ease, stroke-width 140ms ease',
              }}
              onMouseEnter={() => setActive(d.id)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(d.id)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              aria-label={d.label.join(' ')}
            />
          ))}

          {/* Domain labels */}
          {DOMAINS.map(d => (
            <text
              key={`lbl-${d.id}`}
              textAnchor="middle"
              style={{
                fill: d.color,
                fontFamily: 'var(--font-mono)',
                fontSize: '11',
                letterSpacing: '0.03em',
                opacity: active && active !== d.id ? 0.4 : 1,
                transition: 'opacity 140ms ease',
              }}
            >
              <tspan x={d.labelX} dy="0">{d.label[0]}</tspan>
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

        <p className="venn-hint">Hover a circle to explore each domain.</p>
      </div>

      <div className="venn-panel" aria-live="polite" aria-atomic="true">
        {activeDomain && (
          <>
            <p className="venn-panel-label" style={{ color: activeDomain.color }}>
              {activeDomain.label.join(' ')}
            </p>
            {activeCases.length > 0 && (
              <ul className="venn-case-list">
                {activeCases.map(c => (
                  <li key={c.slug}>
                    <a href={`#${c.slug}`} className="venn-case-link">{c.title}</a>
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
