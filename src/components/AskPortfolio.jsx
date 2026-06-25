import { useState } from 'react';

export default function AskPortfolio() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | done | error

  async function handleSubmit(e) {
    e.preventDefault();
    const q = question.trim();
    if (!q || status === 'loading') return;

    setStatus('loading');
    setAnswer('');

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: q }),
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        setAnswer(data.error ?? 'Something went wrong. Try again.');
        setStatus('error');
      } else {
        setAnswer(data.answer);
        setStatus('done');
      }
    } catch {
      setAnswer('Request failed. Check your connection and try again.');
      setStatus('error');
    }
  }

  return (
    <div className="ask-wrap">
      <form onSubmit={handleSubmit} className="ask-form" noValidate>
        <label htmlFor="ask-input" className="sr-only">
          Ask a question about this portfolio
        </label>
        <textarea
          id="ask-input"
          className="ask-input"
          rows={2}
          maxLength={300}
          placeholder="Ask anything about this portfolio…"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          disabled={status === 'loading'}
          onKeyDown={e => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <div className="ask-row">
          <span className="ask-count" aria-hidden="true">{question.length}/300</span>
          <button
            type="submit"
            className="ask-submit"
            disabled={!question.trim() || status === 'loading'}
          >
            {status === 'loading' ? '// thinking…' : 'Ask →'}
          </button>
        </div>
      </form>

      {(status === 'done' || status === 'error') && (
        <div
          className={`ask-response${status === 'error' ? ' is-error' : ''}`}
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="ask-response-label">
            {status === 'error' ? '// error' : '// response'}
          </p>
          <p className="ask-response-body">{answer}</p>
        </div>
      )}
    </div>
  );
}
