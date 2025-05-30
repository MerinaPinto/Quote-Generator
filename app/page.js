"use client";

import { useState } from 'react';

const quotes = [
  "Believe you can and you're halfway there.",
  "You are stronger than you think.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream big. Work hard. Stay focused.",
  "Don't watch the clock; do what it does. Keep going."
];

export default function Home() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Motivational Quote Generator</h1>
      <p style={styles.quote}>{quote}</p>
      <button onClick={getRandomQuote} style={styles.button}>
        Inspire Me ✨
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    background: '#000',
    textAlign: 'center'
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  },
  quote: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    margin: '1.5rem 0',
    maxWidth: '600px'
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    background: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s'
  }
};
