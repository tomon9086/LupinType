const textArea = document.getElementById("text-area");
// const typeSound = document.getElementById("type-sound");
const enterSound = document.getElementById("enter-sound");
textArea.onkeydown = function(e) {
	console.log(e);
	if(e.key === "Enter") {
		if(e.shiftKey)enterSound.play();
	} else if(!e.location) {
		const el = document.createElement("audio");
		el.setAttribute("src", "./type.wav");
		el.play();
		// typeSound.play();
	}
}
