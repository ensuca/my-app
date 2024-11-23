import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useTypedSelector';

interface ProtectedRouteProps {
  redirectPath?: string;
}

const ProtectedRoute = ({ redirectPath = '/login' }: ProtectedRouteProps) => {
  const location = useLocation();
  const { isAuthenticated, loading } = useAppSelector((state) => state.auth);

  // If authantication check is still going on show the loading
  // Eğer Doğrulama devam ediyorsa Loading i göster
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
      </div>
    );
  }

  // Authentication check
  // Authentication kontrolü
  if (!isAuthenticated) {
    // State ile birlikte yönlendirme yap, böylece login sonrası kullanıcıyı
    // gitmek istediği sayfaya yönlendirebiliriz
    // Redirecting the user with the State
    return <Navigate to={redirectPath} state={{ from: location }} replace />;
  }

  // Kullanıcı authenticate olmuşsa child route'ları render et
  // If the user is pass the authantication render the child routes
  return <Outlet />;
};

export default ProtectedRoute;