import FlatCard from '../_components/flatCard';

const MyFlatsPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:mt-16 md:mx-4 lg:gap-6">
      <FlatCard />
      <FlatCard />
      <FlatCard />
    </div>
  );
};
export default MyFlatsPage;
