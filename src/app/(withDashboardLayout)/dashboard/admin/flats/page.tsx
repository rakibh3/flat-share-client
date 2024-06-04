import { Metadata } from 'next';
import FlatsListing from '../_components/FlatsListing';

export const metadata: Metadata = {
  title: 'Manage Flats',
  description: 'This is the page where admins can manage flats.',
};

const FlatManagePage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/flats`);
  const flatsData = await res.json();

  return (
    <div>
      <FlatsListing flatsData={flatsData?.data} />
    </div>
  );
};
export default FlatManagePage;
