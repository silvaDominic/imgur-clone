import { useState } from 'react';

import './lightbox.styles.css';

export function Lightbox({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = () => {
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div onClick={openLightbox} className="lightbox-wrapper">
        {children}
      </div>

      {isOpen && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-modal">
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              {children}
            </div>
            <button onClick={closeLightbox} className="lightbox-close-button">
              x
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
