import Header from '../Header/Header';

function PageNotFound() {
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center' }}>
        <img
          src="./pagenotfound.png"
          alt="page not found"
          style={{ display: 'block', margin: 'auto' }}
        />
      </div>
    </>
  );
}

export default PageNotFound;
