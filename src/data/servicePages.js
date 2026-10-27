// Per-service page content, scraped and restructured from the live bitsbayltd.com
// service pages. Each entry drives ServiceDetail.jsx via a small set of block
// types: intro, cards, reasons, process. Keep copy close to the source; only
// obvious cross-page copy/paste mistakes (wrong platform name) were corrected.

const androidProcess = [
  {
    title: 'Project Requirements',
    body: 'Collect all the requirements from the client because all development begins with understanding your needs. We create technical documents that outline the project features and functionalities.',
  },
  {
    title: 'Wireframing',
    body: 'The building of the product is done next, which is a critical step in the development process — to thoroughly test the feasibility and practicality of your idea. At this stage, we create detailed and interactive wireframes.',
  },
  {
    title: 'Use Cases',
    body: 'A business analyst will outline and define application flows in the use case document. The use case document will also help in defining the screen flows and designing the application architecture.',
  },
  {
    title: 'UI Design',
    body: "The next stage is designing, which consists of understanding each screen's functionality, determining how it interacts with other screens, and what kind of data should be loaded in it.",
  },
  {
    title: 'Project plan',
    body: 'Our project plan outlines each phase of development with clear timelines, milestones, and deliverables. It ensures transparency, efficient progress, and smooth collaboration from start to finish.',
  },
  {
    title: 'Development Phase',
    body: 'This is an iterative process where programming code is written for new features in every iteration. We make sure that you get your application from scratch to a running app.',
  },
  {
    title: 'Quality Assurance',
    body: 'Once the development is done, we start testing for bugs and errors. After a thorough clean-up process, we pass on the final version to you for approval. Your feedback is then incorporated into the next iteration of your project.',
  },
  {
    title: 'App Launch',
    body: "After you approve the app, we submit it to the store. Once it's live, several things need to be done, such as setting up a developer account, configuring your application, and checking the release version.",
  },
]

const roadmapProcess = [
  {
    title: 'Project Require',
    body: 'A dedicated team member gathers project requirements from the client.',
  },
  {
    title: 'Use Cases',
    body: 'The requirements are then used to draft use cases of the application.',
  },
  {
    title: 'Project Plan',
    body: 'Project development is divided into sprints and managed via PM tool.',
  },
  {
    title: 'Wireframes',
    body: 'App wireframes are developed for the client to get an idea of the final product.',
  },
  {
    title: 'Design',
    body: 'The wireframes are used as reference to create application designs.',
  },
  {
    title: 'Agile Development',
    body: 'Project development is done sprint wise regular code reviews and testing.',
  },
  {
    title: 'Testing & QA',
    body: 'After completion, QA testing is conducted to ensure there are no bugs.',
  },
  {
    title: 'Release',
    body: 'The product is then uploaded to live and made available to the target audience.',
  },
  {
    title: 'Maintenance',
    body: 'Post app launch, we deliver maintenance, support and enhancement services.',
  },
]

