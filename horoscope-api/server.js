import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/horoscope/:sign", async (req, res) => {
    const sign = req.params.sign.toLowerCase();
    const apiUrl = `https://ohmanda.com/api/horoscope/${sign}`;

    try {
        const response = await fetch(apiUrl);
        const text = await response.text(); // Log raw response
        console.log("Raw API Response:", text);
        const data = JSON.parse(text);

        res.json(data);
    } catch (error) {
        console.error("Error fetching horoscope:", error);
        res.status(500).json({ error: "Failed to fetch horoscope" });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
