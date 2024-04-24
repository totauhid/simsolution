"use client";

import { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

const queryClient = new QueryClient();

interface Props {
  children: React.ReactNode;
}

const ReactQueryProvider: NextPage<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  );
};

export default ReactQueryProvider;
