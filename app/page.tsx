'use client';

import { useCallback, useState } from 'react';

const CODE_VALUE = 'i8VIpF0uuAK';

export default function HomePage() {
  const [copied, setCopied] = useState(false);

  const onCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(CODE_VALUE);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error(err);
      setCopied(false);
    }
  }, []);

  return (
    <main className="container">
      <section className="card">
        <h1>Agentic App</h1>
        <p className="subtitle">Your code</p>
        <div className="codebox">
          <code>{CODE_VALUE}</code>
          <button className="copy" onClick={onCopy} aria-label="Copy code">
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
        <p className="hint">This is served by a Next.js app and an API route.</p>
        <a className="link" href="/api/code" target="_blank" rel="noreferrer">View API JSON</a>
      </section>
    </main>
  );
}
