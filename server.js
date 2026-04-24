require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectDB = require('./config/db');

const app = express();

app.use(cors());
app.use(express.json());

// conecta MongoDB
connectDB();

// rotas
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/challenges', require('./routes/challengeRoutes'));
app.use('/api/progress', require('./routes/progressRoutes'));
app.use('/api/achievements', require('./routes/achievementRoutes'));

// teste
app.get('/', (req, res) => {
    res.send('UpYou API rodando 🚀');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});