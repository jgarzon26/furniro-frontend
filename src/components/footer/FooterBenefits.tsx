import { CustomerSupport, Guarantee, Shipping, Trophy } from '@/assets/icons';
import { BenefitListTile } from '.';

const FooterBenefits = () => {
  return (
    <footer className="flex flex-row justify-center items-center gap-30 bg-footer-benefit w-full h-50">
      <BenefitListTile icon={Trophy} title="High Quality" subtitle="crafted from top materials" />
      <BenefitListTile icon={Guarantee} title="Warranty Protection" subtitle="Over 2 years" />
      <BenefitListTile icon={Shipping} title="Free Shipping" subtitle="Order over 150 $"/>
      <BenefitListTile icon={CustomerSupport} title="24 / 7 Support" subtitle="Dedicated Support" />
    </footer>
  );
}

export default FooterBenefits;