import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Haylee Adamson | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my collection!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Haylee Adamson',
  subtitle: "and I'm learning the ropes of React development",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'headshot.jpeg',
  paragraphOne:
    "I have an undergrad degree in psychology and a master's degree in forensic psychology. I started my career as a juvenile probation counselor/officer. I quickly learned that it wasn't for me and decided to start learning how computers work. I quickly realized how much there is to learn!",
  paragraphTwo:
    'I started learning SharePoint and wanted to make customizations via Javascript and have been learning ever since. I truly love programming and the ability to bring my ideas to life',
  paragraphThree:
    "Learning to code has truly become a passion of mine as I'm always eager and willing to learn.",
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'robofriends.png',
    title: 'Robofriends',
    info:
      'React app created following the tutorial provided by Zero to Mastery Complete React Developer Udemy class',
    info2: '',
    url: 'https://hailstormcodes.github.io/robofriends/',
    repo: 'https://github.com/hailstormCodes/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'quoteGenerator.png',
    title: 'Quote Generator',
    info: 'Javascript project created following the tutorial 20 Javascript ',
    info2: '',
    url: 'https://hailstormcodes.github.io/quote-generator2/',
    repo: 'https://github.com/hailstormCodes/quote-generator2', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'habitual.png',
    title: 'Habitual Mockup',
    info: 'Created for 20 JavaScript projects class',
    info2: '',
    url: 'https://hailstormcodes.github.io/splash-page/',
    repo: 'https://github.com/cobidev/splash-page', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'habitual.png',
    title: 'Crown Clothing MockUp',
    info: 'Created from the Zero to Mastery 2021 React Class',
    info2: '',
    url: 'https://hailstormcodes.github.io/crwn-clothing/',
    repo: 'https://github.com/hailstormCodes/crwn-clothing', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'hayleeadamson@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/HayleeAdamson',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hayleeadamson/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/hailstormCodes',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
