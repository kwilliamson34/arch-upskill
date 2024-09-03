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
      <div className="my-4 flex justify-center">
        <button
          onClick={() => setIsFunMode(!isFunMode)}
          className={`transform rounded-full px-6 py-3 font-bold transition-all duration-300 hover:rotate-3 hover:scale-110 focus:outline-none focus:ring-4 ${
            isFunMode
              ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-purple-800 hover:from-yellow-300 hover:to-orange-400 focus:ring-yellow-300"
              : "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-400 hover:to-purple-500 focus:ring-blue-300"
          }`}
        >
          <span className="inline-block transform transition-transform group-hover:scale-110">
            {isFunMode ? "🧐 Serious Mode" : "🎉 Fun Mode!"}
          </span>
        </button>
      </div>
      {isFunMode ? (
        <div className="fun transform rounded-xl border bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-6 text-white shadow-lg transition-all duration-200">
          {funChildren}
        </div>
      ) : (
        <div className="serious transform rounded-xl border p-6 shadow-lg transition-all duration-200">
          {seriousChildren}
        </div>
      )}
    </section>
  );
}
