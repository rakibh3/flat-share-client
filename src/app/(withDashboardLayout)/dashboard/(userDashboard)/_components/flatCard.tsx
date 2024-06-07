'use client';

import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { BedSingle, EditIcon, LocateIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Link from 'next/link';
import ManageMyFlatModal from './ManageMyFlatModal';
import { deleteMyFlat } from '../userAction/userAction';
import { Button } from '@/components/ui/button';

const FlatCard = ({ myFlatsData: flats }: any) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState(null);

  const handleDelete = async (id: any) => {
    try {
      const isDeleted = await deleteMyFlat(id);
      if (isDeleted) {
        toast.success('Flat deleted successfully');
      } else {
        toast.error('Failed to delete flat');
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while deleting flat');
    }
  };

  const handleEdit = (flat: any) => {
    setSelectedFlat(flat);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedFlat(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Rental Flats</h1>
        <Button>Add New Flat</Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {flats?.map((flat: any) => (
          <div
            key={flat.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={flat.flatPhotos[0]}
              alt="flat image"
              width={400}
              height={300}
              className="w-full h-48 object-cover"
              priority
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2 flex gap-1 items-center">
                <LocateIcon />
                {flat.location}
              </h3>
              <p className="text-gray-600 mb-4">{flat.description}</p>
              <div className="flex justify-between items-center">
                <div className="text-base font-semibold ">
                  ${flat.rent}/month
                </div>
                <div className="text-gray-600 flex gap-1">
                  <BedSingle />
                  {flat.totalBedrooms}
                </div>
              </div>
              <div className="mt-4 flex justify-end gap-2">
                {/* Edit */}
                <Dialog>
                  <DialogTrigger asChild>
                    <Link
                      href="#"
                      className="bg-rose-400 hover:bg-rose-500 text-gray-800 font-medium py-1 px-2 rounded flex items-center gap-2"
                      onClick={() => handleEdit(flat)}
                      prefetch={false}
                    >
                      <EditIcon className="w-4 h-6" />
                    </Link>
                  </DialogTrigger>
                  {selectedFlat && (
                    <ManageMyFlatModal
                      flat={selectedFlat}
                      closeModal={closeEditModal}
                    />
                  )}
                </Dialog>

                {/* Delete */}
                <Link
                  href="#"
                  className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded flex items-center gap-2"
                  onClick={() => handleDelete(flat.id)}
                  prefetch={false}
                >
                  <Trash2Icon className="w-4 h-6" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default FlatCard;
