import express from 'express';
import 'dotenv/config';
import { connectDB } from './config/db';
import albumRoutes from './routes/album/album';
const router = express();

connectDB();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use('/albums', albumRoutes);

const PORT = process.env.PORT || 5001;

router.listen(PORT, () => {
  console.log(`Server listens on ${PORT}`);
});
