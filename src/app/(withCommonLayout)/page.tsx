import HomePage from './_components/HomePage';

const MainHomePage = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/flats`, {
    method: 'GET',
  });
  const flats = await res.json();

  return (
    <div>
      <HomePage flats={flats} />
    </div>
  );
};
export default MainHomePage;
