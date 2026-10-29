export interface MaterialOption {
  id: string;
  name: string;
  tagline: string;
  durabilityYears: string;
  warranty: string;
  windRating: string;
  pricePerSqFt: number;
  popular?: boolean;
  image: string;
  description: string;
  benefits: string[];
}

export const ROOF_MATERIALS: MaterialOption[] = [
  {
    id: 'standing-seam',
    name: 'Architectural Standing-Seam Steel',
    tagline: 'The pinnacle of modern aesthetics and extreme storm fortitude',
    durabilityYears: '60+ Years',
    warranty: 'Lifetime Transferable',
    windRating: '160 MPH',
    pricePerSqFt: 14.50,
    popular: true,
    image: './images/hero-roof-luxury.jpg',
    description: 'Precision-concealed fastener panels coated with ceramic fluoropolymer. Zero exposed screws, 100% rustproof, maximum solar reflectivity.',
    benefits: [
      'Reflects up to 85% of solar thermal heat',
      'Class 4 impact resistance against baseball-sized hail',
      'Never rots, curls, or suffers moss infestation',
      'Increases home market resale equity by up to 21%'
    ]
  },
  {
    id: 'slate-composite',
    name: 'Ultra-Composite Heritage Slate',
    tagline: 'Timeless European charm with aerospace-grade composite resilience',
    durabilityYears: '50+ Years',
    warranty: '50-Year Non-Prorated',
    windRating: '140 MPH',
    pricePerSqFt: 18.00,
    popular: false,
    image: './images/roof-materials-slate.jpg',
    description: 'Molded from authentic natural slate quarry patterns using recycled polymers and virgin minerals. Half the weight of quarry rock with zero fracture risk.',
    benefits: [
      'Indistinguishable from authentic historic quarry slate',
      'No expensive roof truss reinforcement required',
      'UV-stabilized through-body pigment that never fades',
      'Superior freeze-thaw acoustic damping'
    ]
  },
  {
    id: 'hd-architectural-shingle',
    name: 'HD Multi-Layer Armored Shingles',
    tagline: 'High-definition shadow lines with triple-laminated storm protection',
    durabilityYears: '35+ Years',
    warranty: 'Lifetime System Plus',
    windRating: '130 MPH',
    pricePerSqFt: 8.75,
    popular: false,
    image: './images/roof-craftsman.jpg',
    description: 'Extra-thick fiberglass core soaked with SBS-modified rubberized asphalt, engineered for flexible resilience in sub-zero and blazing temperatures.',
    benefits: [
      'Algae-resistant copper micro-granules stay pristine',
      'SureNail® reinforced gripping strip for high winds',
      'Cost-optimized premium aesthetic',
      'Fast 1-day turnaround installation'
    ]
  },
  {
    id: 'solar-integrated',
    name: 'Seamless Architectural Solar Tile',
    tagline: 'Clean energy generation hidden inside stunning glass-ceramic roof tiles',
    durabilityYears: '40+ Years',
    warranty: '30-Year Power Output & Weather Guarantee',
    windRating: '150 MPH',
    pricePerSqFt: 22.00,
    popular: false,
    image: './images/roof-drone-scan.jpg',
    description: 'Tempered solar glass modules flush-mounted into your roofline. Generates 100% of household electricity without clunky visible rack mounts.',
    benefits: [
      'Qualifies for 30% Federal Clean Energy Tax Credit',
      'Monitors real-time roof thermal and power generation via app',
      'Triple-sealed water channeling perimeter',
      'Battery storage backup compatibility'
    ]
  }
];

export interface ProjectShowcase {
  id: string;
  client: string;
  location: string;
  roofType: string;
  sizeSqFt: number;
  durationDays: number;
  warranty: string;
  beforeAfterCaption: string;
  image: string;
  quote: string;
  highlights: string[];
}

