import scoreBreakdown, { ScoreBreakdown } from "../api/scoreBreakdown";
import { useEffect, useState } from "react";

const useScoreBreakdown = (
	address: string,
	enableFlag: boolean,
	accessKey: string,
	apiSecret: string
): {
	dataScoreBreakDown?: ScoreBreakdown;
	statusScoreBreakDown: "error" | "success" | "loading";
} => {
	const [dataScoreBreakDown, setDataScoreBreakDown] = useState<ScoreBreakdown>();
	const [statusScoreBreakDown, setStatusScoreBreakDown] = useState<
		"error" | "success" | "loading"
	>("loading");
	useEffect(() => {
		scoreBreakdown(address, accessKey, apiSecret)
			.then((resp) => {
				setDataScoreBreakDown(resp);
				setStatusScoreBreakDown("success");
			})
			.catch((_) => {
				setStatusScoreBreakDown("error");
			});
	}, [address, enableFlag]);

	return { dataScoreBreakDown, statusScoreBreakDown };
};

export default useScoreBreakdown;
