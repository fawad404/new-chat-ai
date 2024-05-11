import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import { IconChevronLeft, IconMoon, IconCheck, IconLanguage, IconCalendarOff, IconClock, IconUserPlus } from '@tabler/icons-react';
import CTA from '../common/CTA';

const Hero2 = ({ title, subtitle, tagline, callToAction, callToAction2, image, validationImages }: HeroProps) => {
  return (
    <section className="mt-[-72px] bg-primary-50 dark:bg-slate-800" id="heroTwo">
      <div className="mx-auto max-w-7xl px-4 pt-[72px] sm:px-6 md:flex md:h-screen 2xl:h-auto">
        <div className="block py-12 text-center md:flex md:py-12 md:text-left lg:py-16">
          <div className="mx-auto flex max-w-5xl basis-[60%] items-center">
            <div className="max-w-3xl pb-12 pr-0 md:py-0 md:pr-8 md:pb-0 lg:pr-16">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-200">
                  {tagline}
                </p>
              )}
              {title && (
                <h1 className="leading-tighter font-heading mb-4 px-4 text-5xl font-bold tracking-tighter md:px-0 md:text-[3.48rem]">
                  {title}
                </h1>
              )}
              <div className="mx-auto max-w-3xl">
                {subtitle && <p className="mb-4 text-xl font-normal text-gray-600 dark:text-slate-400">{subtitle}</p>}
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <div className="flex items-center gap-2">
                      <IconUserPlus className="text-primary-600 h-6 w-6" />
                      <span>Personalized onboarding help</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconCheck className="text-primary-600 h-6 w-6" />
                      <span>Friendly pricing as you scale</span>
                    </div>
                    <div className="w-full"></div>
                    <div className="flex items-center gap-2">
                      <IconLanguage className="text-primary-600 h-6 w-6" />
                      <span>95+ languages supported</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconClock className="text-primary-600 h-6 w-6" />
                      <span>14-day free trial</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconCalendarOff className="text-primary-600 h-6 w-6" />
                      <span>Cancel anytime</span>
                    </div>
                </div>
                <br></br>
                <div className="mt-6 flex max-w-none flex-col flex-nowrap justify-center gap-4 sm:flex-row md:m-0 md:justify-start">
                  {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary" />}
                  {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn" />}
                </div>

                <br></br>

                <div className="flex flex-col gap-4 md:flex-row md:justify-start">
                  {validationImages &&
                    validationImages.map(({ src, alt, link }, index) => (
                      <a key={`item-social-proof-${index}`} href={link} target="_blank" rel="noopener" className="transition-opacity duration-300 hover:opacity-100 shadow-lg opacity-80 border-2 text-primary-600">
                        <Image
                          src={src}
                          alt={alt}
                          className="h-auto w-24 md:w-32"
                          objectFit="contain"
                          width={90}
                          height={90}
                        />
                      </a>
                    ))}
                </div>

              </div>
            </div>
          </div>
          <div className="block flex-1 items-center md:flex">
            <div className="relative m-auto h-full max-w-4xl object-cover">
              {image && (
                <Image
                  className="mx-auto h-full w-auto rounded-md object-cover drop-shadow-xl dark:bg-slate-700"
                  src={image.src}
                  alt={image.alt}
                  width={540}
                  height={405}
                  sizes="(min-width: 1920px) 749px, (min-width: 1540px) 43.89vw, (min-width: 1360px) 542px, (min-width: 780px) calc(39.29vw + 16px), calc(96.52vw - 22px)"
                  loading="eager"
                  placeholder="blur"
                  priority
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
