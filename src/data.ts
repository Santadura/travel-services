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
  gallery?: string[];
  rating: number;
  reviews: number;
  description: string;
  tagline?: string;
  groupSize?: string;
  transport?: string;
  accommodation?: string;
  tags: string[];
  itinerary: string[];
  included: string[];
  excluded: string[];
  highlights?: string[];
  departureSchedule?: {
    label: string;
    dates: string[];
    price: number;
  }[];
  offers?: string[];
  highlightCards?: {
    icon: string;
    title: string;
    description: string;
  }[];
  policies?: {
    title: string;
    description: string;
  }[];
  travellerReviews?: {
    name: string;
    initials: string;
    travelStyle: string;
    rating: number;
    comment: string;
  }[];
  schedule?: {
    day: number;
    title: string;
    summary?: string;
    story?: string;
    image: string;
    timeline: {
      time: string;
      title: string;
      description: string;
    }[];
    tags: string[];
  }[];
  featured?: boolean;
};

const commonsFile = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=1600`;

const localTourImage = (fileName: string) =>
  `/tours/quy-nhon-da-nang-hoi-an/${encodeURIComponent(fileName)}`;

const quyNhonDaNangHoiAnImages = {
  daNangOverview: localTourImage("Tổng quan về Đà Nẵng (01) .jpg"),
  myKhe: localTourImage("Bãi tắm 1-2-3 (03) .jpg"),
  tienSa: localTourImage("Tổng quan Phố cổ Hội An (02) .jpg"),
  hanRiver: localTourImage("Cầu Sông Hàn (04) .jpg"),
  haiVan: localTourImage("Vườn hoa tình yêu Le Jardin d_Amour (03) .jpg"),
  hoiAnOverview: localTourImage("Tổng quan về Hội An .jpg"),
  hoiAnAncientTown: localTourImage("Phố Cổ Hội An (03) .jpg"),
  hoaiRiver: localTourImage("Sông Hoài (01) .jpg"),
  lanterns: localTourImage("Đèn hoa đăng (02) .jpg"),
};

const haLongImage = commonsFile("Lake Kawaguchiko Sakura Mount Fuji 4.JPG");
const hoiAnImage = commonsFile("Aks The Reflection Taj Mahal.jpg");
const sapaImage = commonsFile("Chichen Itza 3.jpg");
const phuQuocImage = commonsFile("Hoa Đà Lạt.jpg");
const ninhBinhImage = commonsFile("Trang An, Ninh Binh.jpg");
const haGiangImage = commonsFile("Hà Giang province landscape.jpg");
const caoBangImage = commonsFile("Ban Gioc Waterfall.jpg");
const mocChauImage = commonsFile("Mộc Châu District, Vietnam (Unsplash).jpg");
const maiChauImage = commonsFile("Mai Chau.jpg");
const muCangChaiImage = commonsFile("Mu Cang Chai.jpg");
const hueImage = commonsFile("Vietnam, Hue, Imperial City of Hue.jpg");
const phongNhaImage = commonsFile("Phong Nha cave entrance.jpg");
const quyNhonImage = commonsFile(
  "Quy Nhơn, tp. Quy Nhơn, Vietnam (Unsplash).jpg",
);
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
const greatWallImage = commonsFile(
  "The Great Wall of China at Jinshanling-edit.jpg",
);
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
    title: "Quy Nhon - Da Nang - Hoi An 3 Days 2 Nights",
    destination: "Da Nang - Hoi An",
    country: "Vietnam",
    region: "domestic",
    departure: "Quy Nhon",
    duration: "3 Days / 2 Nights",
    days: 3,
    price: 3350000,
    category: "Central Vietnam",
    image: quyNhonDaNangHoiAnImages.daNangOverview,
    gallery: [
      quyNhonDaNangHoiAnImages.daNangOverview,
      quyNhonDaNangHoiAnImages.myKhe,
      quyNhonDaNangHoiAnImages.tienSa,
      quyNhonDaNangHoiAnImages.hanRiver,
      quyNhonDaNangHoiAnImages.haiVan,
      quyNhonDaNangHoiAnImages.hoiAnOverview,
    ],
    rating: 4.9,
    reviews: 128,

    description:
      "Explore the beauty of Central Vietnam with a 3-day journey from Quy Nhon to Da Nang and Hoi An. Discover Son Tra Peninsula, Linh Ung Pagoda, Ba Na Hills, Hoi An Ancient Town and local cultural experiences.",
    tagline:
      "Three unhurried days of sea views, mountain air, and lantern-lit evenings in Central Vietnam.",
    groupSize: "10–12 travellers",
    transport: "16-seater A/C coach",
    accommodation: "Pavilion Hotel",

    tags: [
      "Da Nang",
      "Hoi An",
      "Ba Na Hills",
      "Son Tra Peninsula",
      "Central Vietnam",
    ],

    itinerary: [
      "Day 1: Quy Nhon - Da Nang arrival & city discovery",
      "Day 2: Ba Na Hills & Hoi An Ancient Town",
      "Day 3: Da Nang highlights & departure",
    ],

    included: [
      "16-seater A/C coach",
      "Pavilion Hotel check-in",
      "Meals stated in the itinerary",
      "All attraction entrance fees",
    ],

    excluded: ["Personal expenses", "Optional services"],

    highlights: [
      "Son Tra Peninsula",
      "Linh Ung Pagoda",
      "Ban Co Peak",
      "My Khe Beach sunset",
      "Ba Na Hills cable car",
      "French Village",
      "Hoi An Ancient Town",
      "Marble Mountains",
    ],

    highlightCards: [
      {
        icon: "🌅",
        title: "My Khe at sunset",
        description: "Swim, stroll, and watch Da Nang soften into evening.",
      },
      {
        icon: "🌉",
        title: "Han River cruise",
        description:
          "See the city lights from the water after a seafood dinner.",
      },
      {
        icon: "⛰️",
        title: "Hai Van Pass",
        description:
          "Travel one of Vietnam’s most beautiful coastal mountain roads.",
      },
      {
        icon: "🏰",
        title: "Ba Na Hills",
        description:
          "Ride the cable car into French Village and cool mountain air.",
      },
      {
        icon: "🏮",
        title: "Hoi An after dark",
        description:
          "Wander lantern-lit lanes and take a quiet boat ride on the river.",
      },
    ],

    policies: [
      {
        title: "Cancellation policy",
        description:
          "Free changes are supported when available. Cancellation terms are confirmed with your booking before payment.",
      },
      {
        title: "Payment policy",
        description:
          "Reserve with a deposit, then settle the remaining balance before departure. Your consultant will share the exact schedule.",
      },
      {
        title: "Important notes",
        description:
          "The itinerary may be adjusted for weather or local operating conditions while preserving the included experiences.",
      },
    ],

    travellerReviews: [
      {
        initials: "MA",
        name: "Mai Anh",
        travelStyle: "Travelled with friends",
        rating: 5,
        comment:
          "A beautifully paced trip—the mountain views, Hoi An at night, and thoughtful care from the guide made every day feel special.",
      },
      {
        initials: "TP",
        name: "Thanh Phuong",
        travelStyle: "Travelled as a couple",
        rating: 5,
        comment:
          "The itinerary was well organised, with just the right balance of iconic sights, local food, and time to enjoy the coast.",
      },
      {
        initials: "HN",
        name: "Hoang Nam",
        travelStyle: "Travelled with family",
        rating: 4,
        comment:
          "Comfortable transport, great hotel choices, and enough flexibility for everyone in the family to enjoy the journey.",
      },
    ],

    schedule: [
      {
        day: 1,
        title: "Quy Nhon - Da Nang arrival & city discovery",
        summary: "Coastal arrival, Son Tra views, and Da Nang after dark.",
        story:
          "Ease into Central Vietnam with a scenic coastal arrival, a quiet moment above the peninsula, and Da Nang sparkling along the Han River after sunset.",
        image: quyNhonDaNangHoiAnImages.myKhe,
        timeline: [
          {
            time: "06:00 - 12:00",
            title: "Departure for Da Nang",
            description:
              "Gather at Quy Nhon Bus Station and depart for Da Nang.",
          },
          {
            time: "12:00 - 13:30",
            title: "Specialty lunch",
            description: "Enjoy a local lunch in Da Nang city center.",
          },
          {
            time: "13:30 - 14:30",
            title: "Hotel check-in",
            description:
              "Settle in and take an essential rest before the afternoon discoveries.",
          },
          {
            time: "14:30 - 16:30",
            title: "Son Tra Peninsula",
            description:
              "Visit Linh Ung Pagoda and Ban Co Peak for sweeping coastal views.",
          },
          {
            time: "16:30 - 18:00",
            title: "My Khe Beach",
            description: "Swim or stroll along the shore as the sun sets.",
          },
          {
            time: "18:00 - 19:30",
            title: "Refresh at the hotel",
            description:
              "Return to the hotel to shower and change for the evening.",
          },
          {
            time: "19:30 - 21:30",
            title: "Da Nang by night",
            description:
              "Seafood dinner followed by a gentle Han River cruise.",
          },
        ],
        tags: [
          "16-seater A/C coach",
          "Mi Quang / Rice paper",
          "Check in Pavilion hotel",
        ],
      },

      {
        day: 2,
        title: "Ba Na Hills & Hoi An Ancient Town",
        summary:
          "Mountain cable cars followed by a lantern-lit Hoi An evening.",
        story:
          "Today moves from cool mountain air to Hoi An’s warm lantern glow—two of Central Vietnam’s most memorable atmospheres in one day.",
        image: quyNhonDaNangHoiAnImages.haiVan,
        timeline: [
          {
            time: "06:30 - 07:15",
            title: "Breakfast at the hotel",
            description: "Start the day with breakfast before heading west.",
          },
          {
            time: "07:15 - 08:30",
            title: "Hai Van Pass transfer",
            description:
              "Travel through the pass with a view over Lang Co Bay.",
          },
          {
            time: "08:30 - 09:30",
            title: "Continue to Ba Na Hills",
            description:
              "Arrive at the foothills and prepare for the cable car.",
          },
          {
            time: "09:30 - 15:00",
            title: "Ba Na Hills exploration",
            description:
              "Ride the cable car, explore French Village, and enjoy lunch on the mountain.",
          },
          {
            time: "15:00 - 17:15",
            title: "Return and refresh",
            description: "Return to the hotel for rest and a quick refresh.",
          },
          {
            time: "17:15 - 21:30",
            title: "Hoi An at lantern time",
            description:
              "Discover ancient houses, Hoi An Old Town, and a lantern boat experience.",
          },
          {
            time: "21:30",
            title: "Return to Da Nang",
            description: "Return to the Da Nang hotel for the night.",
          },
        ],
        tags: [
          "Check in Lang Co Bay view",
          "Buffet lunch on mountain",
          "Check in Le Jardin D'amour",
          "Linh Chua Linh Tu Temple",
          "Check in Chua Cau, lantern boat",
        ],
      },

      {
        day: 3,
        title: "Da Nang highlights & departure",
        summary: "Beach moments, Marble Mountains, and the journey home.",
        story:
          "Take a final slow look at the coast and craft villages before carrying the best parts of Central Vietnam home with you.",
        image: quyNhonDaNangHoiAnImages.daNangOverview,
        timeline: [
          {
            time: "07:00 - 08:00",
            title: "Breakfast at the hotel",
            description: "Enjoy a final breakfast in Da Nang.",
          },
          {
            time: "08:00 - 08:30",
            title: "Check-out",
            description: "Check out and place luggage safely on the coach.",
          },
          {
            time: "08:30 - 09:30",
            title: "Cua Dai Beach",
            description:
              "Take a quiet beach stroll and capture a few final photos.",
          },
          {
            time: "09:30 - 11:30",
            title: "Marble Mountains",
            description:
              "Explore Marble Mountains and the craft village of Non Nuoc.",
          },
          {
            time: "11:30 - 13:00",
            title: "Lunch and Han Market",
            description: "Have chicken rice for lunch and browse Han Market.",
          },
          {
            time: "13:00",
            title: "Return to Quy Nhon",
            description:
              "Depart via Highway 1A and drop off at Quy Nhon Bus Station.",
          },
        ],
        tags: ["Elevator up the mountain", "Shopping", "End of trip"],
      },
    ],

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
    description:
      "An overnight cruise among limestone karsts, quiet coves, and clear northern light.",
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
    description:
      "Rice terraces, local makers, and mountain mornings in the northern highlands.",
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
    description:
      "River caves, ancient temples, and the soft green drama of the north.",
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
    description:
      "Slow island days, coral gardens, and a stay built around the sea.",
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
    description:
      "A graceful first journey through Tokyo, Kyoto, and the rituals between.",
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
    description:
      "Contemporary city life, coastal rail journeys, and warm Korean hospitality.",
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
    description:
      "A bright, easy-going route from Bangkok energy to island calm.",
    tags: ["Bangkok", "island"],
    itinerary: baseItinerary,
    included,
    excluded: ["Optional excursions"],
  },
];

const extraRoutes = [
  [
    "Ha Giang Loop Discovery",
    "Ha Giang",
    "Hanoi",
    4,
    6790000,
    "Adventure",
    "Vietnam",
  ],
  [
    "Cao Bang Waterfall Country",
    "Cao Bang",
    "Hanoi",
    4,
    6390000,
    "Nature",
    "Vietnam",
  ],
  ["Moc Chau Tea Hills", "Moc Chau", "Hanoi", 3, 4290000, "Nature", "Vietnam"],
  [
    "Mai Chau Weekend Table",
    "Mai Chau",
    "Hanoi",
    2,
    2590000,
    "Culture",
    "Vietnam",
  ],
  [
    "Mu Cang Chai Photo Trail",
    "Mu Cang Chai",
    "Hanoi",
    5,
    7490000,
    "Adventure",
    "Vietnam",
  ],
  ["Hue Imperial Weekend", "Hue", "Da Nang", 3, 3890000, "Culture", "Vietnam"],
  [
    "Phong Nha Cave Explorer",
    "Phong Nha",
    "Da Nang",
    4,
    5690000,
    "Adventure",
    "Vietnam",
  ],
  [
    "Quy Nhon Coast Retreat",
    "Quy Nhon",
    "Ho Chi Minh City",
    4,
    6290000,
    "Beach",
    "Vietnam",
  ],
  [
    "Nha Trang Blue Water Escape",
    "Nha Trang",
    "Ho Chi Minh City",
    4,
    6990000,
    "Beach",
    "Vietnam",
  ],
  [
    "Da Lat Slow Hills",
    "Da Lat",
    "Ho Chi Minh City",
    3,
    4490000,
    "Relaxation",
    "Vietnam",
  ],
  [
    "Can Tho Floating Market",
    "Can Tho",
    "Ho Chi Minh City",
    2,
    2390000,
    "Food",
    "Vietnam",
  ],
  [
    "Phu Quoc Family Days",
    "Phu Quoc",
    "Hanoi",
    5,
    8990000,
    "Family",
    "Vietnam",
  ],
  [
    "Con Dao Quiet Island",
    "Con Dao",
    "Ho Chi Minh City",
    4,
    9890000,
    "Relaxation",
    "Vietnam",
  ],
  [
    "Tokyo & Mount Fuji",
    "Tokyo - Mount Fuji",
    "Hanoi",
    6,
    24900000,
    "Culture",
    "Japan",
  ],
  [
    "Osaka Kyoto Nara Highlights",
    "Osaka - Kyoto - Nara",
    "Ho Chi Minh City",
    5,
    21900000,
    "Culture",
    "Japan",
  ],
  [
    "Japan Cherry Blossom Route",
    "Tokyo - Kyoto",
    "Hanoi",
    7,
    32900000,
    "Nature",
    "Japan",
  ],
  [
    "Seoul Nami Island Escape",
    "Seoul - Nami Island",
    "Hanoi",
    5,
    16900000,
    "Family",
    "South Korea",
  ],
  [
    "Korea Food & Neighbourhoods",
    "Seoul",
    "Da Nang",
    6,
    18900000,
    "Food",
    "South Korea",
  ],
  [
    "Jeju Island Discovery",
    "Seoul - Jeju",
    "Ho Chi Minh City",
    7,
    22900000,
    "Nature",
    "South Korea",
  ],
  ["Beijing & Great Wall", "Beijing", "Hanoi", 5, 17900000, "Culture", "China"],
  [
    "Shanghai Suzhou Hangzhou",
    "Shanghai - Suzhou - Hangzhou",
    "Ho Chi Minh City",
    6,
    20900000,
    "Culture",
    "China",
  ],
  [
    "Zhangjiajie Nature Experience",
    "Zhangjiajie",
    "Hanoi",
    6,
    23900000,
    "Adventure",
    "China",
  ],
  ["Xi An Ancient Capital", "Xi an", "Hanoi", 5, 15900000, "Culture", "China"],
  [
    "Chengdu & Jiuzhaigou",
    "Chengdu - Jiuzhaigou",
    "Ho Chi Minh City",
    7,
    25900000,
    "Nature",
    "China",
  ],
  [
    "Chongqing Wulong Landscapes",
    "Chongqing - Wulong",
    "Hanoi",
    6,
    21900000,
    "Adventure",
    "China",
  ],
  [
    "Shanghai Disneyland Family",
    "Shanghai",
    "Ho Chi Minh City",
    5,
    19900000,
    "Family",
    "China",
  ],
  [
    "Lijiang & Shangri-La",
    "Lijiang - Shangri-La",
    "Hanoi",
    7,
    24900000,
    "Nature",
    "China",
  ],
  [
    "Hoi An Culinary Weekend",
    "Hoi An",
    "Da Nang",
    3,
    4790000,
    "Food",
    "Vietnam",
  ],
  [
    "Da Nang Family Coast",
    "Da Nang",
    "Ho Chi Minh City",
    4,
    6390000,
    "Family",
    "Vietnam",
  ],
  [
    "Korea Autumn Colours",
    "Seoul - Nami Island",
    "Hanoi",
    6,
    20900000,
    "Nature",
    "South Korea",
  ],
  [
    "China Silk Road Highlights",
    "Beijing - Xi an - Shanghai",
    "Hanoi",
    8,
    28900000,
    "Culture",
    "China",
  ],
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
                                            : destination.includes(
                                                  "Shanghai - Suzhou - Hangzhou",
                                                )
                                              ? shanghaiImage
                                              : destination === "Zhangjiajie"
                                                ? zhangjiajieImage
                                                : destination === "Xi an"
                                                  ? xianImage
                                                  : destination.includes(
                                                        "Chengdu - Jiuzhaigou",
                                                      )
                                                    ? jiuzhaigouImage
                                                    : destination.includes(
                                                          "Chongqing - Wulong",
                                                        )
                                                      ? chongqingImage
                                                      : destination ===
                                                          "Shanghai"
                                                        ? shanghaiImage
                                                        : destination.includes(
                                                              "Lijiang - Shangri-La",
                                                            )
                                                          ? lijiangImage
                                                          : destination ===
                                                              "Hoi An"
                                                            ? hoiAnImage
                                                            : destination ===
                                                                "Da Nang"
                                                              ? daNangImage
                                                              : destination.includes(
                                                                    "Nami Island",
                                                                  )
                                                                ? koreaImage
                                                                : destination.includes(
                                                                      "Beijing - Xi an - Shanghai",
                                                                    )
                                                                  ? greatWallImage
                                                                  : country ===
                                                                      "Japan"
                                                                    ? japanImage
                                                                    : country ===
                                                                        "South Korea"
                                                                      ? koreaImage
                                                                      : country ===
                                                                          "China"
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
  {
    name: "Ha Long Bay",
    region: "domestic",
    count: 12,
    image: haLongImage,
    note: "Limestone horizons",
  },
  {
    name: "Da Nang",
    region: "domestic",
    count: 18,
    image: daNangImage,
    note: "Coast & culture",
  },
  {
    name: "Sapa",
    region: "domestic",
    count: 9,
    image: sapaImage,
    note: "Mountain mornings",
  },
  {
    name: "Japan",
    region: "international",
    count: 8,
    image: japanImage,
    note: "Old rituals, new energy",
  },
  {
    name: "South Korea",
    region: "international",
    count: 7,
    image: koreaImage,
    note: "City to coast",
  },
  {
    name: "Thailand",
    region: "international",
    count: 11,
    image: thailandImage,
    note: "Warm horizons",
  },
];

export const stories = [
  {
    id: "hoi-an",
    title: "A slower way to see Hoi An",
    category: "Field Notes",
    date: "08 Sep 2026",
    image: hoiAnImage,
    excerpt:
      "The most memorable parts of a journey often happen between the landmarks.",
  },
  {
    id: "halong",
    title: "The quiet side of Ha Long Bay",
    category: "Places",
    date: "28 Aug 2026",
    image: haLongImage,
    excerpt:
      "A thoughtful guide to finding stillness among the limestone islands.",
  },
  {
    id: "packing",
    title: "What to pack for a northern summer",
    category: "Travel Guide",
    date: "14 Aug 2026",
    image: sapaImage,
    excerpt:
      "Useful, practical notes for a lighter and more comfortable journey.",
  },
  {
    id: "japan",
    title: "A first-timer’s guide to Japan",
    category: "Travel Guide",
    date: "02 Aug 2026",
    image: japanImage,
    excerpt: "How to leave room for both the famous places and the quiet ones.",
  },
  {
    id: "korea",
    title: "Five perfect mornings in Seoul",
    category: "Experience",
    date: "21 Jul 2026",
    image: koreaImage,
    excerpt:
      "Coffee, markets, and neighbourhood walks before the city fully wakes.",
  },
  {
    id: "table",
    title: "The joy of the shared table",
    category: "Food",
    date: "10 Jul 2026",
    image: hoiAnImage,
    excerpt: "Food is often the fastest way into the heart of a place.",
  },
];
