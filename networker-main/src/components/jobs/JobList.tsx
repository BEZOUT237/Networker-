
import { JobCard, JobCardProps } from "./JobCard";

const mockJobs: JobCardProps[] = [
  {
    title: "Warehouse Assistant",
    company: "Global Logistics Inc",
    location: "Paris",
    salary: "€15/hour",
    type: "Full-time",
    description: "Join our dynamic team as a warehouse assistant. No prior experience needed, training provided. Immediate start available."
  },
  {
    title: "Service Staff",
    company: "Le Bistrot Parisien",
    location: "Paris",
    salary: "€13/hour",
    type: "Part-time",
    description: "Looking for friendly and energetic service staff. Flexible hours, great team environment."
  },
  {
    title: "Construction Helper",
    company: "BuildRight Construction",
    location: "Lyon",
    salary: "€16/hour",
    type: "Full-time",
    description: "Construction helper needed for various projects. Will train the right candidate. Must be reliable and hardworking."
  },
  {
    title: "Delivery Driver",
    company: "SpeedExpress",
    location: "Marseille",
    salary: "€14/hour",
    type: "Full-time",
    description: "Seeking delivery drivers with clean driving record. Company vehicle provided. Flexible schedule available."
  },
  {
    title: "Kitchen Porter",
    company: "Le Grand Hotel",
    location: "Nice",
    salary: "€12/hour",
    type: "Part-time",
    description: "Kitchen porter needed for busy hotel restaurant. Evening shifts available. Experience preferred but not required."
  },
  {
    title: "Retail Assistant",
    company: "Fashion Boutique",
    location: "Paris",
    salary: "€11.50/hour",
    type: "Part-time",
    description: "Join our fashion retail team. Weekend availability required. Staff discount offered."
  },
  {
    title: "Cleaning Staff",
    company: "CleanPro Services",
    location: "Lyon",
    salary: "€12.50/hour",
    type: "Flexible",
    description: "Commercial cleaning positions available. Morning and evening shifts. Training provided."
  },
  {
    title: "Factory Worker",
    company: "Industrial Solutions",
    location: "Toulouse",
    salary: "€14.50/hour",
    type: "Full-time",
    description: "Production line workers needed. No experience necessary. Regular overtime available."
  },
  {
    title: "Security Guard",
    company: "SecureForce",
    location: "Bordeaux",
    salary: "€13.50/hour",
    type: "Full-time",
    description: "Security personnel needed for retail locations. Must be available for night shifts. Training provided."
  },
  {
    title: "Moving Helper",
    company: "Swift Movers",
    location: "Lille",
    salary: "€15/hour",
    type: "Flexible",
    description: "Physical labor position helping with residential and commercial moves. Great workout while you work!"
  },
  {
    title: "Gardener",
    company: "Green Spaces Ltd",
    location: "Nantes",
    salary: "€13/hour",
    type: "Seasonal",
    description: "Seasonal gardening position. Perfect for those who love outdoor work. Tools and training provided."
  },
  {
    title: "Hotel Housekeeper",
    company: "Luxury Hotels Group",
    location: "Cannes",
    salary: "€12/hour",
    type: "Part-time",
    description: "Housekeeping staff needed for luxury hotel. Experience preferred but will train the right candidate."
  },
  {
    title: "Restaurant Dishwasher",
    company: "La Brasserie",
    location: "Strasbourg",
    salary: "€11.50/hour",
    type: "Evening",
    description: "Evening dishwasher needed for busy restaurant. Immediate start available. Meals provided."
  }
];

export const JobList = () => {
  return (
    <div className="space-y-4 animate-slideUp">
      {mockJobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}
    </div>
  );
};
