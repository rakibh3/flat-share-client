'use client';
import Spinner from '../../_components/shared/Spinner';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getFlatDetails } from '@/app/(withDashboardLayout)/dashboard/(userDashboard)/userAction/userAction';
import { useEffect, useState } from 'react';
import { createFlatRequest } from '../../_action/requestAction';
import toast from 'react-hot-toast';

const FlatDetailsPage = ({ params }: any) => {
  const [data, setData] = useState<any>(null);

  // Load flat details
  useEffect(() => {
    const fetchData = async () => {
      const res = await getFlatDetails(params.id);
      const data = res?.data;
      setData(data);
    };
    fetchData();
  }, [params.id]);

  const handleRequest = async (flatId: string) => {
    const res = await createFlatRequest(flatId);
    if (res) {
      toast.success('Request sent successfully');
    } else {
      toast.error('Request failed');
    }
  };

  if (!data) {
    return (
      <div className="container mx-auto flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Images */}
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          <div className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300">
            {data?.flatPhotos[0] && (
              <Image
                src={data?.flatPhotos[0]}
                alt="flat image"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                priority
              />
            )}
          </div>
          <div className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300">
            {data?.flatPhotos[1] && (
              <Image
                src={data?.flatPhotos[1]}
                alt="flat image"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                priority
              />
            )}
          </div>
          <div className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300">
            {data?.flatPhotos[2] && (
              <Image
                src={data?.flatPhotos[2]}
                alt="flat image"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                priority
              />
            )}
          </div>
          <div className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300">
            {data?.flatPhotos[3] && (
              <Image
                src={data?.flatPhotos[3]}
                alt="flat image"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
                priority
              />
            )}
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Location</h3>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5" />
              <span>{data?.location}</span>
            </div>
          </div>
          <div>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
              {data?.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Rent</h3>
              <p className="text-2xl font-bold">${data?.rent}/month</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Bedrooms</h3>
              <p className="text-2xl font-bold">{data?.totalBedrooms}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Total Rooms</h3>
              <p className="text-2xl font-bold">{data?.totalRooms}</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Size</h3>
              <p className="text-2xl font-bold">{data?.squareFeet} sq ft</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Amenities</h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
              {data?.amenities.map((amenity: any, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end">
            <Button
              onClick={() => handleRequest(data?.id)}
              className="inline-flex items-center justify-center rounded-md bg-rose-500 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-rose-500/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Flat Share Request
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetailsPage;
