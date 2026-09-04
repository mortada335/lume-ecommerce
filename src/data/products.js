// Single source of truth for all product data
// Categories: 'workspace' | 'seating' | 'lighting' | 'decor'

export const PRODUCTS = [
  // WORKSPACE
  {
    id: "forma-desk",
    name: "Forma Writing Desk",
    category: "workspace",
    price: 1100,
    formattedPrice: "$1,100",
    images: [
      "/images/img_01.jpg",
      "/images/img_02.jpg"
    ],
    colors: ["#C2B280", "#1A1A1A", "#E5E5E5"],
    description: "The Forma desk pairs solid ash wood with a clean, uninterrupted surface — designed for deep focus. Tapered legs provide stability without visual weight.",
    specs: { material: "Solid Ash", dimensions: "W140 × D65 × H75 cm", weight: "28 kg", finish: "Natural oil" },
    isNew: false, rating: 4.9, dateAdded: "2024-04-10", popularity: 91,
  },
  {
    id: "grid-organizer",
    name: "Grid Desk Organizer",
    category: "workspace",
    price: 89,
    formattedPrice: "$89",
    images: [
      "/images/img_03.jpg"
    ],
    colors: ["#E5E5E5", "#1A1A1A"],
    description: "Precision-machined from a single block of recycled aluminum. Holds pens, cables, cards, and small devices — everything off your desk surface, nothing out of reach.",
    specs: { material: "Recycled Aluminum", dimensions: "W20 × D12 × H8 cm", weight: "0.6 kg", finish: "Matte anodized" },
    isNew: true, rating: 4.7, dateAdded: "2024-06-10", popularity: 83,
  },
  {
    id: "arc-monitor-stand",
    name: "Arc Monitor Stand",
    category: "workspace",
    price: 195,
    formattedPrice: "$195",
    images: [
      "/images/img_04.jpg"
    ],
    colors: ["#E5E5E5", "#C2B280"],
    description: "Raises your screen to eye level and creates hidden cable routing underneath. Crafted from one piece of bent bamboo ply — no screws, no seams.",
    specs: { material: "Bamboo Ply", dimensions: "W40 × D22 × H11 cm", weight: "1.2 kg", finish: "Natural lacquer" },
    isNew: true, rating: 4.8, dateAdded: "2024-06-18", popularity: 88,
  },
  // SEATING
  {
    id: "kanso-lounge-chair",
    name: "Kanso Lounge Chair",
    category: "seating",
    price: 895,
    formattedPrice: "$895",
    images: [
      "/images/img_04.jpg",
      "/images/img_05.jpg"
    ],
    colors: ["#E5E5E5", "#5D6B60"],
    description: "The Kanso is a study in restraint. A hand-stitched linen seat rests on a solid oak frame with angled legs that echo mid-century form without mimicking it.",
    specs: { material: "Solid Oak / Linen", dimensions: "W78 × D82 × H75 cm", weight: "14 kg", seatHeight: "42 cm" },
    isNew: false, rating: 4.9, dateAdded: "2024-05-01", popularity: 98,
  },
  {
    id: "koto-low-chair",
    name: "Koto Low Lounge Chair",
    category: "seating",
    price: 1150,
    formattedPrice: "$1,150",
    images: [
      "/images/img_05.jpg"
    ],
    colors: ["#E5E5E5", "#5D6B60", "#1A1A1A"],
    description: "Sit lower, think deeper. The Koto's low-slung profile encourages a relaxed posture — its generous seat and wrapped armrests feel made for long evenings.",
    specs: { material: "Walnut / Bouclé", dimensions: "W85 × D90 × H68 cm", weight: "16 kg", seatHeight: "33 cm" },
    isNew: true, rating: 5.0, dateAdded: "2024-06-20", popularity: 96,
  },
  {
    id: "aura-lounge-chair",
    name: "Aura Lounge Chair",
    category: "seating",
    price: 895,
    formattedPrice: "$895",
    images: [
      "/images/img_06.jpg"
    ],
    colors: ["#C2B280", "#E5E5E5"],
    description: "A studio-quality chair with a solid oak frame and textured linen upholstery. The Aura's gentle curves and neutral palette make it effortlessly adaptable to any space.",
    specs: { material: "Solid Oak / Linen", dimensions: "W74 × D79 × H77 cm", weight: "13 kg", seatHeight: "44 cm" },
    isNew: true, rating: 4.8, dateAdded: "2024-06-01", popularity: 90,
  },
  // LIGHTING
  {
    id: "aura-table-lamp",
    name: "Aura Table Lamp",
    category: "lighting",
    price: 245,
    formattedPrice: "$245",
    images: [
      "/images/img_07.jpg"
    ],
    colors: ["#E5E5E5", "#1A1A1A"],
    description: "A sculptural ceramic base paired with a hand-blown opal glass globe. The warm glow diffuses evenly — no harsh shadows, no harsh seams.",
    specs: { material: "Ceramic / Opal Glass", dimensions: "Ø18 × H38 cm", weight: "1.8 kg", bulb: "E27 LED 8W (included)" },
    isNew: true, rating: 4.8, dateAdded: "2024-06-15", popularity: 92,
  },
  {
    id: "lucent-floor-lamp",
    name: "Lucent Floor Lamp",
    category: "lighting",
    price: 450,
    formattedPrice: "$450",
    images: [
      "/images/img_08.jpg"
    ],
    colors: ["#1A1A1A", "#b89947", "#d8dbd7"],
    description: "Sleek, sculptural, and commanding. The Lucent's stem is hand-welded steel with a brushed finish — the shade pivots 180° for reading or ambient light.",
    specs: { material: "Welded Steel", dimensions: "Ø30 × H158 cm", weight: "4.2 kg", bulb: "GU10 LED 7W (included)" },
    isNew: true, rating: 4.9, dateAdded: "2024-06-01", popularity: 99,
  },
  {
    id: "eclipse-table-lamp",
    name: "Eclipse Table Lamp",
    category: "lighting",
    price: 245,
    formattedPrice: "$245",
    images: [
      "/images/img_09.jpg"
    ],
    colors: ["#E5E5E5", "#C2B280"],
    description: "A cylindrical marble base meets a frosted glass globe. Minimal in form, considered in detail — the Eclipse suits a bedside table as well as a study corner.",
    specs: { material: "Marble / Frosted Glass", dimensions: "Ø15 × H35 cm", weight: "2.1 kg", bulb: "E27 LED 6W (included)" },
    isNew: false, rating: 4.7, dateAdded: "2024-04-20", popularity: 85,
  },
  // DECOR
  {
    id: "terra-vase-trio",
    name: "Terra Vase Trio",
    category: "decor",
    price: 120,
    formattedPrice: "$120",
    images: [
      "/images/img_03.jpg"
    ],
    colors: ["#8C5A4C", "#C2B280"],
    description: "Three vessels, three scales, one clay body. Wheel-thrown by hand in terracotta and white stoneware. Each set is unique — identical in design, individual in character.",
    specs: { material: "Terracotta / Stoneware", dimensions: "H8 / H14 / H20 cm", weight: "0.9 kg (set)", finish: "Matte glaze" },
    isNew: false, rating: 4.7, dateAdded: "2024-03-20", popularity: 85,
  },
  {
    id: "oasis-ceramic-vase",
    name: "Oasis Ceramic Vase",
    category: "decor",
    price: 120,
    formattedPrice: "$120",
    images: [
      "/images/img_10.jpg"
    ],
    colors: ["#E5E5E5", "#C2B280"],
    description: "A tall, handcrafted matte white ceramic vase with a subtly textured surface. The Oasis stands alone — or holds a single stem with complete confidence.",
    specs: { material: "Stoneware", dimensions: "Ø12 × H32 cm", weight: "0.7 kg", finish: "Matte white glaze" },
    isNew: false, rating: 4.9, dateAdded: "2024-05-12", popularity: 91,
  },
  {
    id: "cove-coffee-table",
    name: "Cove Coffee Table",
    category: "decor",
    price: 650,
    formattedPrice: "$650",
    images: [
      "/images/img_02.jpg"
    ],
    colors: ["#1A1A1A", "#C2B280"],
    description: "A low-profile solid walnut table with softly rounded corners and a blind shelf for books. Built for living rooms where nothing should be in the way.",
    specs: { material: "Solid Walnut", dimensions: "W110 × D60 × H38 cm", weight: "22 kg", finish: "Natural oil" },
    isNew: false, rating: 4.8, dateAdded: "2024-04-18", popularity: 87,
  },
]
