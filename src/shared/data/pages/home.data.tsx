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
import cloudSecuritylogo from '~/assets/images/csa-logo.png';
import saadPic from '~/assets/images/saad.jpeg';
import teodorPic from '~/assets/images/teodor.jpeg';
import yassinPic from '~/assets/images/yassin.jpeg';
import callSupportSVG from 'public/image1.png'
import integrationSVG from 'public/integrations.svg'
import dataProfessionalsImage from '~/assets/images/stages-of-personal-growth.png';
import trustedImage from '~/assets/images/trusted-settings.png';
import accurateImage from '~/assets/images/ai-sales-agent.png';
import microsoftLogo from '~/assets/images/microsoft-logo.png';
import nvidiaLogo from '~/assets/images/nvidia-logo.png';
import googleLogo from '~/assets/images/google-logo.jpg';
import csaLogo from '~/assets/images/csa-logo.png';


import marketingResearchImage from '~/assets/images/marketing-research.png';
import socialMediaContentImage from '~/assets/images/social-media-content.png';
import standOutCrowdImage from '~/assets/images/stand-crowd.png';


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
    text: 'Book it now',
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
      link: 'https://layla.com',
      src: laylaLogo,
      alt: 'Layla',
    },
    {
      link: 'https://magicalpdf.com',
      src: magicalPDFlogo,
      alt: 'MagicalPDF Logo',
    },
    {
      link: 'https://cloudsecurity.com',
      src: cloudSecuritylogo,
      alt: 'CloudSecurity Logo',
    },
    {
      link: 'https://micorsoft.com',
      src: microsoftLogo,
      alt: 'microsoft Logo',
    },
    {
      link: 'https://nvidia.com',
      src: nvidiaLogo,
      alt: 'nvidia Logo',
    },
    {
      link: 'https://google.com',
      src: googleLogo,
      alt: 'google Logo',
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
    title: <>Unlock Viral Marketing for Your Business</>,
    subtitle: 'Instant, Autonomous, Effortless',
  },
  items: [
    {
      title: 'Cutting-edge market research',
      description: 'Discover your customers like never before and gather valuable feedback.',
      image: marketingResearchImage, // Use the path to your image
    },
    {
      title: 'High-quality social content',
      description: 'We produce content with our host, edit it, and deliver it ready for your platform.',
      image: socialMediaContentImage, // Use the path to your image
    },
    {
      title: 'Stand out from the crowd',
      description: 'Elevate your brand with captivating street interviews that break the norm.',
      image: standOutCrowdImage, // Use the path to your image
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
        How it Works
      </>
    ),
    subtitle:
      "Easily Build a Custom Chatbot in Three Simple Steps",
  },
  items: [
    {
      title: 'Submit Your Data',
      description:
        'Upload any type of content—website URLs, PDFs, CSVs, Word documents, or plain text. Our system will handle the content preparation for training.',
      icon: IconNumber1Small,
    },
    {
      title: 'Select and Train',
      description:
        "Choose the documents or sections you'd like your chatbot to learn from, remove irrelevant data, and initiate the training process with a single click.",
      icon: IconNumber2Small,

    },
    {
      title: 'Launch Your AI Chatbot',
      description:
        'Embed the provided code into your site. Your customized AI chatbot will be ready to assist visitors, boosting customer interactions around the clock.',
      icon: IconNumber3Small,
    },
  ],
};


// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'Why Choose Chat Site?',
  },
  content:
    'Your Expert Customer Support Solution ',
  items: [
    {
      title: 'Perfectly Reflect Your Brand',
      description:
        'Let AI handle the majority of inquiries—around 90%. For unique or complex cases, the chatbot will escalate the issue to a human agent.',
    },
    {
      title: 'Perfectly Reflect Your Brand',
      description:
        'Your chatbot will fully represent your company’s brand, creating a consistent and professional image.',
    },
    {
      title: 'Seamless Human Handoff',
      description:
        'Let AI handle the majority of inquiries—around 90%. For unique or complex cases, the chatbot will escalate the issue to a human agent.',
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
    'Prospect Acquisition System',
  items: [
    {
      title: 'Allow the chatbot to capture all your potential leads seamlessly',
    },
    {
      title: 'Experience unbeatable security with industry-leading encryption',
    },
    {
      title: 'Customize private models tailored to your unique requirements',
    },
    {
      title: 'Ensure compliance with all major regulatory standards ',
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
      title: 'Effortlessly capture leads from your website 24/7.',
      },
    {
      title: 'Schedule meetings, qualify prospects, and boost revenue. ',
    },
    {
      title: 'Transform your website into a powerful lead generation machine.',
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
    title: 'What People Are Saying About StreetInterview',
    subtitle:
      'Discover how our unique approach is helping brands connect and stand out.',
  },
  testimonials: [
    {
      name: 'Saad Saeed',
      job: 'CEO Layla',
      testimonial: `Since using StreetInterview, we've experienced a significant boost in customer engagement and sales leads. Many users, who we might have lost otherwise… `,
      image: {
        src: saadPic,
        alt: 'Saad Saeed',
      },
      href: '/',
    },
    {
      name: 'Teodor Rupi',
      job: 'CTO allO',
      testimonial: `This has been a game changer for us. It’s far more accurate than any other chatbot, and it’s led to a major increase in lead satisfaction…`,
      image: {
        src: teodorPic,
        alt: 'Teodor Rupi',
      },
      href: '/',
    },
    {
      name: 'Yassin Baum',
      job: 'CEO Mailscale.ai',
      testimonial: `Integration took just two minutes. Our customers love it, and the satisfaction rates have skyrocketed ever since…`,
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
      title: 'What exactly is a street interview?',
      description: `A street interview involves approaching real people in public spaces to ask questions related to your brand or industry, providing authentic and engaging content.
      `,
    },
    {
      title: 'How do street interviews help my business?',
      description: `Street interviews create genuine, unscripted content that resonates with audiences, making your brand more relatable and increasing engagement on social media.
      `,
    },
    {
      title: 'Can I choose the questions for the street interview?',
      description: `Yes, you can either provide the questions or work with our team to craft questions that best align with your business goals.
      `,
    },
    {
      title: 'Where are the street interviews conducted?',
      description: `Street interviews are typically conducted in high-traffic public areas, but we can also choose locations that match your target audience.
      `,
    },
    {
      title: 'Do you provide the host for the street interviews?',
      description: `Yes, we provide a professional host who is skilled at engaging people and conducting dynamic, on-the-spot interviews.
      `,
    },
    {
      title: 'Can I use the street interview content across different platforms?',
      description: `Absolutely! The content is optimized for use on various platforms, including social media, websites, and even ads.
      `,
    },
    {
      title: 'How long are the street interviews?',
      description: `The interviews typically last 3-5 minutes, but we can adjust the length based on your needs and the platform requirements.
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
      price: '99',
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
  title: 'Engage Your Customers Directly on the Street',
  subtitle:
    'From invaluable insights to real-time reactions, we bring the voice of your customers directly to you through street interviews.',
  callToAction: {
    text: 'Explore Our Packages Now',
    href: '#',
    targetBlank: true,
  },
};
