'use client';

import { useRouter } from "next/navigation";

const Home = () => {

  const router = useRouter();

  return (
    <div>
      <h1>Home</h1>
      <p data-testid="desc" >This is my description</p>

      <button
      onClick={()=>{
        router.push('todo');
      }}
      >
        Navigate to Todo Page
      </button>
    </div>
  )
}

export default Home
