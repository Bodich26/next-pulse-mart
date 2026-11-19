import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";
import { Container } from "@/shared";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="min-h-screen bg-custom-bg text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      <Header />
      <main>
        <Container className="space-y-24 py-10">{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
