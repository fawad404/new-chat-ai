import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconArrowBigRight,
  IconComponents,
  IconListCheck,
  IconMail,
  IconMapPin,
  IconRocket,
  IconNumber1,
  IconNumber3,
  IconNumber2,
  IconRosetteNumber3,
  IconNumber1Small,
  IconNumber2Small,
  IconNumber3Small,
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
import buildEveryday from '~/assets/images/build-everday.png';
import drumsLogo from '~/assets/images/drums-logo.png';
import laylaLogo from '~/assets/images/layla-logo.png';
import magicalPDFlogo from '~/assets/images/magical-pdf-logo.png';
import saadPic from '~/assets/images/saad.jpeg';
import teodorPic from '~/assets/images/teodor.jpeg';
import yassinPic from '~/assets/images/yassin.jpeg';
import callSupportSVG from 'public/image1.png'
import integrationSVG from 'public/integrations.svg'
import dataProfessionalsImage from '~/assets/images/data-professionals.png';
import trustedImage from '~/assets/images/trusted.png';
import accurateImage from '~/assets/images/accurate.png';
import microsoftLogo from '~/assets/images/microsoft-logo.png';
import nvidiaLogo from '~/assets/images/nvidia-logo.png';
import googleLogo from '~/assets/images/google-logo.jpg';
import csaLogo from '~/assets/images/csa-logo.png';



// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Get Street Interviews for YOUR Product
    </>
  ),
  subtitle: (
    <>
    do market research, get content ideas, get customer feedback
    <br></br>
    <br></br>
    </>
  ),
  callToAction: {
    text: 'Get started for Free',
    href: '/',
    icon: IconArrowBigRight,
    targetBlank: true,
  },
  callToAction2: {
    text: 'Book a call',
    href: '/',
    icon: IconArrowBigRight,
    targetBlank: true,
  },
  image: {
    src: callSupportSVG,
    alt: 'Hero StreetInterview',
  },
  validationImages: [
    {
      src: microsoftLogo,
      alt: 'Microsoft Logo',
    },
    {
      src: googleLogo,
      alt: 'Google Logo',
    },
    {
      src: nvidiaLogo,
      alt: 'Nvidia Logo',
    },
    {
      src: csaLogo,
      alt: 'CSA Logo',
    },
  ],
};

export const integrationHome: HeroProps = {
  title: (
    <>
      Integrates with all your favourite tools
    </>
  ),
  subtitle: (
    <>
    Integrates natively to all the platforms you have or where your data resides. 
    <br></br>
    <br></br>
    </>
  ),
  image: {
    src: integrationSVG,
    alt: 'Integrations with all platforms',
  },
  validationImages: [
    {
      src: microsoftLogo,
      alt: 'Microsoft Logo',
    },
    {
      src: googleLogo,
      alt: 'Google Logo',
    },
    {
      src: nvidiaLogo,
      alt: 'Nvidia Logo',
    },
    {
      src: csaLogo,
      alt: 'CSA Logo',
    },
  ],
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      link: 'https://trydrums.com',
      src: drumsLogo,
      alt: 'Drums Logo',
    },
    {
      src: laylaLogo,
      alt: 'Layla',
    },
    {
      link: 'https://magicalpdf.com',
      src: magicalPDFlogo,
      alt: 'MagicalPDF Logo',
    },
  ],
};

export const validationProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [
    {
      src: microsoftLogo,
      alt: 'Microsoft Logo',
    },
    {
      src: googleLogo,
      alt: 'Google Logo',
    },
    {
      src: nvidiaLogo,
      alt: 'Nvidia Logo',
    },
    {
      src: csaLogo,
      alt: 'CSA Logo',
    },
  ],
};


export const heroHomeTwo: HeroProps = {
  title: (
    <> <span>
      Custom AI Chatbot like ChatGPT in One-Click! </span> 
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
      Empower your Business with StreetInterview AI! Simply share your website link or upload your documents, and get a Conversational AI Chatbot ready in just 2 minutes. This fully customized AI bot will be exclusively trained for your company, providing instant answers to your customers. It&apos;s like having a Custom ChatGPT tailored specifically for your business!  
      </span>{' '}
    </>
  ),
  video: {
    link: 'https://youtu.be/vlte2z8s_m8?si=14gq_uHDfMfRPHOf',
  },
};

