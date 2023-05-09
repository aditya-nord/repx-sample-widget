import React from 'react'
import Logo from '../../assets/LogoWidget';
import Line from '../../assets/Line';
import Maximize from '../../assets/Maximize';
const ScoreLoaded = ({ reputeXScore, userAddress, lastUpdated, mode }: { reputeXScore: number, userAddress: string, lastUpdated: string, mode: boolean }) => {

  const styles = {
    grotesk: {
      fontFamily: "Space Grotesk",
      fontStyle: "normal",
    },
    DM: {
      fontFamily: "DM Sans",
      fontStyle: "normal",
    },
  };

  const modeColor = mode ? "bg-[#1C1E29]" : "bg-white";
  const textColor = mode ? "text-white" : "text-black" ;
  // const borderColor = mode ? "border-black" : "border-[#C5C5C5]";
  return (

    <div className="flex justify-center items-center h-screen">
            <div className="rounded-lg bg-gradient-to-r from-[#00FFFF] via-[#8A76FF] to-[#FF00FF] w-[354px] h-[284px]">
            <div
              className={`flex flex-col relative rounded-md w-[350px] h-[280px] px-4 py-3 mx-auto my-0.5 ${modeColor} ${textColor} `}>
        
                            
            {/* score display */}
            <div className="flex w-[180px] h-[55px]  m-5 rounded-[106px] bg-gradient-to-r from-[#00FFFF] via-[#8A76FF] to-[#FF00FF] text-white">
              <Logo className='m-1' width={40} height={40} />
              <p className='text-[28px] py-1 ml-2 font-grotesk' >{reputeXScore}</p>
              <a href="https://reputex.io/" target="_blank" rel="noreferrer">
                <Maximize className='p-2 ml-1 mt-2' />
              </a>

            </div>

            <Line className='w-[170px] ml-4'  />
            {/* address display */}
            <div className='p-4'>
              <p>{`${userAddress.slice(0, 10)}...${userAddress.slice(-4)}`}</p>
              <p className="text-[#9B9797]">{lastUpdated}</p>
            </div>

            {/* explore button */}
            <div className='mt-3 ml-3'>

            {/* TODO: Update the url */}
              <a href={`http://localhost:3000/explorer?address=${userAddress}`}>
                <button
                  type="button"
                  className={`rounded-3xl relative inline-flex items-center justify-center p-0.5 cursor-pointer w-64 h-12 mt-1 ${modeColor} ${textColor} border-2 border-[#9B9797]`} style={styles.grotesk}>
                 
                   Try the explorer
                </button>
              </a>

            </div>
          </div>
        </div>
      </div>

  )
}

export default ScoreLoaded;