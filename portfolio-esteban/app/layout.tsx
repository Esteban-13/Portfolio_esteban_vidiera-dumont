import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Esteban Videira-Dumont | Portfolio",
  description: "Portfolio – Gestion de projet & marketing digital",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        <Header />
        {children}
      </body>
    </html>
  );
}
