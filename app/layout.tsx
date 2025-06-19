import Name from "./_components/Name";
import Navbar from "./_components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <div className="w-full px-[15%]">
          <Name/>
          <div className="grid grid-cols-[200px_auto] gap-3 pt-[8em]">
            <Navbar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
