function submitQuiz() {
	console.log('submitted');
	function answerScore (qName) {
		var radiosNo = document.getElementsByName(qName);
		for (var i = 0, length = radiosNo.length; i < length; i++) {
			   if (radiosNo[i].checked) {
					var answerValue = Number(radiosNo[i].value);
			}
		}
		if (isNaN(answerValue)) {
			answerValue = 0;
		}
		return answerValue;
	}
	var puntaje = (answerScore('p1') + answerScore('p2') + answerScore('p3') + answerScore('p4')+ answerScore('p5'));
	console.log("puntaje: " + puntaje); // it works!
	var questionCountArray = document.getElementsByClassName('question');
	var totalPreguntas = 5;
	var mostrarPuntaje = "Preguntas Correctas: " + puntaje +"/" + totalPreguntas;
	document.getElementById('resultado').innerHTML = mostrarPuntaje;
}
$(document).ready(function() { $('#submitButton').click(function() {
	$(this).addClass('hide');
});});