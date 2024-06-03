import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero2 from '~/components/widgets/Hero2';
import Hero1 from '~/components/widgets/Hero';
import Hero6 from '~/components/widgets/Hero6';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import CallToAction from '~/components/widgets/CallToAction';
import Stats from '~/components/widgets/Stats';
import Content from '~/components/widgets/Content';



import {
  callToAction3Home,
  faqs2Home,
  heroHome,
  heroHomeTwo,
  socialProofHome,
  testimonialsHome,
  featuresHomeTwo,
  featuresHomeThree,
  integrationHome,
  contentHomeOne,
  contentHomeTwo,
  contentHomeThree
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero2 {...heroHome} />
      <SocialProof {...socialProofHome} />
      {/* <Stats {...statsAbout} /> */}
      <Hero6 {...heroHomeTwo} />
      <Features {...featuresHomeTwo} />
      <Features {...featuresHomeThree} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeThree} /> 
      <Testimonials {...testimonialsHome} />
      <Hero1 {...integrationHome} />
      <FAQs2 {...faqs2Home} />
      <CallToAction {...callToAction3Home} />


      {/* <Content {...contentHomeTwo} /> */}
      {/* <Hero5 {...heroHomeThree} /> */}
      {/* <Hero4 {...heroHomeFour} /> */}
 
      {/* <Steps {...stepsHome} /> */}
      {/* <Features2 {...features2Services} /> */}
      {/* <Pricing {...pricingHome} /> */}
      {/* <Team {...teamHome} />  */}
      {/* <CallToAction2 {...callToAction2Home} /> */}
      {/* <Contact {...contactHome} /> */}
    </>
  );
}
