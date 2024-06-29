import TechStack from '@/app/ui/skills';
import Header from '@/app/ui/header';
import TextSection from '@/app/ui/headerTextSection';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
        <Header />
      </div>
      <TextSection />
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <TechStack type="dev" />
        <TechStack type="ops" />
      </div>
    </main>
  );
}
