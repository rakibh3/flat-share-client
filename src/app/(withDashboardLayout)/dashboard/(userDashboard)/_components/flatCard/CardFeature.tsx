import React from 'react';

interface CardFeatureProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const CardFeature: React.FC<CardFeatureProps> = ({ icon, label, value }) => {
  return (
    <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
      {icon}
      <div className="mt-1.5 sm:mt-0">
        <p className="text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
};

export default CardFeature;
