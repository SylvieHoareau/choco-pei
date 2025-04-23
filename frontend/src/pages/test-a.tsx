// pages/test-a.tsx
import Link from 'next/link'; // Utilisez Link cette fois pour tester sa fonctionnalité

const TestA = () => {
  return (
    <div>
      <h1>Page Test A</h1>
      <Link href="/test-b">Aller à la Page Test B</Link>
    </div>
  );
};

export default TestA;