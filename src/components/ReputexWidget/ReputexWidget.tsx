import React from "react";
import ParentWidget from "../ParentWidget/ParentWidget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReputeXWidget = ({address,visibility,mode,}: {address: string;visibility: boolean;mode: boolean;}) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ParentWidget userAddress={address} visibility={visibility} mode={mode} />
    </QueryClientProvider>
  );
};

export default ReputeXWidget;
