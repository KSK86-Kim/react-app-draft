import React from 'react';

const ChapterMassage = ({ chapters }) => {
  // console.log(chapters);
  return (
    <>
      {chapters.map(chapter => (
        <li key={chapter.id}>
          <h4>{chapter.name}</h4>
          <p>{chapter.ref}</p>
          <p>{chapter.explanation}</p>
          <p>{chapter.nuances}</p>
        </li>
      ))}
    </>
  );
};

export default ChapterMassage;
