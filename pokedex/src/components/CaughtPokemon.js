import React, { Component } from "react";

class IncrementTotal extends Component {
  state = {
    incrementTotal: 0,
  };

  catch = () => {
    this.setState((prevState) => {
      return {
        incrementTotal: prevState.incrementTotal + 1,
      };
    });
  };

  reset = () => {
    this.setState(() => {
      return {
        incrementTotal: 0,
      };
    });
  };

  render() {
    return (
      <div>
        <p>Caught {this.state.incrementTotal} Pokemon on </p>
        {this.props.date}
        <button onClick={this.catch}>Catch</button>

        {this.state.incrementTotal > 0 ? (
          <ResetButton reset={this.reset} />
        ) : null}
      </div>
    );
  }
}

const ResetButton = (props) => {
  return <button onClick={props.reset}>Reset</button>;
};

export default IncrementTotal;

/*
import React { Component } from "react";


const CaughtPokemon = (props) => {
  return (
    <div>
      <p>Caught 0 Pokemon on date {props.date}</p>
    </div>
  );
};

export default CaughtPokemon;
*/
