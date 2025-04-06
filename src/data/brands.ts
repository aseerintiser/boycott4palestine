
export interface Brand {
  id: string;
  name: string;
  category: Category;
  description: string;
  reasons: string[];
  alternatives: Alternative[];
  logo?: string;
}

export interface Alternative {
  id: string;
  name: string;
  description: string;
  link?: string;
}

export type Category = 
  | "Food & Beverage" 
  | "Tech & Electronics" 
  | "Fashion & Apparel" 
  | "Cosmetics & Personal Care" 
  | "Household" 
  | "Entertainment";

export const brands: Brand[] = [
  {
    id: "1",
    name: "SodaStream",
    category: "Food & Beverage",
    description: "Home carbonation product company that operates a factory in the West Bank.",
    reasons: [
      "Factory located in occupied West Bank territory",
      "Parent company (PepsiCo) has continuing operations in Israel"
    ],
    alternatives: [
      {
        id: "a1",
        name: "DrinkMate",
        description: "Alternative carbonation system without controversial ties",
        link: "https://example.com/drinkmate"
      },
      {
        id: "a2",
        name: "Aarke",
        description: "Swedish-designed carbonator with ethical manufacturing",
        link: "https://example.com/aarke"
      }
    ]
  },
  {
    id: "2",
    name: "Sabra",
    category: "Food & Beverage",
    description: "Hummus and dip manufacturer partially owned by the Strauss Group.",
    reasons: [
      "Partially owned by Strauss Group which has provided support to Israeli military units",
      "Manufacturing facilities in contested regions"
    ],
    alternatives: [
      {
        id: "a3",
        name: "Cedar's",
        description: "Mediterranean foods company with ethical sourcing",
        link: "https://example.com/cedars"
      },
      {
        id: "a4",
        name: "Ithaca Hummus",
        description: "Small-batch hummus with transparent supply chain",
        link: "https://example.com/ithaca"
      }
    ]
  },
  {
    id: "3",
    name: "HP (Hewlett-Packard)",
    category: "Tech & Electronics",
    description: "Technology company that provides services to Israeli checkpoints and military.",
    reasons: [
      "Provides biometric ID systems used at Israeli checkpoints",
      "Technology services to Israeli military"
    ],
    alternatives: [
      {
        id: "a5",
        name: "Lenovo",
        description: "Computer manufacturer with less controversial ties",
        link: "https://example.com/lenovo"
      },
      {
        id: "a6",
        name: "ASUS",
        description: "Computer and phone manufacturer with ethical manufacturing",
        link: "https://example.com/asus"
      }
    ]
  },
  {
    id: "4",
    name: "Ahava",
    category: "Cosmetics & Personal Care",
    description: "Cosmetics company that sources materials from the Dead Sea in occupied territories.",
    reasons: [
      "Sources minerals from occupied Dead Sea territory",
      "Manufacturing facility in West Bank settlement"
    ],
    alternatives: [
      {
        id: "a7",
        name: "Pacifica",
        description: "Vegan and cruelty-free beauty products with ethical sourcing",
        link: "https://example.com/pacifica"
      },
      {
        id: "a8",
        name: "Lush",
        description: "Handmade cosmetics with ethical ingredient sourcing and manufacturing",
        link: "https://example.com/lush"
      }
    ]
  },
  {
    id: "5",
    name: "Puma",
    category: "Fashion & Apparel",
    description: "Sportswear manufacturer with sponsorship ties to Israeli sports.",
    reasons: [
      "Sponsors the Israel Football Association, which includes teams in settlements",
      "Manufacturing ties to controversial regions"
    ],
    alternatives: [
      {
        id: "a9",
        name: "Brooks",
        description: "Athletic footwear with transparent supply chain",
        link: "https://example.com/brooks"
      },
      {
        id: "a10",
        name: "Etiko",
        description: "Fair trade certified athletic wear and footwear",
        link: "https://example.com/etiko"
      }
    ]
  },
  {
    id: "6",
    name: "Pillsbury",
    category: "Food & Beverage",
    description: "Food company with manufacturing in Israeli settlements.",
    reasons: [
      "Factory located in occupied East Jerusalem industrial zone",
      "Parent company (General Mills) continued operations in controversial areas"
    ],
    alternatives: [
      {
        id: "a11",
        name: "Bob's Red Mill",
        description: "Employee-owned baking products company with ethical practices",
        link: "https://example.com/bobs"
      },
      {
        id: "a12",
        name: "King Arthur Flour",
        description: "Employee-owned baking company with transparent supply chain",
        link: "https://example.com/kingarthur"
      }
    ]
  },
  {
    id: "7",
    name: "Motorola",
    category: "Tech & Electronics",
    description: "Communications technology used in surveillance of Palestinian territories.",
    reasons: [
      "Provides surveillance equipment for settlements and the separation wall",
      "Military communications equipment to Israeli forces"
    ],
    alternatives: [
      {
        id: "a13",
        name: "OnePlus",
        description: "Smartphone manufacturer with ethical supply chain",
        link: "https://example.com/oneplus"
      },
      {
        id: "a14",
        name: "Fairphone",
        description: "Ethical smartphone made with fair materials and labor practices",
        link: "https://example.com/fairphone"
      }
    ]
  },
  {
    id: "8",
    name: "L'Oréal",
    category: "Cosmetics & Personal Care",
    description: "Beauty company with manufacturing and R&D facilities in Israel.",
    reasons: [
      "Manufacturing and research facilities in Israel",
      "Acquisition of Israeli beauty brands"
    ],
    alternatives: [
      {
        id: "a15",
        name: "Beautycounter",
        description: "Clean beauty brand with transparent ingredient sourcing",
        link: "https://example.com/beautycounter"
      },
      {
        id: "a16",
        name: "Elate Cosmetics",
        description: "Sustainable makeup with ethical manufacturing",
        link: "https://example.com/elate"
      }
    ]
  },
  {
    id: "9",
    name: "Airbnb",
    category: "Entertainment",
    description: "Home rental platform that lists properties in Israeli settlements.",
    reasons: [
      "Lists rental properties in Israeli settlements in occupied territories",
      "Reversed decision to delist properties in settlements"
    ],
    alternatives: [
      {
        id: "a17",
        name: "Fairbnb",
        description: "Ethical home-sharing platform with community focus",
        link: "https://example.com/fairbnb"
      },
      {
        id: "a18",
        name: "Booking.com",
        description: "Travel site with ethical listing policies",
        link: "https://example.com/booking"
      }
    ]
  },
  {
    id: "10",
    name: "Caterpillar",
    category: "Household",
    description: "Heavy equipment manufacturer whose bulldozers are used in demolitions of Palestinian homes.",
    reasons: [
      "Equipment used in demolition of Palestinian homes and infrastructure",
      "Military-grade equipment sold to Israeli forces"
    ],
    alternatives: [
      {
        id: "a19",
        name: "Kubota",
        description: "Equipment manufacturer with ethical business practices",
        link: "https://example.com/kubota"
      },
      {
        id: "a20",
        name: "John Deere",
        description: "Equipment manufacturer with transparent supply chain",
        link: "https://example.com/johndeere"
      }
    ]
  }
];

export const getAllBrands = () => brands;

export const getBrandById = (id: string) => {
  return brands.find(brand => brand.id === id);
};

export const getBrandsByCategory = (category: Category) => {
  return brands.filter(brand => brand.category === category);
};

export const getCategories = (): Category[] => {
  return Array.from(new Set(brands.map(brand => brand.category)));
};

export const searchBrands = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return brands.filter(
    brand => 
      brand.name.toLowerCase().includes(lowercaseQuery) ||
      brand.description.toLowerCase().includes(lowercaseQuery)
  );
};
