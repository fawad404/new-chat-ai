import Image from 'next/image';
import { SocialProofProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const SocialProof = ({ images, id, hasBackground = false }: SocialProofProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <h2 className="text-center font-bold">Trusted by companies of all sizes</h2>
    <div className="flex items-center justify-center gap-10 ">  
      {images &&
        images.map(({ src, alt, link }, index) => (
          <div key={`item-social-proof-${index}`}>
            <a href={link} target="_blank" rel="noopener">
              <Image
                src={src}
                alt={alt}
                className="h-auto w-24 md:w-32"  // Increased size classes for larger images
                object-fit="contain"
                width={220}  // Increased width from 80 to 120
                height={220}  // Increased height from 80 to 120
              />
            </a>
          </div>
        ))}
    </div>
  </WidgetWrapper>
);

export default SocialProof;
