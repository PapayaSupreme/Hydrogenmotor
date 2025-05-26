const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;

    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: 'qwen/qwen3-235b-a22b:free',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant about hydrogen motors. IF what the user talks about is not related at all to this subject, you should politely redirect the interaction towards hydrogen technology in a brief way, dont talk too much in that case' },
                    { role: 'user', content: userMessage },
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'Content-Type': 'application/json',
                    'HTTP-Referer': 'http://localhost:3000', // Optional, for OpenRouter rules
                    'X-Title': 'HydrogenMotorBot',            // Optional, for usage clarity
                },
            }
        );

        res.json({ reply: response.data.choices[0].message.content });
    } catch (error) {
        console.error('❌ OpenRouter error:', error.response?.data || error.message);
        res.status(500).json({ error: 'Qwen model request failed.' });
    }

});

app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
