import { FC } from 'react';
import { Metadata } from 'next';
import './globals.css';
import Header from '../components/header/Header';

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
      </body>
    </html>
  );
};

export default RootLayout;