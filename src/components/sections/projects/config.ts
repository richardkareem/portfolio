import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Kopie',
    slug: 'kopie',
    description:
      'A application for ordering coffee, remote ordering or dine in using the application',
    thumbnail: '/images/projects/kopie/cover.jpg',
    tags: ['React Native', 'React Redux', 'Firebase', 'Xendit', 'Google Maps Api']
  },
  {
    name: 'Newfemme',
    slug: 'newfemme_app',
    description:
      'Newfemme application is a health application especially for women, various features are, doctor chat, articles, podcasts, reels',
    thumbnail: '/images/projects/newfemme_app/cover.jpg',
    tags: ['React Native','Firebase',]
  },
  {
    name: 'Bonzona Travel',
    slug: 'bonzona_web',
    description:
      'A platform for inform or introduction about bonzona travel, and admin can change the content dynamic with separate page for admin',
    thumbnail: '/images/projects/bonzona_web/cover.jpg',
    tags: ['Next Js', 'Firebase', 'Tailwind', 'Mysql']
  },
  {
  name: 'Qislam',
    slug: 'qislam_app',
    description:
      'A quiz application specifically for islam elementary school children, can be dynamic from the admin, and supports video, audio, and text',
    thumbnail: '/images/projects/qislam_app/cover.jpg',
    tags: ['React Native', 'Firebase', 'React video']
  },
  {
    name: 'Shop With Me',
    slug: 'shop_with_me',
    description:
      'an e-commerce platform, can shop together with streaming called shop with me',
    thumbnail: '/images/projects/shop_with_me/cover.jpg',
    tags: ['NextJS', 'Bootstrap 3', 'Google Geolocation Api', 'Firebase', 'Ant Design']
  },
  {
    name: 'Viyou',
    slug: 'viyou_app',
    description:
      'an app derivative of newfemme that is made separately specifically for streaming and watching videos',
    thumbnail: '/images/projects/viyou_app/cover.jpg',
    tags: ['React Native', 'Firebase', 'React native video', 'React native Reanimated', 'React redux Thunk']
  },
  {
    name: 'NewFemme Supplier',
    slug: 'newfemme_supplier',
    description:
      'A an application for sellers, related to the shop with me application',
    thumbnail: '/images/projects/newfemme_supplier/cover.jpg',
    tags: ['React Native', 'Firebase', 'React native video', 'React native Reanimated', 'React redux Thunk']
  },
  {
    name: 'JobsNf',
    slug: 'jobsnf',
    description:
        'A mobile application and website for job seekers',
    thumbnail: '/images/projects/jobsnf/cover.jpg',
    tags: ['React Native', 'Next Js' , 'React redux Thunk', 'Boostrap', 'Ant Design']
  },
];

export { projects };
