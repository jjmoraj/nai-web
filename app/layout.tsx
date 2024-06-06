import '@/app/global.css';
import { Nunito } from 'next/font/google';


const nunito = Nunito({
  weight: ['200','300','400','500','600','700','800','900','1000'],
  subsets: ['latin'],
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${nunito.className} antialiased h-full text-neutral-200 bg-gray-700 no-scrollbar`}>{children}
        <footer className={`py-6 flex justify-center inter-center antialiased bg-gray-800 text-gray-50`}>
          Made with love by Nai Team
        </footer>
      </body>

    </html>
  );
}
