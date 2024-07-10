'use client'
import { useState } from 'react';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    
    const sendMessage = async () => {
        const userInput = document.getElementById("user-input").value;
        const messageElement = { sender: "Tú", text: userInput };
        setMessages([...messages, messageElement]);
        
        const response = await fetch('/api/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        });
        
        const data = await response.json();
        const aiResponseElement = { sender: "IA", text: data.response };
        setMessages([...messages, aiResponseElement]);
    };
    
    return (
        <div>
      <h1>Chat con IA</h1>
      <div id="chat-box">
        {messages.map((message, index) => (
            <p key={index}><strong>{message.sender}:</strong> {message.text}</p>
            ))}
      </div>
      <input type="text" id="user-input" />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
};

export default Chat;




// 'use client'
// import Script from "next/script";
// export default function Chat() {
//     return (
//     <>
//     <title>Chat con IA</title>
//     <body>
//     <h1>Chat con IA</h1>
//     <div id="chat-box">
//     </div>
//     <input type="text" id="user-input"/>
//     <button onclick="sendMessage()">Enviar</button>

//     <Script>
//         function sendMessage() {
//             var userInput = document.getElementById("user-input").value;
//             var messageElement = document.createElement("p");
//             messageElement.textContent = "Tú: " + userInput;
//             document.getElementById("chat-box").appendChild(messageElement);

//             fetch('/ask', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ message: userInput })
//             })
//             .then(response => response.json())
//             .then(data => {
//                 var aiResponseElement = document.createElement("p");
//                 aiResponseElement.textContent = "IA: " + data.response;
//                 document.getElementById("chat-box").appendChild(aiResponseElement);
//             });
//         }
//     </Script>
// </body>
//     </>
//     );
//   }