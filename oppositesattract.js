const flower1 = Math.floor((Math.random));
const flower2 = Math.floor((Math.random));

lovefunc = (flower1, flower2) => {
  if ((flower1 % 2) === 0 && (flower2 % 2) === 1 || (flower1 % 2) === 1 && (flower2 % 2) === 0) {
    return true;
  } else return false;
}
