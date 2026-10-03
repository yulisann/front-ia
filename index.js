
const inputText = document.getElementById('input-text');

const btnSend = document.getElementById('btn-send');

btnSend.addEventListener('click', () => {
    const message = inputText.value;
    getChat(message);
    inputText.value = '';
});



function getChat(message) {
    const chat = document.getElementById('content-chat');
    chat.innerHTML +=`<p>${message}</p>`;
    fetch('http://localhost:3000/api/v1/chat', {
        method:'POST',
        body: JSON.stringify({
            message
        })
    })
    .then(response => response.json())
    .then(data => {
        chat.innerHTML += `<p>${message}</p>`
    })

}