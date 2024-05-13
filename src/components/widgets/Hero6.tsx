import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero6 = ({ title, subtitle, tagline, callToAction, callToAction2, video }: HeroProps) => {
  return (
    <section id="heroOne" className="bg-[#EDF3FF]">

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto max-w-4xl pb-10 text-center md:pb-16">
            {tagline && (
              <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                {tagline}
              </p>
            )}
            {title && (
              <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                {title}
              </h1>
            )}
            <div className="mx-auto max-w-3xl">
              {subtitle && <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
              
              <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
              </div>
            </div>
          </div>

          <div className="aspect-ratio-4-3 max-w-full mx-auto">
            
          <iframe
            className="w-full h-full"
            src="https://www.loom.com/embed/043e92624262422aa7b11c5a3698b43d?sid=60ddce5b-0821-4e5e-b30d-277e516da574"
            frameBorder="0"
            allowFullScreen></iframe>

          </div>
      </div>
      </div>
    </section>
  );
};

export default Hero6;
