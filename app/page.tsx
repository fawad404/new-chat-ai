import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero2 from '~/components/widgets/Hero2';
import Hero6 from '~/components/widgets/Hero6';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import CallToAction from '~/components/widgets/CallToAction';

import {
  callToAction3Home,
  faqs2Home,
  heroHome,
  heroHomeTwo,
  socialProofHome,
  testimonialsHome,
  featuresHomeTwo,
  featuresHomeThree,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero2 {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Hero6 {...heroHomeTwo} />
      <Features {...featuresHomeTwo} />
      <Features {...featuresHomeThree} />
      <Testimonials {...testimonialsHome} />
      <FAQs2 {...faqs2Home} />
      <CallToAction {...callToAction3Home} />

      {/* <Hero5 {...heroHomeThree} /> */}
      {/* <Hero4 {...heroHomeFour} /> */}
      {/* <Features {...featuresHome} /> */}
      {/* <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Content {...contentHomeThree} /> */}
      {/* <Steps {...stepsHome} /> */}
      {/* <Features2 {...features2Services} /> */}
      {/* <Pricing {...pricingHome} /> */}
      {/* <Team {...teamHome} />  */}
      {/* <CallToAction2 {...callToAction2Home} /> */}
      {/* <Contact {...contactHome} /> */}
    </>
  );
}
