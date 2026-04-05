import React, { useEffect, useState } from "react";

function getOrdinal(day) {
  if (day >= 11 && day <= 13) return `${day}th`;

  const remainder = day % 10;

  if (remainder === 1) return `${day}st`;
  if (remainder === 2) return `${day}nd`;
  if (remainder === 3) return `${day}rd`;
  return `${day}th`;
}

function formatDateTime(date) {
  const weekday = date.toLocaleDateString("en-GB", { weekday: "long" });
  const month = date.toLocaleDateString("en-GB", { month: "long" });
  const year = date.getFullYear();
  const day = getOrdinal(date.getDate());
  const time = date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${weekday} the ${day} of ${month} ${year} ${time}`;
}

export default function Header() {
  const [currentDateTime, setCurrentDateTime] = useState(() =>
    formatDateTime(new Date())
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(formatDateTime(new Date()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header>
      <p className="header-date-time">{currentDateTime}</p>
      <h1>Your Notebook</h1>
    </header>
  );
}
