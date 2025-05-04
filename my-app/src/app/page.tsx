"use client"
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Filters from './components/Filters';

import { Doctor } from './types/doctor';

import DoctorCard from './components/DoctorCard'; 

export default function Home() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filters, setFilters] = useState({ location: '', specialization: '', feeRange: '' });
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const doctorsPerPage = 10;

  useEffect(() => {
    const fetchDoctors = async () => {
      const query = new URLSearchParams({
        location: filters.location,
        specialization: filters.specialization,
        feeRange: filters.feeRange,
        page: String(page),
      });
      const res = await fetch(`/api/list-doctor-with-filter?${query.toString()}`);
      const { doctors, totalCount } = await res.json();
      setDoctors(doctors);
      setTotalCount(totalCount);
    };

    fetchDoctors();
  }, [filters, page]);

  const totalPages = Math.ceil(totalCount / doctorsPerPage);

  const handlePrev = () => setPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setPage((p) => Math.min(p + 1, totalPages));

  return (
    <>
      <Head>
        <title>Doctor Listings | Apollo Clone</title>
        <meta name="description" content="Find general physicians and internal medicine doctors." />
      </Head>
      <header className="py-6 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900 tracking-tight">Consult General Physicians Online</h1>
        <p className="text-gray-600 text-base md:text-lg">Internal Medicine Specialists</p>
      </header>
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <aside className="md:w-1/3 lg:w-1/4 bg-white rounded-lg shadow p-4">
          <Filters onFilterChange={(f) => {
            setFilters(f);
            setPage(1);
          }} />
        </aside>
        <section className="flex-1 flex flex-col gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </section>
      </div>
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold disabled:bg-gray-300 disabled:text-gray-500 transition"
        >
          Previous
        </button>
        <span className="text-gray-700 font-medium">Page {page} of {totalPages}</span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 rounded bg-blue-600 text-white font-semibold disabled:bg-gray-300 disabled:text-gray-500 transition"
        >
          Next
        </button>
      </div>
    </>
  );
}
