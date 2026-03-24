import { FC } from 'react';
import { Metadata } from 'next';
import './globals.css';
import Header from '../components/header/Header';
import ApolloWrapper from '@/components/ApolloWrapper';

export const metaData: Metadata = {
  title: 'Furniro',
  description: 'Interior Furniture Ecommerce Site',
};

const RootLayout: FC<LayoutProps<'/'>> = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <ApolloWrapper>
          <div id='modal' />
          <Header />
          {children}
        </ApolloWrapper>
      </body>
    </html>
  );
};

export default RootLayout;