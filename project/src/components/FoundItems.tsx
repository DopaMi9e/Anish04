import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function FoundItems() {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Dummy data - in real app, fetch from Firebase
  const foundItems = [
    {
      id: 1,
      title: 'Calculator',
      description: 'Scientific calculator found in Room 204',
      location: 'Academic Block',
      date: '2024-03-12',
      contact: '9876543210',
    },
    // Add more dummy items as needed
  ];

  const filteredItems = foundItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Found Items</h1>
        <div className="mt-4 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Search found items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Location:</span> {item.location}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Date:</span> {item.date}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Contact:</span> {item.contact}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}