import { BedIcon, MapPinIcon, RulerIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FlatList = () => {
  return (
    <div className="grid">
      <h2 className=" text-center my-8 text-4xl font-semibold text-gray-800 dark:text-gray-200">
        Featured Flats
      </h2>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6 lg:p-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950 dark:text-gray-200">
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
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">Downtown</span>
              </div>
              <div className="text-lg font-semibold">$1,500/mo</div>
            </div>
            <h3 className="text-lg font-semibold mt-2">
              <Link href="#" className="hover:underline" prefetch={false}>
                Cozy Flat in the Heart of the City
              </Link>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Charming flat with stunning views and easy access to all the city
              has to offer.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <BedIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">2 Bedrooms</span>
                <RulerIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">1,200 sq ft</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950 dark:text-gray-200">
          <Link href="#" className="block" prefetch={false}>
            <Image
              src="/placeholder.svg"
              alt="Flat 2"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">Uptown</span>
              </div>
              <div className="text-lg font-semibold">$2,200/mo</div>
            </div>
            <h3 className="text-lg font-semibold mt-2">
              <Link href="#" className="hover:underline" prefetch={false}>
                Modern Loft with Skyline Views
              </Link>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Spacious loft with floor-to-ceiling windows and a private balcony.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <BedIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">1 Bedroom</span>
                <RulerIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">800 sq ft</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950 dark:text-gray-200">
          <Link href="#" className="block" prefetch={false}>
            <Image
              src="/placeholder.svg"
              alt="Flat 3"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">Midtown</span>
              </div>
              <div className="text-lg font-semibold">$1,200/mo</div>
            </div>
            <h3 className="text-lg font-semibold mt-2">
              <Link href="#" className="hover:underline" prefetch={false}>
                Bright and Airy Studio Apartment
              </Link>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Compact studio with an open floor plan and plenty of natural
              light.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <BedIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">Studio</span>
                <RulerIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">500 sq ft</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-md dark:bg-gray-950 dark:text-gray-200">
          <Link href="#" className="block" prefetch={false}>
            <Image
              src="/placeholder.svg"
              alt="Flat 4"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
          </Link>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">Suburbs</span>
              </div>
              <div className="text-lg font-semibold">$2,800/mo</div>
            </div>
            <h3 className="text-lg font-semibold mt-2">
              <Link href="#" className="hover:underline" prefetch={false}>
                Charming Townhouse with Garden
              </Link>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Cozy townhouse with a private garden and close to local amenities.
            </p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <BedIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">3 Bedrooms</span>
                <RulerIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm">1,800 sq ft</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default FlatList;
