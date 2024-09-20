import { CallToActionProps, CallToActionType } from '~/shared/types';
import CTA from '../common/CTA';
import WidgetWrapper from '../common/WidgetWrapper';

const CallToAction = ({ title, subtitle, callToAction, id, hasBackground = true }: CallToActionProps) => {
  const { text, href } = callToAction as CallToActionType;

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="relative">
                <img className="absolute top-0 end-0 -mt-4" src="https://static.shuffle.dev/components/preview/2f808e47-944e-42cf-b821-2358251e0600/assets/public/saturn-assets/images/cta/orange-right-bottom.png" alt="" />
  <img className="absolute top-0 start-0" src="https://static.shuffle.dev/components/preview/f47e4207-4c02-4c08-a829-05700d61a77b/assets/public/saturn-assets/images/faq/light-blue-left.png" alt="" />
   
      <div className="card mx-auto w-full max-w-screen-xl p-6 text-center bg-black text-white">
        {title && (
          <h2 className="leading-tighter font-heading mb-4 text-4xl font-bold tracking-tighter md:text-4xl text-white">{title}</h2>
        )}
        {subtitle && <p className="text-xl text-white">{subtitle}</p>}
        {text && href && (
          <CTA
            callToAction={callToAction as CallToActionType}
            containerClass="mt-6 sm:mx-auto sm:w-fit"
            linkClass="btn btn-primary"
          />
        )}
      </div>
    </WidgetWrapper>
  );
};

export default CallToAction;
