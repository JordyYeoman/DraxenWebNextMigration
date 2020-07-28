import React from 'react';

const YoutubeCardTwo = props => {
  return (
    <div className="bg-white w-full md:w-1/2 lg:w-1/2 xl:w-1/3 rounded-lg overflow-hidden border">
      <img
        className="w-full"
        src={props.youtubeInfo.video.imageUrl}
        alt={props.youtubeInfo.video.imageAlt}
      />
      <div className="p-6">
        <div className="text-gray-600 text-xs uppercase font-semibold tracking-wide">
          {props.youtubeInfo.video.beds} beds &bull;
          {props.youtubeInfo.video.baths} baths
        </div>
        <h4 className="font-semibold text-lg leading-tight truncate">
          {props.youtubeInfo.video.title}
        </h4>
        <div>
          {props.youtubeInfo.video.formattedPrice}{' '}
          <span className="text-gray-600 text-sm">/ wk</span>
        </div>
        <div className="mt-4">
          <span className="text-teal-600 font-semibold">
            {props.youtubeInfo.video.rating}/5 stars{' '}
          </span>
          <span className="text-gray-600 text-sm">
            (based on {props.youtubeInfo.video.reviewCount} reviews)
          </span>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCardTwo;
