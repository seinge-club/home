export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

/**
 * To create a background that covers the entire screen but remains subtle and non-intrusive,
 * you should not modify this data file directly. Instead, add a global background style
 * in your main layout or _app.tsx file. For example, use a fixed div with low opacity or a CSS background.
 * 
 * Example (in your main layout or _app.tsx):
 * 
 * <div className="fixed inset-0 -z-10 bg-[url('/images/your-bg.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
 * 
 * This will ensure the background is visible in whitespace but does not interfere with content.
 * 
 * No changes needed in this data file.
 */
export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
    {
      title: "Sofía",
      short: "Martínez",
      icon: "/images/testimonials/avatar1.png",
      background: "bg-transparent",
      price: "“Nunca imaginé que podría desenvolverme tan bien en inglés. La experiencia fue divertida y muy natural.”",
      mark: "Architect",
      width: 60,
      height: 60,
      padding: "px-0 py-0",
    },
    {
      title: "Carlos",
      short: "Ruiz",
      icon: "/images/testimonials/avatar2.png",
      background: "bg-transparent",
      price: "“Lo que más me gustó fue la dinámica. No sentí que estudiaba, sino que compartía con amigos.”",
      mark: "Entrepreneur",
      width: 60,
      height: 60,
      padding: "px-0 py-0",
    },
    {
      title: "Valentina",
      short: "López",
      icon: "/images/testimonials/avatar3.png",
      background: "bg-transparent",
      price: "“Perdí el miedo a hablar. Sainge Club me dio la confianza que necesitaba para mi carrera.”",
      mark: "Student",
      width: 60,
      height: 60,
      padding: "px-0 py-0",
    },
  ];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-wallet.svg",
    title: "Regístrate y comienza",
  },
  {
    image: "/images/portfolio/icon-vault.svg",
    title: "Accede a las dos primeras sesiones",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "Desbloquea tu voz",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "100% Secure" },
  { title: "A Fraction of the Cost" },
  { title: "More Durable" },
  { title: "Easier to Use" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
    {
      icon: "/images/perks/icon-support.svg",
      title: "24/7 Support",
      text: "Need help? Get your requests solved quickly via support team.",
      space: "lg:mt-8",
    },
    {
      icon: "/images/perks/icon-community.svg",
      title: "Community",
      text: "Join the conversations on our worldwide OKEx communities",
      space: "lg:mt-14",
    },
    {
      icon: "/images/perks/icon-academy.svg",
      title: "Academy",
      text: "Learn blockchain and<br /> crypto for free.",
      space: "lg:mt-4",
    },
  ];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
    {
      icon: "/images/timeline/icon-planning.svg",
      title: "Everything is Essential",
      text: "Speaking, listening, understanding, expressing yourself… and yes, grammar too.",
      position: "md:top-0 md:left-0",
    },
    {
      icon: "/images/timeline/icon-refinement.svg",
      title: "Contextual Grammar",
      text: "Grammar isn't taught in isolation, it's learned through real conversations.",
      position: "md:top-0 md:right-0",
    },
    {
      icon: "/images/timeline/icon-prototype.svg",
      title: "E-learning Platform",
      text: "Study through a clear and effective e-learning platform.",
      position: "md:bottom-0 md:left-0",
    },
    {
      icon: "/images/timeline/icon-support.svg",
      title: "Dynamic Sessions",
      text: "Interactive sessions led by teachers who make sure you feel safe and supported.",
      position: "md:bottom-0 md:right-0",
    },
  ];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
