import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const Search = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-y mt-10">
      <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
        <div className="grid max-w-[1300px] mx-auto gap-4 sm:gap-16 md:grid-cols-2">
          <div>
            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
              Find Your Perfect Flat
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Search for flats by location, price range, and number of bedrooms.
            </p>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 md:p-6 lg:p-8">
          <form className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto]">
            <div className="grid gap-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location
              </Label>
              <Input id="location" placeholder="Enter a city or neighborhood" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price-range" className="text-sm font-medium">
                Price Range
              </Label>
              <div className="flex gap-2">
                <Input id="price-range-min" placeholder="Min" />
                <span className="text-gray-500 dark:text-gray-400 mt-2">-</span>
                <Input id="price-range-max" placeholder="Max" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bedrooms" className="text-sm font-medium">
                Bedrooms
              </Label>
              <Select
              //   id="bedrooms"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="mt-7">
              Search
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Search;
