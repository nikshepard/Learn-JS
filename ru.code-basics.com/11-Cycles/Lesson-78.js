// lesson-78 Return from Cycles


const hasChar = (str, char) => {
    let i = 0;
    while (i < str.length) {
      if (str[i] === char) {
        return true;
      }
  
      i += 1;
    }
  
    return false;
  };
