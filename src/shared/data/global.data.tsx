import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconChevronDown,
  IconRss,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'NEW',
  callToAction: {
    text: 'This template is made with Next.js 14 using the new App Router »',
    href: 'https://nextjs.org/blog/next-14',
  },
  callToAction2: {
    text: 'Follow @onWidget on Twitter',
    href: 'https://twitter.com/intent/user?screen_name=onwidget',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    // {
    //   label: 'Pages',
    //   icon: IconChevronDown,
    //   links: [
    //     // {
    //     //   label: 'Services',
    //     //   href: '/services',
    //     // },
    //     // {
    //     //   label: 'Pricing',
    //     //   href: '/pricing',
    //     // },
    //     // {
    //     //   label: 'About us',
    //     //   href: '/about',
    //     // },
    //     {
    //       label: 'Contact us',
    //       href: '/contact',
    //     },
    //     // {
    //     //   label: 'FAQs',
    //     //   href: '/faqs',
    //     // },
    //     // {
    //     //   label: 'Terms & Conditions',
    //     //   href: '/terms',
    //     // },
    //     // {
    //     //   label: 'Privacy Policy',
    //     //   href: '/privacy',
    //     // },
    //   ],
    // },
    {
      label: 'Blog',
      href: '/blog',
    },
    {
      label: 'Pricing',
      href: '/pricing',
    },
  ],
  actions: [
    {
      text: 'Try for free',
      href: 'https://chat.chatsite.biz/',
      targetBlank: true,
    },
  ],
  isSticky: true,
  // showToggleTheme: true,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'TailNext',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Product',
      links: [
        {
          label: 'Features',
          href: '/',
        },
        {
          label: 'Security',
          href: '/',
        },
        {
          label: 'Team',
          href: '/',
        },
        {
          label: 'Enterprise',
          href: '/',
        },
        {
          label: 'Customer stories',
          href: '/',
        },
        {
          label: 'Pricing',
          href: '/pricing',
        },
        {
          label: 'Resources',
          href: '/',
        },
      ],
    },
    {
      title: 'Platform',
      links: [
        {
          label: 'Developer API',
          href: '/',
        },
        {
          label: 'Partners',
          href: '/',
        },
      ],
    },
    {
      title: 'Support',
      links: [
        {
          label: 'Docs',
          href: '/',
        },
        {
          label: 'Community Forum',
          href: '/',
        },
        {
          label: 'Professional Services',
          href: '/',
        },
        {
          label: 'Skills',
          href: '/',
        },
        {
          label: 'Status',
          href: '/',
        },
      ],
    },
    {
      title: 'Company',
      links: [
        {
          label: 'About',
          href: '/',
        },
        {
          label: 'Blog',
          href: '/blog',
        },
        {
          label: 'Careers',
          href: '/',
        },
        {
          label: 'Press',
          href: '/',
        },
        {
          label: 'Inclusion',
          href: '/',
        },
        {
          label: 'Social Impact',
          href: '/',
        },
        {
          label: 'Shop',
          href: '/',
        },
      ],
    },
  ],
  socials: [
    { label: 'Linkedin', icon: IconBrandLinkedin, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
     ChatSite LLM 2024. All rights reserved.  
    </div>
  ),
};

// Footer2 data
export const footerData2: FooterProps = {
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Contact',
      texts: ['founders@chatsite.biz'],
    },
    // {
    //   title: 'Phone',
    //   texts: ['Reception: +105 123 4567', 'Office: +107 235 7890'],
    // },
    // {
    //   title: 'Email',
    //   texts: ['Office: info@example.com', 'Site: https://example.com'],
    // },
  ],
  socials: [
    // { label: 'Twitter', icon: IconBrandTwitter, href: '#' },
    { label: 'Linkedin', icon: IconBrandLinkedin, href: 'https://www.linkedin.com/company/93384292' },
    // { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    // { label: 'RSS', icon: IconRss, href: '#' },
    // { label: 'Github', icon: IconBrandGithub, href: 'https://github.com/onwidget/tailnext' },
  ],
  footNote: (
    <div className="mr-4 text-sm">
       ChatSite Enterprise LLM 2024. All rights reserved.
    </div>
  ),
};
