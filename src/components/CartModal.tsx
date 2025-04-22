import React from 'react';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { items, total, removeItem, updateQuantity } = useCartStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full">
        <div className="p-4 flex justify-between items-center border-b">
          <div className="flex items-center">
            <ShoppingCart className="h-6 w-6 mr-2" />
            <h2 className="text-xl font-bold">Carrinho</h2>
          </div>
          <button onClick={onClose}>
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-4 flex-1 overflow-auto">
          {items.length === 0 ? (
            <p className="text-center text-gray-500">Seu carrinho está vazio</p>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-contain" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-[#00A7E1] font-bold">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="p-1 rounded-full bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded-full bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-red-500"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="border-t p-4">
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold">Total:</span>
            <span className="text-[#00A7E1] font-bold text-xl">
              R$ {total.toFixed(2)}
            </span>
          </div>
          <button
            className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600 transition-colors"
            disabled={items.length === 0}
          >
            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </div>
  );
};