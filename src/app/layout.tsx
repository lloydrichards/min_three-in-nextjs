import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <nav className="navbar">
          <ul className="flex flex-row">
            <li className="btn-ghost btn text-xl normal-case">
              <Link href="/">Home</Link>
            </li>
            <li className="btn-ghost btn text-xl normal-case">
              <Link href="/spinning-box">Boxes</Link>
            </li>
            <li className="btn-ghost btn text-xl normal-case">
              <Link href="/camera-control">Camera</Link>
            </li>
            <li className="btn-ghost btn text-xl normal-case">
              <Link href="/map-control">Map</Link>
            </li>
            <li className="btn-ghost btn text-xl normal-case">
              <Link href="/labels">Labels</Link>
            </li>
          </ul>
        </nav>
        <main className=" flex h-full w-full flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  );
}
