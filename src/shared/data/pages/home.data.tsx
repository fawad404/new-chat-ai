import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconArrowBigRight,
  IconClock,
  IconComponents,
  IconDownload,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconRocket,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  PricingProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
  TestimonialsProps,
} from '../../types';
import heroImg from '~/assets/images/myimage.png';
import heroImgAI from '~/assets/images/AddAI.png';
import heroImgTwo from '~/assets/images/hero1.png';
import buildEveryday from '~/assets/images/build-everday.png';
import nextJsLogo from '~/assets/images/nextjs-logo.png';
import reactLogo from '~/assets/images/react-logo.png';
import tailwindCssLogo from '~/assets/images/tailwind-css-logo.png';
import typescriptLogo from '~/assets/images/typescript-logo.png';
import cameraFrontImg from '~/assets/images/camera-front.jpg';
import cameraBackImg from '~/assets/images/camera-back.jpg';
import gasImg from '~/assets/images/gas.jpg';
import saadPic from '~/assets/images/saad.jpeg';
import teodorPic from '~/assets/images/teodor.jpeg';
import yassinPic from '~/assets/images/yassin.jpeg';
import drumsChat from '~/assets/images/drums-chat.png';
import drumsConnector from '~/assets/images/drums-connector.png';
import dataProfessionalsImage from '~/assets/images/data-professionals.png';


// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Custom ChatGPT for your organization
    </>
  ),
  subtitle: (
    <>
    It's like having ChatGPT specifically for your products. 

    Completely Secure, Private & Works with your data
    <br></br>
    <br></br>
    You, Your Team, Everyone loves it
    <br></br>
    </>
  ),
  callToAction: {
    text: 'Talk to us',
    href: 'https://zcal.co/i/cL7eACvt',
    icon: IconArrowBigRight,
    targetBlank: true,
  },
  image: {
    src: drumsChat,
    alt: 'Hero TailNext',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://nextjs.org/',
      src: nextJsLogo,
      alt: 'NextJs Logo',
    },
    {
      link: 'https://react.dev/',
      src: reactLogo,
      alt: 'React Logo',
    },
    {
      link: 'https://tailwindcss.com/',
      src: tailwindCssLogo,
      alt: 'Tailwind CSS Logo',
    },
    {
      link: 'https://www.typescriptlang.org/',
      src: typescriptLogo,
      alt: 'Typescript Logo',
    },
  ],
};

export const heroHomeTwo: HeroProps = {
  title: (
    <> <span>
      Integrate with any data sources </span> 
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
      We can connect to any datasource, you can point at. No matter where your data is, we got you covered.  
      </span>{' '}
    </>
  ),
  image: {
    src: drumsConnector,
    alt: 'Hero TailNext',
  },
};

export const heroHomeThree: HeroProps = {
  title: (
    <>
      AI responses with real sources 
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
       Host anywhere you want, integrates directly into your messaging app, create tailored personas and much more ...
      </span>
    </>
  ),
  image: {
    src: heroImgAI,
    alt: 'Hero TailNext',
  },
};

export const heroHomeFour: HeroProps = {
  title: (
    <>
      We build everyday
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        We are always testing new AI models, in different industries with varying amount of custom data
      </span>
    </>
  ),
  image: {
    src: buildEveryday,
    alt: 'Hero TailNext',
  },
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        BUILD SOFTWARE FROM <span className="whitespace-nowrap">SCRATCH</span>
      </>
    ),
    subtitle:
      "We build out your software in record time. From SaaS to enterprise grade Software using NoCode, AI and also entire full coding.",
    tagline: 'Courses',
  },
  isImageDisplayed: true,
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

