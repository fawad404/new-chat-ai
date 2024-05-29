import { Metadata } from 'next';
import { SITE } from '~/config.js';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Footer from '~/components/widgets/Footer';
import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';
import Script from 'next/script';

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
      <body className="tracking-tight antialiased bg-white text-black">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
        {/* <Script
          id="__chatsiteSdk__"
          strategy="lazyOnload"
          src="https://widgets.chatsite.biz/chat-widget.js"
          data-chatbot-id="6638c0b21851b9e60e727176"
        /> */}
        <script id="__webwhizSdk__" src="https://widget.webwhiz.ai/webwhiz-sdk.js" data-chatbot-id="661e48c07abb6768aec10b14"></script>
        {/* <script id="__chatsiteSdk__" src="https://widgets.chatsite.biz/chat-widget.js" data-chatbot-id="664b10aedd9140af0b023ddd"></script> */}
      </body>
    </html>
  );
}
