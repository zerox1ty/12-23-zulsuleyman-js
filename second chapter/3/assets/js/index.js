// Custom require function for starting app without server and import packages
function require(modulePath) {
    if (typeof require.cache[modulePath] !== 'undefined') {
      return require.cache[modulePath].exports;
    }
    const script = document.createElement('script');
    script.src = modulePath;
    document.head.appendChild(script);
  
    return new Promise((resolve, reject) => {
      script.onload = () => {
        require.cache[modulePath] = { exports: {} };
        resolve(require.cache[modulePath].exports);
      };
      script.onerror = reject;
    });
  }
  
  require.cache = {};
  
  const baseJsPath = './assets/js';
  
  require(`${baseJsPath}/accordion.js`);
  require(`${baseJsPath}/burger.Menu.js`);
  require(`${baseJsPath}/pannel.js`);