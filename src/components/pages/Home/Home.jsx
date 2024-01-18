import React from 'react';
import SetMotivation from '../../Giphy/SetMotivation';

const Home = (props) => {
  // console.log(props)
  const handleInspireClick = () => {
    // Handle the click event for the "Inspire" button
    // You can fetch motivational content or perform any other action
    console.log("Inspire button clicked!");
    console.log(searchTerm);
  };

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Welcome to Sudoku!</h1>
        <SetMotivation motivation ={props.motivation} setMotivation={props.setMotivation}/>
        {/* <div className="btn-group mt-3" role="group">
          <button type="button" className="btn btn-primary">Easy</button>
          <button type="button" className="btn btn-primary">Medium</button>
          <button type="button" className="btn btn-primary">Hard</button>
        </div> */}

        <div>

        </div>
      </div>


      <br />

      {/* <button type="button" className="btn btn-lg btn-success mt-4">Play</button> */}
    </div>

  );
};

export default Home;
