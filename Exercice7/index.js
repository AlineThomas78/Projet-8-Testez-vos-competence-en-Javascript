function convertToBinary() {
    const decimalInput = document.getElementById('decimalInput').value;

    // vérifie si le champ est vide ou non un nombre
    if (decimalInput === '' || isNaN(decimalInput)) {
        document.getElementById('binaryResult').textContent = '';
        return;
    }

    // convertir le nombre décimal en binaire
    let decimal = parseInt(decimalInput); // Converti la chaîne de caractères en nombre entier
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary; // Ajoute le reste de la division au début de la chaîne binaire
        decimal = Math.floor(decimal / 2); // Mets à jour la valeur de décimal
    }

    // affiche le résultat de la conversion binaire
    document.getElementById('binaryResult').textContent = 'Le nombre binaire correspondant est : ' + binary;
}