export const heroHomeVideo: HeroProps = {
  title: (
    <> <span>
      Custom AI Chatbot like ChatGPT in One-Click! </span> 
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
      Empower your Business with StreetInterview AI! Simply share your website link or upload your documents, and get a Conversational AI Chatbot ready in just 2 minutes. This fully customized AI bot will be exclusively trained for your company, providing instant answers to your customers. It&apos;s like having a Custom ChatGPT tailored specifically for your business!  
      </span>{' '}
    </>
  ),
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
    alt: 'Hero StreetInterview',
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
    alt: 'Hero StreetInterview',
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
    alt: 'Hero StreetInterview',
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
        Get Viral Marketing for your Business
      </>
    ),
    subtitle:
      "Instant, Autonomous, Effortless ",
  },
  items: [
    {
      title: 'Best in case market research',
      description:
        'Understand your customers, like never before and get customer feedback. ',
      icon: IconBrandTailwind,
    },
    {
      title: 'Get excellent Content for your social media',
      description:
        'We film the content with our host and edit it and send it to you',
      icon: IconComponents,
    },
    {
      title: 'Make your brand stand out',
      description:
        'Everybody and their mom is doing basic videos. Set yourself apart with cool street interviews',
      icon: IconListCheck,
    },
  ],
};

// Features data on Home page *******************
export const featuresHomeThree: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        How it works
      </>
    ),
    subtitle:
      "Effortless Custom Chatbot Training in Three Easy Steps",
  },
  items: [
    {
      title: 'Provide Your Data',
      description:
        'Upload your data, whether its a website URL, PDFs, CSV, docx files, or plain text. Our system will process all the content seamlessly for training.        ',
      icon: IconNumber1Small,
    },
    {
      title: 'Choose and Train',
      description:
        'Select the documents or pages you want your chatbot to learn from, remove unwanted pages and kickstart the training with just a single click on create chatbot.        ',
      icon: IconNumber2Small,

    },
    {
      title: 'Deploy Your AI Chatbot ',
      description:
        'Copy the embed code and add to your website. You now have your personalized AI chatbot, ready to answer any queries, enhancing customer engagement 24/7.',
      icon: IconNumber3Small,
    },
  ],
};


// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Why get Chat Site?',
  },
  content:
    'Expert Customer Support Agent ',
  items: [
    {
      title: 'Custom Chatbot on all your data',
      description:
        'Add any data sources that you want. We even integrate with existing systems',
    },
    {
      title: 'Completely showcase your Companys brand',
      description:
        'Chatbot exactly reflects your companys brand',
    },
    {
      title: 'Foward to human, whenever its required',
      description:
        'Lets AI handle 90% of the queries and for special cases, escalate it to human.',
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
    'Lead Generation Engine',
  items: [
    {
      title: 'Let chatbot capture all your potential leads.',
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
    src: trustedImage,
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
    'AI Sales Agent',
  items: [
    {
      title: 'Generate Leads from your website, while you sleep',
      },
    {
      title: 'Booking meetings, Qualify leads, follow up and increase your Revenue ',
    },
    {
      title: 'Turn your website into a pipeline generation machine',
    },
  ],
  image: {
    src: accurateImage,
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
    src: trustedImage,
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
    title: 'What People Say About StreetInterview',
    subtitle:
      'Listen to our power customers reaching goals.',
  },
  testimonials: [
    {
      name: 'Saad Saeed',
      job: 'CEO Layla',
      testimonial: `After integrating StreetInterview, we have seen substantial increase in customer engagement and sales leads. Many users who we would have otherwise lost are now customers. `,
      image: {
        src: saadPic,
        alt: 'Saad Saeed',
      },
      href: '/',
    },
    {
      name: 'Teodor Rupi',
      job: 'CTO allO',
      testimonial: `Its a game changer for our business. This is substantially more accurate than any other chatbot in the market. Increasing our Lead satisfaction has been the biggest value add to us.`,
      image: {
        src: teodorPic,
        alt: 'Teodor Rupi',
      },
      href: '/',
    },
    {
      name: 'Yassin Baum',
      job: 'CEO Mailscale.ai',
      testimonial: `Took just 2 minute to integrate this tool with our servers. Customers love it and satisfaction has been through the roof`,
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
      title: 'Does this include editing, filming and also host?',
      description: `Yes exactly! You just have to tell us what kind of questions you want answered, and thats it. You get the edited videos in 4k
      `,
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
      title: 'Buy   ',
      description: 'Book a call and talk to us',
      href: 'https://zcal.co/i/d4kbkj53',
      icon: IconArrowBigRight,
    },
  ],
};

export const callToAction3Home: CallToActionProps = {
  id: 'callToAction3-on-home',
  hasBackground: false,
  title: 'We interview on the streets for your products',
  subtitle:
    'From customer feebdack to product feedback, we interview on the streets for your products.',
  callToAction: {
    text: 'Buy Package Right now',
    href: '#',
    targetBlank: true,
  },
};
