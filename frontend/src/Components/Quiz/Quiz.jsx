import React from 'react';
import './Quiz.css';

const Quiz = () => {
  return (
    <div className='quiz-container'>
      {/* Under construction banner image */}
      <img
        src="https://media.istockphoto.com/id/1411798446/vector/modern-coming-soon-under-construction-sticker-banner.jpg?s=612x612&w=0&k=20&c=KgQ9eYEfuzTdmc5ypmMYoz8JHPTbe_TjEXxyxNixKQ4="
        alt="Under Construction"
        className='construction-image'
      />
      <h1 className='heading'>Quiz Section - Under Construction</h1>
      {/* Construction warning message */}
      <p className='under-construction-text'>
        We're building the quiz section. Stay tuned for something exciting!
      </p>
      {/* Construction icon */}
      <div className="construction-icon">
        <span role="img" aria-label="construction">
          🚧
        </span>
      </div>
    </div>
  );
};

export default Quiz;
