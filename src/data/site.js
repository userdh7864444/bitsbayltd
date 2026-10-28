// All copy and structure in one place so content edits never touch components.
// Copy is kept verbatim from https://bitsbayltd.com/ wherever the live site
// has it, so the React build reads identically to the WordPress original.

export const brand = {
  name: 'Bitsbay',
  logo: '/logo.png',
  logoIcon: '/logo-icon-150.png',
  heroLogo: '/hero-logo.png',
  upwork:
    'https://www.upwork.com/agencies/bitsbay/?companyReference=1329413591024889856',
}

/**
 * Header menu — the live site nests three levels deep under Services
 * (e.g. Services → Android App Development → IOS App Development).
 */
export const nav = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    children: [
      {
        label: 'Android App Development',
        to: '/services/android-app-development',
        children: [
          { label: 'IOS App Development', to: '/services/ios-app-development' },
          {
            label: 'Cross-Platform Mobile App Development',
            to: '/services/cross-platform-mobile-app-development',
          },
        ],
      },
      {
        label: 'Custom Web Apps',
        to: '/services/custom-web-app',
        children: [
          { label: 'Progressive Web Apps', to: '/services/progressive-web-apps' },
          {
            label: 'Front End Development Services',
            to: '/services/front-end-development-services',
          },
        ],
      },
      {
        label: 'SaaS Application Development',
        to: '/services/saas-application-development',
        children: [
          { label: 'Learn Product Development', to: '/services/learn-product-development' },
          {
            label: 'Custom Application Development',
            to: '/services/custom-application-development',
          },
        ],
      },
      {
        label: 'IOT Development',
        to: '/services/iot-development',
        children: [
          {
            label: 'Augmented Reality App Development',
            to: '/services/augmented-reality-app-development',
          },
          { label: 'Chatbot Development', to: '/services/chatbot-development' },
        ],
      },
      {
        label: 'Ad Services',
        to: '/services/ad-services',
        children: [{ label: 'Amazon Services', to: '/services/amazon-services' }],
      },
      { label: 'Staff Augmentation', to: '/services/staff-augmentation' },
    ],
  },
  {
    label: 'Products',
    children: [{ label: 'Listing Integrity', to: '/products/listing-integrity' }],
  },
  { label: 'Technologies', to: '/technologies' },
]

export const hero = {
  title: 'Custom Web, Mobile & SaaS Development + Amazon Growth Services',
  subtitle:
    'We take pride in enabling future markets with state-of-the-art digital solutions.',
  cta: { label: 'Get Started', to: '/contact' },
  image: '/hero-logo.png',
  background: '/banners/hero-bg.webp',
}

/** Three icon cards; the fourth column is the "Make Appointment" panel. */
export const pillars = [
  {
    icon: 'LaptopCode',
    title: 'Best Service',
    body: 'We give great service with good work, real care, and happy customers every time.',
  },
  {
    icon: 'MoneyCheck',
    title: 'Affordable Price',
    body: 'Get premium solutions tailored to your needs, all at truly affordable, fair prices.',
  },
  {
    icon: 'UserCheck',
    title: '24/7 Support',
    body: 'Count on our expert team for round-the-clock support, anytime you need help.',
  },
]

export const appointment = {
  title: 'Make Appointment',
  body: 'Book your appointment easily anytime online and connect with our team at your convenience.',
  cta: { label: 'Contact Us', to: '/contact' },
}

export const mission =
  'To maintain the highest levels of quality services so that we can provide the best in the market software services. We take pride in enabling future markets with state-of-the-art digital solutions'

export const about = {
  eyebrow: 'About Company',
  title: 'Building Apps for the future',
  body: 'Bitsbay is a software engineering agency founded in 2019 that has delivered 100+ custom web, mobile, and SaaS applications alongside $50M+ in Amazon marketplace sales for clients across the US, UK, and worldwide.',
  storyTitle: 'Our Story',
  storyBody:
    'We at Bitsbay are focused on developing apps that let our clients stand out in front of their competitors. Our team started providing custom-built technology services in 2019 with a vision of building robust, innovative and trendsetting solutions. Over 7+ years of continuous engineering delivery, we have partnered with early-stage founders and scaling enterprises to engineer mission-critical digital products.',
}

export const capabilities = [
  'Mobile Apps Development',
  'SaaS Development',
  'iOT',
  'Web Apps Development',
  'UI / UX Design',
  'Tech Staff Augmentation',
]

