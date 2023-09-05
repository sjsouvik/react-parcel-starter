import React, { useState, ReactNode } from "react";
import "./App.css";

export const App = (): ReactNode => {
  const [like, setLike] = useState(0);

  return (
    <>
      <h1 className="text-center">
        React, TypeScript starter project powered by Parcel
      </h1>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <div className="text-center">{like}</div>
        <button onClick={() => setLike(like + 1)} className="text-center">
          Like
        </button>
      </section>
    </>
  );
};
