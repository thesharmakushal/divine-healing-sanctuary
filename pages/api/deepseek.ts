/* DeepSeek API backend route code */
// /pages/api/deepseek.ts
export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Only POST requests allowed' });
    }
  
    const { messages } = req.body;
  
    try {
      const response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages,
        }),
      });
  
      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.error("DeepSeek API error:", err);
      res.status(500).json({ error: "Something went wrong." });
    }
  }
  