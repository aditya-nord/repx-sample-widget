import { useQuery } from "@tanstack/react-query";
import scoreBreakdown from "../api/scoreBreakdown";

const useScoreBreakdown = (address: string, enableFlag: boolean) => {
  const {data,status} = useQuery({
    queryKey: ["scoreBreakdown", address],
    queryFn: () => scoreBreakdown(address),
    retry: false,
    enabled: enableFlag,
    staleTime: Infinity
  });

  // can add toast here for various statuses

  // data here is full response
  return { dataScoreBreakDown: data , statusScoreBreakDown: status };
};

export default useScoreBreakdown;
