const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// function to select media stream, pass to video element and display
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // handle error
  }
}

button.addEventListener("click", async () => {
  // disable button
  button.disabled = true;
  // start pip
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
});

selectMediaStream();