export const servicesIntro = {
  eyebrow: 'Our Services',
  title: 'Software Development & Amazon Growth Services',
  body: 'We create custom web and mobile apps, SaaS platforms, and Amazon seller growth systems — delivering software solutions that boost growth, drive innovation, and increase revenue.',
}

export const services = [
  {
    icon: 'Smartphone',
    title: 'App Development',
    body: 'We build user-friendly, high-performance mobile apps for iOS and Android that solve real problems and deliver smooth, engaging digital experiences.',
    to: '/services/app-development',
  },
  {
    icon: 'Globe',
    title: 'Web Applications',
    body: 'We build fast, responsive web apps using modern frameworks, focusing on design, fast performance, and with great user experience.',
    to: '/services/web-applications',
  },
  {
    icon: 'Cpu',
    title: 'Product Engineering',
    body: 'We offer end-to-end product engineering services, from idea to launch, innovation, and speed throughout the software development lifecycle.',
    to: '/services/product-engineering',
  },
  {
    icon: 'Rocket',
    title: 'Trending Technologies',
    body: 'We work with trending technologies like AI, blockchain, and IoT to build innovative digital solutions that meet modern business needs effectively.',
    to: '/services/trending-technologies',
  },
  {
    icon: 'ShoppingCart',
    title: 'Amazon',
    body: 'We help businesses grow on Amazon through product listings, optimization, store management, and strategies that boost visibility, sales.',
    to: '/services/amazon',
  },
]

export const successIntro = {
  title: 'Success Stories',
  body: 'We at Bitsbay, have a history of dealing with clients from various niches. Moreover, we have developed state of the art Desktop based analytics tools, small sized ecommerce web and mobile apps and customer relationship management systems that are custom based as per client’s need. We treat each project as our own and build apps that are bound to take the business to a next level.',
  cta: { label: 'All PROJECTS', to: '/projects' },
}

export const legacy = {
  title: 'Our Legacy',
  body: 'Bitsbay is a team of highly proficient app developers, passionate UX/UI designers, and creative digital product engineers with a track record of exceeding client expectations. Our team has a legacy of delivering apps and digital solutions for small and medium enterprises across retail, manufacturing, healthcare, e-commerce, and other sectors. Our collaborative approach drives continuous improvement, anticipating challenges and delivering fast-paced problem resolution. We partner closely with clients to understand their business goals and deliver products engineered for long-term impact.',
}

export const legacyTiles = [
  { label: 'Mobile App Development', icon: 'Smartphone' },
  { label: 'Cloud Web Applications', icon: 'Cloud' },
  { label: 'Blockchain & Web3', icon: 'Boxes' },
  { label: 'Wearable & IoT Apps', icon: 'Watch' },
]

export const industriesIntro = {
  title: 'Multivertical Expertise',
  body: 'We have served diverse industries and delivered solutions across multiple niches. Our track record and client success speak for themselves.',
}

export const industries = [
  { label: 'Tech Startups', icon: 'Rocket' },
  { label: 'E-Learning & Education', icon: 'BookOpen' },
  { label: 'Enterprise Software', icon: 'Building2' },
  { label: 'Fintech & Insurance', icon: 'Banknote' },
]

export const testimonialsIntro = {
  eyebrow: 'Testimonials',
  title: 'What Clients Say About Us',
  body: 'At Bitsbay, our clients come first. Their trust drives us to deliver excellence—here’s what they say about working with us.',
}

export const testimonials = [
  {
    name: 'Daniel schifter',
    role: 'Client',
    body: 'These guys are the absolute best. They do what they say they are going to do and do it right. Their team is highly professional, responsive, and always delivers on time.',
  },
  {
    name: 'Simpson',
    role: 'Client',
    body: 'Hired Bitsbay for a mobile application project that was previously delayed due to unforeseen circumstances. Their team stepped in and delivered the project smoothly and efficiently.',
  },
  {
    name: 'Edward',
    role: 'Client',
    body: 'They cooperated exceptionally well throughout the project, accommodating changes seamlessly at every stage. Their agency, Bitsbay, is deeply knowledgeable and delivered outstanding business results.',
  },
]

export const cta = {
  eyebrow: 'Make Appointment',
  title: 'We Are Here To Find The Best Solution For Your IT Problems',
  body: 'Bitsbay is always ready to discuss new ideas ranging from Mobile App Development to any ideas with Web design and services. Come discuss your potential app ideas with us over a cup of coffee!',
  cta: { label: 'Contact Us', to: '/contact' },
}

