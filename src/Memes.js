import { saveAs } from 'file-saver';
import { useState } from 'react';

export default function Memes() {
  const [meme, setMeme] = useState('bender');
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');

  // changes url according to form below
  const urlSelector = (memes, tops, bottoms) => {
    if (!tops && !bottoms) {
      return `https://api.memegen.link/images/${memes}.png`;
    } else if (!bottoms) {
      return `https://api.memegen.link/images/${memes}/${tops}.png`;
    } else if (!top) {
      return `https://api.memegen.link/images/${memes}/_/${bottoms}.png`;
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
        'try to generate your own meme. Just use the template below :)'
      )}
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
        {/* download function: */}
        <button
          onClick={() => {
            saveAs(urlSelector(meme, top, bottom), 'meme.png');
          }}
        >
          Download
        </button>
      </div>
    </div>
  );
}
