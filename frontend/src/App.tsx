import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import kitty from "./kitty.png";
import "./App.css";

interface DeliveryResponse {
  title: string;
  message: string;
  totalPrice: number;
  freeGift: boolean;
}

const DeliveryDetails: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  // const [deliveryData, setDeliveryData] =
  //   useState<DeliveryResponse | null>(null);
  const [deliveryData, setDeliveryData] = useState<DeliveryResponse | null>({
    title: "Your next delivery for Betsy",
    message:
      "Hey Cordell! In two days' time, we'll be charging you for your next order for Betsy's fresh food.",
    totalPrice: 69,
    freeGift: false,
  });

  // const [loading, setLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchDeliveryData = async () => {
  //     try {
  //       const response = await fetch(
  //         `${process.env.BACKEND_API_URL}/${userId}`
  //       );
  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.status} - ${response.statusText}`);
  //       }
  //       const data = await response.json();
  //       setDeliveryData(data);
  //     } catch (error: any) {
  //       setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchDeliveryData();
  // }, [userId]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        deliveryData && (
          <div className="kitty-card">
            <div className="kitty-image">
              <img src={kitty} alt="kitty" />
            </div>
            <div className="delivery-details">
              <h1>{deliveryData.title}</h1>
              <p>{deliveryData.message}</p>
              <p>
                <strong>Total price:</strong> £{deliveryData.totalPrice}
              </p>
              <div className="card-buttons">
                <button className="btn-one">SEE DETAILS</button>
                <button className="btn-two">EDIT DELIVERY</button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/welcome/:userId" element={<DeliveryDetails />} />
    </Routes>
  </Router>
);

export default App;
