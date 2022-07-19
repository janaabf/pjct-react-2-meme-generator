// should work, but doesn't

import { useEffect, useState } from 'react';
import Memes from './Memes';

export default function MemesFetch() {
  const [meme, setMeme] = useState();
  const [url, setUrl] = useState();
  const [top, setTop] = useState('oh');
  const [bottom, setBottom] = useState('watch');

  useEffect(() => {
    async function getMemes() {
      await fetch(`https://api.memegen.link/templates`)
        .then((res) => res.json())
        .then((data) => {
          setUrl(data);
          console.log(data);
        });
    }
    getMemes().catch(() => console.error());
  }, []);

  // const allMemes = memes.map(name, id) => ()

  // console.log(allMemes);

  return (
    <>
      <img src={url.meme} alt="meme" />
      <br />

      <label>
        Meme template:
        <input
          value={meme.id}
          onChange={(event) => {
            setMeme(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label>
        Top text:
        <input
          value={top}
          onChange={(event) => {
            setTop(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label>
        Bottom text:
        <input
          value={bottom}
          onChange={(event) => {
            setBottom(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <button
        onClick={() => {
          setMeme('');
          setTop('');
          setBottom('');
        }}
      >
        Reset
      </button>
    </>
  );
}
