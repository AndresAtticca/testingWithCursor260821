"use client";

import { useState } from "react";

type RandomResponse = {
  number: number;
};

export function RandomNumberButton() {
  const [number, setNumber] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/random", { cache: "no-store" });
      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data: RandomResponse = await response.json();
      if (typeof data.number !== "number") {
        throw new Error("Invalid response");
      }

      setNumber(data.number);
    } catch {
      setError("Could not load a random number.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button type="button" onClick={handleClick} disabled={loading}>
        {loading ? "Loading…" : "Get random number"}
      </button>
      {error ? <p role="alert">{error}</p> : null}
      {number !== null && !error ? <p>{number}</p> : null}
    </div>
  );
}
