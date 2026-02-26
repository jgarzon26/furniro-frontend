import { FC } from 'react';
import { Metadata } from 'next';
import './globals.css';
import Header from '../components/header/Header';
import Footer from '@/components/footer/Footer';

export const metaData: Metadata = {
  title: 'Furniro',
  description: 'Interior Furniture Ecommerce Site',
};

const RootLayout: FC<LayoutProps<'/'>> = ({children}) => {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;