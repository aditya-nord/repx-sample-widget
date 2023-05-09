import React from 'react';
import ReputexWidget from '../ReputexWidget/ReputexWidget';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query';


function WidgetDisplay() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ReputexWidget userAddress={'0xE2B20608bc14A40532dC1047E9375a9E20E09B9D'} visibility={true} mode={true}/>  
    </QueryClientProvider>
  );
}

export default WidgetDisplay;
