'use client';

import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import {
  CheckCircleIcon,
  DoorClosedIcon,
  EditIcon,
  Trash2Icon,
  XCircleIcon,
} from 'lucide-react';
import Link from 'next/link';
import FlatEditModal from './FlatEditModal';
import { useState } from 'react';
import { deleteFlat } from '../adminAction/AdminAction';
import toast from 'react-hot-toast';

const FlatsListing = ({ flatsData: flatListings }: any) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedFlat, setSelectedFlat] = useState(null);

  const handleDelete = async (id: any) => {
    try {
      const isDeleted = await deleteFlat(id);
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
    <div className="mx-auto py-12 px-2">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-2xl font-bold">Flats</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Rent</th>
              <th className="px-4 py-2 text-left">Bedrooms</th>
              <th className="px-4 py-2 text-left">Availability</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {flatListings.map((flat: any) => (
              <tr
                key={flat.id}
                className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-2">{flat.location}</td>
                <td className="px-4 py-2 text-left">${flat.rent}</td>
                <td className="px-4 py-2">
                  <span className="flex gap-2 ">
                    <span>
                      <DoorClosedIcon className="h-6 w-6 text-gray-600" />
                    </span>
                    <p className="font-semibold">{flat.totalBedrooms}</p>
                  </span>
                </td>
                <td className="px-4 py-2 text-right">
                  {flat.availability ? (
                    <CheckCircleIcon
                      className="h-5 w-5 text-green-500"
                      aria-label="Available"
                    />
                  ) : (
                    <XCircleIcon
                      className="h-5 w-5 text-red-500"
                      aria-label="Not Available"
                    />
                  )}
                </td>
                <td className="px-4 py-2 text-center">
                  <div className="flex justify-center gap-2">
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
                        <FlatEditModal
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default FlatsListing;
