import express from 'express';
import dotenv from 'dotenv';


dotenv.config();
connectDB();

const app = express();

app.use(express.json());

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server Running in ${process.env.NODE_ENV} on port ${PORT}`));