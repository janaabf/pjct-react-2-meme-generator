import { saveAs } from 'file-saver';
import { useState } from 'react';

export default function Memes() {
  const [meme, setMeme] = useState('bender');
  const [top, setTop] = useState('greetings');
  const [bottom, setBottom] = useState('my friend');

  return (
    <>
      {meme ? (
        <img
          src={`https://api.memegen.link/images/${meme}/${top}/${bottom}.png`}
          alt="meme"
          data-test-id="meme-image"
        />
      ) : (
        'generate meme by pressing the generate-button, or filling out the template.'
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
