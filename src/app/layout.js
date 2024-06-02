import Navbar from '@/components/Navbar/Navbar';
import './globals.css';
import Footer from '@/components/Footer/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import { Quicksand } from 'next/font/google';

import GoogleAnalytics from '@/components/GoogleAnalytics/GoogleAnalytics';
// import { AdblockContextProvider } from '@/context/AdblockContext';
// import AdblockProvider from '@/providers/AdblockProvider';

const inter = Quicksand({ subsets: ['latin'] });

export const metadata = {
  title: 'Home Page | Radandev',
  description:
    'The best dev/tech blog site for developers who wants improve their career.',
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
              <div className='wrapper'>
                <Navbar />
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
