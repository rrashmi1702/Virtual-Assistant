let btn = document.querySelector('#btn')
let content = document.querySelector('#content')

function speak(text){
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

function wishMe(){
    let day = new Date()
    let hours = day.getHours()
    if(hours>=0 && hours<12){
        speak("Hello,Good morning! Click the button to talk to me")
    }
    else if(hours>=12 && hours<16){
        speak("Hello,Good Afternoon! Click the button to talk to me")
    }
    else{
        speak("Hello,Good evening! Click the button to talk to me")
        
    }
} 
window.addEventListener('load',()=>{
    wishMe()
    console.log("hy")
});
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
let recognition = new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex = event.resultIndex
    let transcript=  event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript)
}
btn.addEventListener("click",()=>{
    recognition.start();
})

function takeCommand(msg){
    msg=msg.toLowerCase();
    if(msg.includes("hello anya") || (msg.includes("hey anya"))){
        console.log("yo")
        speak("hello how may I help you?")
    }
    else if(msg.includes("who are you") || (msg.includes("who created you"))){
        speak("I'm virtual assistant, Created by Rashmi Rautela")
    }
    else if(msg.includes("open youtube") ){
        window.open("https://www.youtube.com/")
    }
}