import Image from 'next/image';
import { useState } from 'react';

const FileUpload = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleFileChange = (event: any) => {
    const files = Array.from(event.target.files as FileList);
    const acceptedTypes = [
      'image/svg+xml',
      'image/png',
      'image/jpeg',
      'image/gif',
    ];
    let valid = true;

    if (files.length !== 4) {
      valid = false;
      setErrorMessage('Please upload exactly 4 images.');
      setSelectedImages([]);
    } else {
      for (let i = 0; i < files.length; i++) {
        if (!acceptedTypes.includes(files[i].type)) {
          valid = false;
          setErrorMessage('Only SVG, PNG, JPG or GIF formats are supported.');
          setSelectedImages([]);
          break;
        }
      }
    }

    if (valid) {
      setErrorMessage('');
      setSelectedImages(files);
      // Handle file upload logic here
      console.log(files);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="px-2 mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="px-2 text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
          accept="image/svg+xml, image/png, image/jpeg, image/gif"
        />
      </label>
      <div>
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
        )}
      </div>
      <div className="mt-4 grid md:grid-cols-4 gap-4">
        {selectedImages.map((file, index) => (
          <div key={index} className="w-32 h-32">
            <Image
              src={URL.createObjectURL(file)}
              alt={`Selected ${index}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default FileUpload;
