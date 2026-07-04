import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

type Props = {
  children: React.ReactNode;
};

export default function AppShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#0B0D10]">
      <Sidebar />

      <div className="ml-[292px]">
        <Navbar />

        <main className="px-10 py-8">
          <div className="mx-auto max-w-[1450px]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}