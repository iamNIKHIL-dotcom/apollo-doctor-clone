"use client"
import { useEffect, useState } from 'react';
interface FilterProps {
    onFilterChange: (filters: { location: string; specialization: string; feeRange: string }) => void;
  }
  
  export default function Filters({ onFilterChange }: FilterProps) {
    const [location, setLocation] = useState('');
    const [specialization, setSpecialization] = useState('');
    const [feeRange, setFeeRange] = useState('');
  
    useEffect(() => {
      onFilterChange({ location, specialization, feeRange });
    }, [location, specialization, feeRange]);
  
    return (
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold text-blue-900 mb-2">Filters</h2>
        <label className="flex flex-col gap-1">
          <span className="text-gray-700 font-medium">Location</span>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="">All Locations</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Hyderabad">Hyderabad</option>
            
            {/* Add more as needed */}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-700 font-medium">Specialization</span>
          <select
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="">All Specializations</option>
            <option value="General Physician">General Physician</option>
            <option value="Internal Medicine">Internal Medicine</option>
            <option value="Skin Specialist">Skin Specialist</option>
            
          </select>
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-gray-700 font-medium">Consultation Fee</span>
          <select
            value={feeRange}
            onChange={(e) => setFeeRange(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="">All</option>
            <option value="100-500">₹100 - ₹500</option>
            <option value="500-1000">₹500 - ₹1000</option>
            <option value="1000+">₹1000+</option>
          </select>
        </label>
      </div>
    );
  }
  