export const SHOWCASE_PROJECTS: ProjectShowcase[] = [
  {
    id: 'project-1',
    client: 'The Sterling Residence',
    location: 'Highland Park Estates',
    roofType: 'Matte Obsidian Standing Seam Steel',
    sizeSqFt: 4200,
    durationDays: 2,
    warranty: 'Lifetime Transferable',
    beforeAfterCaption: 'Transformed aging wood shake to ultra-modern storm-grade steel',
    image: './images/hero-roof-luxury.jpg',
    quote: 'ApexRoof felt like Apple designed our house. The drone scan caught hidden water damage 3 other contractors missed.',
    highlights: ['160 MPH Wind Certified', 'Class 4 Hail Shield', 'Integrated Hidden Gutters']
  },
  {
    id: 'project-2',
    client: 'Vanguard Architectural Villa',
    location: 'Cedar Ridge Bluffs',
    roofType: 'Ultra-Composite Heritage Slate',
    sizeSqFt: 5800,
    durationDays: 3,
    warranty: '50-Year Non-Prorated',
    beforeAfterCaption: 'Authentic slate aesthetic without the 8-ton weight load on original beams',
    image: './images/roof-materials-slate.jpg',
    quote: 'Our cooling bill dropped $340 in the very first July heatwave. The crew worked with laser levels and spotless precision.',
    highlights: ['Zero Landfill Waste', 'Acoustic Soundproofing', 'Custom Copper Flashing']
  },
  {
    id: 'project-3',
    client: 'Belmont Modern Contemporary',
    location: 'Westlake Hills',
    roofType: 'Architectural Solar Armor System',
    sizeSqFt: 3600,
    durationDays: 2,
    warranty: '30-Year Performance',
    beforeAfterCaption: 'Clean flush-mount energy roof with zero unsightly metal brackets',
    image: './images/roof-drone-scan.jpg',
    quote: 'We now power two EVs from our roof while surviving 70mph Texas windstorms without a single vibration.',
    highlights: ['11.4 kW Hidden Capacity', 'Tesla Powerwall Sync', 'Federal Tax Credit $14,200']
  }
];

export const TESTIMONIALS = [
  {
    author: 'Marcus Vance',
    role: 'Architect & Property Investor',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    verified: true,
    text: 'As an architect, I am notoriously picky about flashing lines and ventilation reveals. ApexRoof used digital lidar scans and finished our 4,500 sq ft home in under 48 hours. Not a single nail left on the grass.',
    project: 'Modern Standing Seam Metal'
  },
  {
    author: 'Dr. Elena Rostova',
    role: 'Homeowner',
    location: 'Cherry Creek, CO',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    verified: true,
    text: 'Last spring golf-ball hail decimated every roof on our street. Ours was installed by ApexRoof two months prior. The insurance inspector walked up, tested our Class-4 metal, and said: "You have zero damage. Perfect installation."',
    project: 'Impact-Shield Composite'
  },
  {
    author: 'Jonathan & Sarah Briggs',
    role: 'Tech Founders',
    location: 'Bellevue, WA',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    rating: 5,
    verified: true,
    text: 'The digital dashboard where you track the crew’s drone scan, permits, and exact delivery time was like Uber for roofing. Transparent pricing, no sleazy contractor games, and guaranteed for life.',
    project: 'Architectural HD Shingle'
  }
];

