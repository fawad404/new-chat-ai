import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/drums-chat.jpeg';
import saadPic from '~/assets/images/saad.jpeg';
import teodorPic from '~/assets/images/teodor.jpeg';
import yassinPic from '~/assets/images/yassin.jpeg';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Self Host to protect your customer data',
  subtitle:
    'Most AI models you use, use your data for training. They live with mantra "ask for forgiveness, rather than permission". Your however cannot take the risk with your customer data, therefore we launched this. We can protect you in 2 ways. Firstly, by using Open source Large Language Models and Secondly, by deploying it for you in you servers',
  tagline: 'Self',
  callToAction2: {
    text: 'Contact us',
    href: '/contact',
  },
  image: {
    src: hero2Img,
    alt: 'Hero CallSupport',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: 236,
      description: 'Companies',
    },
    {
      title: 210300,
      description: 'Chat Messages',
    },
    {
      title: 1227200,
      description: 'Hours saved',
    },
    {
      title: 484000,
      description: 'Users',
    },
  ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our mission',
    subtitle:
      'We believe customer has right to their data and they should be protected. Most companies charge you fee to use their product and train on your data. We do not want software to go this direction. It has to be distributed, rather than 2-3 American companies hoarding on all data, that exists out there.',
    tagline: 'Mission and Values',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Our values',
    subtitle: 'Etiam tellus tortor, mattis id mauris et, lobortis ullamcorper nunc.',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: 'Customer-centricity',
      description: 'We empower you, to server your customers the best',
      icon: IconUser,
    },
    {
      title: 'Innovation and adaptability',
      description:
        'We believe in innovation and bringing the best and latest AI solutions to you.',
      icon: IconBulb,
    },
    {
      title: 'Quality assurance',
      description: 'Extremely high quality for you and your customers ',
      icon: IconThumbUp,
    },
    {
      title: 'Ethical and responsible design',
      description: 'We protect your customer data and give you all the power. ',
      icon: IconHomeEco,
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'History of CallSupport',
    subtitle:
      'Duis sit amet magna et sapien cursus fermentum. Curabitur ac mauris non magna condimentum scelerisque. Aliquam nunc ipsum, semper ac scelerisque sit amet, pulvinar vitae libero.',
    tagline: 'Company History',
  },
  items: [
    {
      title: 'Our foundation',
      description:
        'Donec pharetra, justo a rutrum venenatis, augue erat porta leo, non eleifend dui lectus ut turpis. Fusce tincidunt mattis magna eu commodo. Proin non facilisis enim, ut luctus dolor.',
      icon: IconNumber1,
    },
    {
      title: 'The early years',
      description:
        'Nunc scelerisque dui non nulla faucibus, sed elementum urna congue. Donec varius nisi sit amet massa malesuada euismod. Donec auctor interdum leo eget ultricies.',
      icon: IconNumber2,
    },
    {
      title: 'Growth',
      description:
        'Vestibulum euismod dolor vel magna consectetur, vitae ornare metus finibus. Nam nec magna lacinia, cursus purus ut, pellentesque ex. Aliquam nec porta sapien, nec iaculis odio. Donec sed lacus arcu.',
      icon: IconNumber3,
    },
    {
      title: 'Expanding horizons',
      description:
        'Aenean mollis est ac quam viverra, eget dictum justo iaculis. Morbi venenatis neque sed blandit faucibus. Pellentesque sit amet justo at ligula eleifend lacinia. Etiam nec orci quam.',
      icon: IconNumber4,
    },
    {
      title: 'Our ongoing commitment',
      description:
        'Sed vel purus a odio tincidunt mollis. Nam et tortor est. Aliquam sodales interdum tortor ac condimentum. Suspendisse laoreet nulla est, ac luctus est tempus ut.',
      icon: IconNumber5,
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our culture',
    subtitle:
      'Nullam maximus ante eros, ac eleifend mi condimentum ut. Donec volutpat felis ac purus pretium, vitae mollis quam scelerisque.',
    tagline: 'culture',
  },
  items: [
    {
      title: 'Customer engagement',
      description: 'Nullam non sodales massa. Ut justo neque, elementum et vehicula vel, pellentesque non orci.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Creativity and design excellence',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: IconPalette,
    },
    {
      title: 'Continuous learning',
      description: 'Morbi sit amet arcu vitae metus molestie auctor sit amet in risus. Sed vel lacinia purus.',
      icon: IconBook,
    },
    {
      title: 'Collaboration and cross-functionality',
      description: 'Phasellus id cursus urna. Nullam feugiat tellus sed euismod venenatis.',
      icon: IconPuzzle2,
    },
    {
      title: 'Entrepreneurial spirit',
      description: 'Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus.',
      icon: IconFlame,
    },
    {
      title: 'Employee well-being and balance',
      description: 'Maecenas urna augue, commodo vitae lectus euismod, tempor aliquam arcu.',
      icon: IconScale,
    },
  ],
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Our record of excellence',
    subtitle:
      'Etiam lobortis elementum ornare. Vestibulum lacinia magna ut eleifend facilisis. Cras ac mi nec diam auctor dictum.',
    tagline: 'Achievements',
  },
  columns: 1,
  items: [
    {
      title: 'Global recognition',
      description:
        'Nullam porttitor lacus elit, sed pellentesque eros aliquam eget. Phasellus interdum placerat enim sed vehicula. Ut tincidunt, magna in iaculis maximus, lectus ante dignissim neque, imperdiet sodales enim augue a quam.',
      icon: IconAward,
    },
    {
      title: 'Innovator of the year award',
      description:
        'Cras mollis elit massa, vel interdum libero molestie a. Nulla facilisi. Suspendisse cursus non sapien ut tincidunt. Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      icon: IconAward,
    },
    {
      title: 'Sustainability award',
      description:
        'Sed non tortor sit amet nisl tristique facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent in tempor orci. Vestibulum velit justo, dignissim quis nisl nec, scelerisque ultrices mi sapien diam quis elit.',
      icon: IconAward,
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    title: 'Meet our executive team',
    subtitle:
      'Proin quis neque vehicula, sagittis felis ut, scelerisque mi. Nullam consequat, erat eu luctus sodales, ipsum tellus facilisis magna, eu condimentum lectus.',
    tagline: 'team',
  },
  teams: [
    {
      name: 'John Peterson',
      occupation: 'Founder & CEO',
      image: {
        src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'John Peterson',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Sarah Mitchell',
      occupation: 'Chief Creative Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1618835962148-cf177563c6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Sarah Mitchell',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'David Foster',
      occupation: 'Chief Technology Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=250&q=80',
        alt: 'David Foster',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Mary Smith',
      occupation: 'Chief Marketing Office',
      image: {
        src: 'https://images.unsplash.com/photo-1607503873903-c5e95f80d7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Mary Smith',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Michael Turner',
      occupation: 'Chief Financial Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1619380061814-58f03707f082?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Michael Turner',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Laura Adams',
      occupation: 'Chief Customer Relations Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1485893086445-ed75865251e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Laura Adams',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Robert Williams',
      occupation: 'Chief Operations Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Robert Williams',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Emily Davis',
      occupation: 'Chief Strategy Officer',
      image: {
        src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Emily Davis',
      },
      items: [
        {
          title: 'Know more on Twitter',
          icon: IconBrandTwitter,
          href: '#',
        },
        {
          title: 'Know more on Linkedin',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Testimonial2 data on About page *******************
export const testimonials2About: TestimonialsProps = {
  id: 'testimonialsTwo-on-about',
  hasBackground: true,
  isTestimonialUp: true,
  header: {
    title: 'Our success stories',
    tagline: 'Customer comments',
  },
  testimonials: [
    {
      name: 'Saad Saeed',
      job: 'CEO Layla',
      testimonial: `After integrating CallSupport, we have seen substantial increase in customer engagement and sales leads. Many users who we would have otherwise lost are ...`,
      image: {
        src: saadPic,
        alt: 'Saad Saeed',
      },
      href: '/',
    },
    {
      name: 'Teodor Rupi',
      job: 'CTO allO',
      testimonial: `Its a game changer for our business. This is substantially more accurate than any other chatbot in the market. Increasing our Lead satisfaction has be...`,
      image: {
        src: teodorPic,
        alt: 'Teodor Rupi',
      },
      href: '/',
    },
    {
      name: 'Yassin Baum',
      job: 'CEO Mailscale.ai',
      testimonial: `Took just 2 minute to integrate this tool with our servers. Customers love it and satisfaction has been through the roof...`,
      image: {
        src: yassinPic,
        alt: 'Yassin Baum',
      },
      href: '/',
    },
  ],
};

// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-faqs',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'Who we are and what we do?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What values and principles guide our work?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'What is our experience?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What is our team like?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'How do we engage with the community?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'What support channels do we offer?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: true,
  header: {
    title: 'Contact us',
    tagline: 'Contact info',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['Eggerstedstr 26', 'Hamburg, EEUU'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Mobile: +4917623607530', 'Mail: support@callsupport.ai'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 08:00 - 17:00', 'Saturday & Sunday: 08:00 - 12:00'],
      icon: IconClock,
    },
  ],
  form: {
    inputs: [
      {
        type: 'text',
        label: 'Name',
        name: 'name',
        placeholder: 'Enter Name',
        autocomplete: 'off',
      },
      {
        type: 'email',
        label: 'Email address',
        name: 'email',
        placeholder: 'Enter Email',
        autocomplete: 'on',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      label: 'How can we help you?',
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    checkboxes: [
      {
        label: 'Have you read our privacy policy?',
        value: '',
      },
    ],
    btn: {
      title: 'Contact us',
      type: 'submit',
    },
  },
};
