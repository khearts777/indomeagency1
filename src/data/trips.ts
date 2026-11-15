export type DayPlan = {
  day: number;
  place?: string;
  items: string[];
};

export type IncludeIcon =
  | "hotel"
  | "bus"
  | "meal"
  | "bag"
  | "camera"
  | "car"
  | "wind"
  | "mountain"
  | "tent"
  | "ship"
  | "waves";

export type Trip = {
  id: string;
  name: string;
  price: number;
  length: string;
  region: string;
  perfectFor: string;
  image: string;
  imageAlt: string;
  includes: { label: string; icon: IncludeIcon }[];
  days: DayPlan[];
};

export const trips: Trip[] = [
  {
    id: "city-girl",
    name: "City-Girl Holiday",
    price: 3500,
    length: "5 days · 4 nights",
    region: "Jakarta & Bandung",
    perfectFor: "Shopping lovers, foodies, and people who enjoy luxury.",
    image: "/images/city.jpg",
    imageAlt: "A quiet luxury terrace above a glowing Jakarta skyline at dusk",
    includes: [
      { label: "5-star hotel", icon: "hotel" },
      { label: "Airport transfers", icon: "bus" },
      { label: "Breakfast daily", icon: "meal" },
      { label: "Shopping guide", icon: "bag" },
      { label: "Photo stops", icon: "camera" },
    ],
    days: [
      {
        day: 1,
        place: "Jakarta",
        items: [
          "Airport pickup",
          "Check into a 5-star hotel",
          "Welcome dinner",
          "Visit Grand Indonesia Mall",
        ],
      },
      {
        day: 2,
        place: "Jakarta",
        items: [
          "Shopping at Plaza Indonesia",
          "Café hopping",
          "Visit Kota Tua (Old Town)",
          "Sunset rooftop dinner",
        ],
      },
      {
        day: 3,
        place: "Bandung",
        items: [
          "Travel to Bandung",
          "Visit The Great Asia Africa",
          "Shop at factory outlets",
          "Relax at a luxury spa",
        ],
      },
      {
        day: 4,
        place: "Bandung",
        items: [
          "Brunch at a scenic café",
          "Visit Floating Market Lembang",
          "Shopping for souvenirs",
          "Free evening",
        ],
      },
      {
        day: 5,
        items: ["Hotel breakfast", "Airport transfer"],
      },
    ],
  },
  {
    id: "urban",
    name: "Urban Adventure",
    price: 1999,
    length: "5 days · 4 nights",
    region: "Yogyakarta",
    perfectFor: "Nature lovers and thrill seekers.",
    image: "/images/adventure.jpg",
    imageAlt: "Borobudur temple at sunrise with mist in the valley",
    includes: [
      { label: "Jeep tour", icon: "car" },
      { label: "Hot-air balloon", icon: "wind" },
      { label: "Guided hikes", icon: "mountain" },
      { label: "Meals", icon: "meal" },
      { label: "Hotel stay", icon: "hotel" },
    ],
    days: [
      {
        day: 1,
        place: "Yogyakarta",
        items: ["Airport pickup", "Visit Malioboro Street", "Local food tasting"],
      },
      {
        day: 2,
        items: ["Borobudur sunrise tour", "Hot-air balloon experience", "Village cycling"],
      },
      {
        day: 3,
        items: ["Jeep adventure on Mount Merapi", "Lava museum", "Campfire dinner"],
      },
      {
        day: 4,
        items: ["Waterfall trekking", "Cave tubing", "Cultural performance"],
      },
      {
        day: 5,
        items: ["Souvenir shopping", "Airport transfer"],
      },
    ],
  },
  {
    id: "nomad",
    name: "Chic Nomad",
    price: 2950,
    length: "5 days · 4 nights",
    region: "Bali · Outlander Package",
    perfectFor: "Relaxation and beautiful scenery.",
    image: "/images/bali.jpg",
    imageAlt: "A canvas glamping tent on a Bali cliff above turquoise water",
    includes: [
      { label: "Beach resort", icon: "waves" },
      { label: "Luxury glamping", icon: "tent" },
      { label: "Island tour", icon: "ship" },
      { label: "Snorkelling", icon: "waves" },
      { label: "Airport transfers", icon: "bus" },
    ],
    days: [
      {
        day: 1,
        place: "Bali",
        items: ["Airport pickup", "Beach resort check-in", "Sunset dinner"],
      },
      {
        day: 2,
        items: ["Tanah Lot Temple", "Beach picnic", "Spa session"],
      },
      {
        day: 3,
        items: ["Nusa Penida island tour", "Snorkelling", "Crystal Bay"],
      },
      {
        day: 4,
        items: ["Luxury glamping", "Campfire", "Stargazing", "BBQ dinner"],
      },
      {
        day: 5,
        items: ["Morning beach walk", "Souvenir shopping", "Airport transfer"],
      },
    ],
  },
];

export function money(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
