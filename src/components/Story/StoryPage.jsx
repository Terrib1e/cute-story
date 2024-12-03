import React from 'react';

const StoryPage = ({ title, content, image, color }) => {
  return (
    <div className={`card ${color}`}>
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover"
      />
      <div className="p-8">
        <h2 className="text-3xl font-semibold mb-4 text-white">{title}</h2>
        <p className="text-xl leading-relaxed text-slate-300">{content}</p>
      </div>
    </div>
  );
};

export default StoryPage;