import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.doctor.deleteMany(); // Clear existing data

  const doctors = [
    {
      name: 'Dr. Aditi Sharma',
      specialization: 'General Physician',
      location: 'Delhi',
      experience: 8,
      consultationFee: 400,
      availability: 'Mon-Fri, 10am - 2pm',
    },
    {
      name: 'Dr. Raj Malhotra',
      specialization: 'Internal Medicine',
      location: 'Mumbai',
      experience: 12,
      consultationFee: 500,
      availability: 'Tue-Sat, 1pm - 5pm',
    },
    {
      name: 'Dr. Meera Sinha',
      specialization: 'General Physician',
      location: 'Bangalore',
      experience: 6,
      consultationFee: 300,
      availability: 'Mon-Thu, 9am - 12pm',
    },
    {
      name: 'Dr. Vikram Kapoor',
      specialization: 'Internal Medicine',
      location: 'Chennai',
      experience: 10,
      consultationFee: 600,
      availability: 'Wed-Sun, 3pm - 7pm',
    },
    {
      name: 'Dr. Anjali Deshmukh',
      specialization: 'General Physician',
      location: 'Pune',
      experience: 4,
      consultationFee: 250,
      availability: 'Mon-Fri, 11am - 3pm',
    },
    {
      name: 'Dr. Rohan Gupta',
      specialization: 'Cardiologist',
      location: 'Delhi',
      experience: 15,
      consultationFee: 800,
      availability: 'Mon-Sat, 9am - 12pm',
    },
    {
      name: 'Dr. Sneha Verma',
      specialization: 'Dermatologist',
      location: 'Mumbai',
      experience: 7,
      consultationFee: 350,
      availability: 'Tue-Fri, 2pm - 6pm',
    },
    {
      name: 'Dr. Aman Srivastava',
      specialization: 'ENT',
      location: 'Lucknow',
      experience: 9,
      consultationFee: 450,
      availability: 'Mon-Thu, 10am - 1pm',
    },
    {
      name: 'Dr. Pooja Reddy',
      specialization: 'Neurologist',
      location: 'Hyderabad',
      experience: 11,
      consultationFee: 900,
      availability: 'Mon-Fri, 1pm - 4pm',
    },
    {
      name: 'Dr. Sameer Desai',
      specialization: 'Pediatrician',
      location: 'Nagpur',
      experience: 5,
      consultationFee: 300,
      availability: 'Sat-Sun, 10am - 2pm',
    },
    {
      name: 'Dr. Kiran Joshi',
      specialization: 'Orthopedic',
      location: 'Chandigarh',
      experience: 13,
      consultationFee: 550,
      availability: 'Wed-Sat, 11am - 3pm',
    },
    {
      name: 'Dr. Nisha Aggarwal',
      specialization: 'Gynecologist',
      location: 'Ahmedabad',
      experience: 10,
      consultationFee: 650,
      availability: 'Mon-Fri, 12pm - 4pm',
    },
    {
      name: 'Dr. Aditya Bansal',
      specialization: 'Psychiatrist',
      location: 'Jaipur',
      experience: 6,
      consultationFee: 700,
      availability: 'Mon-Thu, 3pm - 6pm',
    },
    {
      name: 'Dr. Shruti Patel',
      specialization: 'Dentist',
      location: 'Surat',
      experience: 4,
      consultationFee: 250,
      availability: 'Mon-Fri, 10am - 1pm',
    },
    {
      name: 'Dr. Arjun Nair',
      specialization: 'Oncologist',
      location: 'Kochi',
      experience: 14,
      consultationFee: 1200,
      availability: 'Tue-Sat, 9am - 12pm',
    },
    {
      name: 'Dr. Farah Khan',
      specialization: 'General Physician',
      location: 'Bhopal',
      experience: 8,
      consultationFee: 400,
      availability: 'Mon-Fri, 2pm - 6pm',
    },
    {
      name: 'Dr. Ritesh Mehta',
      specialization: 'Internal Medicine',
      location: 'Indore',
      experience: 10,
      consultationFee: 500,
      availability: 'Mon-Thu, 11am - 3pm',
    },
    {
      name: 'Dr. Neha Thakur',
      specialization: 'Cardiologist',
      location: 'Noida',
      experience: 12,
      consultationFee: 850,
      availability: 'Mon-Fri, 10am - 2pm',
    },
    {
      name: 'Dr. Harshad Kulkarni',
      specialization: 'Neurologist',
      location: 'Nashik',
      experience: 9,
      consultationFee: 950,
      availability: 'Wed-Sat, 2pm - 5pm',
    },
    {
      name: 'Dr. Kavita Yadav',
      specialization: 'Dermatologist',
      location: 'Kanpur',
      experience: 7,
      consultationFee: 300,
      availability: 'Tue-Fri, 11am - 3pm',
    },
    {
      name: 'Dr. Tanmay Ghosh',
      specialization: 'ENT',
      location: 'Kolkata',
      experience: 10,
      consultationFee: 480,
      availability: 'Mon-Thu, 10am - 1pm',
    },
    {
      name: 'Dr. Richa Verma',
      specialization: 'Pediatrician',
      location: 'Gurgaon',
      experience: 5,
      consultationFee: 320,
      availability: 'Sat-Sun, 10am - 1pm',
    },
    {
      name: 'Dr. Deepak Tiwari',
      specialization: 'Orthopedic',
      location: 'Patna',
      experience: 11,
      consultationFee: 600,
      availability: 'Mon-Wed, 12pm - 4pm',
    },
    {
      name: 'Dr. Anuja Saxena',
      specialization: 'Gynecologist',
      location: 'Ranchi',
      experience: 9,
      consultationFee: 550,
      availability: 'Tue-Sat, 10am - 1pm',
    },
    {
      name: 'Dr. Manish Rawat',
      specialization: 'Psychiatrist',
      location: 'Amritsar',
      experience: 8,
      consultationFee: 750,
      availability: 'Mon-Fri, 3pm - 6pm',
    },
  ];

  await prisma.doctor.createMany({ data: doctors });

  console.log('✅ Seeded 25 doctors successfully!');
}

main()
  .catch((e) => {
    console.error('Seeding error:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
