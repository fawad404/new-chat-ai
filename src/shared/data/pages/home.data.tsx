import {
  IconArrowDown,
  IconArrowsRightLeft,
  IconBrandLinkedin,
  IconBrandTailwind,
  IconBrandTwitter,
  IconBulb,
  IconCheck,
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

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Magic as a service
    </>
  ),
  subtitle: (
    <>
      We are an Engineering team focused on building Software Products, Finetuning AI Models and integrating latest AI solutions in your company.
      <br></br><br></br>       

    </>
  ),
  callToAction: {
    text: 'Talk to us',
    href: 'https://zcal.co/i/cL7eACvt',
    icon: IconDownload,
    targetBlank: true,
  },
  image: {
    src: heroImg,
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
    <>
      Build Software <span className="hidden md:inline"> from Scratch </span> 
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
      We build out your software in record time. From SaaS to enterprise grade Software using NoCode, AI and also entire full coding.
      </span>{' '}
    </>
  ),
  image: {
    src: heroImg,
    alt: 'Hero TailNext',
  },
};

export const heroHomeThree: HeroProps = {
  title: (
    <>
      Adding AI in your business 
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        We serve as an AI solution partner, which blends your stack with modern AI tech
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

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home-one',
  hasBackground: true,
  header: {
    title: 'GAIN INSTANT ACCESS TO PROGRAMS ',
    subtitle: 'Designed to developo top in-demand business skills',
    tagline: 'Content',
  },
  content:
    'FUTURE DEV: BUILD A PROFITABLE SAAS BUSINESS',
  items: [
    {
      title: 'Learn an In-Demand High-Income Skill ',
      description:
        'Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.',
    },
    {
      title: 'Get Full Training on Bubble & Make.com ',
      description:
        'Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.',
    },
    {
      title: 'Watch Us Build A Popular SaaS From Scratch ',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.',
    },
    {
      title: 'Join A No Code Support Community ',
      description:
        'At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix.odus.',
    },
  ],
  image: {
    src: cameraFrontImg,
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
    'Generate cash flow when selling your skill as a productized service. The Productized Agency Playbook is designed to take your unique abilities and help you earn a full-time income from a laptop through a new and improved agency model. Inside you’ll learn everything about selling your skills online from clients to cashflow.  ',
  items: [
    {
      title: 'Turn Your Skill Into A Money-Making Machine',
    },
    {
      title: 'Run an Agency on Autopilot ',
    },
    {
      title: 'Learn How To Run, Operate, And Manage A Profitable Agency ',
    },
    {
      title: 'Join A Productized Agency Support Community ',
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
    'What do most of the young millionaires online have in common…? That’s right, they create high-quality content and monetize their following, and the next generation of millionaires will be those who can create the best content. In Creatorize, Brett Malinowski will show you the exact step-by-step playbook for growing your personal brand through content creation.    ',
  items: [
    {
      title: 'Inside Information On The Most Effective Growth Strategies That Are Currently Working ',
      },
    {
      title: 'A Full Walkthrough On Creating World-Class Content For The Masses ',
    },
    {
      title: 'Classroom and Q&A sessions with Experts ',
    },
    {
      title: 'Learn How To Scale & Monetize Your Personal Brand ',
    },
  ],
  image: {
    src: cameraFrontImg,
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
    title: 'HERE’S WHAT YOU’LL LEARN',
  },
  items: [
    {
      title: 'No Code Tools',
      description: 'Learn how to become a Future Dev by mastering no code tools Bubble and Make.',
      icon: IconBrandTailwind,
    },
    {
      title: 'Build SAAS',
      description: 'Bring your software ideas to life with zero coding skills or technical experience.',
      icon: IconComponents,
    },
    {
      title: 'Automation',
      description: 'Learn how to build systems that put business operations on auto pilot.',
      icon: IconListCheck,
    },
    {
      title: 'AI Integration',
      description: 'Plug powerful AI models (like GPT-4) directly into your software application.',
      icon: IconRocket,
    },
    {
      title: 'APIs',
      description:
        'Give your software all types of functionality with APIs in just a few minutes.',
      icon: IconArrowsRightLeft,
    },
    {
      title: 'Full Stack Development',
      description: 'Build complete web applications (front end and back end).',
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
      name: 'Tayla Kirsten',
      job: 'Marketing Manager',
      testimonial: `Drums is one of the best technology partners we could hope for. Experts in AI and brought us up to speed`,
      image: {
        src: 'https://images.unsplash.com/photo-1619734086067-24bf8889ea7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Tayla Kirsten',
      },
      href: '/',
    },
    {
      name: 'Silver Jordan',
      job: 'Senior Marketer',
      testimonial: `Drums is one of the best technology partners we could hope for. Experts in AI and brought us up to speed`,
      image: {
        src: 'https://images.unsplash.com/photo-1565049786474-1dea82a8b995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Silver Jordan',
      },
      href: '/',
    },
    {
      name: 'Kelsey Arden',
      job: 'Co-Founder & CEO',
      testimonial: `Drums is one of the best technology partners we could hope for. Experts in AI and brought us up to speed`,
      image: {
        src: 'https://images.unsplash.com/photo-1659057106920-da022cfbc0cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        alt: 'Kelsey Arden',
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
      'Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar.',
    tagline: 'FAQS',
  },
  items: [
    {
      title: 'What is Future University?',
      description: `The Future University is a hub of business training programs, tools and resources. Each program shows you exactly how to start and grow a profitable online business from scratch. At the Future University, our focus is to teach you how to build businesses of the future.
      `,
    },
    {
      title: 'What is included in the Future University membership?',
      description: `Membership at Future University encompasses a suite of educational courses, including expert-led live classroom sessions, exclusive access to a curated collection of resources, and membership in a dynamic, supportive community network `,
    },
    {
      title: "How do I get a Future University membership?",
      description: `To secure your Future University membership, simply click on the 'Pricing' tab you see at the top of this website. It will guide you through our straightforward enrollment process for our exclusive membership option`,
    },
    {
      title: "What are payment options for the  membership?",
      description: `Our payment processing is handled by Stripe, offering a range of payment choices. These include the use of credit and debit cards, PayPal, along with additional local payment methods that might be available in your region.`,
    },
    {
      title: 'How does the 14 day refund guarantee work?',
      description: `Future University provides a 14-day money-back guarantee for all our members. This means you have a period of 14 days from the date of your purchase to request a full refund, irrespective of your usage or engagement with our courses. To initiate the refund process, please send an email to malikasfandyarashraf@gmail.com`,
    },
    {
      title: 'Will the price of the Future University Increase in the future?',
      description: `Yes. We have limited spots available at today’s current price point. After these spots have been filled, we will raise the yearly membership fee. If you become a member of Future University today, you will lock in today’s yearly membership fee forever. That means you will not be subject to any price increases when it comes to renewing your yearly membership.`,
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
  title: 'Read to Launch ?',
  subtitle:
    'Build Software in Record Time, Fine Tune AI Models, Integrate AI in your Company ',
  items: [
    {
      title: 'Talk to us',
      description: 'Book a call and talk to us',
      href: 'https://zcal.co/i/cL7eACvt',
    },
  ],
};