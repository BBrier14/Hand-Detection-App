navigator.getUserMedia =
	navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;

//Select Everything In HTML
const video = document.querySelector('#video');
const audio = document.querySelector('audio');
const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
let model;

handTrack.startVideo(video).then((status) => {
	if (status) {
		navigator.getUserMedia(
			{ video: {} },
			(stream) => {
				video.srcObject = steam;
			},
			(err) => console.log(err)
		);
	}
});

function runDetection() {
	model.detect(video).then((predictions) => {});
}

handTrack.load().then((lmodel) => {
	model = lmodel;
});