// Features data on Home page *******************
export const featuresHomeTwo: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Why we built <span className="whitespace-nowrap">Drums</span>
      </>
    ),
    subtitle:
      "To automate all repetitive tasks so that you everyone can contribute creatively. We are the best solution because: ",
  },
  items: [
    {
      title: 'Supercharge every role',
      description:
        'Gen AI tool chain can 10x every employee ability and skillset.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Data Security',
      description:
        'Enterprises need robust security measures and do not want leakage of private data to LLMs.',
      icon: IconComponents,
    },
    {
      title: 'Reliability',
      description:
        'All answers come with sources which they reference. Only reliable information without fear of hallucination.',
      icon: IconListCheck,
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'WHY GET DRUMS',
  },
  content:
    'Data Professional',
  items: [
    {
      title: 'Combs structured & unstructured data',
      description:
        'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Discovers hidden insights',
      description:
        'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Designs infographics and charts',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
  ],
  image: {
    src: dataProfessionalsImage,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};

// Content data on Home page *******************
export const contentHomeTwo: ContentProps = {
  id: 'contentOne-on-home-two',
  hasBackground: true,
  
  content:
    'Trusted',
  items: [
    {
      title: 'Drums data governance redacts sensitive information before passing it to public LLMs. ',
    },
    {
      title: 'Get unbeatable security with top-tier encryption',
    },
    {
      title: 'Customizable, private models',
    },
    {
      title: 'Enjoy compliance with all leading standards ',
    },
  ],
  image: {
    src: cameraBackImg,
    alt: 'Colorful Image',
  },
  isReversed: true,
  isAfterContent: true,
};

// Content data on Home page *******************
export const contentHomeThree: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  content:
    'Accurate',
  items: [
    {
      title: 'We provide sources for every information which is out there',
      },
    {
      title: 'Gives probabilty on answers to find the most accurate answer ',
    },
    {
      title: 'Drums is future proof. Adding new integraitons and models',
    },
  ],
  image: {
    src: dataProfessionalsImage,
    alt: 'Colorful Image',
  },
  isReversed: false,
  isAfterContent: false,
};


// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  isReversed: false,
  isImageDisplayed: true,
  image: {
    src: gasImg,
    alt: 'Steps image',
  },
  header: {
    title: 'HERE’S WHAT YOU’LL LEARN  ',
  },
  items: [
    {
      title: 'Step 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla. Praesent placerat enim ut ex tincidunt vehicula. Fusce sit amet dui tellus.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Step 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.',
      icon: IconArrowDown,
    },
    {
      title: 'Ready!',
    },
  ],
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Top Features',
  },
  items: [
    {
      title: 'Avoid model provider lock-in',
      description: 'Avoid model provider lock-in',
      icon: IconBrandTailwind,
    },
    {
      title: 'Reference real sources',
      description: 'No Hallucinations. LLM powered answering capability backed up by your teams own documents.',
      icon: IconComponents,
    },
    {
      title: 'Create tailored personas',
      description: 'Customize the answering experience for every role in your organization.',
      icon: IconListCheck,
    },
    {
      title: 'All Data privately stored',
      description: 'Plug powerful AI models (like GPT-4) directly into your software application.',
      icon: IconRocket,
    },
    {
      title: 'Multiple Models',
      description:
        'Model selection (GPT-4, Claude, Llama2, etc. Hybrid search powered by cutting-edge NLP ',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Connect to any data source',
      description: 'Connect to 25+ apps ',
      icon: IconBulb,
    },
  ],
};

// Testimonials data on Home page *******************
export const testimonialsHome: TestimonialsProps = {
  id: 'testimonials-on-home',
  hasBackground: true,
  header: {
    title: 'Success stories',
    subtitle:
      'Listen to our power customers reaching goals.',
  },
  testimonials: [
    {
      name: 'Saad Saeed',
      job: 'CEO Layla',
      testimonial: `Drums substantially increases our productivity and everything becomes very easy to find. I would say the best Enterprise and Secure chat out there`,
      image: {
        src: saadPic,
        alt: 'Saad Saeed',
      },
      href: '/',
    },
    {
      name: 'Teodor Rupi',
      job: 'CTO allO',
      testimonial: `Love how it connects with all our data sources and how the team has been able to ship custom integrations for us.`,
      image: {
        src: teodorPic,
        alt: 'Teodor Rupi',
      },
      href: '/',
    },
    {
      name: 'Yassin Baum',
      job: 'CEO Mailscale.ai',
      testimonial: `Its like a secure Chatgpt on our private data and private servers. We don't have to send it to American comapniess. Also the speed of output, with sources is very fast. Very happy with it`,
      image: {
        src: yassinPic,
        alt: 'Yassin Baum',
      },
      href: '/',
    },
  ],
};

