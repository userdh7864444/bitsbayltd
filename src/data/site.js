// All copy and structure in one place so content edits never touch components.
// Copy is kept verbatim from https://bitsbayltd.com/ wherever the live site
// has it, so the React build reads identically to the WordPress original.

export const brand = {
  name: 'Bitsbay',
  logo: '/logo.png',
  logoIcon: '/logo-icon.png',
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
  title: 'Impacting Future Markets by inventing top-notch solutions.',
  subtitle:
    'We take pride in enabling Future Markets with state-of-the-art digital solutions.',
  cta: { label: 'Get Started', to: '/contact' },
  image: '/hero-logo.png',
  background: '/banners/hero-bg.jpg',
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
  cta: { label: 'cONTACT US', to: '/contact' },
}

export const mission =
  'To maintain the highest levels of quality services so that we can provide the best in the market software services. We take pride in enabling future markets with state-of-the-art digital solutions'

export const about = {
  eyebrow: 'About Company',
  title: 'Building Apps for the future',
  body: 'Our amazing team is focused on developing apps which can leave a mark in the tech industry with future prospects in mind.',
  storyTitle: 'Our Story',
  storyBody:
    'We at Bitsbay are focused in developing apps that let our clients stand out in front of their competitors. Our team started providing custom-built technology services in 2019 with a vision of building robust, innovative and trendsetting solutions.',
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
  title: 'What Service We Offer',
  body: 'We create custom web and mobile apps, delivering software solutions that boost growth, drive innovation, and increase revenue with proven results.',
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
    body: 'We build fast, responsive web apps using modern framworks, focusing on design, fast performance, and with great user experience.',
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
  body: 'Bitsbay is a team of highly proficient app developers, passionate UX/UI designers and creative digital product developers. Who are habitual of exceeding client’s expectations. Our team has a legacy of delivering apps and digital solutions for small & medium enterprises in retail, manufacturing, healthcare, ecommerce and other sectors. Our approach to software development is unique, we go beyond and above by continuous improvement, anticipating challenges and fast paced problem resolution. Our biggest strength is in the collaborative nature of our services; We partner with the clients and build relationships to understand their business needs and goals. We optimize as deliver much as we can to a product that is as close to perfection as possible.',
}

export const legacyTiles = [
  { label: 'MOBILE', icon: 'Smartphone' },
  { label: 'CLOUD WEB', icon: 'Cloud' },
  { label: 'BLOCKCHAIN', icon: 'Boxes' },
  { label: 'WATCH', icon: 'Watch' },
]

export const industriesIntro = {
  title: 'Multivertical Expertise',
  body: 'We have catered every industry and discovered working for every niche. This is why, our legacy speaks louder than words .',
}

export const industries = [
  { label: 'TECH STARTUP', icon: 'Rocket' },
  { label: 'EDUCATION', icon: 'BookOpen' },
  { label: 'ENTERPRISE', icon: 'Building2' },
  { label: 'INSURANCE', icon: 'Banknote' },
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
    body: 'Had hired him for a mobile application project that was previously delayed due to unforseen circumstances. He helped to the best of his abilities to build the project',
  },
  {
    name: 'Edward',
    role: 'Client',
    body: 'They are cooperated a lot in the project, even if there is something needs to be changed at any time. There agency, Bitsbay is really knowledgeable and made me lots of money',
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
    description:
      'PlaySiezd is a gaming e-commerce site where you can buy items by participating in games. Entry charges fluctuate based on the market value of goods. Earn credits by playing games and use them to purchase items.',
    stack: 'React js, Firebase, Firestore',
    shots: ['/shots/seized-1.png', '/shots/seized-2.png', '/shots/seized-3.png'],
  },
  {
    slug: 'courier-label',
    title: 'Courier Label',
    heading: 'COURIER LABEL',
    tag: 'E-Commerce',
    category: 'Web Application',
    image: '/projects/courier-label.png',
    description:
      'Unlock special shipping discounts and streamline your order processing with a tailored service combination that propels your business forward with efficiency and savings.',
    stack: 'React.js, MongoDB, Node.js, express.js',
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
    description:
      'Ecom Sync simplifies inventory management across multiple e-commerce platforms like Amazon and eBay. Easily assign stores to your product listings, update stock quantities, and track delivered items in real time. With centralized control, you can prevent overselling, manage inventory efficiently, and ensure seamless operations. Stay organized and focus on growing your business with Ecom Sync!',
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
    description:
      'Sku Snap: Seamless Integration with Leading Distributors. Sku Snap is a cutting-edge solution integrated with major distributors like Ingram Micro and Synnex, allowing you to create and manage orders effortlessly.',
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
    description:
      'A5 is an integrated e-commerce platform that connects your stores, including Amazon, eBay, and Walmart, into one seamless system. Get real-time shipping rates, create shipping labels, and stay updated with order tracking. It also integrates with distributors like Ingram and Synnex, enabling you to easily place and manage orders. Simplify your operations and grow your business with A5!',
    stack: 'React.js, MongoDB, MERN Stack, Node.js',
    shots: ['/shots/a5-1.png', '/shots/a5-2.png', '/shots/skusnap-3.png'],
  },
  {
    slug: 'myship',
    title: 'MyShip',
    heading: 'MYSHIP',
    tag: 'E-Commerce',
    category: 'Web Application',
    image: '/projects/myship.png',
    description:
      'Unlock special shipping discounts and streamline your order processing with a tailored service combination that propels your business forward with efficiency and savings.',
    stack: 'React.js, MongoDB, Node.js, express.js',
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
    tag: 'E-Commerce',
    category: 'Web Application',
    image: '/projects/automaz.png',
    description:
      'Explore the key services offered by Amazon Real Time Orders, designed to automate and optimize your Amazon store operations.',
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
    tag: 'Mobile App',
    category: 'Mobile Application',
    image: '/projects/novoplaza.png',
    description:
      'Novaapka is a shopping mall app where users earn prizes by spending a certain amount of money on items. Users can use points to purchase items.',
    stack: 'React Native, Firebase, Cloud Functions',
    shots: ['/shots/novoplaza-1.jpeg'],
  },
  {
    slug: 'taskii',
    title: 'Taskii',
    heading: 'TASKII',
    tag: 'Mobile App',
    category: 'Mobile Application',
    image: '/projects/taskii.png',
    description:
      'Taskii is a task management system for creating tasks (electrician, plumber, service). It follows a creator-and-doer framework, allowing recurring and time-bound tasks. Both creators and doers can review each other.',
    stack: 'React/React Native, MongoDB, Google Firebase, GraphQL, Node.js',
    shots: ['/shots/taskii-1.jpg'],
  },
  {
    slug: 'team-connection',
    title: 'Team Connection',
    heading: 'TEAM CONNECTION',
    tag: 'Mobile App',
    category: 'Mobile Application',
    image: '/projects/team-connection.png',
    description:
      'Teamconnection is a task management app for an oil refinery firm. Companies can post news, assign tasks, and employees can view news and check tasks assigned to them.',
    stack: 'Mobile: React Native, Firebase, Firestore | Web: React.js, Firebase, Firestore',
    shots: ['/shots/team-connection-1.jpg'],
  },
  {
    slug: 'snippy',
    title: 'Snippy',
    heading: 'SNIPPY',
    tag: 'Mobile App',
    category: 'Mobile Application',
    image: '/projects/snippy.png',
    description: '',
    stack: '',
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
