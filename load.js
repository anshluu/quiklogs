const load = (txt, seconds) => {
    const P = [
      "⠋",
      "⠙",
      "⠹",
      "⠸",
      "⠼",
      "⠴",
      "⠦",
      "⠧",
      "⠇",
      "⠏"
    ];
    let x = 0;
    const loader = setInterval(() => {
      process.stdout.write(`\r${P[x++]}` + "  " + txt);
      x %= P.length;
    }, 100);
  
    setTimeout(() => {
      clearInterval(loader);
    }, seconds);
    }
    
    exports.load = load;