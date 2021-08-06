import kingsglaive from './images/Kingsglaive_Final_Fantasy_XV.jpg'
import finalfantasy from './images/Final_Fantasy_Spirits_Within.jpg'
import ghostintheshell from './images/Ghost_In_The_Shell_2_0.jpg'
import aplessedalpha from './images/Appleseed_Alpha.jpg'
import residentevil from './images/Resident_Evil_Vendetta.jpg'


const movies = [
  {
    id: 1,
    title: 'Kingsglaive',
    subtitle: 'Final Fantasy XV',
    storyline: "King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",
    rating: 4.5,
    imagePath:kingsglaive,
    bookmarked: true,
    genre: 'action',
  },
  {
    id: 2,
    title: 'Final Fantasy',
    subtitle: 'Spirits Within',
    storyline: 'A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.',
    rating: 4.5,
    imagePath: finalfantasy,
    bookmarked: false,
    genre: 'fantasy',
  },
  {
    id: 3,
    title: 'Ghost In The Shell',
    subtitle: 'Ghost In The Shell',
    storyline: 'A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).',
    rating: 5,
    imagePath: ghostintheshell,
    bookmarked: false,
    genre: 'comedy',
  },
  {
    id: 4,
    title: 'Appleseed Alpha',
    subtitle: 'Appleseed Alpha',
    storyline: "A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",
    rating: 3.8,
    imagePath: aplessedalpha,
    bookmarked: true,
    genre: 'action',
  },
  {
    id: 5,
    title: 'Resident Evil',
    subtitle: 'Vendetta',
    storyline: 'Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.',
    rating: 4.2,
    imagePath: residentevil,
    bookmarked: true,
    genre: 'fantasy',
  },
];

export default movies;
