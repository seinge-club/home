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
 * <div className="fixed inset-0 -z-10 bg-[url('`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/your-bg.svg')] bg-cover bg-center opacity-10 pointer-events-none" />
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
    title: "Apellido1",
    short: "Nombre1",
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/icons/icon-bitcoin.svg",
    background: "bg-warning/20",
    price: "“Pensé que no podía hablar inglés. Solo necesitaba que alguien me hiciera disfrutarlo.”",
    mark: "$94,040.99 (-0.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Apellido2",
    short: "Nombre2",
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/icons/icon-ethereum.svg",
    background: "bg-light_grey",
    price: "“Pensé que no podía hablar inglés. Solo necesitaba que alguien me hiciera disfrutarlo.”",
    mark: "$4,878.26 (-35.9%)",
    width: 18,
    height: 23,
    padding: "px-4 py-2",
  },
  {
    title: "Apellido3",
    short: "Nombre3",
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/icons/icon-bitcoin-circle.svg",
    background: "bg-warning/20",
    price: "“Pensé que no podía hablar inglés. Solo necesitaba que alguien me hiciera disfrutarlo.”",
    mark: "$3,785.82 (-88.3%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "Apellido4",
    short: "Nombre4",
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/icons/icon-litecoin.svg",
    background: "bg-light_grey",
    price: "“Pensé que no podía hablar inglés. Solo necesitaba que alguien me hiciera disfrutarlo.”",
    mark: "$410.26 (-79.1%)",
    width: 18,
    height: 23,
    padding: "px-4 py-3",
  },
  {
    title: "Apellido5",
    short: "Nombre5",
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/icons/icon-solana.svg",
    background: "bg-light_grey",
    price: "“Pensé que no podía hablar inglés. Solo necesitaba que alguien me hiciera disfrutarlo.”",
    mark: "$259.96 (-8.2%)",
    width: 24,
    height: 24,
    padding: "px-4 py-3",
  },
  {
    title: "Apellido6",
    short: "Nombre6",
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/icons/icon-dogecoin.svg",
    background: "bg-light_grey",
    price: "“Pensé que no podía hablar inglés. Solo necesitaba que alguien me hiciera disfrutarlo.”",
    mark: "$0.7316 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/portfolio/icon-wallet.svg",
    title: "Regístrate y comienza",
  },
  {
    image: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/portfolio/icon-vault.svg",
    title: "Accede a las dos primeras sesiones",
  },
  {
    image: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/portfolio/icon-mobileapp.svg",
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
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/perks/icon-support.svg",
    title: "24/7 Support",
    text: "Need help? Get your requests solved quickly via support team.",
    space: "lg:mt-8",
  },
  {
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/perks/icon-community.svg",
    title: "Community",
    text: "Join the conversations on our worldwide OKEx communities",
    space: "lg:mt-14",
  },
  {
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/perks/icon-academy.svg",
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
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/timeline/icon-planning.svg",
    title: "Planning",
    text: "Map the project's scope and architecture",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/timeline/icon-refinement.svg",
    title: "Refinement",
    text: "Refine and improve your solution",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/timeline/icon-prototype.svg",
    title: "Prototype",
    text: "Build a working prototype to test your product",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "`${process.env.NODE_ENV === 'production' ? '/home' : ''}/images/timeline/icon-support.svg",
    title: "Support",
    text: "Deploy the product and ensure full support by us",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
