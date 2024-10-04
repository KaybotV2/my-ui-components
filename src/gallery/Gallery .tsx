import { useState } from 'react';
import '../css/Gallery.css'

// Generic type for the Gallery component
type GalleryProps<T> = {
  items: T[]; // Array of items of any type
  renderItem: (item: T) => React.ReactNode; // Function to render each item
  renderDetails?: (item: T) => React.ReactNode; // Optional function to render details
};

export default function Gallery<T>({ items, renderItem, renderDetails }: GalleryProps<T>) {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const isFirstIndex = index === 0;
  const isNotLastIndex = index < items.length - 1;

  // Navigate to the next item
  function handleNextClick() {
    if (isNotLastIndex) {
      setIndex(index + 1);
    }
  }

  // Navigate to the previous item
  function handlePreviousClick() {
    if (!isFirstIndex) {
      setIndex(index - 1);
    }
  }

  // Toggle the display of more details
  function handleMoreClick() {
    setShowMore((prevShowMore) => !prevShowMore);
  }

  const currentItem = items[index]; // Get the current item

  return (
    <div className="gallery-container">
        <div className="gallery-button-container">
        <button 
        className="gallery-button" 
        onClick={handlePreviousClick} 
        disabled={isFirstIndex}
      >
        Previous
      </button>
      <button 
        className="gallery-button" 
        onClick={handleNextClick} 
        disabled={!isNotLastIndex}
      >
        Next
      </button>
        </div>

      <div className="gallery-details">
        {renderItem(currentItem)}
      </div>

      <h3 className="gallery-index">
        ({index + 1} of {items.length})
      </h3>

      {renderDetails && (
        <>
          <button className="gallery-button" onClick={handleMoreClick}>
            {showMore ? 'Hide' : 'Show'} details
          </button>
          {showMore && <div className="gallery-description">{renderDetails(currentItem)}</div>}
        </>
      )}
    </div>
  );
}
