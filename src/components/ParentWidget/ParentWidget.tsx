import React from 'react';
import ScoreLoaded from '../ScoreLoaded/ScoreLoaded';
import PendingState from '../PendingState/PendingState';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import useScoreBreakdown from '../../hooks/useScoreBreakdown';
import moment from 'moment';

const ParentWidget = ({ userAddress,visibility, mode }: { userAddress: string , visibility:boolean, mode:boolean}) => {

  const [showSecondComponent, setShowSecondComponent] = useState(false);
  const [enableQuery, setEnableQuery] = useState<boolean>(false);
  const { dataScoreBreakDown, statusScoreBreakDown } = useScoreBreakdown( userAddress, enableQuery);
  const [message, setMessage] = useState<string>("")

  const formattedDate = moment(dataScoreBreakDown?.data?.lastUpdated ?? "").fromNow();
 
  const validateDomain = (value: string) => {
    if (/[a-z0-9-]+\.(?:eth)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (/[a-z0-9-]+\.(?:crypto)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (/[a-z0-9-]+\.(?:nft)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (/[a-z0-9-]+\.(?:wallet)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (/[a-z0-9-]+\.(?:zil)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (
      /[a-z0-9-]+\.(?:blockchain)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (/[a-z0-9-]+\.(?:dao)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (/[a-z0-9-]+\.(?:888)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else if (/[a-z0-9-]+\.(?:x)(?:\.[a-z]{2,3})?/.test(value) === true) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    const addressOrDomain =  userAddress.trim();
    if (validateDomain(addressOrDomain) || ethers.isAddress(addressOrDomain)) {
      setEnableQuery(true)
    }
    else {
      setEnableQuery(false)
    }
  }, [ userAddress]);

  useEffect(() => handleCheckScoreHookUpdates()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    , [statusScoreBreakDown])


  const handleCheckScoreHookUpdates = () => {
    if (!validateDomain( userAddress.trim()) && !ethers.isAddress( userAddress.trim())) {
      setShowSecondComponent(false);
      setMessage("invalid input")
    }
    if (validateDomain( userAddress.trim()) || ethers.isAddress( userAddress.trim())) {
      if (statusScoreBreakDown === "loading") {
        setShowSecondComponent(false);
        setMessage("The Score is being updated for this wallet..")
        return;
      }

      if (statusScoreBreakDown === "success" && dataScoreBreakDown?.success) {
        setShowSecondComponent(true);
      }
      return;
    }
    else if ((statusScoreBreakDown === "success" || statusScoreBreakDown === "error") && !dataScoreBreakDown?.success) {
      setShowSecondComponent(false);
      setMessage("Score does not exist for the given address")
      return;
    }
    else {
      setShowSecondComponent(false);
      setMessage("There was an error could not fetch score")
    }
    return;
  }

  return (
    <div>
      {visibility && (showSecondComponent ? 
      <ScoreLoaded reputeXScore={Math.trunc(dataScoreBreakDown?.data?.reputeXScore ?? 550)} 
      userAddress={userAddress} 
      lastUpdated={`Last updated ${formattedDate}`}  mode={mode} /> 
      : 
      <PendingState bodyMessage={message} />
)}

{/* <PendingState bodyMessage={message} mode={mode}/> */}
 
    </div>

  )
}

export default ParentWidget