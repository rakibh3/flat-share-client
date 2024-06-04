'use client';

import { Button } from '@/components/ui/button';
import { DeleteIcon, EditIcon, Trash2Icon } from 'lucide-react';
import Link from 'next/link';

const ManageFlats = () => {
  const flatListings = [
    {
      id: 1,
      title: 'Cozy City Apartment',
      location: '123 Main St, Anytown USA',
      price: 1500,
      status: 'Active',
    },
    {
      id: 2,
      title: 'Spacious Suburban Home',
      location: '456 Oak Rd, Suburbia',
      price: 2800,
      status: 'Active',
    },
    {
      id: 3,
      title: 'Luxury Penthouse',
      location: '789 High Rise Blvd, Uptown',
      price: 4000,
      status: 'Pending',
    },
    {
      id: 4,
      title: 'Charming Country Cottage',
      location: '321 Rural Ln, Countryside',
      price: 1200,
      status: 'Inactive',
    },
    {
      id: 5,
      title: 'Modern Loft Apartment',
      location: '159 Urban St, City Center',
      price: 2200,
      status: 'Active',
    },
  ];
  function handleDelete(id) {
    console.log(`Deleting flat with ID: ${id}`);
  }
  function handleEdit(id) {
    console.log(`Editing flat with ID: ${id}`);
  }

  return (
    <div className="mx-auto py-12 px-2">
      <div className="flex items-center justify-center mb-6">
        <h1 className="text-2xl font-bold">Flats</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-800">
              <th className="px-4 py-2 text-left">Title</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-right">Price</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {flatListings.map((flat) => (
              <tr
                key={flat.id}
                className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-2">{flat.title}</td>
                <td className="px-4 py-2">{flat.location}</td>
                <td className="px-4 py-2 text-right">
                  ${flat.price.toLocaleString()}
                </td>
                <td
                  className={`px-4 py-2 ${
                    flat.status === 'Active'
                      ? 'text-green-500'
                      : flat.status === 'Pending'
                      ? 'text-yellow-500'
                      : 'text-red-500'
                  }`}
                >
                  {flat.status}
                </td>
                <td className="px-4 py-2 text-right">
                  <div className="flex justify-end gap-2">
                    <Link
                      href="#"
                      className="bg-rose-400 hover:bg-rose-500 text-gray-800 font-medium py-1 px-2 rounded flex items-center gap-2"
                      onClick={() => handleEdit(flat.id)}
                      prefetch={false}
                    >
                      <EditIcon className="w-4 h-6" />
                      <span className="sr-only">Edit</span>
                    </Link>
                    <Link
                      href="#"
                      className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded flex items-center gap-2"
                      onClick={() => handleDelete(flat.id)}
                      prefetch={false}
                    >
                      <Trash2Icon className="w-4 h-6" />
                      <span className="sr-only">Edit</span>
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
export default ManageFlats;
