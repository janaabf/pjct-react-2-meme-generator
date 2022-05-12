// should work, but doesn't

import { useEffect, useState } from 'react';

export default function MemesFetch() {
  const [meme, setMeme] = useState('');
  const [top, setTop] = useState('oh');
  const [bottom, setBottom] = useState('watch');

  useEffect(() => {
    fetch(`https://api.memegen.link/templates`)
      .then((res) => res.json())
      .then((data) => {
        setMeme(data);
        console.log(data);
      })
      .catch(() => console.error());
  }, []);

  return (
    <>
      <img src={meme[3].blank} alt="meme" />
      <br />
      <button>Generate</button>
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
