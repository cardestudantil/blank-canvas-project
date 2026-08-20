import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  ssr: false,
  component: () => (
    <div className="min-h-screen bg-background">
      Configurar uma conexão real com Supabase e testar o acesso ao banco com uma consulta simples.
    </div>
  ),
});
