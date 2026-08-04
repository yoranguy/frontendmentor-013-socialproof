// import { useState } from 'react'
import './App.css'
import SocialProof, {type SocialProofProps } from './features/socialproof/SocialProof';
import useFetch from './useFetch';

function App() {
  // const [count, setCount] = useState(0)

  const dataURL = "/data/data.json";

  const {data, isLoading, error} : {data: SocialProofProps[], isLoading: boolean, error:null} = useFetch(dataURL);

  const test = true;
  const useData = true;

  return (
    <>
      {useData && console.log("App.tsx/JSON.stringify: " + JSON.stringify(data))}

      {/* {test && <SocialProofStatic /> } */}
      {test && isLoading && <div>Data is loading...</div>}
      {test && error && <div>Error: ${error}</div>}

      <div className="min-h-screen w-screen flex flex-col flex-wrap gap-6 justify-center items-center bg-[hsl(139, 44%, 93%)] bg-scroll bg-no-repeat bg-position-[top_0dvh_left_0dvw,bottom_0dvh_right_0dvh] bg-[image:var(--bg-mobile)] md:bg-[image:var(--bg-desktop)]" style={{'--bg-desktop': `url('/images/bg-pattern-top-desktop.svg'),url('/images/bg-pattern-bottom-desktop.svg')`,'--bg-mobile': `url('/images/bg-pattern-top-mobile.svg'),url('/images/bg-pattern-bottom-mobile.svg')`
      } as React.CSSProperties}>
        {data.map((component: SocialProofProps) => {
          return <SocialProof key={component.id} {...component} /> 
        })}
      </div>
    </>
  )
}

export default App
