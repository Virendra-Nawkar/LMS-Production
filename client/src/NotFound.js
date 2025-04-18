import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  // Animation for the text
  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, -50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 200,
    reset: true, // Reset the animation every time the component mounts
  });

  // Animation for the button
  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    delay: 500,
    reset: true, // Reset the animation every time the component mounts
  });

  return (
    <div className="not-found-container" key="not-found">
      <animated.h1 style={textAnimation}>404 - Page Not Found</animated.h1>
      <animated.p style={textAnimation}>
        Oops! The page you're looking for doesn't exist.
      </animated.p>
      <animated.button
        style={buttonAnimation}
        onClick={() => navigate('/')}
        className="home-button"
      >
        Go Back Home
      </animated.button>
    </div>
  );
};

export default NotFound;