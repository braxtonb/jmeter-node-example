import express from 'express';
import router from './router';

const app = express();

// router setup
router(app);

export default app;
