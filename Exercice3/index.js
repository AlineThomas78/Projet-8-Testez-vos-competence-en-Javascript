function calculateAverage(numbers) {
    if (!numbers || numbers.length === 0) {
        return "No numbers to calculate average";
    }

    // calcule la somme des nombres dans le tableau
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }

    // calcule la moyenne en divisant la somme par le nombre d'éléments dans le tableau
    const average = sum / numbers.length;

    return average;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage ;