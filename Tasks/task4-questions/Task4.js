import React, { useState, useMemo, useCallback } from 'react';
import data from './data';
import Question from './Question';

function Task4() {
  const [test, setTest] = useState(true)
  console.log('Task4 render')

  const someFunc = () => {
    setTest(!test)
  }

  return (
    <>
      <h2>questions and answers about login</h2>
      {useMemo(() => data.map((singleData) => (
        <Question key={singleData.id} {...singleData} someFunc={someFunc} />
      )), [data])
        // use memo do wyniesienia
      }
      <button onClick={() => setTest(!test)}>ustaw test</button>
    </>
  );
}

//załóżmy, że mamy funkję zmieniającą stan przekazaną do dziecka - w tym przypadku możemy użyć useMemo na funkcji data.map albo memo na komponencie Questions oraz useCallback na funkcji, czy w takim wypadku należy użyć useMemo z powodu prostszego zapisu?

// Jeżeli nie mielibyśmy test i setTestu i buttona to należałoby wykonać tylko memonizację
// nr 2. natomiast jeżeli przekazujemy jakąś funkcję z rodzica do dziecka która operuje na jakimś stanie w rodzicu to aby nie przerwać memonizacji musimy dodatkowo tą funkcję opakować w useCallbacka
// 3 opcja jest taka z racji tego, że komponent question jest w funckji to najlepszą opcją jest użycie useMemo i uzależnienie od tablicy data
// wtedy w przypadku gdy byśmy zrobili coś takiego jak w nr 2 to by nam to useMemo wystarczyło



export default Task4;
