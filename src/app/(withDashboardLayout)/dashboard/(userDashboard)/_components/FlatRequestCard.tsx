'use client';
import { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { LocateIcon } from 'lucide-react';

const FlatRequestCard = ({ flatRequestsData }: any) => {
  const [requests, setRequests] = useState(flatRequestsData?.data || []);

  return (
    <Card className="container mx-auto py-8 px-4 md:px-6">
      <CardHeader className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Flat Requests</h1>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {requests?.map((request: any) => (
          <Card key={request.id}>
            <CardContent className="grid grid-cols-1  items-center justify-center gap-2 pt-5">
              <div className="flex items-center gap-4">
                <LocateIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="font-medium">{request?.flat?.location}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Flat request
                  </p>
                </div>
              </div>
              <div
                className={`px-3 py-1 rounded-lg text-sm font-medium text-center ${
                  request.status === 'BOOKED'
                    ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400'
                    : request.status === 'PENDING'
                    ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400'
                    : request.status === 'REJECTED'
                    ? 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
                    : ''
                }`}
              >
                {request.status}
              </div>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};
export default FlatRequestCard;
