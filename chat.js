document.getElementById("sendBtn").addEventListener("click", async () => {
    const userInput = document.getElementById("userInput").value;
    if (!userInput) return;
  
    document.getElementById("response").innerText = "Thinking...";
  
    const res = await fetch("/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: userInput })
    });
  
    const data = await res.json();
    document.getElementById("response").innerText = data.reply;
  });
  