import { Router } from 'express';
import { getAllAlbums, createAlbum } from '../../controllers/album';

const router = Router();

router.route('/').get(getAllAlbums);
router.route('/').post(createAlbum);

export = router;