export const servicePages = {
  'android-app-development': {
    title: 'Android Apps Development',
    subtitle: 'We develop high-performing app solutions for Android based devices.',
    heroImage: '/hero/android-app-development.jpg',
    sections: [
      {
        type: 'cards',
        heading: 'The Value We Offer Our Clients',
        subheading:
          'We treat our clients like a part of the Bitsbay family and ensure their experience with us is hassle-free and transparent.',
        columns: 2,
        featuredFirst: true,
        items: [
          {
            icon: 'LifeBuoy',
            title: 'Support and Maintenance',
            body: 'We provide you with post-launch support and maintenance services that allow you to keep your apps up and running even after they are created on your Android phone.',
          },
          {
            icon: 'MessageCircle',
            title: 'Free Consultation to Discuss Your Idea',
            body: "We believe every idea is worth hearing so that you can share your app idea with us anytime. We'll provide you with valuable insights into how to make an app that plays a significant role in growth.",
          },
          {
            icon: 'Clock',
            title: 'Timely Delivery of App Updates',
            body: "You'll have access to a dedicated technical project manager who will help you stay on top of deadlines using collaborative tools for constant communication. We believe in delivering timely updates.",
          },
          {
            icon: 'GitBranch',
            title: 'Flexible Project Structuring',
            body: "We structure each project as per the client's needs to ensure satisfaction at every development step. To do this, we diversify our team to provide maximum coverage of platforms and technologies.",
          },
        ],
      },
      {
        type: 'process',
        heading: 'Our Android App Development Process',
        subheading:
          'We follow a well-defined process and development strategy to create Android apps, from brainstorming to the final delivery. Our experts map out the requirements of your business goals and go through several rounds of discussion to ensure that all the bases are covered before the actual development starts.',
        steps: androidProcess,
      },
      {
        type: 'results',
        heading: 'Proven Results from Our Android Projects',
        entries: [
          {
            stat: '4.8★',
            label: 'Average Play Store rating',
            detail: 'Our Android apps average a 4.8 star rating across published Play Store listings.',
          },
          {
            stat: '40%',
            label: 'Faster time-to-market',
            detail: 'Clients launching with our agile sprints go live 40% faster than industry average.',
          },
          {
            stat: '60+',
            label: 'Android apps delivered',
            detail: 'From startup MVPs to enterprise-scale Kotlin apps shipped globally.',
          },
        ],
        links: [
          { label: 'See AutoMaz case study', to: '/projects/automaz' },
          { label: 'Cross-platform alternatives', to: '/services/cross-platform-mobile-app-development' },
          { label: 'How we build products', to: '/services/product-engineering' },
        ],
      },
      {
        type: 'faq',
        heading: 'Android App Development FAQs',
        items: [
          {
            title: 'How long does it take to build an Android app?',
            body: 'A simple Android app typically takes 8–12 weeks. More complex apps with custom backends, payment flows, or real-time features take 16–24 weeks. We scope every project before quoting a timeline.',
          },
          {
            title: 'What programming languages do you use for Android?',
            body: 'We build primarily in Kotlin, the modern officially-supported language, with Java for legacy codebases. For cross-platform projects we also use Flutter (Dart).',
          },
          {
            title: 'How much does Android app development cost?',
            body: 'Costs start at ~$8,000 for a focused MVP and scale to $40,000+ for enterprise apps with complex integrations. We offer fixed-price, time-and-material, and monthly retainer models.',
          },
          {
            title: 'Do you provide post-launch support?',
            body: 'Yes. All projects include a 30-day bug-fix warranty. We also offer ongoing maintenance retainers covering OS updates, feature additions, and performance monitoring.',
          },
          {
            title: 'Will I own the source code?',
            body: 'Absolutely. Upon final payment you receive full source code ownership, all credentials, and complete handover documentation.',
          },
          {
            title: 'Can you build both the app and the backend API?',
            body: 'Yes — we are a full-stack team. We build Node.js / Python backends, REST and GraphQL APIs, and cloud infrastructure on AWS or GCP alongside every mobile app.',
          },
        ],
      },
    ],
  },

  'ios-app-development': {
    title: 'IOS Apps Development',
    subtitle: 'Elevate Your Business with Premium iOS Applications Built Using Swift & Objective C.',
    heroImage: '/hero/ios-app-development.jpg',
    sections: [
      {
        type: 'intro',
        heading: 'Hire Experienced, On-Demand iOS Developers (iPhone App Experts)',
        paragraphs: [
          "Without going through the hassle of managing a team on-site, you can access experts who have the skills and expertise needed for iOS application development. If you need a solo experienced developer, our experts are available as full-time employees or freelance, so you get a scalable workforce that is suited to your project's requirements.",
        ],
      },
      {
        type: 'cards',
        columns: 4,
        featuredFirst: true,
        items: [
          {
            icon: 'Wallet',
            title: 'Fixed Price Model',
            body: "Let's check out our pricing model for custom iOS app development. We have three flexible pricing plans tailored to suit different needs and project sizes. Whether you're a startup or an established business, there's an option that fits your goals.",
          },
          {
            icon: 'CircleDollarSign',
            title: 'Fixed Cost',
            body: 'Applications where people share a scope, and we deliver at a fixed cost to you. You are not charged any additional fee based on increasing or decreasing the scope after the application is provided. You have the cost estimated before your project begins.',
          },
          {
            icon: 'Clock',
            title: 'Time & Material Based',
            body: 'Our second model is time-based work. We estimate work requirements, and the client pays on the hourly rate agreed. We negotiate the hourly rate based on budget and features. This is useful for apps where the requirements are not fixed.',
          },
          {
            icon: 'CalendarRange',
            title: 'Monthly Plan',
            body: "If you need a hands-off approach, we have a flexible monthly plan. You get the time, dedication, and expert support related to your project without any long-term obligation — like hiring an outsourced team every month without the overhead.",
          },
        ],
      },
      {
        type: 'process',
        heading: 'Our iOS App Development Process',
        subheading:
          'We follow a well-defined process to create iOS apps, from brainstorming to the final delivery. Our experts map out the requirements of your project and go through several rounds of discussion to ensure that all the bases are covered before the actual development starts.',
        steps: [
          {
            title: 'Project Requirements',
            body: 'Collect all the requirements from the client because all iOS application development begins with understanding your needs. We create technical documents that outline the project features and functionalities.',
          },
          {
            title: 'Wireframing',
            body: 'The building of the product is done next, which is a critical step in the development process — to thoroughly test the feasibility and practicality of your idea. At this stage, we create detailed and interactive wireframes.',
          },
          {
            title: 'Use Cases',
            body: 'A business analyst will outline and define application flows in the use case document. The use case document will also help in defining the screen flows and designing the application architecture.',
          },
          {
            title: 'UI Design',
            body: "The next stage is designing, which consists of understanding each screen's functionality, determining how it interacts with other screens, and what kind of data should be loaded in it.",
          },
          {
            title: 'Project plan',
            body: 'Our project plan outlines each phase of development with clear timelines, milestones, and deliverables. It ensures transparency, efficient progress, and smooth collaboration from start to finish.',
          },
          {
            title: 'Development Phase',
            body: 'This is an iterative process where programming code is written for new features in every iteration. We make sure that you get your iOS application on the App Store from scratch to a running app.',
          },
          {
            title: 'Quality Assurance',
            body: 'Once the development is done, we start testing for bugs and errors. After a thorough clean-up process, we pass on the final version to you for approval. Your feedback is then incorporated into the next iteration of your project.',
          },
          {
            title: 'App Launch',
            body: "After you approve the app, we submit it to the Apple Store. Once it's live on the store, several things need to be done, such as setting up a developer account with Apple, configuring your application in App Store Connect, and checking the iOS version.",
          },
        ],
      },
      {
        type: 'results',
        heading: 'iOS Development Results at a Glance',
        entries: [
          {
            stat: '4.9★',
            label: 'Average App Store rating',
            detail: 'Our iOS apps consistently earn top ratings through polished UI and rigorous QA.',
          },
          {
            stat: '35%',
            label: 'Higher retention vs industry avg',
            detail: 'Our UX-first approach keeps users engaged and returning.',
          },
          {
            stat: '50+',
            label: 'iPhone & iPad apps shipped',
            detail: 'Across retail, logistics, fintech, and social platforms.',
          },
        ],
        links: [
          { label: 'Android alternative', to: '/services/android-app-development' },
          { label: 'Cross-platform (Flutter / React Native)', to: '/services/cross-platform-mobile-app-development' },
          { label: 'View mobile projects', to: '/projects' },
        ],
      },
      {
        type: 'faq',
        heading: 'iOS App Development FAQs',
        items: [
          {
            title: 'How much does iOS app development cost?',
            body: 'iOS apps start at around $10,000 for a lean MVP and range to $50,000+ for feature-rich apps with complex data or Apple Pay integrations. We provide a fixed-price quote before any work begins.',
          },
          {
            title: 'How long does iOS development take?',
            body: 'Simple apps take 8–14 weeks; complex apps with custom APIs, push notifications, and in-app purchases typically take 16–28 weeks.',
          },
          {
            title: 'Do you build for both iPhone and iPad?',
            body: 'Yes. Our Swift apps are built with adaptive layouts using Auto Layout and SwiftUI that work perfectly across all iPhone and iPad screen sizes.',
          },
          {
            title: 'Can you integrate Apple Pay, Face ID, or HealthKit?',
            body: 'Yes. We regularly integrate Apple platform frameworks including StoreKit, HealthKit, ARKit, CoreML, Sign in with Apple, and Wallet/Apple Pay.',
          },
          {
            title: 'Will you submit the app to the App Store for us?',
            body: 'Yes. We handle the full App Store submission, including screenshots, metadata, age ratings, and any review correspondence needed to get your app approved.',
          },
        ],
      },
    ],
  },

  'cross-platform-mobile-app-development': {
    title: 'Cross-Platform Mobile Apps',
    subtitle: 'Flawless hybrid app development for multiple platforms using HTML5, CSS3 and JavaScript.',
    heroImage: '/hero/cross-platform-mobile-app-development.jpg',
    sections: [
      {
        type: 'intro',
        heading: 'Native vs. Cross-Platform Apps',
        paragraphs: [
          'When it comes to cross-platform development strategy there are two popular ways that most companies and developers choose from.',
        ],
      },
      {
        type: 'cards',
        featuredFirst: true,
        columns: 2,
        items: [
          {
            icon: 'Smartphone',
            title: 'Native',
            body: "Native app development is a traditional way of developing apps, where each app is developed for a single platform. Native apps are faster and can function offline; however, they don't work on all devices and platforms and usually take more time and resources.",
          },
          {
            icon: 'Layers',
            title: 'Hybrid',
            body: 'Frameworks like Ionic use web-based code that can run on many different devices using one codebase. Hybrid applications allow businesses to release the same product across multiple operating systems at once; however, performance might suffer as it depends on internet connectivity.',
          },
        ],
      },
      {
        type: 'process',
        heading: 'Our Cross-Platform App Development Process',
        subheading:
          'We follow a well-defined process and development strategy to create cross-platform apps, from brainstorming to the final delivery. Our experts map out the requirements of your business goals and go through several rounds of discussion to ensure that all the bases are covered before the actual development starts.',
        steps: [
          {
            title: 'Project Requirements',
            body: 'Collect all the requirements from the client because all application development begins with understanding your needs. We create technical documents that outline the project features and functionalities.',
          },
          {
            title: 'Wireframing',
            body: 'We create wireframes for your application to show user journeys. The prototype building of the product is done next, which is a critical step — to test the feasibility of your idea and help you understand app usability.',
          },
          {
            title: 'Use Cases',
            body: 'A business analyst will outline and define application flows in the use case document. The use case document will also help in defining the screen flows and designing the application architecture.',
          },
          {
            title: 'UI Design',
            body: "The next stage is designing, which consists of understanding each screen's functionality, determining how it interacts with other screens, and what kind of data should be loaded in it.",
          },
          {
            title: 'Project plan',
            body: "Following the agile methodology, we create a project plan that outlines each iteration's milestones, tasks, and deliverables. We make sure that all the features are built to your requirements.",
          },
          {
            title: 'Development Phase',
            body: 'This is an iterative process where programming code is written for new features in every iteration, from scratch to a running app.',
          },
          {
            title: 'Quality Assurance',
            body: 'Once the development is done, we start testing for bugs and errors. After a thorough clean-up process, we pass on the final version to you for approval. Your feedback is then incorporated into the next iteration of your project.',
          },
          {
            title: 'App Launch',
            body: 'After you approve the app, we submit it to the app stores. Once it’s live, several things need to be done, such as setting up developer accounts, configuring your application, and checking release versions.',
          },
        ],
      },
      {
        type: 'results',
        heading: 'Proven Cross-Platform Performance',
        entries: [
          {
            stat: '50%',
            label: 'Lower development cost',
            detail: 'Single codebase for both iOS and Android reduces initial build and ongoing maintenance budgets by up to 50%.',
          },
          {
            stat: '2x',
            label: 'Faster release cycles',
            detail: 'Ship features and hotfixes simultaneously to Google Play and Apple App Store without team bottlenecks.',
          },
          {
            stat: '60fps',
            label: 'Native-feel performance',
            detail: 'Using modern Flutter and React Native architectures with GPU acceleration and native bridge optimizations.',
          },
        ],
        links: [
          { label: 'Explore Android development', to: '/services/android-app-development' },
          { label: 'Explore iOS development', to: '/services/ios-app-development' },
          { label: 'View our mobile projects', to: '/projects' },
        ],
      },
      {
        type: 'faq',
        heading: 'Cross-Platform App Development FAQs',
        items: [
          {
            title: 'Is cross-platform development as good as native development?',
            body: 'For 90% of business applications, yes. Modern frameworks like Flutter and React Native compile to native ARM code and deliver near-native 60fps performance while cutting development and maintenance costs in half.',
          },
          {
            title: 'Should I choose Flutter or React Native for my project?',
            body: 'Flutter is ideal for apps requiring pixel-perfect custom UI designs and high animation performance across platforms. React Native is preferred if you have an existing web React codebase or need deep integration with specific native libraries.',
          },
          {
            title: 'How much does a cross-platform mobile app cost?',
            body: 'Cross-platform apps typically cost between $9,000 and $35,000 depending on complexity, compared to $18,000–$70,000 for separate native iOS and Android apps.',
          },
          {
            title: 'Can cross-platform apps access device hardware like camera, GPS, and Bluetooth?',
            body: 'Yes. Both Flutter and React Native provide robust native bridge plugins to interact with cameras, biometric authentication, GPS location, push notifications, and Bluetooth sensors.',
          },
          {
            title: 'Do you manage submission to both Google Play and Apple App Store?',
            body: 'Yes, our team handles the end-to-end publishing process on both platforms, ensuring strict compliance with Google and Apple developer guidelines.',
          },
        ],
      },
    ],
  },

  'custom-web-app': {
    title: 'Custom Web Apps',
    subtitle:
      'Secure custom web solutions tailored to meet your business requirements within your timeframe and budget.',
    heroImage: '/hero/custom-web-app.jpg',
    sections: [
      {
        type: 'cards',
        featuredFirst: true,
        heading: 'Engagement Models',
        columns: 3,
        items: [
          {
            icon: 'Wallet',
            title: 'Fixed Price Model',
            body: 'In this model, we finalize the cost at the start of the project. It suits projects with defined scope and requirements which remain the same through the business tenure — and ensures on-time and on-budget delivery.',
          },
          {
            icon: 'Clock',
            title: 'Time and Material',
            body: 'This model pays for time and resources used on a project. This flexible approach gives more room for adaptation, adjusting requirements, and iterative improvements. It reflects agile methodology and is a popular choice.',
          },
          {
            icon: 'Users',
            title: 'Dedicated Teams',
            body: 'This is the best option if you have a long-term project. Hiring a dedicated team keeps you more involved in the development process. Depending on the expertise you require, we provide the most suitable candidates.',
          },
        ],
      },
      {
        type: 'process',
        heading: 'Our Custom Web App Development Approach',
        subheading: 'An experience ensuring the best results, fitting your business needs.',
        steps: [
          {
            title: 'Requirement and Consultation',
            body: 'Our team of web development experts perform analysis of your business needs and requirements, on the basis of which the most relevant web stack is chosen.',
          },
          {
            title: 'Discovery and Planning',
            body: 'The project roadmap is explicitly defined and detailed project requirements are documented to ensure the developed web app covers all of your business requirements.',
          },
          {
            title: 'Prototyping',
            body: "We create a visualization of the concept to carefully evaluate the application's feasibility in terms of real implementation, technical challenges, and the assessment of the long-term potential of the web application.",
          },
        ],
      },
      {
        type: 'results',
        heading: 'Proven Custom Web App Delivery',
        entries: [
          {
            stat: '99.9%',
            label: 'Uptime reliability',
            detail: 'Engineered on resilient cloud architecture (AWS / GCP / Vercel) with automated CI/CD and disaster recovery.',
          },
          {
            stat: '3x',
            label: 'Performance acceleration',
            detail: 'Lighthouse score optimizations, server-side caching, and modern frontend tooling deliver sub-second response times.',
          },
          {
            stat: '85+',
            label: 'Web applications launched',
            detail: 'From internal ERP dashboards and B2B portals to public-facing platforms and consumer marketplaces.',
          },
        ],
        links: [
          { label: 'Explore SaaS development', to: '/services/saas-application-development' },
          { label: 'Frontend development services', to: '/services/front-end-development-services' },
          { label: 'View web projects portfolio', to: '/projects' },
        ],
      },
      {
        type: 'faq',
        heading: 'Custom Web Application FAQs',
        items: [
          {
            title: 'How much does a custom web application cost in 2026?',
            body: 'A focused MVP web app typically ranges from $10,000 to $25,000. Larger enterprise-grade portals and custom software systems with complex data layers, roles, and integrations start from $30,000+. We provide transparent itemized scopes.',
          },
          {
            title: 'What tech stack do you use for web applications?',
            body: 'Our primary stack includes React, Next.js, and Vue.js on the frontend, with Node.js, Express, Python (FastAPI/Django), and PostgreSQL/MongoDB on the backend, hosted on AWS, GCP, or Vercel.',
          },
          {
            title: 'How long does custom web application development take?',
            body: 'Standard web apps take 10–16 weeks from discovery to deployment. Iterative sprint releases allow you to test and demo working software every two weeks.',
          },
          {
            title: 'How do you ensure data security and compliance?',
            body: 'We implement OWASP top 10 best practices, role-based access control (RBAC), TLS encryption in transit and at rest, and secure OAuth2/JWT token authentication.',
          },
          {
            title: 'Who owns the intellectual property and code?',
            body: 'You retain 100% ownership of all source code, database schemas, and intellectual property generated during the engagement upon milestone completion.',
          },
        ],
      },
    ],
  },

  'progressive-web-apps': {
    title: 'Progressive Web Apps',
    subtitle: 'Leverage the power of the latest technology with our development services for progressive web apps.',
    heroImage: '/hero/progressive-web-apps.jpg',
    sections: [
      {
        type: 'intro',
        eyebrow: 'Fast & Engaging',
        heading: 'Progressive Web App Development',
        paragraphs: [
          'Progressive Web Apps are defining the future of app development. As a result of this emerging technology, you can deliver a native app-like rich experience to users without compromising on reliability, performance and connectivity speed. Since these fast-loading applications do not require app store approval, they enable businesses to push the app to market quicker than before. With PWAs, companies can penetrate the dense market segments glued to their mobile screens and also benefit from a self-updating feature.',
        ],
      },
      {
        type: 'intro',
        heading: 'Creating Cutting Edge Progressive Apps',
        paragraphs: [
          'Companies of all sizes, whether large or small, are jumping on Progressive Web Apps to create better user experiences — and we are here to help them do it. Whether you are an e-commerce platform, banking or insurance sector, or a media-information portal, we can set up a cutting-edge progressive web app that expands your business reach and customer engagement.',
        ],
        ctaText: 'I want to create a progressive web app',
      },
      {
        type: 'reasons',
        image: '/hero/reasons.png',
        heading: 'Reasons to choose us',
        subheading:
          "Our processes are streamlined to develop flawless progressive web applications. We achieve this by carrying out a series of multiple online and offline testing procedures, ensuring that the final release surpasses client expectations. Here's why we are different from others in the market:",
        items: [
          'Protect your app idea with signed NDA',
          'Free strategy call to refine app features, plan marketing and monetize options',
          'Agile development to ensure you have the flexibility to change requirements',
          'Effective use of our engineered boilerplate to reduce development time and costs',
          'Seamless communication using Slack, Trello or any preferred tool of your choice',
          'Robust test-driven app development (TDD)',
          'Manual and automated QA processes to test app across dozens of devices',
          'Regular code commits to ensure transparency of code handover',
          'Maintenance and after deployment support',
        ],
      },
      {
        type: 'process',
        heading: 'Bitsbay Road To Successful Application Development',
        steps: [
          {
            title: 'Project Require',
            body: 'Project requirements are gathered and documented. Research is conducted to understand the project.',
          },
          {
            title: 'Use Cases',
            body: 'Application features are written in the form of use cases shared with the client.',
          },
          {
            title: 'Project Plan',
            body: 'Division of the project development tasks into sprints.',
          },
          {
            title: 'Wireframes',
            body: 'Meanwhile, the teams work on producing wireframes.',
          },
          {
            title: 'Design',
            body: 'Our design team adopts and approach design screen before goes development.',
          },
          {
            title: 'Agile Development',
            body: 'The developers begin their magic and complete each sprint as planned.',
          },
          {
            title: 'Testing & QA',
            body: 'Furthermore, we perform automated and manual quality checks to ensure the promised quality.',
          },
          {
            title: 'Release',
            body: 'After thorough testing by our team and the client, we make the application live.',
          },
          {
            title: 'Maintenance',
            body: 'Post app launch, we deliver maintenance, quality support and enhancement services as required.',
          },
        ],
      },
    ],
  },

  'front-end-development-services': {
    title: 'Frontend Development Services',
    subtitle: 'Reliable and adaptable web app solutions without jeopardizing your commercial objectives.',
    heroImage: '/hero/front-end-development-services.jpg',
    sections: [
      {
        type: 'cards',
        featuredFirst: true,
        heading: 'Our Front End Development Services',
        columns: 3,
        items: [
          {
            icon: 'Atom',
            title: 'ReactJS Front End Development',
            body: 'For front end development, essential features like efficiency, scalability, flexibility, and convenience go hand in hand with powerful tools like ReactJS. Our expert front end developers create robust, modern frameworks for responsive and content-rich web applications that are fast-loading and highly interactive.',
          },
          {
            icon: 'Code2',
            title: 'AngularJS Front End Development',
            body: 'AngularJS is a powerful front end tool, allowing developers to utilize the maximum features of JavaScript while developing rich, responsive, dynamic and scalable front end solutions in a short span of time.',
          },
          {
            icon: 'Layers',
            title: 'VueJS Front End Development',
            body: 'VueJS comes second to none when choosing a framework for front end development due to its easy syntax and robust architecture. Our developers make the best use of VueJS to build adaptable progressive web apps with a consistent UI/UX on every device.',
          },
        ],
      },
      {
        type: 'process',
        heading: 'Our Front End Development Process',
        subheading: 'Each successive step takes you closer to your dream come true.',
        steps: [
          {
            title: 'Project Requirements',
            body: 'Client Support team assigns one member to gather project requirements.',
          },
          {
            title: 'Design',
            body: 'Once the client approves the prototypes, we move on to design the application.',
          },
          {
            title: 'Use Cases',
            body: 'Project features and functionality are drafted in a use case document.',
          },
          {
            title: 'Wireframing',
            body: 'Next is wireframing and prototyping so that the client gets an idea of how the screens will appear.',
          },
          {
            title: 'Support',
            body: 'Post app launch as per requirement maintenance, quality support and enhancement services are delivered.',
          },
          {
            title: 'Agile development',
            body: 'The project goes into development where our development team puts in their dedicated effort.',
          },
          {
            title: 'Testing & QA',
            body: 'Manual & automated QA checks are run post the development phase.',
          },
          {
            title: 'Release',
            body: 'The product is made live where intended users can access it.',
          },
          {
            title: 'Project plan',
            body: 'The project is managed via project management tools.',
          },
        ],
      },
    ],
  },

  'saas-application-development': {
    title: 'SaaS Application Development',
    subtitle: 'Bitsbay delivers automated systems that can be fully incorporated into a SaaS network.',
    heroImage: '/hero/saas-application-development.jpg',
    sections: [
      {
        type: 'intro',
        heading: 'Enhanced Infrastructure With SaaS Cloud Services',
        paragraphs: [
          'Owing to the scalability and flexibility it offers, SaaS application development services are in demand big time, and we are here to develop SaaS mobile and web solutions that can not only garner new leads for you but also help you retain your loyal consumer base.',
          'The main reason Bitsbay is considered an authority for SaaS solutions is that your business requirements are always prioritized for specialized and customized SaaS services. We craft your idea and divide its creation into phases that can be practically achieved, so the user base can quickly adopt it. A solid SaaS network, user experience, strong architecture and security are prioritized at all times.',
          'We have implemented the framework systems and useful resources that upheld SaaS development for multiple clients without a glitch. We can also help you build a SaaS application even on an existing PaaS (Platform-as-a-Service) utilizing open source cloud frameworks like OpenStack, or on Java, PHP, Python & Ruby on Rails.',
        ],
        pills: ['SaaS App', 'SaaS Software', 'SaaS Web'],
        ctaText: 'Discuss an app idea now',
      },
      {
        type: 'reasons',
        image: '/hero/reasons.png',
        subheading:
          'When it comes to SaaS Application Development Services, we can be your ideal partner. We go above and beyond to ensure client satisfaction.',
        items: [
          'Your application thought is ensured using a marked NDA.',
          'Get free application consultancy on application development, including upgrade, application adaptation, pre, and post-showcasing system, and so on.',
          'Agile development process to break your application development procedure.',
          'UX/UI specialists to fuel your application with imagination.',
          'Constant correspondence regarding your app.',
          'International quality affirmation models to test your application.',
          'Complete support for deployment.',
          'International coding standards for application advancement.',
          'Complete after-sales support',
        ],
      },
      {
        type: 'process',
        heading: 'Bitsbay Road To Successful Application Development',
        steps: [
          {
            title: 'Platform Requirements',
            body: "We accumulate prerequisites and make a task's detail to ensure the client and team are on the same page.",
          },
          {
            title: 'Use Cases',
            body: 'Application features are written as use cases and shared with the client.',
          },
          { title: 'Project Plan', body: 'Meanwhile, the teams work on producing wireframes.' },
          {
            title: 'UI UX Design',
            body: 'Once done, the team moves to create the UI/UX design.',
          },
          {
            title: 'Architecture Structuring',
            body: 'SaaS application is arranged through multiple tenants, and structuring begins. Most suitable hosting module is chosen.',
          },
          {
            title: 'SaaS Application Programming',
            body: 'We seek Agile based development adding adaptability to our development procedure.',
          },
          {
            title: 'SaaS Testing',
            body: 'To ensure SaaS security multiple testing approaches like unit testing, relapse and operational are run to monitor seamless operations.',
          },
          {
            title: 'Deployment',
            body: 'We ensure that the methodology we adopt to deploy the SaaS product is time-saving and cost-effective for your business.',
          },
          {
            title: 'Maintenance',
            body: 'Post app launch, we deliver consistent maintenance, quality support, timely updates, and enhancement services as required.',
          },
        ],
      },
      {
        type: 'results',
        heading: 'SaaS Engineering Metrics',
        entries: [
          {
            stat: '10x',
            label: 'Infrastructure scalability',
            detail: 'Multi-tenant cloud databases and containerized microservices ready to scale from zero to tens of thousands of active tenants.',
          },
          {
            stat: '<200ms',
            label: 'Global API latency',
            detail: 'Edge CDN routing and distributed database caching deliver rapid response times worldwide.',
          },
          {
            stat: '30+',
            label: 'SaaS platforms shipped',
            detail: 'B2B subscription platforms, analytics suites, and AI workflow tools built for global founders.',
          },
        ],
        links: [
          { label: 'Custom web app development', to: '/services/custom-web-app' },
          { label: 'Lean product development & MVP', to: '/services/learn-product-development' },
          { label: 'View our case studies', to: '/projects' },
        ],
      },
      {
        type: 'faq',
        heading: 'SaaS Development FAQs',
        items: [
          {
            title: 'What is the typical cost to build a SaaS MVP?',
            body: 'A production-grade SaaS MVP with user auth, subscription billing (Stripe), tenant isolation, and primary workflows generally costs between $15,000 and $35,000.',
          },
          {
            title: 'How do you handle multi-tenancy and data isolation?',
            body: 'Depending on compliance and scale needs, we implement schema-per-tenant, row-level security (RLS) in PostgreSQL, or database-per-tenant architectures to guarantee strict tenant isolation.',
          },
          {
            title: 'Can you integrate payment providers like Stripe and Lemon Squeezy?',
            body: 'Yes. We build full subscription management systems including recurring billing, tiered pricing, coupon codes, usage-based metering, and customer self-serve portals.',
          },
          {
            title: 'How do you structure the development timeline for a SaaS MVP?',
            body: 'We typically break development into 2-week agile sprints: Discovery (weeks 1–2), Core Architecture & Auth (weeks 3–4), Primary Feature Workflows (weeks 5–8), QA & Billing (weeks 9–10), and Launch Prep (weeks 11–12).',
          },
          {
            title: 'Do you provide DevOps and continuous monitoring?',
            body: 'Yes, we set up automated CI/CD pipelines, Sentry error monitoring, Datadog/CloudWatch metrics, and automated daily backups on AWS, GCP, or DigitalOcean.',
          },
        ],
      },
    ],
  },

  'custom-application-development': {
    title: 'Custom Application Development',
    subtitle: 'Bitsbay produces powerful custom apps especially built to cater to your business necessities.',
    heroImage: '/hero/custom-application-development.jpg',
    sections: [
      {
        type: 'intro',
        eyebrow: 'Meet Business Requirements With',
        heading: 'Custom Application Development',
        paragraphs: [
          'When off-the-shelf solutions do not cut it, custom application development saves the day by creating a solution that perfectly suits your needs. Custom application development requires an in-depth comprehension of your thoughts, processes, data, and organizational goals. It helps companies meet KPI requirements swiftly and more efficiently.',
        ],
      },
      {
        type: 'intro',
        heading: 'Custom App Development At Bitsbay',
        paragraphs: [
          'Where many custom apps incur significant losses to businesses due to sudden glitches, we at Bitsbay avoid this issue by relentlessly test-running your application to guarantee that it stays useful in unfavorable conditions. We create apps bound to bring in ROI along with accomplishing your professional goals.',
        ],
        ctaText: "I need a customized solution. Let's discuss",
      },
      {
        type: 'reasons',
        image: '/hero/reasons.png',
        subheading:
          "Our immaculate app development services and support have always guaranteed customer satisfaction. Here's a list of things that set us apart from others in the market.",
        items: [
          'Specialized ability to deal with any dimension of complex to basic app features.',
          'Rapid development kick-off delivered by top-class app and software engineers',
          'Our reputation for being one of the best in the business due to our extended ability in Mobile and Web',
          'Free of Cost consultancy on your App thought.',
          'Complete transparency from the start till the end.',
          'A trustworthy and competent partnership even after the development of your solution.',
          'Proven track record in both building new products and making an ongoing custom application',
          'Expert project management services powered by Agile methodologies',
          'Designing your app with our robust and proficient designing pool in Mobile, Web, or HTML5.',
          'Excellent management and transparent communication.',
        ],
      },
      {
        type: 'process',
        heading: 'Bitsbay Road To Successful Application Development',
        steps: [
          {
            title: 'App Requirements',
            body: 'Our application development team collects the brief from the client. An analyst takes first-hand information to simplify processes.',
          },
          {
            title: 'Development Stage',
            body: 'The application moves into the development stage where Agile philosophy is pursued religiously to develop a robust app for you.',
          },
          {
            title: 'Project Plan',
            body: 'App development is then broken down into various phases following the agile procedure, along with the application cost.',
          },
          {
            title: 'Wireframing',
            body: 'After the endorsement from the client, the wireframing and model building is started.',
          },
          {
            title: 'UI Design',
            body: 'Next we move to the design development of the approved wireframes.',
          },
          {
            title: 'Application Scope',
            body: 'A draft is carefully made containing all features and insights about the application.',
          },
          {
            title: 'Quality Assurance',
            body: 'Quality testing is performed on the application from the beginning to the end.',
          },
          {
            title: 'Application',
            body: 'Once the application experiences all periods of improvement, it is delivered to the client and uploaded on the play store.',
          },
          {
            title: 'Maintenance',
            body: 'Post app launch, we deliver maintenance, quality support and enhancement services as required.',
          },
        ],
      },
    ],
  },

  'iot-development': {
    title: 'IoT Development',
    subtitle: 'Bitsbay implementation of IoT has helped businesses improve day-to-day operations, adding to their efficiency.',
    heroImage: '/hero/iot-development.jpg',
    sections: [
      {
        type: 'intro',
        eyebrow: 'Top Notch',
        heading: 'IoT Development Services',
        paragraphs: [
          'IoT technology has added more value to our everyday lives and businesses than we can imagine. By minimizing human-human and human-machine interaction, it has opened a whole new universe of innovation. Connected devices like smart TVs, smart watches, smart speakers, and smart thermostats are ruling our lives, making them easier every day. When it comes to choosing the top IoT development services, we are here to make your choice easier.',
        ],
      },
      {
        type: 'intro',
        heading: 'Keeping Up With IoT',
        paragraphs: [
          'There are not many companies in the market with the required experience and skill to provide top-notch IoT solutions. Bitsbay is an IoT development company that can deliver advanced IoT development services, helping you transform your business into a futuristic venture, well above your competitors.',
          "Being passionate about technology and thriving on innovation, we love breathing life into your business and application ideas with IoT technology. Over the years our IoT architects have mastered their command of this tech. We offer connectivity/MQTT platforms, IaaS backends, hardware-specific software platforms, Consumer/Enterprise software, Google's Brillo/Weave, Microsoft Azure, Calvin by Ericsson and more.",
        ],
        ctaText: "I need IoT services. Let's discuss",
      },
      {
        type: 'reasons',
        image: '/hero/reasons.png',
        subheading:
          "Our client-oriented services make us an ideal fit for your IoT technology implementation. Here's a list of why you should let us be your technology partner:",
        items: [
          'Your idea is safe with us — a signed NDA will ensure the confidentiality of your idea',
          'We set up a strategy call to discuss features, pricing plans and marketing options',
          'Later on, the team creates sprint plans and sets upon a project management tool',
          'For a flexible approach, our choice is the Agile development process',
          'Through Skype, Slack or Trello we maintain effective communication',
          'Team Bitsbay also conducts automated and manual quality assurance tests',
          'Code commits on a regular basis to ensure transparency',
        ],
      },
      {
        type: 'process',
        heading: 'Bitsbay Road To Successful Application Development',
        steps: [
          {
            title: 'Project Require',
            body: 'A dedicated team member gathers the project requirements from the client.',
          },
          {
            title: 'Use Cases',
            body: 'The requirements are then used to draft use cases of the application.',
          },
          {
            title: 'Project Plan',
            body: 'Project development is divided into sprints and managed via PM tool.',
          },
          {
            title: 'Wireframes',
            body: 'App wireframes are developed for the client to get an idea of the final product.',
          },
          {
            title: 'Design',
            body: 'The wireframes are used as reference to create application designs.',
          },
          {
            title: 'Agile Development',
            body: 'Project development is done sprint wise with regular code reviews and testing.',
          },
          {
            title: 'Testing & QA',
            body: 'After completion, QA testing is conducted to ensure there are no bugs.',
          },
          {
            title: 'Release',
            body: 'The product is then uploaded to live and made available to the target audience.',
          },
          {
            title: 'Maintenance',
            body: 'Post app launch, we deliver maintenance enhancement services.',
          },
        ],
      },
    ],
  },

  'chatbot-development': {
    title: 'Chatbot Development',
    subtitle: 'We can help you create a working chatbot for your business within your budget and timelines.',
    heroImage: '/hero/chatbot-development.jpg',
    sections: [
      {
        type: 'intro',
        eyebrow: 'Innovative',
        heading: 'Chatbot Development',
        paragraphs: [
          "Chatbots are one of the essential products of AI technology that have garnered massive popularity in today's corporate sphere. Getting 100% dedication to the operations of your business at all times is now possible without any additional directive or instruction. It's cost-effective, eliminating the worry of paying wages and freeing human resources from providing day-long service. If you wish for your ideas to be executed effectively and efficiently, hire chatbot developers from Bitsbay.",
        ],
      },
      {
        type: 'intro',
        heading: 'Bitsbay Weaving Its Magic',
        paragraphs: [
          'We at Bitsbay have proven time and time again that our expertise as chatbot developers is unrivaled. To develop a useful chatbot for your business app, we interact with you to retrieve strategic information about your business operations. This helps us create an AI tool that is not only familiar with all of your business practices but also blends seamlessly with the app. We meticulously devise strategic conversational solutions that bridge the gap between your brand and your users.',
        ],
        ctaText: 'Share your chatbot idea. Talk to us',
      },
      {
        type: 'reasons',
        image: '/hero/reasons.png',
        subheading:
          'We not only provide development services, but ensure a great experience for our clients and aim to be your development partners. Our services include, but are not limited to:',
        items: [
          'Idea protection by getting NDA signed',
          'Initial sessions to discuss strategy, features and pricing plans',
          'Planning the project into phases with the project management tool',
          'Wireframing and Prototyping to ensure UI is perfect for the application',
          'Free strategy call to refine app features, plan marketing and monetize options',
          'Flexible development procedures',
          'Pre-engineered boiler plates are used to aid development and provide cost effective solutions',
          'Effective communication is maintained via Trello, Slack & Skype',
          'Automated quality assurance checks are run over any work produced',
          'Optimized and clean coding practices',
          'Code commits on a regular basis to ensure transparency',
        ],
      },
      {
        type: 'process',
        heading: 'Bitsbay Road To Successful Application Development',
        steps: [
          {
            title: 'Project Require',
            body: 'A dedicated team member gathers project requirements from the client.',
          },
          {
            title: 'Use Cases',
            body: 'The requirements are then used to draft use cases of the application.',
          },
          {
            title: 'Project Plan',
            body: 'Project development is divided into sprints and managed via PM tool.',
          },
          {
            title: 'Wireframes',
            body: 'App wireframes are developed for the client to get an idea of the final product.',
          },
          {
            title: 'Design',
            body: 'The wireframes are used as reference to create application designs.',
          },
          {
            title: 'Agile Development',
            body: 'Project development is done sprint wise with regular code reviews and testing.',
          },
          {
            title: 'Testing & QA',
            body: 'After completion, QA testing is conducted to ensure there are no bugs.',
          },
          {
            title: 'Release',
            body: 'The product is then uploaded to live and made available to the target audience.',
          },
          {
            title: 'Maintenance',
            body: 'Post app launch, we deliver support and enhancement services.',
          },
        ],
      },
    ],
  },

  'augmented-reality-app-development': {
    title: 'Augmented Reality App Development',
    subtitle:
      'Bitsbay specializes in augmented reality app development allowing businesses, industries, and organizations to carry out life-like simulations of their basic operations without any issues.',
    heroImage: '/hero/augmented-reality-app-development.jpg',
    sections: [
      {
        type: 'intro',
        eyebrow: 'Engaging',
        heading: 'Augmented Reality Solutions',
        paragraphs: [
          'The demand for AR technology continues to increase at a steady pace, with more industries incorporating it into their operations. Augmented Reality is no longer confined to the gaming industry — it has been extended effectively to other tech-related sectors of the economy.',
        ],
      },
      {
        type: 'intro',
        heading: 'Torch Bearers Of Augmented Reality',
        paragraphs: [
          'At Bitsbay, we provide variations of augmented reality app development services for clients looking to fine-tune their business operations and increase efficiency. We can create all four types of AR programs: marker-based, markerless, projection-based, and superimposition-based augmented reality. We possess the necessary tools to help you complete an AR installation and test-run it to eliminate bugs. Our team of highly trained developers has the expertise to execute exemplary AR development and a robust portfolio to back their skill.',
        ],
        ctaText: 'Share your AR app idea. Talk to us',
      },
      {
        type: 'reasons',
        image: '/hero/reasons.png',
        subheading:
          'Our outstanding end-to-end project delivery services are what set us apart and ensure client satisfaction.',
        items: [
          'Your idea remains secure with us with a signed NDA',
          'Free session to discuss project strategy, application features and pricing plans',
          'We tailor and customize our plans according to your needs and requirements',
          'The AR project plan is mapped on project management tools and divided into sprint',
          'We provide AR Application prototyping to the client to orchestrate an idea of the look and feel',
          'Since we use agile development, there is plenty of room for flexibility for the client to share their concerns',
          'Through Trello or Slack, smooth flow of communication is carried out',
          'We use pre-engineered boilerplates for development which reduces time and cost',
          'Automated, as well as manual quality assurance checks, are run on the application development',
          'We deliver end-to-end services for deployment as well as testing',
        ],
      },
      {
        type: 'process',
        heading: 'Bitsbay Road To Successful Application Development',
        steps: [
          {
            title: 'Project Require',
            body: 'A dedicated team member gathers project requirements from the client.',
          },
          {
            title: 'Use Cases',
            body: 'The requirements are then used to draft use cases of the application.',
          },
          {
            title: 'Project Plan',
            body: 'Project development is divided into sprints and managed via PM tool.',
          },
          {
            title: 'Wireframes',
            body: 'App wireframes are developed for the client to get an idea of the final product.',
          },
          {
            title: 'Design',
            body: 'The wireframes are used as reference to create application designs.',
          },
          {
            title: 'Agile Development',
            body: 'Project development is done sprint wise with regular code reviews and testing.',
          },
          {
            title: 'Testing & QA',
            body: 'After completion, QA testing is conducted to ensure there are no bugs.',
          },
          {
            title: 'Release',
            body: 'The product is then uploaded to live and made available to the target audience.',
          },
          {
            title: 'Maintenance',
            body: 'Post app launch, we deliver support and enhancement services.',
          },
        ],
      },
    ],
  },

  'learn-product-development': {
    title: 'Lean Product Development',
    subtitle:
      'We can help you create a working MVP for your app idea within your budget and timelines with expert guidance.',
    heroImage: '/hero/learn-product-development.jpg',
    sections: [
      {
        type: 'intro',
        eyebrow: 'Affordable and Rapid',
        heading: 'MVP Development Services',
        paragraphs: [
          'Building an MVP can validate your development strategy by testing a minimal form of your product idea in the market. An MVP helps you build the bare minimum version to understand what works, what fails, and how you can gradually scale it to what you want. Choosing the right MVP development services can make all the difference in creating a functional MVP.',
        ],
      },
      {
        type: 'intro',
        heading: 'Giving You What Your Business Needs',
        paragraphs: [
          'Adhering to the cost and time constraints of our clients, Bitsbay delivers workable & quality MVP development services that get the ball rolling for our customers. The core of the MVP relies on great functionality which can be scaled with time. Our group of advisors and business experts offer MVP ideas that are time-efficient and financially savvy.',
        ],
        ctaText: "I need an MVP. Let's discuss",
      },
      {
        type: 'reasons',
        image: '/hero/reasons.png',
        heading: 'Reasons to choose us',
        subheading:
          'Our thorough understanding and keen ability gives us an edge over other agile development companies and empowers us to deliver results that guarantee tangible customer satisfaction. Our MVP development process includes:',
        items: [
          'Protection of your idea through a signed NDA',
          'Provision of solutions that meet your budget and time frame',
          'Division of development into sprints and management via PM tools',
          'The product is prototyped before moving into development',
          'The flexibility of work processes using agile development',
          'Communication is maintained via Skype, Trello or Slack',
          'Manual and automated checks by our quality assurance engineers to ensure the product is free of bugs',
          'The code is committed regularly to ensure transparency in code handovers',
          'End-to-end deployment, as well as testing services, are delivered',
          'Post-deployment support services are rendered',
        ],
      },
      {
        type: 'process',
        heading: 'Bitsbay Road To Successful Application Development',
        steps: [
          {
            title: 'Project Require',
            body: 'A dedicated team member gathers the project requirements given from the client.',
          },
          {
            title: 'Use Cases',
            body: 'The requirements are then used to draft use cases of the application.',
          },
          {
            title: 'Project Plan',
            body: 'Project development is divided into sprints and managed via PM tool.',
          },
          {
            title: 'Wire Frames',
            body: 'Meanwhile, the teams work on producing wireframes.',
          },
          {
            title: 'Design',
            body: 'The wireframes are used as reference to create application designs.',
          },
          {
            title: 'Agile Development',
            body: 'Project development is done sprint wise regular code reviews and testing.',
          },
          {
            title: 'Testing & QA',
            body: 'After completion, QA testing is conducted to ensure there are no bugs.',
          },
          {
            title: 'Release',
            body: 'The product is then uploaded to live and made available to the target audience.',
          },
          {
            title: 'Maintenance',
            body: 'Post app launch, we deliver support and enhancement services.',
          },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------------
     Hub pages. On the live site these are /app-development/,
     /web-applications/, /product-engineering/, /trending-technologies/
     and /amazon/ — each a banner plus three (or two) "Read More" cards
     pointing at the detailed service pages.
  ---------------------------------------------------------------- */
  'app-development': {
    title: 'Apps Development',
    heroImage: '/hero/app-development.jpg',
    cta: null,
    sections: [
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            icon: 'Smartphone',
            title: 'Android App Development',
            body: 'We follow a well-defined process and development strategy to create Android apps, from brainstorming to the final….',
            to: '/services/android-app-development',
          },
          {
            icon: 'Smartphone',
            title: 'IOS App Development',
            body: 'We follow a well-defined process to create iOS apps, from brainstorming to the final delivery. Our experts map out the requirements of ….',
            to: '/services/ios-app-development',
          },
          {
            icon: 'Layers',
            title: 'Cross Platform Mobile Development',
            body: 'We follow a well-defined process to create native mobile apps, from brainstorming ….',
            to: '/services/cross-platform-mobile-app-development',
          },
        ],
      },
      {
        type: 'results',
        heading: 'Mobile Engineering Impact',
        entries: [
          {
            stat: '110+',
            label: 'Mobile apps deployed',
            detail: 'Published across Google Play and Apple App Store in consumer, fintech, healthcare, and enterprise sectors.',
          },
          {
            stat: '4.85★',
            label: 'Average store rating',
            detail: 'Consistently high ratings across live production deployments driven by UX polish and automated QA.',
          },
          {
            stat: '99.9%',
            label: 'Crash-free sessions',
            detail: 'Rigorous unit testing and exception tracking via Firebase Crashlytics and Sentry.',
          },
        ],
        links: [
          { label: 'Native Android development', to: '/services/android-app-development' },
          { label: 'Native iOS development', to: '/services/ios-app-development' },
          { label: 'Cross-platform mobile apps', to: '/services/cross-platform-mobile-app-development' },
        ],
      },
      {
        type: 'faq',
        heading: 'Mobile App Development FAQs',
        items: [
          {
            title: 'Should I choose native (iOS/Android) or cross-platform (Flutter/React Native)?',
            body: 'Choose native if your app relies heavily on device-specific hardware features, low-level APIs, or requires maximum raw processing speed. Choose cross-platform if you want to launch on both platforms faster and save 40-50% on development costs.',
          },
          {
            title: 'What does a complete mobile app development engagement include?',
            body: 'Our full-cycle mobile service includes product discovery, UI/UX prototyping, backend API development, cloud database setup, mobile app programming, QA testing, and app store submission.',
          },
          {
            title: 'How do you handle ongoing maintenance and OS updates?',
            body: 'We offer monthly maintenance retainers covering new Android and iOS major version compatibility, third-party library updates, security patches, and ongoing performance optimization.',
          },
          {
            title: 'Do you help with App Store Optimization (ASO)?',
            body: 'Yes, we optimize store listings with relevant keywords, localized descriptions, branded screenshots, and promotional previews to maximize organic store discovery.',
          },
        ],
      },
    ],
  },

  'web-applications': {
    title: 'Web Applications',
    heroImage: '/hero/web-applications.jpg',
    cta: null,
    sections: [
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            icon: 'Globe',
            title: 'Custom Web Apps',
            body: 'As a Custom App Development agency, we provide you with varieties of engagement models facilitating your needs at maximum….',
            to: '/services/custom-web-app',
          },
          {
            icon: 'Rocket',
            title: 'Progressive Web Apps',
            body: 'Progressive Web Apps are defining the future of app development. As a result of this emerging technology…',
            to: '/services/progressive-web-apps',
          },
          {
            icon: 'Code2',
            title: 'Front End Development Services',
            body: 'For front end development, features like efficiency, scalability and convenience go hand in hand with ReactJS…..',
            to: '/services/front-end-development-services',
          },
        ],
      },
      {
        type: 'results',
        heading: 'Web Engineering at Scale',
        entries: [
          {
            stat: '150+',
            label: 'Web platforms built',
            detail: 'From high-traffic marketing portals to complex SaaS architectures and custom ERP solutions.',
          },
          {
            stat: '<1s',
            label: 'Average initial load time',
            detail: 'Optimized via Vite, Next.js, Edge CDN caching, and modern asset bundling.',
          },
          {
            stat: '100%',
            label: 'Responsive on all viewports',
            detail: 'Fluid design systems that look and perform flawlessly on mobile, tablet, and desktop.',
          },
        ],
        links: [
          { label: 'Custom web apps', to: '/services/custom-web-app' },
          { label: 'Progressive web apps (PWAs)', to: '/services/progressive-web-apps' },
          { label: 'Frontend development', to: '/services/front-end-development-services' },
        ],
      },
      {
        type: 'faq',
        heading: 'Web Application Development FAQs',
        items: [
          {
            title: 'What is the difference between a website and a web application?',
            body: 'A website is primarily informational and static, whereas a web application is interactive, dynamic, and software-driven with user accounts, database interactions, business logic, and API integrations.',
          },
          {
            title: 'Can you migrate our legacy web application to modern frameworks?',
            body: 'Yes. We specialize in refactoring and migrating legacy codebases (PHP, AngularJS, ASP.NET) to modern stacks like React, Next.js, Node.js, and TypeScript without service downtime.',
          },
          {
            title: 'What cloud providers do you support for web hosting?',
            body: 'We deploy and manage web applications across AWS (ECS, Lambda, S3, RDS), Google Cloud Platform (GCP), DigitalOcean, and Vercel depending on workload and budget.',
          },
          {
            title: 'How do we collaborate during development?',
            body: 'We work in two-week agile sprints. You receive staging preview links for every build, sprint reviews, and direct communication with developers via Slack or MS Teams.',
          },
        ],
      },
    ],
  },

  'product-engineering': {
    title: 'Product Engineering',
    heroImage: '/hero/product-engineering.jpg',
    cta: null,
    sections: [
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            icon: 'Cpu',
            title: 'SAAS APP DEVELOPMENT',
            body: 'As a Custom App Development agency, we provide you with varieties of engagement models facilitating….',
            to: '/services/saas-application-development',
          },
          {
            icon: 'Rocket',
            title: 'Progressive Web Apps',
            body: 'We can help you create a working MVP for your app idea within your budgets and timelines….',
            to: '/services/learn-product-development',
          },
          {
            icon: 'Code2',
            title: 'Front End Development Services',
            body: 'For front end development, features like efficiency, scalability and convenience go hand in hand with ReactJS…..',
            to: '/services/custom-application-development',
          },
        ],
      },
    ],
  },

  'trending-technologies': {
    title: 'Trending Technologies',
    heroImage: '/hero/trending-technologies.jpg',
    cta: null,
    sections: [
      {
        type: 'cards',
        columns: 3,
        items: [
          {
            icon: 'Navigation',
            title: 'IOT Development',
            body: 'The IoT technology has added more value to our everyday lives and businesses than we can imagine. By minimizing the….',
            to: '/services/iot-development',
          },
          {
            icon: 'Atom',
            title: 'Augmented Reality App Development',
            body: 'The demand for AR technology continues to increase at a steady pace with more industries….',
            to: '/services/augmented-reality-app-development',
          },
          {
            icon: 'MessageCircle',
            title: 'Chatbot Development',
            body: 'Chatbots are one of the essential products of AI technology that have garnered massive popularity in today’s corporate sphere….',
            to: '/services/chatbot-development',
          },
        ],
      },
    ],
  },

  amazon: {
    title: 'Amazon',
    heroImage: '/hero/amazon.jpg',
    cta: null,
    sections: [
      {
        type: 'cards',
        columns: 2,
        items: [
          {
            icon: 'Tag',
            title: 'AD SERVICES',
            body: 'Increase sales with data-driven advertising managment for…',
            to: '/services/ad-services',
          },
          {
            icon: 'ShoppingCart',
            title: 'AMAZON SERVICES',
            body: 'Sell more with our Full-Service Managment for Amazon Program…..',
            to: '/services/amazon-services',
          },
        ],
      },
    ],
  },
}
