import React, { useState } from "react";
import Qm1 from '../assests/1q.png';
import Qm2 from '../assests/2q.png';
import Qm3 from '../assests/3q.png';
import Qm4 from '../assests/4q.png';
import Qm5 from '../assests/5q.png';
import Qm6 from '../assests/6q.png';
import Qm7 from '../assests/7q.png';
import Qm8 from '../assests/8q.png';
import Qm9 from '../assests/9q.png';
import Qm10 from '../assests/10q.png';
import Qm11 from '../assests/11q.png';
import Qm12 from '../assests/12q.png';
import Qm13 from '../assests/13q.png';
import Qm14 from '../assests/14q.png';
import Qm15 from '../assests/15.png';

export default function Portfolio() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const quizMasterImages = [Qm1, Qm2, Qm3, Qm4, Qm10, Qm11, Qm12, Qm13, Qm14, Qm5, Qm9, Qm9, Qm6, Qm7, Qm8];

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? quizMasterImages.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === quizMasterImages.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 md:py-24">
      <h1 className="text-center text-3xl font-bold sm:text-4xl">
        Latest <span className="text-[#10B981]">Project</span>
      </h1>

      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <div className="w-full bg-black relative" style={{minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img
              key={currentImageIndex}
              src={quizMasterImages[currentImageIndex]}
              alt="QuizMaster"
              style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}
              onError={(e) => {
                console.error('Image failed to load:', quizMasterImages[currentImageIndex]);
                e.target.style.display = 'none';
              }}
              onLoad={() => console.log('Image loaded:', quizMasterImages[currentImageIndex])}
            />
          </div>

          <div className="flex items-center justify-center gap-6 p-6">
            <button
              onClick={handlePrevImage}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10B981] hover:bg-[#059669] transition duration-300"
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <span className="text-white/60 text-sm">
              {currentImageIndex + 1} / {quizMasterImages.length}
            </span>

            <button
              onClick={handleNextImage}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10B981] hover:bg-[#059669] transition duration-300"
            >
              <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
