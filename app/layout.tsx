export const metadata = {
  title: "Warp drive car browser",
  description: "A car browser built with Next and Bootstrap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="en">{children}</html>;
}
