import React from 'react';

const ShopCard = props => {
  return (
    <a
      href={props.card.productLink}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/3"
    >
      <div className="mt-4">
        <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
          <img
            className="h-32 w-32 flex-shrink-0"
            src={props.card.imageUrl}
            alt={props.card.imageAlt}
          />
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {props.card.title}
            </h3>
            <p className="text-gray-600">${props.card.price} </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-orange-500 hover text-orange-400 font-semibold text-sm"
              >
                Explore {props.card.designCount} designs
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ShopCard;
