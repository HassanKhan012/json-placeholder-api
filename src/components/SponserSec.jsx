import React from 'react';

const SponsorSec = () => {
  return (
    <div className="text-left p-4 pl-32 mt-48">
      <h1 className="text-4xl font-normal">
        Sponsors
      </h1>
      <p className="mt-6">
        JSONPlaceholder is supported by the following companies and Sponsors on GitHub, check them out 💖
      </p>

      {/* Sponsor Images Section */}
      <div className="mt-8">
        {/* Sponsor 1 */}
        <div className="flex flex-col items-start mb-8">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img 
              src="./assets/first-img.svg"  
              alt="Sponsor 1" 
              className="w-96 object-contain mb-2" 
            />
          </a>
        </div>

        {/* Sponsor 2 */}
        <div className="flex flex-col items-start">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img 
              src="./assets/second-img.png"    
              alt="Sponsor 2" 
              className="w-96 object-contain mb-2" 
            />
          </a>
          <a href="" className="mt-10 underline" target="_blank" rel="noopener noreferrer">
            Your company logo here
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorSec;
