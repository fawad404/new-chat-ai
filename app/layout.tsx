import { Metadata } from 'next';

import { SITE } from '~/config.js';

import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="9R74iVP1lIOhW2T4PMG38s7oLM7trFsesu-Ic4XZpgI" />
 
      </head>
      <body className="tracking-tight antialiased text-gray-900 dark:text-slate-300">
        
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer2 />
        </Providers>

        <script id="__webwhizSdk__" src="https://widget.webwhiz.ai/webwhiz-sdk.js" data-chatbot-id="661e48c07abb6768aec10b14"></script>
        
      </body>
    </html>
  );
}
