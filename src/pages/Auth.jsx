import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin
        ? 'http://localhost:5000/api/auth/login'
        : 'http://localhost:5000/api/auth/register';

      const bodyData = isLogin
        ? {
            email: formData.email,
            password: formData.password,
          }
        : {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          };

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="flex mb-8 bg-gray-100 rounded-xl p-1">
          <button
            type="button"
            onClick={() => {
              setIsLogin(true);
              setError('');
            }}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              isLogin
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {
              setIsLogin(false);
              setError('');
            }}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              !isLogin
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-200'
            }`}
          >
            Register
          </button>
        </div>

        <h1 className="text-3xl font-bold mb-2 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h1>

        <p className="text-gray-500 text-center mb-6">
          {isLogin
            ? 'Login to track your bookings'
            : 'Register to start using ECR'}
        </p>

        {error && (
          <div className="mb-4 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
          >
            {loading
              ? isLogin
                ? 'Logging in...'
                : 'Creating Account...'
              : isLogin
              ? 'Login'
              : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
}