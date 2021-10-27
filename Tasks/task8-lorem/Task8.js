import React, { useState, useCallback } from 'react';
import data from './data';
import ParagraphInput from './ParagraphInput';


const useParagraphLogic = () => {
  const [paragraphNumber, setParagraphNumber] = useState(0);
  const [text, setText] = useState([])

  const generateParagraphs = useCallback((e) => {
    e.preventDefault()

    setText(data.slice(0, paragraphNumber))
  }, [])

  return { text, generateParagraphs, setParagraphNumber, paragraphNumber }
}


function App() {
  const { text, generateParagraphs, setParagraphNumber, paragraphNumber } = useParagraphLogic()

  return (
    <div className="main-wrapper">
      <h1>Paragraph input setup</h1>
      <ParagraphInput
        paragraphNumber={paragraphNumber}
        setParagraphNumber={setParagraphNumber} generateParagraphs={generateParagraphs} />

      {text.map((e, index) => (
        <p key={index}>{e}</p>
      )
      )}

    </div>
  )
}

export default App;