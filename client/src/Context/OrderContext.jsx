import { createContext, useState } from "react";

export const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [latestOrderId, setLatestOrderId] = useState(null);

  const [orderDetails, setOrderDetails] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    payment: "",
  });

  return (
    <OrderContext.Provider
      value={{
        cart,
        setCart,
        orderDetails,
        setOrderDetails,
        latestOrderId,
        setLatestOrderId,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
