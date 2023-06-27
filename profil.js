const name = "Ihab Benkrouidem";
const status = "Etudiant en BTS-SIO";
const message = "Je suis convaincu que l'informatique peut contribuer à améliorer le monde dans lequel nous vivons. Je suis particulièrement intéressé par les domaines du développement web et de la sécurité informatique.";

let index = 0;

function type() {
  if (index < name.length) {
    document.getElementById("typing-name").innerHTML += name.charAt(index);
    index++;
    setTimeout(type, 30);
  } else if (index < name.length + status.length) {
    document.getElementById("typing-status").innerHTML += status.charAt(index - name.length);
    index++;
    setTimeout(type, 30);
  } else if (index < name.length + status.length + message.length) {
    document.getElementById("typing-message").innerHTML += message.charAt(index - name.length - status.length);
    index++;
    setTimeout(type, 30);
  }
}

setTimeout(type, 10); // démarrer l'effet typing après une seconde
