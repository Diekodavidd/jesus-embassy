// BibleVersePopup.jsx
import React, { useEffect, useState } from 'react';

const verses = [
  "John 3:16 - For God so loved the world...",
  "Psalm 23:1 - The Lord is my shepherd...",
  "Matthew 5:14 - You are the light of the world...",
  "Isaiah 41:10 - Fear not, for I am with you...",
];

const BibleVersePopup = () => {
  const [verse, setVerse] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setVerse(verses[Math.floor(Math.random() * verses.length)]);
      setVisible(true);
      setTimeout(() => setVisible(false), 7000);
    }, 15000); // every 15 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    visible && (
      <div style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#fff7e6',
        color: '#333',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        zIndex: 1000,
        transition: 'opacity 0.5s',
      }}>
        <strong>{verse}</strong>
      </div>
    )
  );
};

export default BibleVersePopup;
