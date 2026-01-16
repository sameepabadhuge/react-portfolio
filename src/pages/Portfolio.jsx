import React, { useState } from "react";
import Qm1 from '../assests/1q.png';
import Qm4 from '../assests/4q.png';
import Qm9 from '../assests/9q.png';
import Qm10 from '../assests/10q.png';
import Qm14 from '../assests/14q.png';

export default function Portfolio() {
  const projects = [
    {
      id: 'quiz-master',
      name: 'QuizMaster',
      description: 'An interactive quiz application with real-time feedback and results tracking.',
      details: 'Built with React to provide engaging educational content with comprehensive analytics and performance metrics.',
      category: 'Web App ',
      images: [Qm1, Qm4, Qm10, Qm14, Qm9]
    },
    {
      id: 'ems',
      name: 'EMS',
      description: 'Education Management System.',
      details: 'Coming soon. Education management system for attendance, announcements, and exam results with teacher, student, and parent roles.',
      category: 'Web App',
      images: []
    },
    {
      id: 'city-care',
      name: 'CityCare',
      description: 'smart city issue reporting system enabling citizens to report, track, and monitor municipal issues inreal time.',
      details: 'Coming soon. Connected healthcare for smart cities.',
      category: 'Web App',
      images: []
    },
    {
      id: 'serve-lanka',
      name: 'ServeLanka',
      description: 'Local service marketplace platform.',
      details: 'Coming soon. Connecting service providers with customers.',
      category: 'Mobile App',
      images: []
    }
  ];

  const [selectedProject, setSelectedProject] = useState('quiz-master');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProject = projects.find(p => p.id === selectedProject);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentProject.images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleProjectChange = (projectId) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 md:py-12">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          <span className="text-[#10B981]">Projects</span>
        </h1>
      </div>

      <div className="space-y-3 mb-6">
        {projects.map(project => (
          <button
            key={project.id}
            onClick={() => handleProjectChange(project.id)}
            className={`w-full p-2.5 rounded-lg font-medium text-sm text-left transition duration-300 ${
              selectedProject === project.id
                ? 'bg-[#10B981] text-black'
                : 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
            }`}
          >
            {project.name}
          </button>
        ))}
      </div>

      {/* Project Details and Image */}
      <div className="space-y-4">
        {/* Description */}
        <div className="bg-white/5 border border-white/10 rounded-lg p-4">
          <h2 className="text-lg font-bold mb-2">{currentProject.name}</h2>
          <p className="text-white/70 text-sm mb-2">{currentProject.description}</p>
          <p className="text-white/60 text-xs mb-3">{currentProject.details}</p>
          <span className="inline-block px-3 py-1 bg-[#10B981]/20 text-[#10B981] text-xs font-semibold rounded-full">
            {currentProject.category}
          </span>
        </div>

        {/* Images Section */}
        {currentProject.images && currentProject.images.length > 0 ? (
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5">
            <div className="w-full bg-black relative" style={{minHeight: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img
                key={currentImageIndex}
                src={currentProject.images[currentImageIndex]}
                alt={`${currentProject.name} - Screenshot`}
                style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}
              />
            </div>

            <div className="flex items-center justify-center gap-3 p-3">
              <button
                onClick={handlePrevImage}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#10B981] text-white transition duration-300"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <span className="text-white/50 text-xs">
                {currentImageIndex + 1} / {currentProject.images.length}
              </span>

              <button
                onClick={handleNextImage}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#10B981] text-white transition duration-300"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg border border-white/10 bg-white/5 h-96 flex items-center justify-center">
            <div className="text-center text-white/40">
              <svg className="h-10 w-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-xs">Images coming soon</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
