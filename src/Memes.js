import { saveAs } from 'file-saver';
import { useState } from 'react';

export default function Memes() {
  const [meme, setMeme] = useState('doge');
  const [top, setTop] = useState('welcome');
  const [bottom, setBottom] = useState('my frend');

  return (
    <>
      {meme ? (
        <img
          src={`https://api.memegen.link/images/${meme}/${top}/${bottom}.png`}
          alt="meme"
          data-test-id="meme-image"
        />
      ) : (
        'no image yet'
      )}
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
        Meme template:
        <input
          value={meme}
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
      <button
        onClick={() => {
          saveAs(
            `https://api.memegen.link/images/${meme}/${top}/${bottom}.png`,
            'meme.png',
          );
        }}
      >
        Download
      </button>
    </>
  );
}
