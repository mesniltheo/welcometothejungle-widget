import logoCompany from './logo-wttj.png'

import picture1 from './pictures/1.jpg'
import picture2 from './pictures/2.jpg'
import picture3 from './pictures/3.jpg'
import picture4 from './pictures/4.jpg'
import picture5 from './pictures/5.jpg'
import picture6 from './pictures/6.jpg'
import picture7 from './pictures/7.jpg'
import picture8 from './pictures/8.jpg'
import picture9 from './pictures/9.jpg'
import picture10 from './pictures/10.jpg'
import picture11 from './pictures/11.jpg'

export const config = {
  company: {
    id: 'wttj',
    logo: logoCompany,
    name: 'Welcome to the jungle',
  },
  content: [
    {
      type: 'video',
      title: 'Bertrand Uzeel',
      subtitle: 'Co-Founder',
      caption: picture1,
    },
    {
      type: 'picture',
      caption: picture2,
    },
    {
      type: 'picture',
      caption: picture3,
    },
    {
      type: 'quote',
      text: 'Life is short, work somewhere awesome.',
    },
    {
      type: 'picture',
      caption: picture4,
    },
    {
      type: 'video',
      title: 'Mélanie Babinot',
      subtitle: 'Sales Development Manager',
      caption: picture5,
    },
    {
      type: 'picture',
      caption: picture6,
    },
    {
      type: 'picture',
      caption: picture7,
    },
    {
      type: 'quote',
      text: 'C’est pas faux !',
    },
    {
      type: 'video',
      title: 'Kevin Le Roy',
      subtitle: 'CTO',
      caption: picture8,
    },
    {
      type: 'picture',
      caption: picture9,
    },
    {
      type: 'video',
      title: 'Anne-Claire',
      subtitle: 'Head of production',
      caption: picture10,
    },
    {
      type: 'picture',
      caption: picture11,
    },
  ],
}

export default config
