import express from 'express';
import path, {dirname} from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import authMiddleware from './middlewares/authMiddleware.js';
import cors from 'cors';


const app = express();
const PORT = process.env.PORT || 3000;



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());



//Routes
app.use('/auth', authRoutes);
app.use('/todos', authMiddleware, todoRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", 'index.html'));
});




app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`); 
})
