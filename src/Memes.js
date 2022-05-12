import { useEffect, useState } from 'react';

export default function Memes() {
  const [meme, setMeme] = useState('doge');
  const [top, setTop] = useState('oh');
  const [bottom, setBottom] = useState('watch');

  return (
    <>
      <img
        src={`https://api.memegen.link/images/${meme}/${top}/${bottom}.png`}
        alt="meme"
      />
      <br />
      <button
        onClick={() => {
          setMeme('both');
          setTop('damn');
          setBottom('be a lil creative');
        }}
      >
        Generate
      </button>
      <br />
      <label>
        meme:
        <input
          value={meme}
          onChange={(event) => {
            setMeme(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label>
        top line:
        <input
          value={top}
          onChange={(event) => {
            setTop(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label>
        top line:
        <input
          value={bottom}
          onChange={(event) => {
            setBottom(event.currentTarget.value);
          }}
        />
      </label>
    </>
  );
}
