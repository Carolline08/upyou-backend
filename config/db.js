const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;

        if (!uri) {
            throw new Error('MONGODB_URI não encontrada no .env');
        }

        await mongoose.connect(uri);

        console.log('MongoDB conectado com sucesso');
    } catch (error) {
        console.error('Erro ao conectar MongoDB:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;