export type Tour = {
  id: number;
  title: string;
  destination: string;
  country: string;
  region: "domestic" | "international";
  departure: string;
  duration: string;
  days: number;
  price: number;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  tags: string[];
  itinerary: string[];
  included: string[];
  excluded: string[];
  featured?: boolean;
};

const commonsFile = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1600`;

const haLongImage =
  "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1600&q=88";
const hoiAnImage = commonsFile("Hoi An Ancient Town.jpg");
const sapaImage = commonsFile("Rice terraces in Sapa, Vietnam.jpg");
const phuQuocImage = commonsFile("Phu Quoc Beach.jpg");
const ninhBinhImage = commonsFile("Trang An, Ninh Binh.jpg");
const haGiangImage = commonsFile("Hà Giang province landscape.jpg");
const caoBangImage = commonsFile("Ban Gioc Waterfall.jpg");
const mocChauImage = commonsFile("Mộc Châu District, Vietnam (Unsplash).jpg");
const maiChauImage = commonsFile("Mai Chau.jpg");
const muCangChaiImage = commonsFile("Mu Cang Chai.jpg");
const hueImage = commonsFile("Vietnam, Hue, Imperial City of Hue.jpg");
const phongNhaImage = commonsFile("Phong Nha cave entrance.jpg");
const quyNhonImage = commonsFile("Quy Nhơn, tp. Quy Nhơn, Vietnam (Unsplash).jpg");
const nhaTrangImage = commonsFile("Beach Nha Trang.jpg");
const daLatImage = commonsFile("Da Lat - Viet Nam.jpg");
const canThoImage = commonsFile("Can Tho, Vietnam, Floating Market.jpg");
const conDaoImage = commonsFile("Condao Photo 1.jpg");
const daNangImage = commonsFile("Image of Da Nang beach.jpg");

const japanImage =
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=88";
const koreaImage = commonsFile("Seoul Skyline from Namsan (6907572103).jpg");
const thailandImage =
  "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=88";

const mountFujiImage = commonsFile("MountFuji.jpg");
const jejuImage = commonsFile("Jeju Island 제주도.jpg");
const shanghaiImage = commonsFile("Shanghai skyline.jpg");
const zhangjiajieImage = commonsFile("Zhangjiajie National Forest Park.jpg");
const xianImage = commonsFile("Terracotta army xian.jpg");
const chongqingImage = commonsFile("SkylineOfChongqing.jpg");
const lijiangImage = commonsFile("Old Town of Lijiang.jpg");
const greatWallImage = commonsFile("The Great Wall of China at Jinshanling-edit.jpg");
const jiuzhaigouImage = commonsFile("Jiuzhaigou Valley.jpg");

export const heroSlides = [
  { image: haLongImage, alt: "Ha Long Bay limestone islands" },
  { image: hoiAnImage, alt: "Hoi An Ancient Town" },
  { image: sapaImage, alt: "Sapa rice terraces" },
  { image: phuQuocImage, alt: "Phu Quoc beach" },
];

const baseItinerary = [
  "Arrival and a relaxed first taste of the destination",
  "A full day of local culture, food, and considered experiences",
  "A final morning at your own pace before departure",
];

const included = [
  "Accommodation in carefully selected stays",
  "Private or shared transportation as noted",
  "English-speaking local guide and planned experiences",
];

const coreTours: Tour[] = [
  {
    id: 1,
    title: "Da Nang - Hoi An Heritage Escape",
    destination: "Da Nang",
    country: "Vietnam",
    region: "domestic",
    departure: "Hanoi",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 4990000,
    category: "Culture",
    image: hoiAnImage,
    rating: 4.9,
    reviews: 128,
    description: "Sunlit old towns, marble mountains, and the flavours of central Vietnam.",
    tags: ["Hoi An", "food", "heritage"],
    itinerary: baseItinerary,
    included,
    excluded: ["Personal expenses and optional activities"],
    featured: true,
  },
  {
    id: 2,
    title: "Ha Long Bay Signature Cruise",
    destination: "Ha Long Bay",
    country: "Vietnam",
    region: "domestic",
    departure: "Hanoi",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 6290000,
    category: "Luxury",
    image: haLongImage,
    rating: 4.8,
    reviews: 96,
    description: "An overnight cruise among limestone karsts, quiet coves, and clear northern light.",
    tags: ["cruise", "bay"],
    itinerary: baseItinerary,
    included,
    excluded: ["Beverages and personal expenses"],
    featured: true,
  },
  {
    id: 3,
    title: "Sapa Mountain Experience",
    destination: "Sapa",
    country: "Vietnam",
    region: "domestic",
    departure: "Hanoi",
    duration: "4 Days / 3 Nights",
    days: 4,
    price: 5590000,
    category: "Adventure",
    image: sapaImage,
    rating: 4.9,
    reviews: 84,
    description: "Rice terraces, local makers, and mountain mornings in the northern highlands.",
    tags: ["trekking", "mountains"],
    itinerary: baseItinerary,
    included,
    excluded: ["Travel insurance"],
    featured: true,
  },
  {
    id: 4,
    title: "Ninh Binh Heritage Journey",
    destination: "Ninh Binh",
    country: "Vietnam",
    region: "domestic",
    departure: "Hanoi",
    duration: "2 Days / 1 Night",
    days: 2,
    price: 2890000,
    category: "Nature",
    image: ninhBinhImage,
    rating: 4.7,
    reviews: 72,
    description: "River caves, ancient temples, and the soft green drama of the north.",
    tags: ["river", "temples"],
    itinerary: baseItinerary,
    included,
    excluded: ["Personal expenses"],
    featured: true,
  },
  {
    id: 5,
    title: "Phu Quoc Island Getaway",
    destination: "Phu Quoc",
    country: "Vietnam",
    region: "domestic",
    departure: "Ho Chi Minh City",
    duration: "5 Days / 4 Nights",
    days: 5,
    price: 8490000,
    category: "Beach",
    image: phuQuocImage,
    rating: 4.8,
    reviews: 110,
    description: "Slow island days, coral gardens, and a stay built around the sea.",
    tags: ["island", "beach"],
    itinerary: baseItinerary,
    included,
    excluded: ["Optional water sports"],
    featured: true,
  },
  {
    id: 6,
    title: "Japan in Four Seasons",
    destination: "Japan",
    country: "Japan",
    region: "international",
    departure: "Hanoi",
    duration: "6 Days / 5 Nights",
    days: 6,
    price: 22900000,
    category: "Culture",
    image: japanImage,
    rating: 4.9,
    reviews: 46,
    description: "A graceful first journey through Tokyo, Kyoto, and the rituals between.",
    tags: ["Tokyo", "Kyoto", "food"],
    itinerary: baseItinerary,
    included,
    excluded: ["Visa fees and personal expenses"],
  },
  {
    id: 7,
    title: "South Korea: Seoul to Busan",
    destination: "South Korea",
    country: "South Korea",
    region: "international",
    departure: "Ho Chi Minh City",
    duration: "7 Days / 6 Nights",
    days: 7,
    price: 19900000,
    category: "Family",
    image: koreaImage,
    rating: 4.8,
    reviews: 38,
    description: "Contemporary city life, coastal rail journeys, and warm Korean hospitality.",
    tags: ["Seoul", "Busan", "family"],
    itinerary: baseItinerary,
    included,
    excluded: ["Shopping and personal expenses"],
  },
  {
    id: 8,
    title: "Thailand: Bangkok and Beyond",
    destination: "Thailand",
    country: "Thailand",
    region: "international",
    departure: "Da Nang",
    duration: "5 Days / 4 Nights",
    days: 5,
    price: 13900000,
    category: "Beach",
    image: thailandImage,
    rating: 4.7,
    reviews: 29,
    description: "A bright, easy-going route from Bangkok energy to island calm.",
    tags: ["Bangkok", "island"],
    itinerary: baseItinerary,
    included,
    excluded: ["Optional excursions"],
  },
];

const extraRoutes = [
  ["Ha Giang Loop Discovery", "Ha Giang", "Hanoi", 4, 6790000, "Adventure", "Vietnam"],
  ["Cao Bang Waterfall Country", "Cao Bang", "Hanoi", 4, 6390000, "Nature", "Vietnam"],
  ["Moc Chau Tea Hills", "Moc Chau", "Hanoi", 3, 4290000, "Nature", "Vietnam"],
  ["Mai Chau Weekend Table", "Mai Chau", "Hanoi", 2, 2590000, "Culture", "Vietnam"],
  ["Mu Cang Chai Photo Trail", "Mu Cang Chai", "Hanoi", 5, 7490000, "Adventure", "Vietnam"],
  ["Hue Imperial Weekend", "Hue", "Da Nang", 3, 3890000, "Culture", "Vietnam"],
  ["Phong Nha Cave Explorer", "Phong Nha", "Da Nang", 4, 5690000, "Adventure", "Vietnam"],
  ["Quy Nhon Coast Retreat", "Quy Nhon", "Ho Chi Minh City", 4, 6290000, "Beach", "Vietnam"],
  ["Nha Trang Blue Water Escape", "Nha Trang", "Ho Chi Minh City", 4, 6990000, "Beach", "Vietnam"],
  ["Da Lat Slow Hills", "Da Lat", "Ho Chi Minh City", 3, 4490000, "Relaxation", "Vietnam"],
  ["Can Tho Floating Market", "Can Tho", "Ho Chi Minh City", 2, 2390000, "Food", "Vietnam"],
  ["Phu Quoc Family Days", "Phu Quoc", "Hanoi", 5, 8990000, "Family", "Vietnam"],
  ["Con Dao Quiet Island", "Con Dao", "Ho Chi Minh City", 4, 9890000, "Relaxation", "Vietnam"],
  ["Tokyo & Mount Fuji", "Tokyo - Mount Fuji", "Hanoi", 6, 24900000, "Culture", "Japan"],
  ["Osaka Kyoto Nara Highlights", "Osaka - Kyoto - Nara", "Ho Chi Minh City", 5, 21900000, "Culture", "Japan"],
  ["Japan Cherry Blossom Route", "Tokyo - Kyoto", "Hanoi", 7, 32900000, "Nature", "Japan"],
  ["Seoul Nami Island Escape", "Seoul - Nami Island", "Hanoi", 5, 16900000, "Family", "South Korea"],
  ["Korea Food & Neighbourhoods", "Seoul", "Da Nang", 6, 18900000, "Food", "South Korea"],
  ["Jeju Island Discovery", "Seoul - Jeju", "Ho Chi Minh City", 7, 22900000, "Nature", "South Korea"],
  ["Beijing & Great Wall", "Beijing", "Hanoi", 5, 17900000, "Culture", "China"],
  ["Shanghai Suzhou Hangzhou", "Shanghai - Suzhou - Hangzhou", "Ho Chi Minh City", 6, 20900000, "Culture", "China"],
  ["Zhangjiajie Nature Experience", "Zhangjiajie", "Hanoi", 6, 23900000, "Adventure", "China"],
  ["Xi An Ancient Capital", "Xi an", "Hanoi", 5, 15900000, "Culture", "China"],
  ["Chengdu & Jiuzhaigou", "Chengdu - Jiuzhaigou", "Ho Chi Minh City", 7, 25900000, "Nature", "China"],
  ["Chongqing Wulong Landscapes", "Chongqing - Wulong", "Hanoi", 6, 21900000, "Adventure", "China"],
  ["Shanghai Disneyland Family", "Shanghai", "Ho Chi Minh City", 5, 19900000, "Family", "China"],
  ["Lijiang & Shangri-La", "Lijiang - Shangri-La", "Hanoi", 7, 24900000, "Nature", "China"],
  ["Hoi An Culinary Weekend", "Hoi An", "Da Nang", 3, 4790000, "Food", "Vietnam"],
  ["Da Nang Family Coast", "Da Nang", "Ho Chi Minh City", 4, 6390000, "Family", "Vietnam"],
  ["Korea Autumn Colours", "Seoul - Nami Island", "Hanoi", 6, 20900000, "Nature", "South Korea"],
  ["China Silk Road Highlights", "Beijing - Xi an - Shanghai", "Hanoi", 8, 28900000, "Culture", "China"],
] as const;

const extraTours: Tour[] = extraRoutes.map(
  ([title, destination, departure, days, price, category, country], index) => ({
    id: index + 9,
    title,
    destination,
    country,
    region: country === "Vietnam" ? "domestic" : "international",
    departure,
    duration: `${days} Days / ${days - 1} Nights`,
    days,
    price,
    category,
    image:
      destination === "Ha Giang"
        ? haGiangImage
        : destination === "Cao Bang"
          ? caoBangImage
          : destination === "Moc Chau"
            ? mocChauImage
            : destination === "Mai Chau"
              ? maiChauImage
              : destination === "Mu Cang Chai"
                ? muCangChaiImage
                : destination === "Hue"
                  ? hueImage
                  : destination === "Phong Nha"
                    ? phongNhaImage
                    : destination === "Quy Nhon"
                      ? quyNhonImage
                      : destination === "Nha Trang"
                        ? nhaTrangImage
                        : destination === "Da Lat"
                          ? daLatImage
                          : destination === "Can Tho"
                            ? canThoImage
                            : destination === "Phu Quoc"
                              ? phuQuocImage
                              : destination === "Con Dao"
                                ? conDaoImage
                                : destination.includes("Tokyo - Mount Fuji")
                                  ? mountFujiImage
                                  : destination.includes("Osaka - Kyoto - Nara")
                                    ? japanImage
                                    : destination.includes("Tokyo - Kyoto")
                                      ? japanImage
                                      : destination.includes("Jeju")
                                        ? jejuImage
                                        : destination.includes("Seoul")
                                          ? koreaImage
                                          : destination === "Beijing"
                                            ? greatWallImage
                                            : destination.includes("Shanghai - Suzhou - Hangzhou")
                                              ? shanghaiImage
                                              : destination === "Zhangjiajie"
                                                ? zhangjiajieImage
                                                : destination === "Xi an"
                                                  ? xianImage
                                                  : destination.includes("Chengdu - Jiuzhaigou")
                                                    ? jiuzhaigouImage
                                                    : destination.includes("Chongqing - Wulong")
                                                      ? chongqingImage
                                                      : destination === "Shanghai"
                                                        ? shanghaiImage
                                                        : destination.includes("Lijiang - Shangri-La")
                                                          ? lijiangImage
                                                          : destination === "Hoi An"
                                                            ? hoiAnImage
                                                            : destination === "Da Nang"
                                                              ? daNangImage
                                                              : destination.includes("Nami Island")
                                                                ? koreaImage
                                                                : destination.includes("Beijing - Xi an - Shanghai")
                                                                  ? greatWallImage
                                                                  : country === "Japan"
                                                                    ? japanImage
                                                                    : country === "South Korea"
                                                                      ? koreaImage
                                                                      : country === "China"
                                                                        ? greatWallImage
                                                                        : haLongImage,
    rating: 4.7 + (index % 3) / 10,
    reviews: 24 + index * 7,
    description: `A carefully paced ${category.toLowerCase()} journey through ${destination}.`,
    tags: [destination, country, category],
    itinerary: baseItinerary,
    included,
    excluded: ["Personal expenses and optional activities"],
    featured: index < 6,
  }),
);

export const tours: Tour[] = [...coreTours, ...extraTours];

export const destinations = [
  { name: "Ha Long Bay", region: "domestic", count: 12, image: haLongImage, note: "Limestone horizons" },
  { name: "Da Nang", region: "domestic", count: 18, image: daNangImage, note: "Coast & culture" },
  { name: "Sapa", region: "domestic", count: 9, image: sapaImage, note: "Mountain mornings" },
  { name: "Japan", region: "international", count: 8, image: japanImage, note: "Old rituals, new energy" },
  { name: "South Korea", region: "international", count: 7, image: koreaImage, note: "City to coast" },
  { name: "Thailand", region: "international", count: 11, image: thailandImage, note: "Warm horizons" },
];

export const stories = [
  { id: "hoi-an", title: "A slower way to see Hoi An", category: "Field Notes", date: "08 Sep 2026", image: hoiAnImage, excerpt: "The most memorable parts of a journey often happen between the landmarks." },
  { id: "halong", title: "The quiet side of Ha Long Bay", category: "Places", date: "28 Aug 2026", image: haLongImage, excerpt: "A thoughtful guide to finding stillness among the limestone islands." },
  { id: "packing", title: "What to pack for a northern summer", category: "Travel Guide", date: "14 Aug 2026", image: sapaImage, excerpt: "Useful, practical notes for a lighter and more comfortable journey." },
  { id: "japan", title: "A first-timer’s guide to Japan", category: "Travel Guide", date: "02 Aug 2026", image: japanImage, excerpt: "How to leave room for both the famous places and the quiet ones." },
  { id: "korea", title: "Five perfect mornings in Seoul", category: "Experience", date: "21 Jul 2026", image: koreaImage, excerpt: "Coffee, markets, and neighbourhood walks before the city fully wakes." },
  { id: "table", title: "The joy of the shared table", category: "Food", date: "10 Jul 2026", image: hoiAnImage, excerpt: "Food is often the fastest way into the heart of a place." },
];
