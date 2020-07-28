import React from 'react';

const YoutubeCard = props => {
  return (
    <div className="mt-6 w-full px-4 md:w-1/2 lg:w-1/2 xl:w-1/3">
      <div className="mt-4">
        <div className="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
          <img
            className="h-32 w-32 flex-shrink-0"
            src={props.card.imageUrl}
            alt={props.card.imageAlt}
          />
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {props.card.city}
            </h3>
            <p className="text-gray-600">
              {props.card.averagePrice} / night average
            </p>
            <div className="mt-4">
              <a
                href="#"
                className="text-orange-500 hover text-orange-400 font-semibold text-sm"
              >
                Explore {props.card.propertyCount} properties
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
