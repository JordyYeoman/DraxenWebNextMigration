import React, { useEffect, useState } from 'react';

const YoutubeCardTwo = props => {
  const [starAmount, setStarAmount] = useState(0);

  let stars = [];
  for (var i = 0; i <= 4; i++) {
    stars.push(
      <svg
        viewBox="0 0 24 24"
        key={i}
        className={
          i <= starAmount - 1
            ? 'text-orange-500 w-4 h-4 fill-current'
            : 'text-gray-400 w-4 h-4 fill-current'
        }
      >
        <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
      </svg>
    );
  }

  // Declare initial variable to then update for star rating

  useEffect(() => {
    // Calculate like/dislike percentage & convert to star rating
    const likes = parseInt(props.stats.statistics.likeCount);
    const dislikes = parseInt(props.stats.statistics.dislikeCount);
    const ratio = Math.floor((likes / (likes + dislikes)) * 100);
    const rounded = Math.ceil(ratio / 10) * 10;
    const halved = Math.floor(rounded / 2);
    const starCount = Math.floor(halved / 10);
    setStarAmount(starCount);
  }, []);

  return (
    <div className="mt-6 w-full sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/3">
      <div className="px-2">
        <div className="relative pb-3/72">
          <img
            className="absolute top-0 h-full w-full object-cover rounded-lg shadow-md"
            src={props.video.snippet.thumbnails.high.url}
            alt={props.video.snippet.description}
          />
        </div>
        <div className="relative px-4 -mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-baseline">
              <span className="inline-block bg-orange-200 text-orange-600 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                New
              </span>
              <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                &bull; {props.video.snippet.publishedAt}
              </div>
            </div>
            <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
              {props.video.snippet.title}
            </h4>
            <div>
              {props.stats.statistics.viewCount}
              <span className="text-gray-600 text-sm"> views</span>
            </div>
            <div className="mt-2 flex items-center">
              {/* // Render out 5 stars and fill stars depending on rating. Eg - rating: 4 */}
              {stars}
              <span className="text-gray-600 text-sm ml-2">
                {props.stats.statistics.commentCount} comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeCardTwo;
