import "@/styles/globals.css";
import { cn } from "@/utils/cn";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";


const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500", "600", "700", "800", "900"],
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return(
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
      <main className={cn(inter.className,"flex min-h-screen flex-col items-center justify-center py-10 lg:py gap-10 min-w-full")}>

       <Component {...pageProps} />
      </main>
    </NextUIProvider>
    </QueryClientProvider>
    
  );
}
