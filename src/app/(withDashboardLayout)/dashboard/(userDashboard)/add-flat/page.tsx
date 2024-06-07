'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DollarSign } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Spinner from '@/app/(withCommonLayout)/_components/shared/Spinner';
import { addNewFlat } from '../userAction/userAction';
import { useState } from 'react';
import {
  MultiImageDropzone,
  type FileState,
} from '@/components/MultiImageDropzone';
import { useEdgeStore } from '@/lib/edgestore';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const AddFlat = () => {
  const router = useRouter();
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const { edgestore } = useEdgeStore();
  const [flatPhotos, setFlatPhotos] = useState<string[]>([]);

  function updateFileProgress(key: string, progress: FileState['progress']) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    const amenitiesString = data.amenities.split(',');
    const flatData = {
      location: data.location,
      amenities: amenitiesString,
      description: data.description,
      flatPhotos,
      rent: Number(data.rent),
      totalBedrooms: Number(data.totalBedrooms),
      totalRooms: Number(data.totalRooms),
      squareFeet: Number(data.squareFeet),
    };

    const res = await addNewFlat(flatData);

    if (res?.success) {
      toast.success('Flat added successfully');
      reset();
      router.push('/dashboard/my-flats');
    } else {
      toast.error(res?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:px-20 my-16">
        <h2 className="font-bold text-lg">Enter flats details</h2>
        <div className="p-5 rounded-lg shadow-md grid gap-7 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Location */}
            <div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-gray-500">Location</h2>
                <Input
                  type="text"
                  placeholder="Ex. Dhaka"
                  {...register('location', {
                    required: 'Location is required',
                  })}
                />
              </div>
              <div>
                {errors.location && (
                  <p className="text-rose-500 text-xs mt-2">
                    {String(errors.location.message)}
                  </p>
                )}
              </div>
            </div>

            {/* Rent */}
            <div className="flex gap-2 flex-col">
              <div>
                <h2 className="text-gray-500 flex">
                  Rent amount <DollarSign />
                </h2>
                <Input
                  type="number"
                  placeholder="Ex. 380"
                  {...register('rent', { required: 'Rent amount is required' })}
                />
              </div>

              <div>
                {errors.rent && (
                  <p className="text-rose-500 text-xs mt-2">
                    {String(errors.rent.message)}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Bedrooms */}
            <div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-gray-500">Bedrooms</h2>
                <Input
                  type="number"
                  placeholder="Ex. 3"
                  {...register('totalBedrooms', {
                    required: 'Number of bedrooms is required',
                  })}
                />
              </div>
              <div>
                {errors.totalBedrooms && (
                  <p className="text-rose-500 text-xs mt-2">
                    {String(errors.totalBedrooms.message)}
                  </p>
                )}
              </div>
            </div>

            {/* Amenities */}
            <div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-gray-500 flex">Amenities</h2>
                <Input
                  type="text"
                  placeholder="Ex. Gym, Parking"
                  {...register('amenities', {
                    required: 'Amenities is required',
                  })}
                />
              </div>

              <div>
                {errors.amenities && (
                  <p className="text-rose-500 text-xs mt-2">
                    {String(errors.amenities.message)}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Sq ft */}
            <div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-gray-500">Square Feet</h2>
                <Input
                  type="number"
                  placeholder="Ex. 1800"
                  {...register('squareFeet', {
                    required: 'Square feet is required',
                  })}
                />
              </div>
              <div>
                {errors.squareFeet && (
                  <p className="text-rose-500 text-xs mt-2">
                    {String(errors.squareFeet.message)}
                  </p>
                )}
              </div>
            </div>

            {/* Total room */}
            <div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-gray-500 flex">Total Rooms</h2>
                <Input
                  type="text"
                  placeholder="Ex. 4"
                  {...register('totalRooms', {
                    required: 'Total rooms are required',
                  })}
                />
              </div>

              <div>
                {errors.totalRooms && (
                  <p className="text-rose-500 text-xs mt-2">
                    {String(errors.totalRooms.message)}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {/* Description */}
            <div>
              <div className="flex gap-2 flex-col">
                <h2 className="text-gray-500">Description</h2>
                <Textarea
                  placeholder="Ex. A beautiful flat descriptions with all the amenities"
                  {...register('description', {
                    required: 'Description is required',
                  })}
                />
              </div>
              <div>
                {errors.description && (
                  <p className="text-rose-500 text-xs mt-2">
                    {String(errors.description.message)}
                  </p>
                )}
              </div>
            </div>

            <div>
              <h2 className="font-lg text-gray-500 my-2">Upload Flat Images</h2>
              <MultiImageDropzone
                value={fileStates}
                dropzoneOptions={{
                  maxFiles: 4,
                }}
                onChange={(files) => {
                  setFileStates(files);
                }}
                onFilesAdded={async (addedFiles) => {
                  setFileStates([...fileStates, ...addedFiles]);
                  await Promise.all(
                    addedFiles.map(async (addedFileState) => {
                      try {
                        const res = await edgestore.publicFiles.upload({
                          // @ts-ignore
                          file: addedFileState.file,
                          onProgressChange: async (progress) => {
                            updateFileProgress(addedFileState.key, progress);
                            if (progress === 100) {
                              // wait 1 second to set it to complete
                              // so that the user can see the progress bar at 100%
                              await new Promise((resolve) =>
                                setTimeout(resolve, 1000)
                              );
                              updateFileProgress(
                                addedFileState.key,
                                'COMPLETE'
                              );
                            }
                          },
                        });
                        setFlatPhotos((prevPhotos) => [...prevPhotos, res.url]);
                      } catch (err) {
                        updateFileProgress(addedFileState.key, 'ERROR');
                      }
                    })
                  );
                }}
              />
            </div>

            <div className="flex gap-7 justify-end">
              <Button
                type="submit"
                variant="outline"
                disabled={isSubmitting}
                className="text-primary border-primary"
              >
                {isSubmitting ? <Spinner /> : 'Add flat'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default AddFlat;
