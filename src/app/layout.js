import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import { Quicksand } from 'next/font/google';

import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';
// import { AdblockContextProvider } from '@/context/AdblockContext';
// import AdblockProvider from '@/providers/AdblockProvider';

const inter = Quicksand({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'Home Page | Radandev',
  description:
    'Struggling with online privacy? SquareX offers a secure browsing environment to shield you from online threats. Learn more about how it protects your data!',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {/* <AdblockContextProvider>
          <AdblockProvider> */}
        <ThemeContextProvider>
          <ThemeProvider>
            <div className='container'>
              <Navbar className='navbar' />
              <div className='wrapper'>
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
        {/* </AdblockProvider>
        </AdblockContextProvider> */}
      </body>
      <GoogleAnalytics />
    </html>
  );
}
