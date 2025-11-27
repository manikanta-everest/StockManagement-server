import express from 'express';
import cors from 'cors'
import { errorHandler } from '../middleware/ErrorHandler';
import StockManagementRoutes from '../router/StockManagentRoutes/StockManagemetRoutes'
const app = express();
app.use(cors());
app.use(express.json());
app.use('/stock', StockManagementRoutes);

app.use(errorHandler);

export default app;
