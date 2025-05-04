import { Doctor } from '../types/doctor';

export default function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col sm:flex-row items-center gap-6 p-4 border border-gray-200 hover:shadow-lg transition w-full">
      {/* Doctor Image Placeholder */}
      <div className="flex-shrink-0 w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
        {/* Replace with real image if available */}
        <span className="text-4xl text-blue-500 font-bold">👨‍⚕️</span>
      </div>
      {/* Doctor Info */}
      <div className="flex-1 flex flex-col gap-1 w-full">
        <h3 className="text-xl font-semibold text-blue-800 mb-1">{doctor.name}</h3>
        <p className="text-gray-700"><span className="font-medium">Specialization:</span> {doctor.specialization}</p>
        <p className="text-gray-700"><span className="font-medium">Location:</span> {doctor.location}</p>
        <p className="text-gray-700"><span className="font-medium">Experience:</span> {doctor.experience} years</p>
        <p className="text-gray-700"><span className="font-medium">Fee:</span> <span className="text-green-700 font-semibold">₹{doctor.consultationFee}</span></p>
        <p className="text-gray-700"><span className="font-medium">Availability:</span> {doctor.availability}</p>
      </div>
      {/* Consult Button */}
      <div className="flex flex-col items-center sm:items-end w-full sm:w-auto mt-4 sm:mt-0">
        <button
          className="px-5 py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
          disabled
        >
          Consult Online
        </button>
      </div>
    </div>
  );
}
