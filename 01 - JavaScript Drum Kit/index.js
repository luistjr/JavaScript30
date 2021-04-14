window.addEventListener("keydown", (e) => {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(audio)
});