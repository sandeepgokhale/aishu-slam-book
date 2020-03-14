import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/* <h1> */}
      <MySampleTestComponent />
    </div>
  );
}

class MySampleTestComponent extends React.Component {
  // state = {
  //   data: ""
  // };

  // componentDidMount() {
  //   fetch("https://q6ljer4ss7.execute-api.us-east-1.amazonaws.com/Stage")
  //     .then(data => data.json())
  //     .then(data => {
  //       console.log(data);
  //       this.setState({
  //         data: data
  //       });
  //     });
  // }
  render() {
    return (
      <div className="App">
        <h1>My Slam Book</h1>
        I am Known as ?<input /> <br />
        Loved ones call me ?<input /> <br />
        My Home ?
        <input /> <br />
        To talk to me in detail
        <input /> <br />
        E-mail me at
        <input /> <br />
        I celebrate my birthday on ?<input /> <br />
        My Zodiac
        <input /> <br />
        The person I admire the most ?<input /> <br />
        My favourite food joint
        <input /> <br />
        I would like to go on a date with
        <input /> <br />
        I love to shop for
        <input /> <br />
        My hobbies
        <input /> <br />
        My favourite brands
        <input /> <br />
        My favourite actor/actress
        <input /> <br />
        Movies I love to watch again and again
        <input /> <br />
        I tune in to songs like
        <input /> <br />
        I dream of becoming
        <input /> <br />
        One thing missing in my life
        <input /> <br />
        My favourite people
        <input /> <br />
        About me
        <input /> <br />
        <button> save </button>
      </div>
    );
  }
}
