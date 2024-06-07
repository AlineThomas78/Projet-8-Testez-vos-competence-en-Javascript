function pairNumbers(min, max) {
  let result = "";

  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      // ajoute le nombre pair à la chaîne de caractères, suivi d'une virgule
      result += i + ",";
    }
  }

  // retire la dernière virgule de la chaîne de caractères
  if (result.length > 0) {
    result = result.slice(0, -1);
  }
  return result;
}

console.log(pairNumbers(1, 10)); // affichera "2,4,6,8,10"
export default pairNumbers