import port_website from '../../assets/port-website.PNG';
import speed_typing from '../../assets/typing-practice.PNG';
import notes_app from '../../assets/notes-app.PNG';

export const projects = [
  {
    img: port_website,
    name: 'Portfolio Website',
    description:
      'This is my first personal portfolio website that is responsive on any device.',
    techs: ['ReactJs', 'Tailwind CSS'],
    ghUrl: '/port-website',
  },
  {
    img: speed_typing,
    name: 'Typing Practice',
    description: `Typing Practice is an app that tracks how many characters you have typed within your chosen time frame. \nThe character count is live-updated as you type, and you will be given a random quote to type.`,
    techs: ['ReactJs', 'SCSS', 'Material UI'],
    ghUrl: '/speed-typing',
  },
  {
    img: notes_app,
    name: 'Notes',
    description: `Notes app allows you to type on your own devices to record information, \nevery notes you save will be on the local storage of your device.`,
    techs: ['ReactJs', 'Tailwind CSS'],
    ghUrl: '/notes-app',
  },
];

export const resume_url =
  'https://drive.google.com/file/d/1g1BSeSGqg5UCypwt8PtivlerAYekJlEA/view?usp=sharing';
