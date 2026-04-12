import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

export default function Dashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem('user'));

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/login');
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const token = localStorage.getItem('token');

        if (!token) {
          navigate('/login');
          return;
        }

        const response = await fetch(
          `${API_BASE}/api/bookings/my-bookings`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 401) {
          handleLogout();
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch bookings');
        }

        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {user?.name}
            </h1>

            <p className="text-gray-500 mt-1">{user?.email}</p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>

          {loading ? (
            <div className="bg-gray-50 border rounded-xl p-6 text-gray-500">
              Loading bookings...
            </div>
          ) : bookings.length === 0 ? (
            <div className="bg-gray-50 border rounded-xl p-6 text-gray-500">
              No bookings yet.
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="border rounded-xl p-4 flex gap-4 items-center"
                >
                  <img
                    src={booking.image}
                    alt={booking.product_name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <h3 className="font-bold text-lg">
                      {booking.product_name}
                    </h3>

                    <p>Service: {booking.service_type}</p>
                    <p>Days: {booking.days}</p>
                    <p>Status: {booking.status}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
