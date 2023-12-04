export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js",
  description: "The React Framework for the Web",
  navItems: [
    {
      label: "Siswa",
      href: "/",
    },
    {
      label: "Kelas",
      href: "/classroom",
    },
    {
      label: "Setting Siswa",
      href: "/management",
    },
  ],
  links: {
    github: "https://github.com/yugmade13",
    linkedin: "https://www.linkedin.com/in/yugma-dewangga-3a80991ba/"
  },
};
