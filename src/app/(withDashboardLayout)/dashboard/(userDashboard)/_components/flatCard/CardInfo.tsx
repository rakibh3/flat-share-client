import React from 'react';

interface CardInfoProps {
  price: string;
  address: string;
}

const CardInfo: React.FC<CardInfoProps> = ({ price, address }) => {
  return (
    <div className="mt-2">
      <dl>
        <div>
          <dt className="sr-only">Price</dt>
          <dd className="text-sm text-gray-500">{price}</dd>
        </div>
        <div>
          <dt className="sr-only">Address</dt>
          <dd className="font-medium">{address}</dd>
        </div>
      </dl>
    </div>
  );
};

export default CardInfo;
