
//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // this was for writting an inline function
  const teamTigers = 'Tigers';
  const teamLions = 'Lions';  
  // const [lionsScore, updateLionsScore] = useState(0);  
  // const [tigersScore, updateTigersScore] = useState(0);

  const [lionsPoints, updateLionsPoints] = useState(0);
  const [tigersPoints, updateTigersPoints] = useState(0);



  // this is the stretch -- write a handler and pass in the function name in 

  //increment touchdown points for lions
  const touchDownPointsLions = () =>{updateLionsPoints(lionsPoints + 7);}
  //increment touchdown points for tigers
  const touchDownPointsTigers = () =>{updateTigersPoints(tigersPoints + 7);}  
  //increment field goal points for lions 
  const fieldGoalPointsLions = () =>{updateLionsPoints(lionsPoints + 3);}
   //increment field goal points for tigers
  const fieldGoalPointsTigers = () =>{updateTigersPoints(tigersPoints + 3);} 


//reset all the scores for both teams
  const resetAllPoints = () => {return `${updateLionsPoints(0)} ${updateTigersPoints(0)}`;}


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{teamLions}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            {/* <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{teamTigers}</h2>
        <div className="away__score">{tigersScore}</div> */}

        <div className="home__score">{lionsPoints}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">{teamTigers}</h2>
        <div className="away__score">{tigersPoints}</div>

          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          {/* <button className="homeButtons__touchdown" onClick={ () => updateLionsScore(lionsScore + 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={ () => updateLionsScore(lionsScore + 3)}>Home Field Goal</button> */}

          <button className="homeButtons__touchdown" onClick={touchDownPointsLions}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={fieldGoalPointsLions}>Home Field Goal</button>
          
        </div>
        <div className="awayButtons">
          {/* <button className="awayButtons__touchdown" onClick={ () => updateTigersScore(tigersScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={ () => updateTigersScore(tigersScore + 3)}>Away Field Goal</button> */}

          <button className="awayButtons__touchdown" onClick={touchDownPointsTigers}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={fieldGoalPointsTigers}>Away Field Goal</button>
          
        </div>
        {/* Something on my own  */}
        {/* <button className = "reset" onClick={ function (){return `${updateLionsScore(0)} ${updateTigersScore(0)}`}}>Reset Score for both teams</button> */}
        <button className = "reset" onClick={resetAllPoints}>Reset Score for both teams</button>
      </section>
    </div>
  );
}


console.log(`this is app `, App);
export default App;


