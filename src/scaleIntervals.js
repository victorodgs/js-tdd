// Store the musical notes in chromatic scale
const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const intervalCalculator = (originNote, notes) => {
  let scalePosition = chromaticScale.indexOf(originNote);
  const distance = scalePosition + notes;
  if (distance > 11 && distance < 22) {
    scalePosition += notes - 12;
  } else if (distance > 22) {
    scalePosition += notes - 24;
  } else {
    scalePosition += notes;
  }
  return chromaticScale[scalePosition];
};

/*
* Some notes can be called by two ways
* Example: C# can be Db, D# can be Eb.
* This function will return the alias of the note
*/
const alias = (note) => {
  const aliases = {
    'C#': 'Db',
    'D#': 'Eb',
    'F#': 'Gb',
    'G#': 'Ab',
  };

  return aliases[note];
};

export { intervalCalculator, alias };
