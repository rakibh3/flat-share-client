'use client';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { CheckIcon, LinkIcon, MailIcon, PhoneIcon } from 'lucide-react';

import TeamImage1 from '@/../public/assets/team/team-img-1.png';
import TeamImage2 from '@/../public/assets/team/team-img-2.png';
import TeamImage3 from '@/../public/assets/team/team-img-3.png';
import TeamImage4 from '@/../public/assets/team/team-img-4.png';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 sm:px-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-1 py-1 text-xl font-medium dark:bg-gray-700">
                About Us
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Mission
              </h2>
              <p className="text-gray-500 md:text-xl dark:text-gray-400">
                At <span className="text-rose-500">RoomSync</span>, our mission
                is to connect people with their perfect living situation. We
                believe that finding the right flatmates is key to creating a
                comfortable and enjoyable home environment.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="grid gap-1">
              <h3 className="text-xl font-bold">Meet the Team</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Our team of dedicated professionals is passionate about helping
                you find your ideal room at{' '}
                <span className="text-rose-500">RoomSync</span>.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col items-center space-y-2">
                <Avatar>
                  <Image src={TeamImage1} alt="Avatar" height={40} width={40} />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">Rakib Hasan</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Co-Founder
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Avatar>
                  <Image src={TeamImage2} alt="Avatar" height={40} width={40} />
                  <AvatarFallback>JW</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">Viku Hasan</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Co-Founder
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Avatar>
                  <Image src={TeamImage4} alt="Avatar" height={40} width={40} />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">Olivia Martin</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Community Manager
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Avatar>
                  <Image src={TeamImage3} alt="Avatar" height={40} width={40} />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <p className="text-sm font-medium">James Austin</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tech Lead
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-16">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-950">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-center space-x-2">
                <MailIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  info@roomsync.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                >
                  +880 1745 464755
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <LinkIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <div className="flex space-x-2">
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    Facebook
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:underline dark:text-gray-400"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-950">
            <h3 className="text-lg font-bold">Our Values</h3>
            <div className="mt-4 space-y-2">
              <div className="flex items-start space-x-2">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium">Transparency</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We believe in open and honest communication with our users.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium">Community</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    We foster a welcoming and inclusive community for all
                    flatmates.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-sm font-medium">Reliability</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    You can count on us to provide a seamless and trustworthy
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutPage;
