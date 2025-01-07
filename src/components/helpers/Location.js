import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Location() {
  const location = useLocation;
  const navigate = useNavigate();
  useEffect(() => {
    const lastPath = localStorage.getItem('lastPath');
    if (lastPath) {
      navigate(lastPath);
    }
  }, [navigate]);
  return location.pathname;
}

export default Location;
