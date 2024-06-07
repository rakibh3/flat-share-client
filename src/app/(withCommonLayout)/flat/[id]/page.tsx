'use client';
import { useEffect, useState } from 'react';
import Spinner from '../../_components/shared/Spinner';
import Link from 'next/link';
import Image from 'next/image';
import { MapPinIcon } from 'lucide-react';

type FlatDetails = {
  id: string;
  location: string;
  description: string;
  rent: number;
  totalBedrooms: number;
  totalRooms: number;
  squareFeet: number;
  amenities: string[];
};

const FlatDetailsPage = ({ params }: any) => {
  const [flatDetails, setFlatDetails] = useState<{ data: FlatDetails } | null>(
    null
  );

  const flatDetailsInfo = flatDetails?.data;

  useEffect(() => {
    const fetchFlatDetails = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXTAUTH_URL}/flat/${params.id}`,
          {
            method: 'GET',
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setFlatDetails(data);
      } catch (error) {
        console.error('Error fetching flat details:', error);
      }
    };
    if (params.id) {
      fetchFlatDetails();
    }
  }, [params.id]);

  if (!flatDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="grid grid-cols-2 gap-4 lg:gap-6">
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              alt="Flat Image"
              width={400}
              height={400}
              className="object-cover aspect-square"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              alt="Flat Image"
              width={400}
              height={400}
              className="object-cover aspect-square"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              alt="Flat Image"
              width={400}
              height={400}
              className="object-cover aspect-square"
            />
          </Link>
          <Link
            href="#"
            className="relative overflow-hidden rounded-lg transition-all after:opacity-0 after:absolute after:inset-0 after:bg-black hover:after:opacity-20 focus:after:opacity-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            <Image
              src="/placeholder.svg"
              alt="Flat Image"
              width={400}
              height={400}
              className="object-cover aspect-square"
            />
          </Link>
        </div>
        <div className="space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Location</h3>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-5 h-5" />
              <span>{flatDetailsInfo?.location}</span>
            </div>
          </div>
          <div>
            <p className="mt-3 text-lg text-gray-500 dark:text-gray-400">
              {flatDetailsInfo?.description}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Rent</h3>
              <p className="text-2xl font-bold">
                ${flatDetailsInfo?.rent}/month
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Bedrooms</h3>
              <p className="text-2xl font-bold">
                {flatDetailsInfo?.totalBedrooms}
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Total Rooms</h3>
              <p className="text-2xl font-bold">
                {flatDetailsInfo?.totalRooms}
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-medium">Size</h3>
              <p className="text-2xl font-bold">
                {flatDetailsInfo?.squareFeet} sq ft
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Amenities</h3>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
              {flatDetailsInfo?.amenities.map((amenity: any, index: number) => (
                <li key={index} className="flex items-center gap-2">
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-end">
            <Link
              href={`/dashboard/flat-requests/${flatDetailsInfo?.id}`}
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              prefetch={false}
            >
              Flat Share Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlatDetailsPage;
