import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import Hero2 from '~/components/widgets/Hero2';
import Hero3 from '~/components/widgets/Hero3';
import Hero4 from '~/components/widgets/Hero4';
import Hero5 from '~/components/widgets/Hero5';
import SocialProof from '../src/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import Testimonials from '~/components/widgets/Testimonials';
import FAQs2 from '~/components/widgets/FAQs2';
import Pricing from '~/components/widgets/Pricing';
import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import CallToAction from '~/components/widgets/CallToAction';
import Contact from '~/components/widgets/Contact';
import Features2 from '~/components/widgets/Features2';

import {
  callToAction2Home,
  callToAction3Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  contentHomeThree,
  features2Services,
  faqs2Home,
  featuresHome,
  heroHome,
  heroHomeTwo,
  heroHomeThree,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
  heroHomeFour,
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
      <Hero3 {...heroHomeTwo} />
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
