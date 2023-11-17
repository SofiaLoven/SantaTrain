import express from 'express';
import { addTicket, getTrains } from '../controllers/db-controllers.mjs';

const router = express.Router();

router.route('/tickets').post(addTicket);
router.route('/trains').get(getTrains);

export default router;