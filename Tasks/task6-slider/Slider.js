import React, { useEffect, useState } from 'react'
import { FaQuoteRight } from 'react-icons/fa';

// const useSliderLogic = () => {
//     const { people, index } = initialState

//     const effect = useEffect(() => {
//         const lastIndex = people.length - 1;
//         if (index < 0) {
//             setter({ ...state, index: lastIndex });
//         }
//         if (index > lastIndex) {
//             setter({ ...state, index: 0 });
//         }
//     }, [index, people]);

//     return effect
// }
// jak to useSliderLogic przekazać z rodzica initialState i stateHook???

// const App = ()=>{
//     const data = ...
//     return (<><Slider data={data} /></>)
// }

// function useSlider(data){
//     const... = useState(data)
//     return []
// }

// const Slider = ({data})=>{
//     const sliderData = useSlider(data)
//     return  <div...></div>
// }




function Slider({ initialState, stateHook }) {

    const { state, setter } = stateHook

    const { people, index } = initialState

    const effect = useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setter({ ...state, index: lastIndex });
        }
        if (index > lastIndex) {
            setter({ ...state, index: 0 });
        }
    }, [index, people]);


    return (
        <div>
            {people.map((person, personIndex) => {
                const { id, image, name, title, quote } = person;

                let position = 'nextSlide';
                if (personIndex === index) {
                    position = 'activeSlide';
                }
                if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                    position = 'lastSlide';
                }
                return (
                    <article className={position} key={id}>
                        <img src={image} alt={name} className="person-img" />
                        <h4>{name}</h4>
                        <p className="title">{title}</p>
                        <p className="text">{quote}</p>
                        <FaQuoteRight className="icon" />
                    </article>
                );
            })}
        </div>
    )
}

export default Slider
