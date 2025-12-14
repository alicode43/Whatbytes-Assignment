import React from 'react';

interface RatingProps {
  initialRating: number;
  readonly?: boolean;
}

const Rating: React.FC<RatingProps> = ({ initialRating}) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-lg ${star <= initialRating ? 'text-blue-500' : 'text-blue-200'}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;