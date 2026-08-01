export const metadata = {
  title: "فروشگاه دیجیتال — نسخه مدرن",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}

