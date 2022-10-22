import port_website from '../../assets/port-website.PNG';
import speed_typing from '../../assets/typing-practice.PNG';
// import notes_app from '../../assets/notes-app.PNG';
import shortly from '../../assets/shortly.PNG';

export const projects = [
  {
    img: shortly,
    name: 'Shortly',
    description: `Shortly is a URL shortener landing page integrated with the URL Shortener Service API.`,
    techs: ['ReactJs', 'SCSS', 'Bootstrap'],
    ghUrl: '/url-shortener',
    website: 'https://url-shortlyy.netlify.app/',
  },
  {
    img: speed_typing,
    name: 'Typing Practice',
    description: `Typing Practice is an app that tracks how many characters you have typed within your chosen time frame. \nThe character count is live-updated as you type, and you will be given a random quote to type.`,
    techs: ['ReactJs', 'SCSS', 'Material UI'],
    ghUrl: '/speed-typing',
    website: 'https://dell-eight.github.io/speed-typing/',
  },

  {
    img: port_website,
    name: 'Portfolio Website',
    description:
      'This is my first personal portfolio website that is responsive on any device.',
    techs: ['ReactJs', 'Tailwind CSS'],
    ghUrl: '/port-website',
    website: 'https://wendellvillareal.netlify.app/',
  },
];
