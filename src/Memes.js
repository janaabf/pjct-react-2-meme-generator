import { saveAs } from 'file-saver';
import { useState } from 'react';

export default function Memes() {
  const [meme, setMeme] = useState('bender');
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');

  const urlSelector = (memes, tops, bottoms) => {
    if (!tops && !bottoms) {
      return `https://api.memegen.link/images/${memes}.png`;
    } else if (!bottoms) {
      return `https://api.memegen.link/images/${memes}/${tops}.png`;
    } else {
      return `https://api.memegen.link/images/${memes}/${tops}/${bottoms}.png`;
    }
  };

  return (
    <div className="generator">
      {meme ? (
        <img
          src={urlSelector(meme, top, bottom)}
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

      <div className="input">
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
      </div>
    </div>
  );
}
