import React from 'react'
import Navbar from './Navbar'
import Cards from './Cards'

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className='w-[80vw] xl:w-[60vw] mx-auto py-20 '>
        <h1 className='text-white text-2xl md:text-4xl font-semibold font-mono p-4 pb-10 '> <u>My Projects</u></h1>
        <div className="card-container  flex gap-16 xl:gap-20 flex-wrap justify-around mb-10 md:mb-20">
          <Cards title="VaultKey-A Password Manager" img="./src/assets/V.png" desc="VaultKey is a simple password manager built with React, localStorage, and Tailwind CSS, allowing users to securely store and manage their passwords locally." link="https://avishkar13.github.io/VaultKey-A-Password-Manager/" />
          <Cards title="Spotify Clone" img="./src/assets/S.png" desc="This Spotify clone is a music streaming web app built using HTML, CSS, and JavaScript, allowing users to browse and play songs with a simple and clean interface." link="https://www.spotifyyyc.freewebhostmost.com/" />
          <Cards title="Todo-List" img="./src/assets/TD.png" desc="This To-Do List app, built with HTML, CSS, and JavaScript, helps users manage tasks efficiently by adding, editing, and deleting items with a user-friendly interface." link="https://avishkar13.github.io/Todo-list/" />
          <Cards title="Portfolio-Template" img="./src/assets/PT.png" desc="This portfolio website, created using HTML, CSS, and JavaScript, showcases projects and skills with a clean, responsive design for an engaging personal online presence." link="https://avishkar13.github.io/Portfolio-Template/" />

        </div>
      </div>
    </>
  )
}

export default Projects
