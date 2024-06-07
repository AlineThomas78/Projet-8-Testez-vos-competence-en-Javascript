
const myButton = document.getElementById('myButton')
const paragraphe = document.getElementById('paragraphe')

myButton.addEventListener("click", function() {
    paragraphe.textContent = "Bonjour, vous avez cliqué sur le bouton !"
});