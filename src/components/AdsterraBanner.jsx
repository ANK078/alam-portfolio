import { useEffect } from "react";

export default function AdsterraBanner() {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.innerHTML = `
      atOptions = {
        'key' : '4ce554182ff3354340151dd57f6e60ca',
        'format' : 'iframe',
        'height' : 100,
        'width' : 50,
        'params' : {}
      };
    `;


    const script2 = document.createElement("script");
    script2.src =
      "https://www.highperformanceformat.com/4ce554182ff3354340151dd57f6e60ca/invoke.js";
    script2.async = true;

    document.getElementById("adsterra-container").appendChild(script1);
    document.getElementById("adsterra-container").appendChild(script2);
  }, []);

  return <div id="adsterra-container"></div>;
}
