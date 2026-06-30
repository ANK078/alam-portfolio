import { useEffect } from "react";

export default function AdsterraBanner() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key' : '482c0b7a846633465d8dd7194f8db0e6',
        'format' : 'iframe',
        'height' : 60,
        'width' : 100,
        'params' : {}
      };
    `;


    const script2 = document.createElement("script");
    script2.src =
      "https://www.highperformanceformat.com/482c0b7a846633465d8dd7194f8db0e6/invoke.js";
    script2.async = true;

    document.getElementById("adsterra-container").appendChild(script1);
    document.getElementById("adsterra-container").appendChild(script2);
  }, []);

  return <div id="adsterra-container"></div>;
}
