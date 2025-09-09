function validerformulaire() {
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim;
    let email = document.getElementById("email").value.trim;
    let telephone = document.getElementById("telephone").value.trim;
    let message = document.getElementById("message").value.trim;

    if(!nom || !prenom || !email || !telephone || !message) {
        alert("Veuillez remplir tous les champs du formulaire.");
        return false;
    } 


    let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!regexEmail.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

    let regexTelephone = /^\d{8}$/;
    if(!regexTelephone.test(telephone)) {
        alert("Veuillez entrer un numéro de téléphone valide à 08 chiffres.");
        return false;
    }
 alert("Merci " + prenom + " " + nom + ", votre message a été envoyé avec succès!");
    return true;
}