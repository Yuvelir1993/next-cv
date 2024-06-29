import TechStack from '@/app/ui/tech-stack';
import { lusitana } from '@/app/ui/fonts';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Header with background and avatar
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* header content */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <TechStack />
        <TechStack />
      </div>
    </main>
  );
}
