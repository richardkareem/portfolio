import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Kopie',
    slug: 'portfolio',
    description:
      'A application for ordering coffee, remote ordering or dine in using the application',
    thumbnail: '/images/projects/portfolio/cover.jpg',
    tags: ['React Native', 'React Redux', 'Firebase', 'Xendit', 'Google Maps Api']
  },
  {
    name: 'Newfemme',
    slug: 'newfemme app',
    description:
      'Newfemme application is a health application especially for women, various features are, doctor chat, articles, podcasts, reels',
    thumbnail: '/images/projects/recipe_app/cover.jpg',
    tags: ['React Native','Firebase',]
  },
  {
    name: 'Bonzona Travel',
    slug: 'bonzona website',
    description:
      'A platform for inform or introduction about bonzona travel, and admin can change the content dynamic with separate page for admin',
    thumbnail: '/images/projects/study_group/cover.jpg',
    tags: ['Next Js', 'Firebase', 'Tailwind', 'Mysql']
  },
  {
  name: 'Qislam',
    slug: 'qislam-apps',
    description:
      'A quiz application specifically for islam elementary school children, can be dynamic from the admin, and supports video, audio, and text',
    thumbnail: '/images/projects/fitness_tracker/cover.jpg',
    tags: ['React Native', 'Firebase', 'React video']
  },
  {
    name: 'Shop With Me',
    slug: 'e-commerce app',
    description:
      'an e-commerce platform, can shop together with streaming called shop with me',
    thumbnail: '/images/projects/eco_marketplace/cover.jpg',
    tags: ['NextJS', 'Bootstrap 3', 'Google Geolocation Api', 'Firebase', 'Ant Design']
  },
  {
    name: 'Viyou',
    slug: 'viyou apps',
    description:
      'an app derivative of newfemme that is made separately specifically for streaming and watching videos',
    thumbnail: '/images/projects/coding_tutorials/cover.jpg',
    tags: ['React Native', 'Firebase', 'React native video', 'React native Reanimated', 'React redux Thunk']
  },
  {
    name: 'Viyou',
    slug: 'viyou apps',
    description:
        'an app derivative of newfemme that is made separately specifically for streaming and watching videos',
    thumbnail: '/images/projects/coding_tutorials/cover.jpg',
    tags: ['React Native', 'Firebase', 'React native video', 'React native Reanimated', 'React redux Thunk']
  }
];

export { projects };
