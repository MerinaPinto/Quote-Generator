"use client";

import { useState } from 'react';

const quotes = [
  "Believe you can and you're halfway there.",
  "You are stronger than you think.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Push yourself, because no one else is going to do it for you.",
  "Dream big. Work hard. Stay focused.",
  "Don't watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Your only limit is your mind.",
  "It always seems impossible until it’s done.",
  "Start where you are. Use what you have. Do what you can.",
  "Don’t stop until you’re proud.",
  "Small steps every day lead to big results.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Success doesn’t come from what you do occasionally; it comes from what you do consistently.",
  "Believe in yourself and all that you are.",
  "Doubt kills more dreams than failure ever will.",
  "Discipline is the bridge between goals and accomplishment.",
  "You don’t have to be great to start, but you have to start to be great.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Stay positive, work hard, and make it happen.",
  "Your journey is your strength—keep going."
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
    background: 'pink',
    textAlign: 'center'
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: "DarkBlue"
  },
  quote: {
    fontSize: '1.5rem',
    fontStyle: 'italic',
    margin: '1.5rem 0',
    maxWidth: '600px',
    color: "DarkBlue"
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    background: 'Cornsilk',
    color: 'DarkBlue',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s'
  }
};
