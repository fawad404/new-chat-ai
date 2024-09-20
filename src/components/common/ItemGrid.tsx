import { twMerge } from 'tailwind-merge';
import type { ItemGrid as ItemGridType } from '~/shared/types';
import CTA from './CTA';

import Image from 'next/image';

const ItemGrid = ({
  id,
  items,
  columns,
  defaultColumns,
  defaultIcon: DefaultIcon,
  containerClass,
  panelClass,
  iconClass,
  titleClass,
  descriptionClass,
  actionClass,
}: ItemGridType) => {
  return (
    <>
      {items && (
        <div
          className={twMerge(
            `grid mx-auto gap-8 md:gap-y-12 ${
              (columns || defaultColumns) === 4
                ? 'lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'
                : (columns || defaultColumns) === 3
                ? 'lg:grid-cols-3 sm:grid-cols-2'
                : (columns || defaultColumns) === 2
                ? 'sm:grid-cols-2'
                : 'max-w-4xl'
            }`,
            containerClass,
          )}
        >
          {items.map(({ title, description, image, icon: Icon, callToAction }, index) => (
            <div key={id ? `item-${id}-${index}` : `item-grid-${index}`}>
              <div className={twMerge('flex flex-row max-w-md', panelClass)}>
                <div className="flex justify-center">
                  {image ? (
                    // Use the Next.js Image component if image is StaticImageData
                    typeof image === 'string' ? (
                      <img
                        src={image}
                        alt={String(title) || ''} 
                        className={twMerge('w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2', iconClass)}
                      />
                    ) : (
                      <Image
                      src={image}
                      alt={String(title) || ''}  // Convert title to string or provide an empty string fallback
                      className={twMerge('w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2', iconClass)}
                    />

                    )
                  ) : Icon ? (
                    <Icon className={twMerge('w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2', iconClass)} />
                  ) : DefaultIcon ? (
                    <DefaultIcon className={twMerge('w-6 h-6 mr-2 rtl:mr-0 rtl:ml-2', iconClass)} />
                  ) : null}
                </div>
                <div className="mt-0.5">
                  {title && <h3 className={twMerge('text-xl font-bold', titleClass)}>{title}</h3>}
                  {description && (
                    <p className={twMerge(`text-gray-600 ${title ? 'mt-3' : ''}`, descriptionClass)}>
                      {description}
                    </p>
                  )}
                  {callToAction && (
                    <CTA
                      callToAction={callToAction}
                      linkClass={twMerge(
                        `${
                          title || description ? 'mt-3' : ''
                        } text-primary font-bold text-blue-600 hover:underline cursor-pointer`,
                        actionClass,
                      )}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ItemGrid;
