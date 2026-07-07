'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';

interface DoctorCardProps {
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;
  image?: string;
  index: number;
}

// Function to get initials from name
function getInitials(name: string): string {
  const parts = name.split(' ').filter(word =>
    !['Dr.', 'Prof.', 'Mr.', 'Mrs.', 'Ms.'].includes(word)
  );
  if (parts.length >= 2) {
    return parts[0][0] + parts[parts.length - 1][0];
  }
  return parts[0]?.substring(0, 2) || 'DR';
}

// Function to get gradient colors based on index
function getGradientColors(index: number): string {
  const gradients = [
    'from-blue-500 to-blue-700',
    'from-purple-500 to-purple-700',
    'from-indigo-500 to-indigo-700',
    'from-teal-500 to-teal-700',
    'from-cyan-500 to-cyan-700',
    'from-pink-500 to-pink-700',
  ];
  return gradients[index % gradients.length];
}

export default function DoctorCard({
  name,
  specialty,
  qualifications,
  experience,
  index,
}: DoctorCardProps) {
  const initials = getInitials(name);
  const gradientClass = getGradientColors(index);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Gradient Circle with Initials */}
      <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-primary-600 to-primary-700">
        <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-2xl`}>
          <span className="text-white text-4xl font-bold">{initials}</span>
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-textDark mb-2">{name}</h3>
        <p className="text-primary-600 font-semibold mb-3">{specialty}</p>

        {/* Specialization Badge */}
        <div className="inline-block bg-primary-50 text-primary-600 px-3 py-1 rounded-full text-sm font-medium mb-4">
          {specialty}
        </div>

        <div className="space-y-2 text-textGray text-sm mb-4">
          <p className="flex items-start">
            <GraduationCap className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
            <span>{qualifications}</span>
          </p>
          <p className="flex items-start">
            <Calendar className="w-5 h-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
            <span>{experience}</span>
          </p>
        </div>

        <button className="w-full bg-primary-600 hover:bg-primary-700 text-white py-2.5 rounded-lg font-semibold transition-colors duration-200">
          View Profile
        </button>
      </div>
    </motion.div>
  );
}
