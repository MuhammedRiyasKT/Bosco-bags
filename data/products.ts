export type Product = {
  slug: string
  title: string
  subtitle: string
  category: string
  price: number
  sku: string
  thumbnail: string
  images: string[]
  materials: string[]
  description: string
}

export const products: Product[] = [
  {
    slug: "classic-leather-tote",
    title: "Classic Leather Tote",
    subtitle: "Full-grain leather, daily carry",
    category: "Tote",
    price: 189,
    sku: "CLT-001",
    thumbnail: "/classic-leather-tote.png",
    images: ["/tote-front.png", "/tote-back.png", "/tote-inside.png", "/tote-detail.png"],
    materials: ["Full-grain leather", "Cotton lining", "YKK zipper"],
    description:
      "A refined tote built with premium leather, balanced proportions, and reinforced straps for all-day comfort.",
  },
  {
    slug: "urban-commuter-backpack",
    title: "Urban Commuter Backpack",
    subtitle: "Lightweight, 16” laptop friendly",
    category: "Backpack",
    price: 159,
    sku: "UCB-002",
    thumbnail: "/urban-commuter-backpack.png",
    images: ["/backpack-front.png", "/backpack-inside.png", "/backpack-detail.png", "/person-wearing-backpack.png"],
    materials: ["Technical nylon", "Water-resistant coating", "Padded straps"],
    description: "Streamlined storage with quick access and ergonomic support, ideal for urban mobility.",
  },
  {
    slug: "weekender-duffel",
    title: "Weekender Duffel",
    subtitle: "Travel-ready, spacious core",
    category: "Duffel",
    price: 209,
    sku: "WDF-003",
    thumbnail: "/weekender-duffel.png",
    images: ["/duffel-front.png", "/duffel-side.png", "/duffel-detail.png", "/duffel-inside.png"],
    materials: ["Waxed canvas", "Leather trims", "Metal hardware"],
    description: "A versatile duffel with protected compartments and durable base for weekend trips.",
  },
  {
    slug: "crossbody-sling",
    title: "Crossbody Sling",
    subtitle: "Compact & secure",
    category: "Sling",
    price: 89,
    sku: "CBS-004",
    thumbnail: "/crossbody-sling.png",
    images: ["/crossbody-front.png", "/crossbody-side.png", "/crossbody-detail.png", "/crossbody-inside.png"],
    materials: ["Ripstop nylon", "Magnetic clasp", "Soft webbing"],
    description: "Quick-access sling to carry essentials, discreet and lightweight.",
  },
  {
    slug: "structured-briefcase",
    title: "Structured Briefcase",
    subtitle: "Executive finish",
    category: "Briefcase",
    price: 249,
    sku: "SBC-005",
    thumbnail: "/classic-briefcase.png",
    images: ["/briefcase-front.png", "/briefcase-inside.png", "/briefcase-detail.png", "/briefcase-carry.png"],
    materials: ["Top-grain leather", "Microfiber lining", "Metal feet"],
    description: "A sharp silhouette with padded laptop sleeve and organized compartments.",
  },
  {
    slug: "compact-camera-bag",
    title: "Compact Camera Bag",
    subtitle: "Padded inserts for gear",
    category: "Camera",
    price: 129,
    sku: "CCB-006",
    thumbnail: "/camera-bag.png",
    images: ["/camera-front.png", "/camera-inside.png", "/camera-detail.png", "/camera-carry.png"],
    materials: ["Ballistic nylon", "High-density foam", "Waterproof zippers"],
    description: "Secure camera carry with adjustable dividers and weather protection.",
  },
]