export const partners = {
  eyebrow: 'Our partner',
  title: 'Meet With Our Satisfied Clients',
  body: 'Bitsbay Ltd is a trusted web and app development company, known for delivering tailored digital solutions that exceed client expectations. Our focus on innovation, performance, and ongoing support has earned us long-term partnerships and consistent client satisfaction across various industries.',
}

/* ------------------------------------------------------------------
   PROJECTS — the live site's real case studies, split into Web and
   Mobile the same way /projects/ does.
------------------------------------------------------------------ */
export const webProjects = [
  {
    slug: 'seized',
    title: 'Seized',
    heading: 'SEIZED',
    tag: 'E-Commerce',
    category: 'Web Application',
    image: '/projects/seized.png',
    clientType: 'Interactive Gaming & E-Commerce',
    description:
      'PlaySiezd is a gaming e-commerce platform where users purchase items by participating in live interactive games, with entry charges dynamically adjusting to live market valuations.',
    problem:
      'The client needed a real-time gamified shopping experience where fluctuating entry costs dynamically align with secondary market prices, requiring sub-100ms concurrency for live bidding and play sessions without state divergence.',
    solution:
      'Bitsbay architected a reactive web application using React and Google Firestore real-time snapshot listeners, combined with atomic Cloud Functions to guarantee transparent credit verification and zero concurrency conflicts.',
    results: [
      'Processed 50,000+ live game rounds in initial 90 days',
      'Sub-150ms real-time credit updates across concurrent users',
      'Zero transaction discrepancies or double-spend incidents',
    ],
    stack: 'React js, Firebase, Firestore',
    shots: ['/shots/seized-1.png', '/shots/seized-2.png', '/shots/seized-3.png'],
  },
  {
    slug: 'courier-label',
    title: 'Courier Label',
    heading: 'COURIER LABEL',
    tag: 'Logistics',
    category: 'Web Application',
    image: '/projects/courier-label.png',
    clientType: 'B2B Logistics & Supply Chain',
    description:
      'Automated multi-carrier shipping label generation and parcel dispatch portal designed to streamline high-volume fulfillment and unlock commercial volume discounts.',
    problem:
      'Manual shipping label preparation and disparate courier rate comparisons were creating 4+ hour daily dispatch bottlenecks and packing errors for high-volume commercial shippers.',
    solution:
      'Bitsbay engineered an automated dispatch system using Node.js, Express, and React that queries multi-carrier rate calculation APIs in parallel, generates batch thermal PDF labels, and pushes live tracking updates to client ERPs.',
    results: [
      'Reduced label generation cycle times by 75%',
      'Automated batch dispatch of 15,000+ monthly shipments',
      'Generated over $35,000 in shipping cost arbitrage savings',
    ],
    stack: 'React.js, MongoDB, Node.js, Express.js',
    shots: [
      '/shots/courier-1.png',
      '/shots/courier-2.png',
      '/shots/courier-3.png',
      '/shots/courier-4.png',
      '/shots/courier-5.png',
    ],
  },
  {
    slug: 'ecommsync',
    title: 'ECommSync',
    heading: 'ECommSync',
    tag: 'E-Commerce',
    category: 'Web Application',
    image: '/projects/ecommsync.png',
    clientType: 'Multi-Channel Online Retailer',
    description:
      'Centralized multi-channel inventory management software synchronizing stock counts, order feeds, and delivery states across Amazon, eBay, and independent stores.',
    problem:
      'Selling across fragmented marketplaces led to frequent overselling penalties, account health warnings, and hundreds of lost staff hours spent manually reconciling inventory spreadsheets.',
    solution:
      'Bitsbay developed a centralized MERN stack inventory engine that monitors marketplace webhooks, synchronizes SKU stock balances across all channels in under 3 seconds, and triggers automated low-stock warnings.',
    results: [
      'Reduced out-of-stock cancellation penalties by 94%',
      'Synchronizes 12,000+ active SKUs across 3 major channels',
      'Saved 20+ hours per week in manual spreadsheet entries',
    ],
    stack: 'React.js, MongoDB, MERN Stack, Node.js',
    shots: [
      '/shots/ecommsync-1.png',
      '/shots/ecommsync-2.png',
      '/shots/ecommsync-3.png',
      '/shots/ecommsync-4.png',
    ],
  },
  {
    slug: 'skusnap',
    title: 'Sku Snap',
    heading: 'SKU SNAP',
    tag: 'E-Commerce',
    category: 'Web Application',
    image: '/projects/skusnap.png',
    clientType: 'Wholesale Hardware & IT Distributor',
    description:
      'High-throughput distributor integration platform connecting commercial wholesalers directly with top distributors including Ingram Micro and Synnex for automated procurement.',
    problem:
      'Wholesale order placement with Ingram Micro and Synnex required complex manual EDI entry, creating fulfillment delays of up to 48 hours on time-sensitive enterprise IT hardware orders.',
    solution:
      'Bitsbay built an automated distributor bridge on Node.js and MongoDB with real-time catalog ingestion, algorithmic price tier validation, and one-click purchase order execution directly through distributor APIs.',
    results: [
      'Live automated integration with Ingram Micro & Synnex APIs',
      'Wholesale PO turnaround dropped from 48 hours to under 5 minutes',
      'Over $12M in hardware purchase orders routed through platform',
    ],
    stack: 'React.js, MongoDB, MERN Stack, Node.js',
    shots: [
      '/shots/skusnap-1.png',
      '/shots/skusnap-2.png',
      '/shots/skusnap-3.png',
      '/shots/skusnap-4.png',
      '/shots/skusnap-5.png',
    ],
  },
  {
    slug: 'a5',
    title: 'A5',
    heading: 'A5',
    tag: 'E-Commerce',
    category: 'Web Application',
    image: '/projects/a5.png',
    clientType: 'Omnichannel Retail Enterprise',
    description:
      'All-in-one omnichannel retail operations hub unifying Amazon, eBay, and Walmart storefronts with integrated distributor dropshipping and multi-carrier label generation.',
    problem:
      'Fragmented retail channels across Amazon, Walmart, and eBay with disconnected warehousing led to inconsistent fulfillment times and missed SLA shipping deadlines.',
    solution:
      'Bitsbay engineered an all-in-one multi-vendor commerce hub connecting order feeds, live courier rate calculations, and automated distributor fulfillment dropshipping into a single dashboard.',
    results: [
      'Unified 3 global marketplace channels and 2 distributors',
      'Over 180,000 orders dispatched with automated tracking',
      'Achieved 99.4% on-time carrier delivery compliance',
    ],
    stack: 'React.js, MongoDB, MERN Stack, Node.js',
    shots: ['/shots/a5-1.png', '/shots/a5-2.png', '/shots/skusnap-3.png'],
  },
  {
    slug: 'myship',
    title: 'MyShip',
    heading: 'MYSHIP',
    tag: 'Logistics',
    category: 'Web Application',
    image: '/projects/myship.png',
    clientType: 'Cross-Border Freight & Parcel Delivery',
    description:
      'International package forwarding and logistics tracking platform featuring dimensional weight calculation, customs clearance automation, and carrier rate discounting.',
    problem:
      'Cross-border package forwarding customers lacked live freight rate visibility and custom declaration automation, leading to frequent customs clearance delays.',
    solution:
      'Bitsbay engineered a full-service shipping application with automated tariff calculations, dimensional weight estimators, and digital customs documentation generation.',
    results: [
      'Customs documentation error rate dropped to <0.1%',
      '85% faster international dispatch processing',
      'Over 40,000 packages forwarded globally',
    ],
    stack: 'React.js, MongoDB, Node.js, Express.js',
    shots: [
      '/shots/myship-1.png',
      '/shots/myship-2.png',
      '/shots/myship-3.png',
      '/shots/myship-4.png',
    ],
  },
  {
    slug: 'automaz',
    title: 'Automaaz',
    heading: 'AUTOMAAZ',
    tag: 'Amazon Tools',
    category: 'Web Application',
    image: '/projects/automaz.png',
    clientType: 'Amazon FBA / FBM Brand Aggregator',
    description:
      'Real-time Amazon store automation and order management software built on Amazon SP-API to optimize fulfillment workflows, inventory replenishment, and Buy Box retention.',
    problem:
      'Managing hundreds of real-time Amazon orders and inventory restocks across multiple storefronts led to frequent stockouts, Buy Box loss, and delayed dispatch metrics.',
    solution:
      'Bitsbay integrated Amazon Selling Partner API (SP-API) using React and Firebase to provide real-time order feeds, automated repricing triggers, and restocking velocity alerts.',
    results: [
      'Maintained 99.2% Buy Box share across core ASINs',
      'Zero stockout events during peak Q4 holiday shopping',
      'Real-time order synchronization with sub-5-second latency',
    ],
    stack: 'React js, Firebase, Firestore',
    shots: [
      '/shots/automaz-1.png',
      '/shots/automaz-2.png',
      '/shots/automaz-3.png',
      '/shots/automaz-4.png',
      '/shots/automaz-5.png',
    ],
  },
]

