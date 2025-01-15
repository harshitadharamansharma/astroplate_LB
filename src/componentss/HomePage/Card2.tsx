import React from 'react';

const Card = ({ title, image, onClick, isActive }) => {
  const handleClick = () => {
    if (onClick) onClick(); // Trigger the onClick callback passed from the parent
  };
// bg-clip-border border-solid-500  border-8  group-hover:border-8
  return (
    <div
      onClick={handleClick}
      className={`relative group h-48 flex flex-col rounded-xl  text-gray-700 
        ${isActive ? 'shadow-[var(--accent-focus)] ring-4 ring-[var(--accent-2)]' : 'shadow-md'} 
        hover:shadow-lg hover:shadow-[var(--accent-focus)] cursor-pointer`}
    >
      <a className="block">
        <div className="h-28">
          <div
            className={`absolute scale-75 bg-[var(--accent-2)] 
              ${isActive ? ' scale-90' : ''} 
              border-[var(--accent-2)]  
              group-hover:scale-90  top-[-30%] left-[17%]
              z-40  duration-300 h-48 w-48 rounded-[50%]`}
          >
            <img
              src={image}
              className="w-36 h-36 mt-6 m-auto"
              alt={title}
              title={title}
              loading="lazy"
              width="200"
              height="200"
            />
          </div>
        </div>
        <div className="p-4 z-10 w-full">
          <p className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased">
            {title}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Card;
