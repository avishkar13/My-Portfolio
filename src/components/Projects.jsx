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
          <Cards title="NexCart-A online shopping Platform" img="/images/NC.png" desc="NexCart is a simple e-commerce platform designed for learning, featuring a user-friendly interface for browsing products, managing a shopping cart, and handling user authentication." link="https://nex-cart.vercel.app/" />


          <Cards title="VaultKey-A Password Manager" img="/images/V.png" desc="VaultKey is a simple password manager built with React, localStorage, and Tailwind CSS, allowing users to securely store and manage their passwords locally." link="https://avishkar13.github.io/VaultKey-A-Password-Manager/" />

          <Cards title="TaskFlow - Task Manager" img="/images/TF.png" desc="TaskFlow is a task management app developed with React and Redux. It enables users to manage and organize tasks, with features like task filtering, drag-and-drop reordering, and status tracking." link="https://task-flow-task-manager.vercel.app/" />

          <Cards title="Spotify Clone" img="/images/S.png" desc="This Spotify clone is a music streaming web app built using HTML, CSS, and JavaScript, allowing users to browse and play songs with a simple and clean interface." link="https://www.spotifyyyc.freewebhostmost.com/" />

          <Cards title="Todo-List" img="/images/TD.png" desc="This To-Do List app, built with HTML, CSS, and JavaScript, helps users manage tasks efficiently by adding, editing, and deleting items with a user-friendly interface." link="https://avishkar13.github.io/Todo-list/" />

          <Cards title="Portfolio-Template" img="/images/PT.png" desc="This portfolio website, created using HTML, CSS, and JavaScript, showcases projects and skills with a clean, responsive design for an engaging personal online presence." link="https://avishkar13.github.io/Portfolio-Template/" />

        </div>
      </div>
    </>
  )
}

export default Projects
