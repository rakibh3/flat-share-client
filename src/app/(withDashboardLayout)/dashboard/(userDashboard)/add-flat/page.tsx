import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { DollarSign } from 'lucide-react';
import FileUpload from '../_components/fileUpload';

const AddFlat = () => {
  return (
    <div className="md:px-20 my-16">
      <h2 className="font-bold text-lg">Enter flats details</h2>
      <div className="p-5 rounded-lg shadow-md grid gap-7 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Location</h2>
            <Input type="text" name="location" placeholder="Ex. Dhaka" />
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500 flex">
              Rent amount <DollarSign />
            </h2>
            <Input type="number" name="rent" placeholder="Ex. 380" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Bedrooms</h2>
            <Input type="number" name="totalBedrooms" placeholder="Ex. 3" />
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500 flex">Amenities</h2>
            <Input
              type="text"
              name="amenities"
              placeholder="Ex. Gym, Parking"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Square Feet</h2>
            <Input type="number" name="squareFeet" placeholder="Ex. 1800" />
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500 flex">Total Rooms</h2>
            <Input type="text" name="totalRooms" placeholder="Ex. 4" />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10">
          <div className="flex gap-2 flex-col">
            <h2 className="text-gray-500">Description</h2>
            <Textarea
              name="description"
              placeholder="Ex. A beautiful flat descriptions with all the amenities"
            />
          </div>
          <div>
            <h2 className="font-lg text-gray-500 my-2">Upload Flat Images</h2>
            <FileUpload />
          </div>

          <div className="flex gap-7 justify-end">
            <Button variant="outline" className="text-primary border-primary">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddFlat;