export const PRICING_PACKAGES = [
  {
    id: 'essential',
    name: 'Precision Shield',
    badge: 'Standard Excellence',
    priceEstimate: 'Starting at $7,800',
    sqFtRate: '$6.50 - $8.50 / sq ft',
    description: 'Ideal for premium residential homes seeking reliable storm-grade replacement with flawless workmanship.',
    features: [
      'Full tear-off down to clean wood decking',
      'Synthetic high-traction storm vapor underlayment',
      'HD Architectural Impact Shingles (Class 3)',
      '130 MPH Wind Shield Guarantee',
      'Continuous Ridge & Eave Ventilation Balance',
      '30-Year Material Warranty / 10-Yr Workmanship',
      'Magnetic sweep lawn sweep for 100% nail removal'
    ],
    ctaText: 'Calculate Precision Quote',
    popular: false
  },
  {
    id: 'signature',
    name: 'Apex Fortress™',
    badge: 'Most Popular Choice',
    priceEstimate: 'Starting at $14,200',
    sqFtRate: '$12.00 - $16.50 / sq ft',
    description: 'Our signature standing-seam architectural steel and composite slate engineered for lifetime durability.',
    features: [
      'Commercial-grade 24-gauge standing seam or composite slate',
      'Full ice & water barrier shield across 100% of roof surface',
      'Class 4 Hail Impact Certified (Max Insurance Discounts)',
      '160 MPH Wind Rating (Category 5 Hurricane proof)',
      'Custom hand-fabricated Kynar 500® perimeter flashing',
      'Lifetime Transferable Non-Prorated Warranty',
      'Annual Digital AI Drone Health Audits included forever',
      'Zero-Down Financing available from $149/mo'
    ],
    ctaText: 'Claim Apex Fortress Spec',
    popular: true
  },
  {
    id: 'energy',
    name: 'Solar Armor Infinity',
    badge: 'Next-Gen Energy Roof',
    priceEstimate: 'Starting at $21,900',
    sqFtRate: 'Net $11.50/sq ft after 30% Tax Credit',
    description: 'Integrated solar glass tiles with architectural metal framing, powering your home while defending against elements.',
    features: [
      'High-efficiency monocrystalline integrated solar tiles',
      'Invisible micro-inverter architectural balance',
      'Full smartphone app energy generation and roof telemetry',
      'Qualifies for 30% Federal Clean Energy Tax Credit (~$8k-$15k)',
      '150 MPH Wind & Class 4 Impact Rated',
      'Battery backup ready with automatic storm power islanding',
      '30-Year Power Output Guarantee & Lifetime Water Seal',
      'White-glove utility interconnect and permit filing'
    ],
    ctaText: 'Design Solar Armor Roof',
    popular: false
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How does your 15-minute drone inspection work?',
    a: 'We deploy an autonomous aerial LiDAR drone equipped with 4K thermal imaging. It maps over 20,000 coordinate points of your roof in under 12 minutes, detecting hidden thermal leaks, underlayment moisture, and millimeter-level pitch measurements without anyone needing to walk on your shingles or disrupt your day.'
  },
  {
    q: 'How fast can a full roof replacement be completed?',
    a: 'Most standard to large residential homes (2,500 – 4,500 sq ft) are stripped, re-decked, sealed, and finished in just 1 to 2 consecutive days. Our specialized 8-person master technician crews operate with synchronized staging trailers and industrial ground protection tarps.'
  },
  {
    q: 'What makes your warranty "Lifetime Transferable"?',
    a: 'Unlike standard contractor warranties that expire after 5 years or void when a house sells, our Apex Platinum Guarantee covers both material failure and labor workmanship for the lifetime of the structure. If you sell your home, the warranty transfers cleanly to the new buyer at zero cost, significantly boosting property resale value.'
  },
  {
    q: 'Can this roof lower my home insurance premiums?',
    a: 'Yes! Because all our systems meet UL 2218 Class 4 Impact Resistance (the highest hail rating available) and Miami-Dade County wind standards, major home insurers typically offer 15% to 32% annual homeowner policy discounts. We supply the certified inspection paperwork directly to your insurance agent.'
  },
  {
    q: 'Do you offer zero-down financing options?',
    a: 'Yes. We partner with premier home improvement lending institutions to offer 0% APR for 18 months, or low fixed-rate plans starting as low as $149/month with no prepayment penalties and instant soft-check approvals that won’t impact your credit score.'
  },
  {
    q: 'How do you protect my landscaping, driveway, and gutters?',
    a: 'We deploy our proprietary Catch-All™ exterior netting system, high-density driveway bumper pads for disposal vehicles, and dual-pole rare-earth magnetic sweeps across all grass, flowerbeds, and driveways. We guarantee zero property debris or we credit $500 toward your project.'
  }
];
