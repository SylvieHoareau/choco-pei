// pages/test-b.tsx
import Link from 'next/link'; // Utilisez Link ici aussi

const TestB = () => {
  return (
    <div>
      <h1>Page Test B</h1>
      <Link href="/test-a">Retour à la Page Test A</Link>
    </div>
  );
};

export default TestB;