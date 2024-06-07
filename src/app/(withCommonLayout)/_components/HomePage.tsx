'use client';

import { useState } from 'react';
import HeroSection from './shared/HeroSection';
import Search from './shared/Search';
import FlatList from './Flat/FlatList';
import Testimonial from './shared/Testimonial';

const HomePage = ({ flats }: any) => {
  const [filteredFlats, setFilteredFlats] = useState(flats);

  const handleSearch = (criteria: any) => {
    // Perform filtering
    const filtered = flats?.data.filter((flat: any) => {
      // Check if the location matches if it's provided
      const locationMatch =
        !criteria.location || flat.location.includes(criteria.location);

      // Check if price range matches if both min and max are provided
      const priceRangeMatch =
        (!criteria.priceRangeMin ||
          flat.rent >= Number(criteria.priceRangeMin)) &&
        (!criteria.priceRangeMax ||
          flat.rent <= Number(criteria.priceRangeMax));

      // Check if bedrooms match if provided
      const bedroomsMatch =
        !criteria.bedrooms || flat.totalBedrooms >= Number(criteria.bedrooms);

      // Return true if all conditions match
      return locationMatch && priceRangeMatch && bedroomsMatch;
    });

    setFilteredFlats(filtered);
  };

  return (
    <div>
      <HeroSection />
      <Search handleSearch={handleSearch} />
      <FlatList flats={filteredFlats} />
      <Testimonial />
    </div>
  );
};
export default HomePage;
