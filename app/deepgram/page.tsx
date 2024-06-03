"use client";

import Image from "next/image";
import App from "../../components/App";
import { XIcon } from "../../components/icons/XIcon";
import { LinkedInIcon } from "../../components/icons/LinkedInIcon";
import { FacebookIcon } from "../../components/icons/FacebookIcon";

//import GitHubButton from "react-github-btn";


export default function Page() {


  return (
    <main className="flex flex-col p-4">

      <div className="h-full overflow-hidden bg-black">
      
        <App />
      
      </div>

    </main>
  )
}
