// import { useEffect, useState } from "react";


// interface CartsType {
//   id: number;
//   product: {
//     id: number;
//     title: string;
//     price: number;
//     quantity: number;
//     thumbnail: string;
//   };
// }
// const CardsComponents = () => {
//     const[cart,setCarts]= useState<CartsType[]>([]);
//     useEffect(() =>{
//         const fetchData = async() =>{
//             const request = await fetch("https://dummyjson.com/carts")
//             const data = await request.json()
//             setCarts(data.carts)
//         };
//         fetchData();
//     },[])
//   return (
//     <div className="p-6">
//       <h1 className="font-bold text-2xl text-teal-800">Add To Card</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{cart.map((item) =>(
//           <div key={item.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
//             {item.product &&(
//               <p className="text-sm text-teal-600"> {item.product.title}</p>
//               <h1 className="text-sm text-teal-600">{item.product.price}</h1>
//               <h2 className="text-sm text-teal-600">{item.product.quantity}</h2>
//               <img src={item.product.thumbnail} alt={item.product.title}  className="w-full h-48 object-cover rounded mb-3" />
              


//             )}


//           </div>
//         ))}

//         </div>

//     </div>
//   )
// };

// export default CardsComponents;

import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
}

interface CartType {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

const CardsComponents = () => {
  const [carts, setCarts] = useState<CartType[]>([]);

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/carts");
        if (!response.ok) {
          throw new Error("Failed to fetch carts");
        }
        const data = await response.json();
        setCarts(data.carts);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } 
    };
    fetchData();
  }, []);



  if (error) {
    return (
      <div className="p-6">
        <p className="text-center text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl text-teal-800 mb-6">Shopping Carts</h1>
      
      {carts.map((cart) => (
        <div key={cart.id} className="mb-8">
          <h2 className="font-semibold text-xl text-teal-700 mb-4">
            Cart #{cart.id} - Total: ${cart.total.toFixed(2)}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-cover rounded mb-3"
                />
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-teal-600">
                  Price: ${product.price}
                </p>
                <p className="text-sm text-teal-600">
                  Quantity: {product.quantity}
                </p>
                <p className="text-sm font-semibold text-gray-700 mt-2">
                  Subtotal: ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsComponents;