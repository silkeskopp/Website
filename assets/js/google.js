(function() {
  // Create the async script tag for gtag
  var gtagScript = document.createElement("script");
  gtagScript.src = "https://www.googletagmanager.com/gtag/js?id=G-71GVZE7JW3";
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  window.gtag = gtag; // expose gtag globally

  gtag("js", new Date());
  gtag("config", "G-71GVZE7JW3");
})();
