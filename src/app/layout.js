import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'BKK & Associates | Chartered Accountants',
  description: 'Providing premium auditing, taxation, and financial advisory services in Hyderabad, Bangalore, and Visakhapatnam.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-slate-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}