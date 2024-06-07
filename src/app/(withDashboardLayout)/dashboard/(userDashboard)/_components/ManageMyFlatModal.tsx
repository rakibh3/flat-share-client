'use client';
import { useEffect, useState } from 'react';
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';

import { updateMyFlat } from '../userAction/userAction';
import { useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const ManageMyFlatModal = ({ flat, closeModal }: any) => {
  const [state, formAction] = useFormState(
    updateMyFlat.bind(null, flat.id),
    null
  );

  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    // Set initial form values from flat object
    Object.keys(flat).forEach((key) => {
      setValue(key, flat[key]);
    });
  }, [flat, setValue]);

  const onSubmit = (data: any) => {
    const formData = new FormData();

    formData.append('location', data.location);
    formData.append('rent', data.rent);
    formData.append('totalBedrooms', data.totalBedrooms);
    formData.append('totalRooms', data.totalRooms);
    formData.append('squareFeet', data.squareFeet);

    formAction(formData);

    // closeModal();
  };

  useEffect(() => {
    if (state?.success) {
      toast.success(state?.message);
      closeModal();
    } else if (state?.success === false) {
      toast.error(state?.message);
    }
  }, [state?.success, state?.message, closeModal]);

  return (
    <>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Edit Flat Info</DialogTitle>
        </DialogHeader>
        <form className="grid gap-6 py-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                placeholder="Enter location"
                {...register('location')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="rent">Rent</Label>
              <Input
                id="rent"
                type="number"
                placeholder="Enter rent"
                {...register('rent')}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="totalBedrooms">Total Bedrooms</Label>
              <Input
                id="totalBedrooms"
                type="number"
                placeholder="Enter bedrooms"
                {...register('totalBedrooms')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="totalRooms">Total Rooms</Label>
              <Input
                id="totalRooms"
                type="number"
                placeholder="Enter rooms"
                {...register('totalRooms')}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="squareFeet">Square Feet</Label>
              <Input
                id="squareFeet"
                type="number"
                placeholder="Enter square feet"
                {...register('squareFeet')}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save Changes</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </>
  );
};
export default ManageMyFlatModal;
