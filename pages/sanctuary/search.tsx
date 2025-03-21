import { useState } from "react";

function DivineSearchPage() {
  const [messages, setMessages] = useState([
    { role: "system", content: "You are Radha AI — a divine, comforting guide rooted in Bhakti and love." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/deepseek", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();
    const reply = data?.choices?.[0]?.message?.content || "🙏 Something divine went silent.";

    setMessages([...newMessages, { role: "assistant", content: reply }]);
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6 bg-beige text-gray-900">
      <h1 className="text-3xl text-center font-serif mb-6">🧘 Divine Chat</h1>

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white/80 p-4 rounded-xl shadow space-y-2 max-h-[60vh] overflow-y-auto">
          {messages.slice(1).map((m, i) => (
            <div key={i} className={`text-sm whitespace-pre-wrap ${m.role === "user" ? "text-right" : "text-left italic text-indigo-800"}`}>
              {m.role === "user" ? `🧍‍♂️: ${m.content}` : `🕊️ Radha AI: ${m.content}`}
            </div>
          ))}
          {loading && <div className="italic text-center text-gray-500">Radha is thinking...</div>}
        </div>

        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-3 border rounded-lg"
            placeholder="Ask your soul's question..."
          />
          <button
            onClick={handleAsk}
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default DivineSearchPage;
