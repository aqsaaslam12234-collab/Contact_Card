import { useEffect, useState } from "react";

interface ProductTypes {
  id: number;
  title: string;
  price: number;
  description: string;
   thumbnail: string;
 
}

const ContactCard = () => {
  const [products, setProducts] = useState<ProductTypes[]>([]);
useEffect(() => {


  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    setProducts(data.products);
  };

  fetchData();
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded mb-3"
            />
            <h2 className="font-semibold text-lg mb-2">{product.title}</h2>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">
              {product.description}
            </p>
            <p className="text-green-600 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
