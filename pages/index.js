import { useState, useEffect } from 'react';
import YoutubeCard from '../components/YoutubeCard';
import YoutubeCardTwo from '../components/YoutubeCardTwo';
import youtube from '../components/Youtube';
import axios from 'axios';

import SearchBar from '../components/youtube/SearchBar';
import VideoList from '../components/youtube/VideoList';
import VideoDetail from '../components/youtube/VideoDetail';

const data = [
  {
    city: 'Toronto',
    averagePrice: 120,
    propertyCount: 76,
    imageUrl: '/assets/toronto.jpg',
    imageAlt: 'Toronto skyline',
  },
  {
    city: 'Malibu',
    averagePrice: 215,
    propertyCount: 43,
    imageUrl: '/assets/malibu.jpg',
    imageAlt: 'Cliff in Malibu',
  },
  {
    city: 'Chicago',
    averagePrice: 130,
    propertyCount: 115,
    imageUrl: '/assets/chicago.jpg',
    imageAlt: 'Chicago skyline',
  },
  {
    city: 'Seattle',
    averagePrice: 135,
    propertyCount: 63,
    imageUrl: '/assets/seattle.jpg',
    imageAlt: 'Seattle skyline',
  },
  {
    city: 'Colorado',
    averagePrice: 85,
    propertyCount: 47,
    imageUrl: '/assets/colorado.jpg',
    imageAlt: 'Lake in Colorado',
  },
  {
    city: 'Miami',
    averagePrice: 115,
    propertyCount: 86,
    imageUrl: '/assets/miami.jpg',
    imageAlt: 'Beach in Miami',
  },
];

const youtubeData = [
  {
    video: {
      imageUrl: '/assets/dravenmemevid1.jpg',
      imageAlt: 'Draven League Video Thumbnail',
      beds: 3,
      baths: 2,
      title: 'Modern Home in the City Center',
      priceInCents: 190000,
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 2,
    },
  },
  {
    video: {
      imageUrl: '/assets/dravenmemevid1.jpg',
      imageAlt: 'Draven League Video Thumbnail',
      beds: 3,
      baths: 2,
      title: 'Modern Home in the City Center',
      priceInCents: 190000,
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 2,
    },
  },
  {
    video: {
      imageUrl: '/assets/dravenmemevid1.jpg',
      imageAlt: 'Draven League Video Thumbnail',
      beds: 3,
      baths: 2,
      title: 'Modern Home in the City Center',
      priceInCents: 190000,
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 2,
    },
  },
  {
    video: {
      imageUrl: '/assets/dravenmemevid1.jpg',
      imageAlt: 'Draven League Video Thumbnail',
      beds: 3,
      baths: 2,
      title: 'Modern Home in the City Center',
      priceInCents: 190000,
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 2,
    },
  },
];

export default () => {
  const [videos, setVideos] = useState();

  // const onFormSubmit = data => {
  //   console.log(data);
  // };
  async function onFormSubmit(searchTerm) {
    try {
      const response = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: '',
          q: searchTerm,
        },
      });
      setVideos(response.data.items);
      console.log(videos.state[0]);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="antialiased text-gray-900">
      <div className="flex flex-col lg:flex-row">
        <div className="px-8 py-8  max-w-xl mx-auto sm:max-w-xl md:max-w-4xl lg:w-1/2 lg:max-w-full lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img
              className="h-10"
              src="/assets/youtubelogotxt.png"
              alt="youtube main logo"
            />
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src="/assets/dravenenloltexture.jpeg"
              alt="youtube main draven logo"
            />
            <h1 className="text-2xl font-bold text-gray-900 leading-tight sm:text-4xl sm:mt-8">
              Dominate every region.<br></br>
              <span className="text-orange-400">Take advantage of it.</span>
            </h1>

            <p className="mt-2 text-gray-600 sm:text-xl">
              I hope you enjoy all of my content, go forth and destroy each and
              every scrub in your region.
            </p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="btn shadow-lg text-base">
                Book your lesson
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center rounded-bl-lg"
            src="/assets/dravenenloltexture.jpeg"
            alt="youtube main draven logo"
          />
        </div>
      </div>
      <div>
        <div className="max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h2 className="text-xl text-gray-900">Popular videos</h2>
          <p className="text-gray-600">
            A selection of my top rated videos and content!
          </p>
          <div className="flex flex-wrap -mx-4">
            {data.map((card, index) => (
              <YoutubeCard card={card} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h2 className="text-xl text-gray-900">Popular videos</h2>
          <p className="text-gray-600">
            A selection of my top rated videos and content!
          </p>
          <div className="flex flex-wrap -mx-4">
            {youtubeData.map((youtubeInfo, index) => (
              <YoutubeCardTwo youtubeInfo={youtubeInfo} key={index} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h2 className="text-xl text-gray-900">Popular videos</h2>
          <p className="text-gray-600">
            A selection of my top rated videos and content!
          </p>
          <SearchBar onFormSubmit={onFormSubmit} />
          <VideoDetail />
        </div>
      </div>
    </div>
  );
};
