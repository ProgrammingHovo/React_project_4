import React, { useState } from 'react'
import people from './data'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Review = () => {
    const [ index, setIndex ] = useState(0)
    const { name, job, image, text } = people[index]

    const checkNumber = (number) => {
        if(number > people.length - 1 ) {
            return 0;
        }

        if(number < 0) {
            return people.length - 1
        }

        return number;
    }

    const nextPerson = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }

    const prevPerson = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }

    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * people.length)
        
        if(randomNumber === index) {
            randomNumber = index + 1
        }

        setIndex(checkNumber(randomNumber))
    }

    return (
       <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='img-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='person_name'>{name}</h4>
            <p className='person_job'>{job}</p>
            <p className='person_desc'>{text}</p>
            <div className='button-container'>
                <button className='prev-button' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-button' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-button' onClick={randomPerson}>Random person</button>
       </article>
    )
}

export default Review;