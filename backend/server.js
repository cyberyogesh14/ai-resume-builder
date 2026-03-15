require("dotenv").config();
const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/generate-resume", async (req, res) => {
  try {
    const { name, role, skills, experience } = req.body;

    const prompt = `
Create a professional resume for:

Name: ${name}
Target Role: ${role}
Skills: ${skills}
Experience: ${experience}

Structure:
- Professional Summary (3-4 lines)
- Key Skills (bullet points)
- Experience (professional tone)
Keep it concise and modern.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });

    res.json({
      resume: completion.choices[0].message.content
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI generation failed" });
  }
});

app.listen(5000, () => {
  console.log("🚀 AI Server running at http://localhost:5000");
});