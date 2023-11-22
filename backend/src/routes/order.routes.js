// En order.routes.js
import { Router } from 'express';
import { authRequired } from '../middlewares/validateToken.js';
import { createOrder, getOrders, getOrder, updateOrder, deleteOrder } from '../controllers/order.controller.js';

const router = Router();

// Rutas para pedidos
router.post('/orders', authRequired, createOrder);
router.get('/orders', authRequired, getOrders);
router.get('/orders/:id', authRequired, getOrder);
router.put('/orders/:id', authRequired, updateOrder);
router.delete('/orders/:id', authRequired, deleteOrder);

export default router;
