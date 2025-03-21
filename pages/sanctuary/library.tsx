import { useState } from "react";
import { motion } from "framer-motion";

interface Post {
  name: string;
  message: string;
}

function TheMandalaPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handlePost = () => {
    if (!message.trim()) return;
    const newPost = { name: name.trim() || "Anonymous", message };
    setPosts([newPost, ...posts]);
    setMessage("");
  };

  return (
    <div className="min-h-screen p-8 bg-beige text-gray-900">
      <h1 className="text-3xl font-serif text-center mb-6">🌸 The Mandala</h1>
      <p className="text-center italic mb-4">
        A sacred space to express, inspire, and connect through soul whispers.
      </p>

      <div className="max-w-2xl mx-auto space-y-4 mb-10">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded-lg"
          placeholder="Your name (optional)"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded-lg"
          rows={4}
          placeholder="Share your reflection, prayer, or story..."
        />
        <button
          onClick={handlePost}
          className="w-full py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700"
        >
          Share to the Mandala
        </button>
      </div>

      <div className="space-y-6 max-w-2xl mx-auto">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + i * 0.1 }}
          >
            {/* ✅ Put className on regular div inside motion.div */}
            <div className="bg-white/70 p-4 rounded-xl shadow">
              <p className="text-sm text-gray-800 whitespace-pre-line">
                {post.message}
              </p>
              <p className="text-xs text-right mt-2 italic">– {post.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TheMandalaPage;