export const mobileProjects = [
  {
    slug: 'novoplaza',
    title: 'Novo Plaza',
    heading: 'NOVO PLAZA',
    tag: 'Retail & Loyalty',
    category: 'Mobile Application',
    image: '/projects/novoplaza.png',
    clientType: 'Mobile Shopping Mall & Loyalty Platform',
    description:
      'Interactive retail loyalty mobile application rewarding in-mall shopping with prize draws, redeemable merchant reward points, and localized retail promotions.',
    problem:
      'Shopping mall foot-traffic was declining and retailers needed a sticky digital loyalty system to reward repeat in-mall spending and drive customer footfalls.',
    solution:
      'Bitsbay developed a cross-platform mobile app in React Native with receipt scanning, dynamic prize tiers, QR redemption at merchant registers, and push notification marketing.',
    results: [
      '25,000+ active mobile app users in pilot market',
      '38% increase in repeat customer visits within 60 days',
      '4.8 star average rating on Google Play and Apple App Store',
    ],
    stack: 'React Native, Firebase, Cloud Functions',
    shots: ['/shots/novoplaza-1.jpeg'],
  },
  {
    slug: 'taskii',
    title: 'Taskii',
    heading: 'TASKII',
    tag: 'Marketplace',
    category: 'Mobile Application',
    image: '/projects/taskii.png',
    clientType: 'On-Demand Local Services Marketplace',
    description:
      'Two-sided on-demand task marketplace connecting homeowners with verified local service contractors (electricians, plumbers, repair technicians) with milestone escrow billing.',
    problem:
      'Homeowners and service contractors suffered from unreliable scheduling, non-transparent hourly billing, and lack of verified accountability on service quality.',
    solution:
      'Bitsbay engineered a dual-sided marketplace mobile app (React Native + GraphQL + Node.js) featuring geofenced task broadcasting, in-app messaging, escrow milestone payments, and mutual review verification.',
    results: [
      'Over 10,000 completed household and commercial tasks',
      'Average contractor response time under 12 minutes',
      '96% customer satisfaction rating on completed jobs',
    ],
    stack: 'React/React Native, MongoDB, Google Firebase, GraphQL, Node.js',
    shots: ['/shots/taskii-1.jpg'],
  },
  {
    slug: 'team-connection',
    title: 'Team Connection',
    heading: 'TEAM CONNECTION',
    tag: 'Enterprise Workflow',
    category: 'Mobile Application',
    image: '/projects/team-connection.png',
    clientType: 'Energy & Oil Refinery Enterprise',
    description:
      'Enterprise workforce coordination app engineered for industrial oil refinery facilities, providing shift broadcasting, hazardous task assignments, and compliance tracking.',
    problem:
      'Field technicians at industrial oil refinery sites had limited connectivity and struggled to coordinate hazardous task procedures with central management.',
    solution:
      'Bitsbay built an offline-first mobile and web coordination app using React Native, React.js, and Firestore with local caching, safety protocol checklists, and shift assignment boards.',
    results: [
      'Deployed across 4 refinery facilities and 800+ field workers',
      '100% safety protocol compliance logging achieved',
      'Zero downtime or data loss during network disconnects',
    ],
    stack: 'Mobile: React Native, Firebase, Firestore | Web: React.js, Firebase, Firestore',
    shots: ['/shots/team-connection-1.jpg'],
  },
  {
    slug: 'snippy',
    title: 'Snippy',
    heading: 'SNIPPY',
    tag: 'Analytics SaaS',
    category: 'Web Application',
    image: '/projects/snippy.png',
    clientType: 'Marketing Analytics & Ad Tech SaaS',
    description:
      'High-throughput branded URL shortening and link intelligence platform designed for campaign attribution, deep linking, and real-time click stream analytics.',
    problem:
      'Performance marketing teams were losing conversion tracking accuracy on third-party link shorteners and needed sub-10ms redirect latency with custom branded domains.',
    solution:
      'Bitsbay engineered an in-memory Redis caching redirect architecture backed by PostgreSQL and AWS, with real-time geo and device attribution dashboards built in React.',
    results: [
      'Sub-8ms global link redirect latency via Redis cluster',
      'Handled 5M+ monthly click events with zero packet loss',
      'Full UTM tag builder and custom branded domain SSL support',
    ],
    stack: 'Node.js, Express, Redis, React.js, PostgreSQL, AWS',
    shots: ['/projects/snippy-shot.png'],
  },
]

