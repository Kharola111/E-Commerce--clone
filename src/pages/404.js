import Footer from "../components/footer";

const NoPage = () => {
  return (
    <>
      <div className="container my-5">
        <div>
          <h1 className="text-center">e-Shopper</h1>
        </div>

        <div className="d-flex justify-content-center">
          <div className="login-box m-auto mt-5 col-4 text-center">
            <h3 className="text-center">Page Not Found</h3>
            <i className="bi bi-emoji-frown-fill text-danger success-icon"></i>
            <h6>
              Sorry, we couldn't find what your are looking for. Go to
              <a href="/">Home Page</a>
            </h6>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default NoPage;
