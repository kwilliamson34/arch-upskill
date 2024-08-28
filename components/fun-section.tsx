"use client";

import { useState } from "react";

export default function FunSection({
  funChildren,
  seriousChildren,
}: {
  funChildren: React.ReactNode;
  seriousChildren: React.ReactNode;
}) {
  const [isFunMode, setIsFunMode] = useState(false);

  return (
    <section>
      <div className="mb-4">
        <button
          onClick={() => setIsFunMode(!isFunMode)}
          className={`transform rounded px-4 py-2 transition-all duration-300 hover:scale-105 ${
            isFunMode
              ? "bg-yellow-400 text-purple-800 hover:bg-yellow-300"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          {isFunMode ? "More serious plz." : "More fun plz!"}
        </button>
      </div>
      {isFunMode ? (
        <div className="fun transform rounded-xl border bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-6 text-white shadow-lg transition-all duration-500">
          {funChildren}
        </div>
      ) : (
        <div className="serious transform rounded-xl border p-6 shadow-lg transition-all duration-500">
          {seriousChildren}
        </div>
      )}
    </section>
  );
}
