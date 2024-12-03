import React, { useState } from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { storyContent } from '../../data/storyContent';

const StoryContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState('right');

  const nextPage = () => {
    if (currentPage < storyContent.pages.length - 1) {
      setDirection('right');
      setCurrentPage(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection('left');
      setCurrentPage(prev => prev - 1);
    }
  };

  const currentStory = storyContent.pages[currentPage];

  return (
    <div className="h-screen flex items-center justify-center p-4 bg-slate-900">
      <div className="w-full max-w-4xl h-full max-h-[900px] flex flex-col justify-between">
        <div className="text-center mb-4">
          <h1 className="text-4xl">Our Love Story</h1>
          <Heart className="mx-auto text-rose-500 animate-pulse" size={32} />
        </div>

        <div className={`card slide-transition flex-grow ${direction === 'right' ? 'translate-x-0' : '-translate-x-0'}`}>
          <div className="h-[65%] bg-slate-700">
            <img 
              src={currentStory.image} 
              alt={currentStory.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="card-content h-[35%] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl mb-2">{currentStory.title}</h2>
              <p className="text-lg leading-relaxed">{currentStory.content}</p>
            </div>
          </div>
        </div>

        <div className="navigation mt-4">
          <button 
            onClick={prevPage}
            disabled={currentPage === 0}
            className="btn btn-primary"
          >
            <ChevronLeft className="mr-2" size={20} />
            Previous
          </button>

          <span className="page-indicator">
            {currentPage + 1} of {storyContent.pages.length}
          </span>

          <button 
            onClick={nextPage}
            disabled={currentPage === storyContent.pages.length - 1}
            className="btn btn-primary"
          >
            Next
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoryContainer;