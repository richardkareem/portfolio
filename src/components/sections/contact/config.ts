import { Contact } from '@/types/contact';
import {
  SiGithub,
  SiLinkedin,
  SiX,
  SiYoutube
} from '@icons-pack/react-simple-icons';

const contact: Contact = {
  email: 'risyadkarim26@gmail.com',
  socials: [
    {
      name: 'Github',
      href: 'https://github.com/richardkareem',
      Icon: SiGithub
    },
    // {
    //   name: 'Youtube',
    //   href: 'https://youtube.com/',
    //   Icon: SiYoutube
    // },
    // {
    //   name: 'X',
    //   href: 'https://x.com/',
    //   Icon: SiX
    // },
    {
      name: 'Linkedin',
      href: 'https://id.linkedin.com/in/richard-abdul-kareem-3a8598211',
      Icon: SiLinkedin
    }
  ]
};

export { contact };
