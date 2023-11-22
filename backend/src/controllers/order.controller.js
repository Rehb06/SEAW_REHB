// Importa los módulos o modelos necesarios
import Order from '../models/order.models.js';

// Función para obtener todas las órdenes
export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener las órdenes' });
  }
};

// Función para obtener una orden por su ID
export const getOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener la orden' });
  }
};

// Función para crear una nueva orden
export const createOrder = async (req, res) => {
  try {
    const { customerName, totalAmount, items } = req.body;
    const newOrder = new Order({
      customerName,
      totalAmount,
      items,
    });

    const savedOrder = await newOrder.save();
    res.json({ message: 'Orden creada con éxito', order: savedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la orden' });
  }
};

// Función para actualizar una orden por su ID
export const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updatedData = req.body;

    const updatedOrder = await Order.findByIdAndUpdate(orderId, updatedData, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    res.json({ message: 'Orden actualizada con éxito', order: updatedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la orden' });
  }
};

// Función para eliminar una orden por su ID
export const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: 'Orden no encontrada' });
    }

    res.json({ message: 'Orden eliminada con éxito', order: deletedOrder });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la orden' });
  }
};
