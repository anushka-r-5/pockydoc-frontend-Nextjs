import Sidebar from "./components/Sidebar";
import "./globals.css";

export const metadata = {
  title: "PockyDoc Admin",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex">
        
        <div className="flex-1 p-4 bg-gray-100 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}