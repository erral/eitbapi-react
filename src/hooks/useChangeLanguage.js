import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../config';

const useChangeLanguage = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();
  const changeLanguage = (lang) => {
    // check if location.pathname only has language param
    if (location.pathname.split('/').length === 2) {
      navigate(`/${lang}`);
    } else {
      const currentLocation = location.pathname.replace(`/${params.lang}/`, '');
      Object.values(ROUTES).forEach((route) => {
        const paths = Object.values(route.paths);
        if (paths.includes(currentLocation)) {
          navigate(`/${lang}/${route.paths[lang]}`);
        }
      });
    }
  };
  return { changeLanguage };
};
export default useChangeLanguage;
