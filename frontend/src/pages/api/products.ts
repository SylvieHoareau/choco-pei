import { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../data/products';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    const newProduct = req.body;
    products.push({ id: Date.now(), ...newProduct });
    res.status(201).json({ message: 'Produit ajouté !' });
  } else {
    res.status(405).end(); // Méthode non autorisée
  }
}
