
/// <reference types="vite/client" />

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
    dataLayer: any[];
  }
}

interface ImportMetaEnv {
  readonly VITE_ADMIN_USERNAME: string;
  readonly VITE_ADMIN_PASSWORD: string;
  readonly NEXT_PUBLIC_N8N_WEBHOOK_URL: string;
  readonly NEXT_PUBLIC_APP_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
