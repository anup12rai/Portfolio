import { useEffect, useState } from 'react';

export function useTypingEffect(words: string[], typeMs = 70, deleteMs = 40, holdMs = 1800) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    let delay = deleting ? deleteMs : typeMs;

    if (!deleting && text === word) {
      delay = holdMs;
    } else if (deleting && text === '') {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === '') {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs]);

  return text;
}
