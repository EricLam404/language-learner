import Header from "./_components/Header";

export const dynamic = "force-dynamic"

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Header />
        <div className="container my-6">{children}</div>
      </>
    );
  }
  