import { useState, useEffect } from "react";

export default function TypewriterEffect({ text, className, speed = 50 }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className={className}>
      {display}
      <span className="inline-block w-1.5 h-10 bg-indigo-400 ml-1 animate-pulse"></span>
    </h1>
  );
}
