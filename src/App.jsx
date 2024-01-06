import { useState } from 'react'
import './App.css'
import thumbanilImage from './images/illustration-article.svg'
import imageavatar from './images/imageavatar.webp'

function App() {
  return (
    <>
      <main className='font-Figtree w-[100%] h-screen bg-Yellow flex justify-center items-center'>
        <div className='w-full h-full flex justify-center items-center p-10'>
          <div className='border-[1px] border-Black bg-White max-w-[380px] flex flex-col justify-center items-center p-5 rounded-xl cardshadow mb-5 transition duration:300 ease-in-out '>
            <img src={thumbanilImage} className='h-50 w-full rounded-xl' alt="illustration image" />
            <div className='text-left w-full mt-10 gap-y-5 flex flex-col'>
              <span className='flex justify-center items-center bg-Yellow px-5 py-2 text-Black font-bold rounded-md w-1/5 text-sm '>Learning</span>
              <p className='text-Black'>Published 21 Dec 2023</p>
              <h1 className='text-Black font-bold text-2xl hover:text-Yellow transition duration:300 ease-in-out'>HTML & CSS foundations</h1>
              <p className='text-Grey text'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
              <div className='flex flex-row items-center gap-x-3'>
                <img src={imageavatar} className='w-7 h-7' alt="person avatar" />
                <span className='font-bold'>Greg Hooper</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
