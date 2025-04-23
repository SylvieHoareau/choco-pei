// pages/test-a.tsx
import Link from 'next/link'; // Utilisez Link cette fois pour tester sa fonctionnalité
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TestA = () => {
  return (
    <div>
        <Navbar />
        <h1>Page Test A</h1>
        <Link href="/test-b">Aller à la Page Test B</Link>
        <Footer />
    </div>
  );
};

export default TestA;