// FAQS data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Ask me anything',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What is Drums?',
      description: `Drums is an Enterprise AI solution, seamlessly integrated into your organization’s existing IT infrastructure. She’s designed to enhance productivity, streamline processes, and empower your teams.
      `,
    },
    {
      title: 'How can Drums help my organization?',
      description: `Drums is like a versatile AI colleague ready to support various vital roles within your organization. She can assist everyone from customer support specialists to finding any information for you, with sources.`,
    },
    {
      title: 'Can Drums work with any data types?',
      description: `Drums works with any data types, independent of where the data resides or in what format does it exist. `,
    },
    {
      title: "Is Drums Secure? ",
      description: `Drums prioritizes data security and privacy, adhering to authentication, authorization, and data governance standards. It redacts sensitive information before using Public LLMs and offers private LLM deployment options to keep data within your organization. We are in process of complying with SOC 2 Type I & II, HIPAA, GDPR, ISO 27001:2022 standards. Read our trust report for details.`,
    },
    {
      title: "Does keep our data private?",
      description: `Drums offers private LLM deployment options to keep data within your organization. It never leaves your servers, jurisdiction, country`,
    },
    {
      title: 'Is my company’s data used to train AI models?',
      description: `We never use your data to train our AI models. For your usecase, we can use your data to fine-tune the private results that you get. However, its private to your company`,
    },
    {
      title: 'How does Drums work?',
      description: `Drums transforms Enterprise Generative AI, making it easy to implement AI accurately in your system. Drums scalable architecture handles numerous tasks effortlessly. The DrumsFusion™ model merges top public LLMs with our specialized private LLMs for unmatched accuracy.`,
    },
    {
      title: 'Can Drums integrate with existing enterprise applications?',
      description: `Drums is readily integrated with multiple enterprise apps for quick deployment and seamless workflow integration. Other external apps could also be connected using APIs `,
    },
    {
      title: 'This seems fantastic. How can I begin using Drums?',
      description: `The best way to check Drums game-changing potential is to try it yourself. Start by requesting a demo at https://zcal.co/i/cL7eACvt to learn what Drums can do for you. Work with Drums and start revolutionizing how you do business.`,
    },
    {
      title: 'What industries can benefit from Drums?',
      description: `Drums' adaptable AI capabilities serve a broad spectrum of industries, such as healthcare, retail, travel, hospitality, finance, manufacturing, e-commerce, technology, and beyond. Its versatility and customization options render it an indispensable tool for any business, regardless of the industry. `,
    },
  ],
};

// Pricing data on Home page *******************
export const pricingHome: PricingProps = {
  id: 'pricing-on-home',
  hasBackground: true,
  header: {
    title: 'Future Membership',
    subtitle:
      'Get Instant Access Now (Limited Time Discount) ',
    // tagline: 'Pricing',
  },
  prices: [
    {
      title: 'standard',
      price: 99,
      period: 'per year',
      items: [
        {
          description: 'Future Dev: Build SaaS with No Code Tools',
        },
        {
          description: 'Productized Agency Playbook: The new way to sell services',
        },
        {
          description: 'Creatorize: Become a professional creator (Coming soon)',
        },
        {
          description: 'Access to All Future Courses ',
        },
        {
          description: 'Live Classroom Sessions ',
        },
        {
          description: 'Resources and templates you can copy and paste ',
        },
        {
          description: 'Access to a community of internet entrepreneurs ',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Register Now',
        href: 'https://buy.stripe.com/test_28oaFSbK9emS97G7ss',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    } 
  ],
};

// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Team Members',
    subtitle:
      'Suspendisse in dui nibh. Donec enim leo, sodales et egestas id, malesuada non diam. Sed dapibus velit et mauris condimentum, vel imperdiet erat egestas.',
    // tagline: 'Team',
  },
  teams: [
    {
      name: 'Cindy Belcher',
      occupation: 'SEO Consultant',
      image: {
        src: 'https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Cindy Belcher',
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
      name: 'Toby Foster',
      occupation: 'Marketing Tech',
      image: {
        src: 'https://images.unsplash.com/photo-1614583224978-f05ce51ef5fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2172&q=80',
        alt: 'Toby Foster',
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
      name: 'Clark Bourne',
      occupation: 'Content Manager',
      image: {
        src: 'https://images.unsplash.com/photo-1639628735078-ed2f038a193e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Clark Bourne',
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
      name: 'Bella Chase',
      occupation: 'UX Designer',
      image: {
        src: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
        alt: 'Bella Chase',
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

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  hasBackground: true,
  header: {
    title: 'Get in Touch',
    subtitle: 'In hac habitasse platea dictumst',
    tagline: 'Contact',
  },
  content:
    'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque sagittis ante, ac tincidunt sem venenatis ut.',
  items: [
    {
      title: 'Our Address',
      description: ['1230 Maecenas Street Donec Road', 'New York, EEUU'],
      icon: IconMapPin,
    },
  ],
  form: {
    title: 'Ready to Get Started?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        autocomplete: 'off',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        autocomplete: 'on',
        placeholder: 'Your email address',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Write your message...',
    },
    btn: {
      title: 'Send Message',
      type: 'submit',
    },
  },
};

// CallToAction data *******************
export const callToAction2Home: CallToActionProps = {
  title: 'Revolutionize the way you do business',
  subtitle:
    '',
  items: [
    {
      title: 'Talk to us',
      description: 'Book a call and talk to us',
      href: 'https://zcal.co/i/cL7eACvt',
      icon: IconArrowBigRight,
    },
  ],
};