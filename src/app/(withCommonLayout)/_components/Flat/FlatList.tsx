import { BedIcon, DollarSignIcon, MapPinIcon, RulerIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const FlatList = ({ flats }: any) => {
  const slicedFlats = flats?.data?.slice(0, 8);
  return (
    <div className="grid">
      <h2 className=" text-center my-8 text-4xl font-semibold text-gray-800 dark:text-gray-200">
        Featured Flats
      </h2>
      {slicedFlats?.length === 0 && (
        <div className="text-2xl font-medium text-center text-gray-500 dark:text-gray-400">
          No flats found
        </div>
      )}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 lg:p-8">
        {slicedFlats?.map((flat: any) => (
          <div
            key={flat.id}
            className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950 dark:text-gray-200"
          >
            <Link href="#" className="block" prefetch={false}>
              <Image
                src="/placeholder.svg"
                alt="Flat 1"
                width={600}
                height={400}
                className="w-full h-48 object-cover"
              />
            </Link>
            <div className="p-4">
              <h3 className="text-lg font-semibold mt-2 flex gap-2 items-center">
                <MapPinIcon className="w-5 h-5 text-gray-400 dark:text-gray-400" />
                <p className="text-sm text-gray-700">{flat.location}</p>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {flat.description.length > 44
                  ? flat.description.slice(0, 48) + '...'
                  : flat.description}
              </p>

              <div className="flex items-center justify-between mt-4 gap-2">
                <span className="flex gap-1 items-center">
                  <BedIcon className="w-5 h-5  text-gray-500 dark:text-gray-400" />
                  <span className="text-[12px] font-medium mt-1">
                    {flat.totalBedrooms} Bedrooms
                  </span>
                </span>
                <span className="flex gap-1 items-center">
                  <DollarSignIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-[12px] font-bold mt-1">
                    {flat.rent}/mo
                  </span>
                </span>
              </div>
              <div>
                <Link href={`/flat/${flat.id}`} className="block mt-4">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default FlatList;
