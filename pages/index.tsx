import { useState } from "react";
import { Sun, Moon, EyeOff, Bot } from "lucide-react";
import { motion } from "framer-motion";

function HomePage() {
  const [theme, setTheme] = useState("light");
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Welcome, seeker of truth. How may I guide you today?" }
  ]);
  const [input, setInput] = useState("");

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("monk");
    else setTheme("light");
  };

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);
    setInput("");

    const response = await fetch("/api/deepseek", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: [...messages, userMessage] })
    });

    const data = await response.json();
    if (data && data.reply) {
      setMessages([...messages, userMessage, { role: "assistant", content: data.reply }]);
    }
  };

  return (
    <div className={`min-h-screen p-6 transition-all ${
      theme === "light"
        ? "bg-beige text-gray-900"
        : theme === "dark"
        ? "bg-indigo-950 text-white"
        : "bg-white text-black grayscale"
    }`}>
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-serif">Kushal’s Divine Healing Sanctuary</h1>
        <button onClick={toggleTheme} className="p-2 rounded">
          {theme === "light" && <Sun className="h-5 w-5" />}
          {theme === "dark" && <Moon className="h-5 w-5" />}
          {theme === "monk" && <EyeOff className="h-5 w-5" />}
        </button>
      </header>

      <section className="mt-10 space-y-6">
        <p className="text-lg italic">
          "You are not alone. Radha walks beside you."
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          {...({} as any)}
          className="rounded-xl bg-white/10 p-4 shadow-md backdrop-blur"
        >
          <h2 className="text-xl font-semibold mb-2">Today’s Whisper</h2>
          <p className="text-base text-indigo-100">
            Breathe. Surrender. You are safe in divine presence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          {...({} as any)}
          className="rounded-xl bg-pink-100/10 p-4 shadow-md backdrop-blur"
        >
          <h2 className="text-xl font-semibold mb-2">Daily Gita Verse</h2>
          <p className="text-base">
            "Whenever dharma declines and the purpose of life is forgotten, I manifest myself on Earth." – Gita 4.7
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          {...({} as any)}
          className="mt-10 text-center"
        >
          <button className="bg-pink-500 text-white hover:bg-pink-600 px-4 py-2 rounded">
            Enter the Sanctuary
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          {...({} as any)}
          className="mt-14 p-4 border rounded-xl bg-white/10 shadow-xl"
        >
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Bot className="w-5 h-5" /> Divine Chat
          </h2>

          <div className="max-h-64 overflow-y-auto my-4 space-y-2">
            {messages.map((msg, i) => (
              <p key={i} className={`text-sm ${msg.role === "assistant" ? "text-green-300" : "text-pink-200"}`}>
                <strong>{msg.role === "assistant" ? "Radha AI:" : "You:"}</strong> {msg.content}
              </p>
            ))}
          </div>

          <div className="flex gap-2 mt-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask your soul's question..."
              className="flex-grow p-2 rounded-lg text-black"
            />
            <button
              onClick={sendMessage}
              className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
            >
              Send
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default HomePage;