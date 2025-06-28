import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-shadow-restricted-names
import { Infinity } from 'ldrs/react';
import 'ldrs/react/Infinity.css';

export default function Loading({ isLoading }) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);

      setTimeout(() => setIsVisible(true), 10);
      document.body.style.pointerEvents = 'none';
    } else {
      setIsVisible(false);

      setTimeout(() => {
        setShouldRender(false);
        document.body.style.pointerEvents = '';
      }, 500);
    }

    return () => {
      document.body.style.pointerEvents = '';
    };
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      style={{
        background: '#ccc',
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 10,
        opacity: isVisible ? 0.5 : 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div
        style={{
          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.4s ease-out',
        }}
      >
        <Infinity
          size={150}
          color="#000000"
          speed={4.0}
          stroke={5.5}
          bgOpacity={0.15}
        />
      </div>
    </div>
  );
}

Loading.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
