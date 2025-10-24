import Sidebar from "@/components/Sidebar";

export default function AccountLayout({ children }) {
  return (
    <div className="2xl:max-w-7xl md:max-w-6xl mx-auto px-4 py-32 min-h-screen flex">
      <Sidebar />
      <div className="w-full">
        <h1 className="text-2xl font-semibold text-center mb-14 mt-10">
          My Account
        </h1>
        <div>{children}</div>
      </div>
    </div>
  );
}
