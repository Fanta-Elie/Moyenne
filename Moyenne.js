/* je crée 3 variables , une qui me renvoye la moyenne total , la seconde qui me renvoye la moyenne total est la divise par 10 et la dernière qui me renvoye les notes */
var moyenne_total = 0;
var moyenne_general = 0;
var note = 0;
/* Ensuite je fais une boucle for qui prend en compte un prompt pour afficher la zone de texte, et le calcul qui permet de faire une simple moyenne puis de l'afficher avecc un alert */
function moyenne (n) {
	for (var i = 0; i < n; i++) {
		note = parseInt(prompt("Entrez vos notes"));
		moyenne_total = moyenne_total + note;
		moyenne_general = moyenne_total/i;
		
	}
	alert("Votre moyenne est de :" + " "+ moyenne_general);
};
moyenne(10);