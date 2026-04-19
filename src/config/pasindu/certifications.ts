/**
 * Certifications and active learning configuration.
 * Separate completed certifications from in-progress learning goals.
 */

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
  status: "completed" | "in-progress";
}

export const certifications: Certification[] = [
  {
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    status: "in-progress",
  },
  // add completed or in-progress certifications here
];
