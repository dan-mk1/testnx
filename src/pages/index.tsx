import React, { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Initial set
    setTime(new Date());
    
    // Update every second
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date | null) => {
    if (!date) return '00:00:00';
    return date.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js Clock Sample</title>
        <meta name="description" content="A simple and elegant clock built with Next.js" />
      </Head>

      <main className="main">
        <div className="clock-card">
          <h1 className="title">Bây giờ là:</h1>
          <div className="clock-display">
            {formatTime(time)}
          </div>
          <div className="date-display">
            {formatDate(time)}
          </div>
        </div>
      </main>

      <style jsx global>{`
        :root {
          --bg-color: #0f172a;
          --text-color: #f8fafc;
          --accent-color: #38bdf8;
          --card-bg: rgba(30, 41, 59, 0.7);
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: var(--bg-color);
          color: var(--text-color);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: 
            radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
            radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
            radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%);
        }

        .container {
          width: 100%;
          padding: 2rem;
        }

        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .clock-card {
          background: var(--card-bg);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 3rem;
          border-radius: 2rem;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          text-align: center;
          max-width: 500px;
          width: 100%;
          animation: fadeIn 0.8s ease-out;
        }

        .title {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--accent-color);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1rem;
        }

        .clock-display {
          font-size: 5rem;
          font-weight: 800;
          font-variant-numeric: tabular-nums;
          font-family: 'Courier New', Courier, monospace;
          background: linear-gradient(to right, #fff, var(--accent-color));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 1rem 0;
          text-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
        }

        .date-display {
          font-size: 1.1rem;
          color: #94a3b8;
          font-weight: 400;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 640px) {
          .clock-display {
            font-size: 3.5rem;
          }
          .clock-card {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
