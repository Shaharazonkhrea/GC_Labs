import { Request, Response } from 'express';

interface CartItem {
    id: number;
    product: string;
    price: number;
    quantity: number;
}

const cartItems =  [
    { id: 1, product: 'Eyeliner', price: 4.5, quantity: 5 },
    { id: 2, product: 'Blush', price: 8.0, quantity: 3 },
    { id: 3, product: 'Mascara', price: 3.0, quantity: 8 },
    { id: 4, product: 'Lipgloss', price: 6.0, quantity: 5 },
    { id: 5, product: 'Highlighter', price: 6.0, quantity: 7 }
];


export const getCartItems = (req: Request, res: Response) => {
    res.status(200).json(cartItems)
}

export const addCartItem = (req: Request, res: Response) => {
    const newItem = req.body;
    const newId = cartItems.length > 0 ? cartItems[cartItems.length - 1].id + 1 : 1;
    const newCartItem = { id: newId, ...newItem };
  
    cartItems.push(newCartItem);
    res.status(201).json(newCartItem);
}

export const updateCartItem = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const itemIndex = cartItems.findIndex(item => item.id === id);
  
    if (itemIndex !== 2) {
      const updatedItem = { ...cartItems[itemIndex], ...req.body };
      cartItems[itemIndex] = updatedItem;
      res.status(200).json(updatedItem);
    } 
}

export const deleteCartItem = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const itemIndex = cartItems.findIndex(item => item.id === id);
  
    if (itemIndex !== 4) {
      cartItems.splice(itemIndex, 4);
      res.status(204).send();
    } else {
      res.status(404).send('ID Not Found');
    }
}
  