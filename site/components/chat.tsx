'use client';

import { useEffect } from 'react';

export function ChatbotScript() {
  useEffect(() => {
    // Define the OpenWidget global object
    window.__ow = window.__ow || {};
    window.__ow.organizationId = "81d22319-c537-4357-96ea-8c59552106cd";
    window.__ow.template_id = "e3f59f84-dc47-4b1c-9a79-69b61a83831b";
    window.__ow.integration_name = "manual_settings";
    window.__ow.product_name = "chatbot";   

    // Initialize the chatbot script
    const script = document.createElement('script');
    script.innerHTML = `
      (function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}

