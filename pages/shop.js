import ShopCard from '../components/Shopcard';

const data = [
  {
    productLink:
      'https://www.redbubble.com/i/t-shirt/League-of-Legends-Full-Crit-by-AnJ-Designs/47128387.WFLAH.XYZ',
    imageUrl:
      'https://ih1.redbubble.net/image.1161044937.8387/ssrco,classic_tee,mens,fafafa:ca443f4786,front_alt,square_product,600x600.jpg',
    imageAlt: 'League of legends Crit Full Commit T-shirt design',
    title: 'Crit Full Commit T-shirt',
    price: 24.53,
    designCount: 12,
  },
  {
    productLink:
      'https://www.redbubble.com/i/sticker/Koala-with-a-Bush-Chook-by-AnJ-Designs/43499048.EJUG5',
    imageUrl:
      'https://ih1.redbubble.net/image.1010722460.9048/st,small,507x507-pad,600x600,f8f8f8.jpg',
    imageAlt: 'Koala with a bush chook',
    title: 'Koala with a bush chook',
    price: 1.52,
    designCount: 8,
  },
  {
    productLink:
      'https://www.redbubble.com/i/sticker/Bubble-O-Bill-Ice-Cream-Australian-Classic-by-AnJ-Designs/43574474.EJUG5',
    imageUrl:
      'https://ih1.redbubble.net/image.1014146404.4474/st,small,507x507-pad,600x600,f8f8f8.jpg',
    imageAlt: 'Bubble O Bill Ice Cream',
    title: 'Bubble O Bill Ice Cream',
    price: 1.52,
    designCount: 14,
  },
  {
    productLink:
      'https://www.redbubble.com/i/sticker/Classic-Australian-Esky-by-AnJ-Designs/43573956.EJUG5',
    imageUrl:
      'https://ih1.redbubble.net/image.1014124906.3956/st,small,507x507-pad,600x600,f8f8f8.jpg',
    imageAlt: 'Classic Australian Esky',
    title: 'Classic Australian Esky',
    price: 1.52,
    designCount: 8,
  },
  {
    productLink:
      'https://www.redbubble.com/i/sticker/Tinny-Boat-by-AnJ-Designs/43573448.EJUG5',
    imageUrl:
      'https://ih1.redbubble.net/image.1014104114.3448/st,small,507x507-pad,600x600,f8f8f8.jpg',
    imageAlt: 'Tinny Boat Sticker',
    title: 'Aussie Tinny Boat Sticker',
    price: 1.52,
    designCount: 10,
  },
  {
    productLink:
      'https://www.redbubble.com/i/t-shirt/Hustle-Grind-Rewind-Motivational-Picture-Retro-style-by-AnJ-Designs/45088433.NL9AC.XYZ',
    imageUrl:
      'https://ih1.redbubble.net/image.1075356655.8433/ssrco,unisex_tshirt,womens,fafafa:ca443f4786,front,square_product,x600-bg,f8f8f8.jpg',
    imageAlt: 'Hustle Grind Rewind T-Shirt',
    title: 'Hustle Grind Rewind T-Shirt',
    price: 24.53,
    designCount: 11,
  },
  {
    productLink:
      'https://www.redbubble.com/i/sticker/Hand-Cheezels-Iconic-by-AnJ-Designs/43437065.EJUG5',
    imageUrl:
      'https://ih1.redbubble.net/image.1008210276.7065/st,small,507x507-pad,600x600,f8f8f8.jpg',
    imageAlt: 'Iconic Cheezels Hand Design',
    title: 'Iconic Cheezels Hand Design',
    price: 1.52,
    designCount: 14,
  },
  {
    productLink:
      'https://www.redbubble.com/i/t-shirt/Hustle-Grind-Rewind-Motivational-Picture-With-Cassette-Retro-style-by-AnJ-Designs/45088614.NL9AC.XYZ',
    imageUrl:
      'https://ih1.redbubble.net/image.1075365303.8614/ssrco,unisex_tshirt,womens,fafafa:ca443f4786,front,square_product,x600-bg,f8f8f8.jpg',
    imageAlt: 'Hustle Grind Rewind T-shirt',
    title: 'Hustle Grind Rewind T-shirt',
    price: 24.53,
    designCount: 12,
  },
];

const Shop = () => {
  return (
    <div>
      <div className="max-w-md sm:max-w-xl md:max-w-4xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <div className="flex space-x-6 py-8 items-center">
          <img
            className="h-10"
            src="/assets/redbubbleicon.png"
            alt="youtube main logo"
          />
          <h2 className="text-xl text-gray-900">RedBubble Designs</h2>
        </div>
        <p className="text-gray-600">
          At the moment, I do not have access to the Redbubble API for my
          account. <br></br>You will be linked externally to Redbubbles main
          site.
        </p>
        <div className="flex flex-wrap -mx-4">
          {data.map((card, index) => (
            <ShopCard card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
