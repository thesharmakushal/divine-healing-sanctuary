import { useState } from "react";
import { motion } from "framer-motion";

function HealingToolsPage() {
  const [gratitude, setGratitude] = useState("");
  const [affirmation, setAffirmation] = useState("");

  return (
    <div className="min-h-screen p-8 bg-beige text-gray-900">
      <h1 className="text-3xl font-serif text-center mb-6">🛠️ Healing Tools</h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block font-semibold mb-1">🙏 Gratitude Log</label>
            <textarea
              value={gratitude}
              onChange={(e) => setGratitude(e.target.value)}
              className="w-full p-3 border rounded-lg"
              rows={3}
              placeholder="Write what you're grateful for..."
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">💬 Daily Affirmation</label>
            <textarea
              value={affirmation}
              onChange={(e) => setAffirmation(e.target.value)}
              className="w-full p-3 border rounded-lg"
              rows={3}
              placeholder="Write an affirmation to empower you..."
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default HealingToolsPage;
