import React from "react";
import ParentWidget from "../ParentWidget/ParentWidget";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ReputeXWidget = ({
	userAddress,
	accessKey,
	apiSecret,
	visibility,
	mode,
}: {
	userAddress: string;
	accessKey: string;
	apiSecret: string;
	visibility: boolean;
	mode: boolean;
}) => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<ParentWidget userAddress={userAddress} accessKey={accessKey} apiSecret={apiSecret} visibility={visibility} mode={mode}  />
		</QueryClientProvider>
	);
};

export default ReputeXWidget;
