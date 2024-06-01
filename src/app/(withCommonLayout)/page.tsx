import FlatList from '@/components/Flat/FlatList';
import HeroSection from './_components/shared/HeroSection';
import Search from './_components/shared/Search';
import Testimonial from './_components/shared/Testimonial';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <Search />
      <FlatList />
      <Testimonial />
    </div>
  );
};
export default HomePage;
