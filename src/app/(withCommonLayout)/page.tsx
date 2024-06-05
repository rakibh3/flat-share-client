import HomePage from './_components/HomePage';

const MainHomePage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/flats`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: {
      tags: ['homeFlats'],
    },
  });
  const flats = await res.json();

  return (
    <div>
      <HomePage flats={flats} />
    </div>
  );
};
export default MainHomePage;