export const allProjects = [...webProjects, ...mobileProjects]

/** The five cards shown under "Success Stories" / "Meet With Our Satisfied Clients". */
export const successStories = [
  allProjects.find((p) => p.slug === 'skusnap'),
  allProjects.find((p) => p.slug === 'a5'),
  { ...allProjects.find((p) => p.slug === 'seized'), title: 'Seied' },
  allProjects.find((p) => p.slug === 'courier-label'),
  { ...allProjects.find((p) => p.slug === 'ecommsync'), title: 'Ecomm Sync' },
]

export const getProjectBySlug = (slug) => allProjects.find((p) => p.slug === slug)

/* ------------------------------------------------------------------
   TECHNOLOGIES — grouped exactly as /technologies/ lists them.
------------------------------------------------------------------ */
export const technologiesIntro = {
  eyebrow: 'Serving Technology Better',
  title: 'Technologies',
  body: 'A growing team of technologists- we have earned a reputation in the small & medium sized companies with deep understanding of different.',
  body2:
    'Programming languages and tools in the areas of design, development, and testing. Certified and experienced, our team combines technical know-how with industry best practices to create viable solutions.',
}

export const technologies = {
  'Native Android': ['Android NDK', 'Java', 'Xamarin', 'React Native'],
  'Web & Hybrid': ['Objective-C', 'Angular JS', 'Ionic', 'React Native'],
  'Virtual & Mixed Reality': ['Google VR', 'Unity', 'Vive'],
  'Server Technologies': ['Node JS', 'Python', 'IBM', 'AWS', 'DOCN'],
  Testing: ['Swift', 'Azure', 'Oculus'],
  Database: ['MySQL', 'MongoDB', 'Firebase'],
}

