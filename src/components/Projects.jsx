import React from 'react';
import Navbar from './Navbar';
import Cards from './Cards';

const Projects = () => {
  return (
    <>
      <Navbar />
      <div className="w-[85vw] xl:w-[70vw] mx-auto py-20 ">
        <h1 className="text-white text-3xl md:text-5xl font-semibold font-mono p-4 pb-10 text-center">
          <u>My Projects</u>
        </h1>
        <div className="card-container flex gap-10 xl:gap-16 flex-wrap justify-center mb-10 md:mb-20">
           <Cards
            title="Noggle - A Real Time Chat Application"
            img="images/Noggle.png"
            desc="Noggle is a modern, secure chat app that supports real-time messaging, audio/video calls, and file sharing — built for seamless communication."
            link="https://noggle.onrender.com/"
            repo="https://github.com/avishkar13/Noggle"
          /> 

          <Cards
            title="NexCart - An Online Shopping Platform"
            img="images/NC.png"
            desc="NexCart is a simple e-commerce platform designed for learning, featuring a user-friendly interface for browsing products, managing a shopping cart, and handling user authentication."
            link="https://nex-cart.vercel.app/"
            repo="https://github.com/avishkar13/NexCart-frontend"
          />
          <Cards
            title="VaultKey - A Password Manager"
            img="images/V.png"
            desc="VaultKey is a simple password manager built with React, localStorage, and Tailwind CSS, allowing users to securely store and manage their passwords locally."
            link="https://avishkar13.github.io/VaultKey-A-Password-Manager/"
            repo="https://github.com/avishkar13/VaultKey-A-Password-Manager"
          />
          <Cards
            title="TaskFlow - Task Manager Website"
            img="images/TF.png"
            desc="TaskFlow is a task management app developed with React and Redux. It enables users to manage and organize tasks, with features like task filtering, drag-and-drop reordering, and status tracking."
            link="https://task-flow-task-manager.vercel.app/"
            repo="https://github.com/avishkar13/TaskFlow"
          />
          
          <Cards
            title="Todo-List"
            img="images/TD.png"
            desc="This To-Do List app, built with HTML, CSS, and JavaScript, helps users manage tasks efficiently by adding, editing, and deleting items with a user-friendly interface."
            link="https://avishkar13.github.io/Todo-list/"
            repo="https://github.com/avishkar13/Todo-list"
          />
          <Cards
            title="Portfolio-Template"
            img="images/PT.png"
            desc="This portfolio website, created using HTML, CSS, and JavaScript, showcases projects and skills with a clean, responsive design for an engaging personal online presence."
            link="https://avishkar13.github.io/Portfolio-Template/"
            repo="https://github.com/avishkar13/Portfolio-Template "
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
