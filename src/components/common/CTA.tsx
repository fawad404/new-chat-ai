import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { CallToActionType, LinkOrButton } from '~/shared/types';

const CTA = ({ callToAction, containerClass, linkClass, iconClass }: LinkOrButton) => {
  const { text, href, icon: Icon, targetBlank } = callToAction as CallToActionType;

  return (
    <>
      {href && (text || Icon) && (
        <div className={twMerge('flex w-auto cursor-pointer', containerClass)}>
          {targetBlank ? (
            <Link
              className={twMerge('inline-flex items-center justify-center w-full sm:mb-0', linkClass)}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
              {Icon && (
                // Adjusted classes for spacing after the text
                <Icon className={twMerge(`w-5 h-5 ${text ? 'ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5' : ''}`, iconClass)} />
              )}
            </Link>
          ) : (
            <Link className={twMerge('inline-flex items-center justify-center w-full sm:mb-0 ', linkClass)} href={href}>
              {text}
              {Icon && (
                // Adjusted classes for spacing after the text
                <Icon className={twMerge(`w-5 h-5 ${text ? 'ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5' : ''}`, iconClass)} />
              )}
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default CTA;
