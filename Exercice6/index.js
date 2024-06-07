// fonction pour ajouter le texte au champ d'affichage
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// fonction pour effacer 
function clearDisplay() {
    document.getElementById('display').value = '';
}

// fonction pour calculer le résultat de l'opération
function calculateResult() {
    try {

        
        // Évalue l'expression mathématique dans le champ d'affichage
        const result = eval(document.getElementById('display').value);

        if(result === Infinity) {
            throw new Error('Division by zero is not allowed')
        }
        
        // Afficher le résultat dans le champ d'affichage
        document.getElementById('display').value = result;
    } catch (error) {
        // En cas d'erreur, afficher un message d'erreur dans le champ d'affichage
        document.getElementById('display').value = error.message ;
    }
}