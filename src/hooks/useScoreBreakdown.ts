import { useQuery } from "@tanstack/react-query";
import scoreBreakdown, { ScoreBreakdown } from "../api/scoreBreakdown";

const useScoreBreakdown = (
	address: string,
	enableFlag: boolean,
	accessKey: string,
	apiSecret: string
): {
	dataScoreBreakDown: ScoreBreakdown | undefined;
	statusScoreBreakDown: "error" | "success" | "loading";
} => {
	const { data, status } = useQuery({
		queryKey: ["scoreBreakdown", address],
		queryFn: () => scoreBreakdown(address, accessKey, apiSecret),
		retry: false,
		enabled: enableFlag,
		staleTime: Infinity,
	});

	return { dataScoreBreakDown: data, statusScoreBreakDown: status };
};

export default useScoreBreakdown;
