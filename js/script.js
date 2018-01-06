/**
 * JavaScript
 */

const song = {
    name: 'Dying to live',
    artist: 'Tupac',
    featuring: 'Biggie Smalls'
  };

  const markup = `
    <div class="song">
      <p>
        ${song.name} — ${song.artist}
        ${song.featuring ? `(Featuring ${song.featuring})` : ''}
      </p>
    </div>
  `;

  document.body.innerHTML = markup;