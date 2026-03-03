import Image from 'next/image';
import Intro from '@/assets/images/shop-intro.png';
import { ArrowRight } from '../common/icons';

const ShopIntroSection = () => {
  return (
    <section className='h-100 relative'>
      <Image src={Intro} alt='Intro' className='absolute h-full object-cover' />
      <div className='absolute h-full w-full z-10 bg-white/50 backdrop-blur-xs' />
      <div className='absolute z-20 top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center'>
        <h2 className='text-[48px]'>Shop</h2>
        <div className='flex flex-row items-center gap-2'>
          <p className='font-medium'>Home</p>
          <span className='h-[20] w-[20]'>
            <ArrowRight />
          </span>
          <p className='font-extralight'>Shop</p>
        </div>
      </div>
    </section>
  );
}

export default ShopIntroSection;