import './globals.css';
import { cookies } from 'next/headers';
import ClientLayout from './client-layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  console.log(token);

  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
