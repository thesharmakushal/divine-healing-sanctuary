import { useState } from "react";
import { motion } from "framer-motion";

function DivineSearchPage() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) return;
    setResult(`🔍 You searched for: "${query}"\n✨ Here is your divine guidance...`);
    setQuery("");
  };

  return (
    <div className="min-h-screen p-8 bg-beige text-gray-900">
      <h1 className="text-4xl font-serif text-center mb-6">🔍 Divine Search</h1>
      <p className="text-center italic mb-4">Seek your question. Let sacred whispers return.</p>

      <div className="max-w-2xl mx-auto space-y-4 mb-10">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full p-3 border rounded-lg text-lg"
          placeholder="Ask your question here..."
        />
        <button
          onClick={handleSearch}
          className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
        >
          Ask the Divine
        </button>
      </div>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mt-6 p-4 bg-white/70 rounded-xl shadow">
            <p className="text-gray-800 whitespace-pre-line">{result}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default DivineSearchPage;
