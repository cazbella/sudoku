import React from 'react';

const Home = () => {
  return (
    <div className="container">

      <div className="text-center mt-5">
        <h1>Welcome to Sudoku!</h1>

        <div className="btn-group mt-3" role="group">
          <button type="button" className="btn btn-primary">Easy</button>
          <button type="button" className="btn btn-primary">Medium</button>
          <button type="button" className="btn btn-primary">Hard</button>
        </div>

        <input
          type="text"
          className="form-control mt-3"
          placeholder="Set up motivation"
        />

        <img
          src="path_to_your_image_or_gif"
          alt="Motivational Image or GIF"
          className="img-fluid mt-3"
        />
        <br />

        <button type="button" className="btn btn-lg btn-success mt-4">Play</button>
      </div>
    </div>
  );
};

export default Home;