import axios from "axios";

interface ScoreBreakdown {
    success: boolean;
    error: string;
    message: string;
    data: null | {
        address: string;
        reputeXScore: number;
        customScore: number;
        blacklisted: boolean;
        lastUpdated: string;
        scoreBreakdown: {
          ethereum: {
            finalScore: number;
            ethereumContribution: any | null;
            defiCategoryScore: {
              finalScore: number;
              aaveScore: number;
              compoundScore: number;
              tvlScore: number;
              curveScore: number;
              enzymeScore: number;
              eulerScore: number;
              lidoScore: number;
              uniswapScore: number;
              yearnScore: number;
            };
            credibilityCategoryScore: {
              finalScore: number;
              appsInteractionScore: number;
              ensScore: number;
              txHistoryScore: number;
              udScore: number;
            };
            metaCategoryScore: {
              finalScore: number;
              metaverseScore: number;
              nftScore: number;
              nftTradingScore: number;
            };
            socialImpactScore: {
              finalScore: number;
            };
          };
          polygon: {
            finalScore: number;
            polygonContribution: any | null;
            defiCategoryScore: {
              finalScore: number;
              aaveScore: number;
              tvlScore: number;
            };
            credibilityCategoryScore: {
              finalScore: number;
              appsInteractionScore: number;
              txHistoryScore: number;
              udScore: number;
            };
            metaCategoryScore: {
              finalScore: number;
              nftScore: number;
            };
            socialImpactScore: {
              finalScore: number;
            };
          };
          bsc: {
            finalScore: number;
            binanceContribution: any | null;
            defiCategoryScore: {
              finalScore: number;
              venusScore: number;
              tvlScore: number;
            };
            credibilityCategoryScore: {
              finalScore: number;
              appsInteractionScore: number;
              txHistoryScore: number;
            };
            metaCategoryScore: {
              finalScore: number;
              nftScore: number;
            };
            socialImpactScore: {
              finalScore: number;
            };
          };
          avalanche: {
            finalScore: number;
            avalancheContribution: any | null;
            defiCategoryScore: {
              finalScore: number;
              aaveScore: number;
              tvlScore: number;
            };
            credibilityCategoryScore: {
              finalScore: number;
              appsInteractionScore: number;
              txHistoryScore: number;
            };
            metaCategoryScore: {
              finalScore: number;
              nftScore: number;
            };
            socialImpactScore: {
              finalScore: number;
            };
          };
        };
        syncBlockNumber: {
          ethereum: number;
          polygon: number;
          bsc: number;
          avalanche: number;
        };
        message: string;
        error: string;
     }
}
  
export const BASE_URL = "https://api.reputex.io/v1"

const scoreBreakdown = async (address: string): Promise<ScoreBreakdown> => {
    const response = await axios.get(`${BASE_URL}/protected-score/breakdown/${address}`);
    const { data } = response
    return data
}

export default scoreBreakdown