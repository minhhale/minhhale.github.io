import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  photoshop,
  adobepremierepro,
  nkdreamers,
  myanmargenz,
  vncrossingborder,
  chinesespy,
  hiddencost,
  uyghurmother,
  ai,
  afftereffect,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web Designer",
    icon: mobile,
  },
  {
    title: "Multimedia Specialist",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Adobe Premiere Pro",
    icon: adobepremierepro,
  },
  {
    name: "Adobe Illustrator",
    icon: ai,
  },
  {
    name: "After Effects",
    icon: afftereffect,
  },
];


const experiences = [
  {
    title: "Web Developer / Multimedia Specialist II",
    company_name: "Radio Free Asia",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2017 - 4/2025",
    points: [
      "Designed and developed visually engaging websites and multimedia content, combining creative design with technical expertise to enhance user experience and support digital communication strategies.",
      "Introduced a new digital layout that modernized content presentation for a legacy media brand.",
      "Built responsive websites and daily news pages that enhanced usability and streamlined user navigation.",
      "Delivered award-winning visuals and layouts that significantly increased user engagement and interaction.",
      "Created interactive tools, forms, and integrated backend systems to support seamless digital functionality.",
      "Ensured accessibility and security compliance through routine testing, WCAG/508 adherence, and implementation of government web standards.",
    ],
  },
  {
    title: "Multimedia Specialist I",
    company_name: "Radio Free Asia",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: " May 2007 - July 2017",
    points: [
      "Supported digital content creation by designing and producing visual assets, interactive media, and web components to enhance online communication and engagement.",
      "Developed high-impact digital visuals and animations to elevate multimedia storytelling across various platforms.",
      "Produced and edited video content with advanced motion graphics to enhance clarity and audience engagement.",
      "Optimized multimedia assets including audio, video, and imagery ensuring seamless integration and high performance across digital environments",
      "Leveraged emerging creative technologies to deliver modern, innovative visual solutions.",
      "Collaborated with cross-functional remote teams to execute multimedia projects aligned with strategic communication goals.",
    ],
  },
  {
    title: "Web Editor",
    company_name: "Radio Free Asia",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2002 - May 2007",
    points: [
      "Published engaging content on Radio Free Asia's Vietnamese website to attract and retain readers.",
      "Provided innovative ideas for content presentation to increase user engagement.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Utilized social media platforms to promote website content and increase traffic.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Myanmar’s Gen Z fighting for a nation’s future",
    description:
      "Many of Myanmar’s Gen Z fighters dream of a federal system of government in which this multi-ethnic nation’s many constituencies agree to share power. ",
    tags: [
      {
        name: "gsap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: myanmargenz,
    source_code_link: "https://minhhale.github.io/special-reports/myanmar-gen-z-fighting-war-for-future/",
  },
  {
    name: "How Vietnamese are being smuggled to the U.S.",
    description:
      "Desperation, false promises and TikTok drive a ten-fold increase in land crossings.",
    tags: [
      {
        name: "gsap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: vncrossingborder,
    source_code_link: "https://minhhale.github.io/special-reports/vn-crossing-border/",
  },
  {
    name: "North Korean Escapees/Dreamers",
    description:
      "‘If I don’t have a dream, what on Earth is the point of living?’ Three North Korean immigrants in the UK talk about their escapes and dreams.",
    tags: [
      {
        name: "gsap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: nkdreamers,
    source_code_link: "https://minhhale.github.io/special-reports/northkorean-uk-escapes/",
  },
  {
    name: "Historian. Activist. Spy?",
    description:
      "Exclusive: For years, an American academic pushed for democracy in his native China. The FBI claims it was a front.",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: chinesespy,
    source_code_link: "https://minhhale.github.io/special-reports/chinese-spy/",
  },
    {
    name: "Hidden costs of war",
    description:
      "4 years after Myanmar’s coup, the army’s misrule is hurting even the junta’s soldiers and their families.",
    tags: [
      {
        name: "gsap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: hiddencost,
    source_code_link: "https://minhhale.github.io/special-reports/hidden-costs-of-war/",
  },

  {
    name: "My only dream is to raise my daughter with her father",
    description:
      " ",
    tags: [
      {
        name: "bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: uyghurmother,
    source_code_link: "https://minhhale.github.io/special-reports/uyghur-mother/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
