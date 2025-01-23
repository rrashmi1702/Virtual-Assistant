let btn = document.querySelector('#btn')
let content = document.querySelector('#content')

function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)

}
// btn.addEventListener('click', () => {
//     speak(content.textContent);
// });

function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Hello,Good morning! Click the button to talk to me")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Hello,Good Afternoon! Click the button to talk to me")
    }
    else {
        speak("Hello,Good evening! Click the button to talk to me")

    }
} 
window.addEventListener('DOMContentLoaded',()=>{
    wishMe()
    console.log("hy")
});

let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript=  event.results[currentIndex][0].transcript
    
    console.log(event)
}
btn.addEventListener("click", () => {
    recognition.start()
})
