import Header from '../components/Header';
import './NotFoundPage.css';

function NotFoundPage({ cart }) {
  return (
    <>
      <link rel="icon" type="image/png" href="home-favicon.png" />
      <title>404 Page Not Found</title>

      <Header cart={cart} />

      <div className="not-found-message">Page not found</div>
    </>
  );
}

export default NotFoundPage;
