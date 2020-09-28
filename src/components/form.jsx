import React from "react";

const Form = ({ getWeather, handleChange, error }) => {
  const ShowError = () => {
    return (
      <div className="alert alert-danger mx-5" role="alert">
        Please Enter City
      </div>
    );
  };
  return (
    <div className="container">
      <div>{error ? <ShowError /> : null}</div>
      <form onSubmit={getWeather}>
        <div className="row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-class"
              name="city"
              id="city"
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="col-md-3">
            <button className="btn btn-danger" type="submit">
              Get Weather
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
