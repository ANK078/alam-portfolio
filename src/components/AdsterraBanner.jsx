import { useEffect } from "react";

export default function AdsterraBanner() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key' : 'd50df7a90a0620c3884064aa97616a48',
        'format' : 'iframe',
        'height' : 100,
        'width' : 50,
        'params' : {}
      };
    `;


    const script2 = document.createElement("script");
    script2.src =
      "https://www.highperformanceformat.com/d50df7a90a0620c3884064aa97616a48/invoke.js";
    script2.async = true;

    document.getElementById("adsterra-container").appendChild(script1);
    document.getElementById("adsterra-container").appendChild(script2);
  }, []);

  return <div id="adsterra-container"></div>;
}