/* ------------------------------------------------------------------
   CONTACT / FOOTER
------------------------------------------------------------------ */
export const contactIntro = {
  eyebrow: 'Contact Us',
  title: 'Get In Touch With Us',
  body: 'At Bitsbay, we’re always ready to partner with you on your next breakthrough. Whether you’re launching a new app, refining UX/UI, or exploring blockchain solutions, our team of tech experts is here to help.',
}

export const offices = [
  {
    country: 'Pakistan',
    address: '1st Floor, Zoom Square Plaza, Masoom Shah Road, Multan, Pakistan 60000',
    footerLabel: 'Multan Address, PAK:',
    footerAddress: 'Zoom Square Plaza, Masoom Shah Road, Multan, Pakistan – 60000',
    phoneLabel: 'Pakistan Phone:',
    phone: '+92 333 3810066',
  },
  {
    country: 'USA',
    address: '2234 North Federal Hwy Ste 3184 Boca Raton, FL 33431',
    footerLabel: 'Florida Address, USA :',
    footerAddress: '2234 North Federal Hwy Ste 3184 Becon Raton, 33431',
    phoneLabel: 'USA Phone:',
    phone: '+1 (904) 809 7098',
  },
]

export const email = 'support@bitsbayltd.com'

export const socials = [
  {
    label: 'X',
    href: 'https://x.com/Bitsbayltd?t=Wt2l60yUeKwRIlyrmcKb2Q&s=09',
    icon: 'Twitter',
  },
  { label: 'Facebook', href: 'https://www.facebook.com/bitsbayltd', icon: 'Facebook' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/bitsbayltd',
    icon: 'Linkedin',
  },
  { label: 'YouTube', href: 'https://www.youtube.com/@bitsbayltd', icon: 'Youtube' },
]

export const footerBlurb =
  'Powering digital innovation through custom web & mobile solutions. We transform ideas into scalable, user-centric applications with cutting-edge technologies.'

export const footerLinks = {
  Services: [
    { label: 'App Development', to: '/services/app-development' },
    { label: 'Web Applications', to: '/services/web-applications' },
    { label: 'Product Engineering', to: '/services/product-engineering' },
    { label: 'Trending Technologies', to: '/services/trending-technologies' },
    { label: 'Amazon', to: '/services/amazon' },
  ],
  'Quick Links': [
    { label: 'About Us', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
    { label: 'Project', to: '/projects' },
    { label: 'Technologies', to: '/technologies' },
    { label: 'Blog', to: '/blog' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
  ],
}
