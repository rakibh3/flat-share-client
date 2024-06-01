import Image from 'next/image';
import Link from 'next/link';
import banner from '@/../public/assets/flat-banner.jpg';

const HeroSection = () => {
  return (
    <>
      <section className="px-4 mt-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            src={banner}
            alt="Hero"
            className="mx-auto overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last"
            width={600}
            height={600}
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Your Perfect Flat Mates Awaits!
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover your dream flat and connect with like-minded flatmates.
                Post your flat or browse our listings to find your new home.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#E11D48] px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-rose-600/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-rose-50 dark:text-white dark:hover:bg-rose-50/80 dark:focus-visible:ring-rose-300"
                prefetch={false}
              >
                Share Your Flat
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-rose-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-rose-100 hover:text-rose-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-rose-950 disabled:pointer-events-none disabled:opacity-50  dark:border-rose-800 dark:bg-rose-950 dark:hover:bg-rose-800 dark:hover:text-rose-50 dark:focus-visible:ring-rose-300"
                prefetch={false}
              >
                Find a Flat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
