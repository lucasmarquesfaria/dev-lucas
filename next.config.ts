import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Adicione outras configurações necessárias para a produção, se houver
};

export default nextConfig;
