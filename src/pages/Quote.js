/* eslint-disable react/self-closing-comp */
import React, { useState, useEffect } from 'react'
import quotes from '../components/QuotesArray';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  

  useEffect(() => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random.text);
    setAuthor(random.author);
  }, []);

  const changeQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random.text);
    setAuthor(random.author);
  }

  return (
    <section className='mt-10 py-8 px-3 md:w-[80%] md:px-20 md:py-24 md:mx-auto shadow-inner bg-white text-primary rounded-xl md:rounded-full text-center h-80 md:h-72 flex flex-col justify-center gap-2'>
    <h1 className='hidden md:block md:text-3xl font-extrabold underline decoration-secondary'>
      Quote from Famous People
    </h1>
    <q className='quote text-xl md:text-2xl'>{quote}</q>
    <p className='author font-extrabold text-lg md:text-xl'>~ {author}</p>
    <div className="quote-action mt-5">
      <button type='button' className='bg-slate-400 text-sm p-3 rounded-full uppercase font-bold hover:bg-slate-500 transition ease-out duration-300' onClick={changeQuote}>New Quote</button>
    </div>
  </section>
  );
  
};

export default Quote