import { Metadata } from 'next';
import FlatsListing from '../_components/FlatsListing';

export const metadata: Metadata = {
  title: 'Manage Flats',
  description: 'This is the page where admins can manage flats.',
};

const FlatManagePage = async () => {
  let flatsData = [];
  try {
    const serverUrl = process.env.NEXTAUTH_URL;
    if (!serverUrl) throw new Error('Server URL not found');
    const res = await fetch(`${serverUrl}/flats`, {
      cache: 'no-cache',
      next: {
        tags: ['flats'],
      },
    });
    if (!res.ok) throw new Error('Error fetching flats data');

    flatsData = await res.json();
  } catch (error) {
    console.error('Error fetching flats data:', error);
  }

  return (
    <div>
      <FlatsListing flatsData={flatsData?.data} />
    </div>
  );
};
export default FlatManagePage;
