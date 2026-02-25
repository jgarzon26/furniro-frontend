import { FC } from 'react';
import { Metadata } from 'next';
import './globals.css';

export const metaData: Metadata = {
  title: 'Furniro',
  description: 'Interior Furniture Ecommerce Site',
};

const RootLayout: FC<LayoutProps<'/'>> = ({children}) => {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;