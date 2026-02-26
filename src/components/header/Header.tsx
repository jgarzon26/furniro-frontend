import Logo from '@/assets/images/furniro-logo.png';
import Image from 'next/image';
import { Spacer } from '../common';
import { Nav, Actions } from '.';

const Header = () => {
  return (
    <header className='flex flex-row items-center *:flex *:flex-row *:items-center h-25 px-20 py-10'>
      <div className='gap-1'>
        <div>
          <Image src={Logo} alt='Furniro Logo' />
        </div>
        <h3 className='font-montserrat text-[34px]'>Furniro</h3>
      </div>
      <Spacer flex={2} />
      <Nav className='flex-2'/>
      <Spacer flex={2}/>
      <Actions className='flex-1'/>
    </header>
  );
}

export default Header;