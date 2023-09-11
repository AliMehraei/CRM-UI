import { useEffect } from 'react';
import { removeToken } from '../../config/config';
import { useNavigate } from 'react-router-dom';
import { useUserStatus } from '../../config/authCheck';

const Logout = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useUserStatus(); 

  useEffect(() => {
    // Clear the token and then navigate to the login page
    removeToken('token');
    logout();
    navigate('/auth/login');
  }, [navigate]);

  return null; // or you can render a message if needed
};

export default Logout;
