import React from 'react';
import CIA from '../assets/cia.png';
import PAYKARO from '../assets/paykaro.png';

function ProjectCard({ title, description, imageSrc, techStack, link }) {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <div className="bg-white border-2 rounded-lg shadow-xl p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <div className='flex justify-center'>
        <img
          src={imageSrc}
          alt={title}
          className="w-32 h-32 object-cover rounded-full border-2 border-gray-300 m-4"
        />
      </div>
      
      <h2 className="text-xl font-bold mb-2 text-center">{title}</h2>
      <p className="text-gray-600 m-4 text-justify">{description}</p>
    
      <p className="text-black font-bold text-center">Technology Stack: <span className='text-blue-500'>{techStack}</span></p>
  
      {/* <div className="flex justify-center pt-5">
        <button 
          onClick={handleButtonClick}
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Visit to GitHub
        </button>
      </div> */}
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: 'CIA Frame work',
      description:"The Proposed CIA framework provides end-to-end accountability in highly distributed passion.To send Logs being periodically sent to the data owner and authorized party can retrieve the logs as needed. Unlike privacy protection technologies which are built on the hide-it-or-lose-it perspective. Our approach allows the data owner to not only audit his content but also enforce strong back-end protection if needed",
      imageSrc: CIA,
      techStack: 'JSP, MySQL',
    },
    {
      title: 'A Real Time 3-D Acquisition Based on 2-D Data',
      description:"To Acquire 3D-Data from available information of 2D-data, based on the 2d information to retrieve and to visualise the acquire 3D images, To increase the brightness of 2D images, here to use the gamma values for to remove the noise ratio in the images.Real-time, Low cost, reliable and accurate 3D data acquisition is a dream for us in the vision Community",
      imageSrc: CIA,
      techStack: 'ASP, C#, UML, SQL-Server 2005',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
