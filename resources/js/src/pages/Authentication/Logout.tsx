import { useEffect } from 'react';
import { removeToken } from '../../config/config';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the token and then navigate to the login page
    removeToken('token');
    navigate('/auth/login');
  }, [navigate]);

  return null; // or you can render a message if needed
};

export default Logout;
