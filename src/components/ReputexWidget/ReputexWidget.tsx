import React from "react";
import ParentWidget from "../ParentWidget/ParentWidget";

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
	return (
		<ParentWidget userAddress={userAddress} accessKey={accessKey} apiSecret={apiSecret} visibility={visibility} mode={mode}  />
	);
};

export default ReputeXWidget;
