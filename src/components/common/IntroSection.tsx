'use server';

import Image from 'next/image';
import Intro from '@/assets/images/shop-intro.png';
import { ArrowRight } from '../common/icons';
import { headers } from 'next/headers';

const IntroSection = async () => {
  const headersList = await headers();
  const currentPath = headersList.get('x-current-path');
  const pathname = currentPath?.substring(currentPath?.lastIndexOf('/')).slice(1);

  return (
    <section className='h-100 relative'>
      <Image src={Intro} alt='Intro' className='absolute h-full object-cover' />
      <div className='absolute h-full w-full z-10 bg-white/50 backdrop-blur-xs' />
      <div className='absolute z-20 top-1/2 left-1/2 -translate-1/2 flex flex-col items-center justify-center'>
        <h2 className='text-[48px] capitalize'>{pathname}</h2>
        <div className='flex flex-row items-center gap-2'>
          <p className='font-medium'>Home</p>
          <span className='h-[20] w-[20]'>
            <ArrowRight />
          </span>
          <p className='font-extralight capitalize'>{pathname}</p>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;