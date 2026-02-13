"use client";

import { m } from "framer-motion";
import { useState, useEffect } from "react";
import { getMarkdownContent } from "../data/content";

export function AgentModeView() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const markdownContent = getMarkdownContent(time);

  return (
    <m.main
      key="agent"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex w-full max-w-2xl flex-col items-start text-left px-4 sm:px-0"
    >
      <pre
        className="w-full whitespace-pre-wrap font-mono text-sm leading-relaxed text-black dark:text-gray-300 selection:bg-black dark:selection:bg-white selection:text-white dark:selection:text-black antialiased"
        style={{
          fontFamily:
            '"Courier New", Courier, "Lucida Sans Typewriter", "Lucida Console", monospace',
        }}
      >
        {markdownContent}
      </pre>
    </m.main>
  );
}
