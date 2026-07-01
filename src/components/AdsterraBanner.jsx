import { useEffect } from "react";

export default function AdsterraBanner() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key' : '00115fe18ae78feaaacf521d4d8b5ab8',
        'format' : 'iframe',
        'height' : 80,
        'width' : 40,
        'params' : {}
      };
    `;


    const script2 = document.createElement("script");
    script2.src =
      "https://www.highperformanceformat.com/00115fe18ae78feaaacf521d4d8b5ab8/invoke.js";
    script2.async = true;

    document.getElementById("adsterra-container").appendChild(script1);
    document.getElementById("adsterra-container").appendChild(script2);
  }, []);

  return <div id="adsterra-container"></div>;
}
