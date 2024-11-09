import React from 'react'
import { Link } from 'react-router-dom'


const Cards = (props) => {
   return (
      <>
         <div className="card w-[100%] md:w-[80%] lg:w-[45%] hover:scale-105 bg-slate-800 hover:bg-slate-600 flex flex-col items-center p-4 rounded-xl text-white gap-4 cursor-pointer">
            {/* <div className="image"> */}
            <img className='w-[95%] h-[20vh] ' src={props.img} alt="Image" />
            {/* </div> */}

            <div className='Info  w-[95%]  flex flex-col gap-4'>
               <h1 className='text-2xl font-serif font-semibold'>{props.title}</h1>
               <p className=' w-full text-lg font-mono'>{props.desc}</p>
               <Link className='flex justify-center' to={props.link} target='_blank' > <button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-lg  px-5 py-2.5 text-center me-2 mb-2">See more:</button> </Link>
            </div>

         </div>
      </>
   )
}

export default Cards
