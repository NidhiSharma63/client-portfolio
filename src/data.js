import websiteImg from './assets/images/website.png'
import project1Img from './assets/images/project1.png';
import project2Img from './assets/images/project2.png';
import project1bgImg from './assets/images/project1-bg.png';
import project2bgImg from './assets/images/project2-bg.png';


export const serviceData = [
  {
    title: 'Fully Custom Website',
    image:`${websiteImg}`,
  },
  {
    title: 'Product Landing Page',
    image:`${websiteImg}`,
  },
  {
    title: 'App Development',
    image:`${websiteImg}`,
  }
];


export const skills = [
  {
    name:'python',
    level:90
  },
  {
    name:'Django',
    level:90
  },
  {
    name:'Django Rest Framework',
    level:95
  },
  {
    name :'DataBase Relational',
    level:55
  },
  {
    name:'Javascript',
    level:85
  }
]

export const projectData = [
  {
    title: 'Email verifier',
    image:`${project1Img}`,
    bgImage:`${project1bgImg}`,
    link:'https://goodmeeting.today/'
  },
  {
    title: 'Good meeting',
    image:`${project2Img}`,
    bgImage:`${project2bgImg}`,
    link:'https://emailverifier.co/'
  },
]