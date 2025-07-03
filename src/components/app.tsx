import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16 sm:pt-18 md:pt-20">
        {children}
      </main>

      <Footer/>
    </div>
  );
}