import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./styles/shell.css";
import "./styles/views.css";
import "./styles/practice.css";
import "./styles/tools.css";
import "./styles/subjects.css";
import "./styles/responsive.css";

export const metadata: Metadata = {
  title: "FBarros Enfermagem",
  description: "Aplicativo funcional de estudos de enfermagem com aulas, repetição espaçada, quizzes, ferramentas e progresso.",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.svg" },
  openGraph: { title: "FBarros Enfermagem", description: "Estude, pratique, revise e acompanhe seu progresso", images: ["/art-dashboard.svg"] },
  twitter: { card: "summary_large_image", title: "FBarros Enfermagem", description: "Estude, pratique, revise e acompanhe seu progresso", images: ["/art-dashboard.svg"] },
};

export const viewport: Viewport = { themeColor: "#0f9f83", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
