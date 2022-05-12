import './App.css';
import Memes from './Memes';

function App() {
  return (
    <div className="App">
      <header className="App-header">Meme Generator</header>
      <br />
      <Memes />
    </div>
  );
}

export default App;

// import './App.css';
// import React from 'react';

// class App extends React.Component {
//   // Constructor
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [],
//       dataIsLoaded: false,
//     };
//   }

//   // ComponentDidMount is used to
//   // execute the code
//   componentDidMount() {
//     fetch('https://api.memegen.link/templates')
//       .then((res) => res.json())
//       .then((json) => {
//         this.setState({
//           items: json,
//           dataIsLoaded: true,
//         });
//       })
//       .catch(() => console.log('error'));
//   }
//   render() {
//     const { dataIsLoaded, items } = this.state;
//     if (!dataIsLoaded) {
//       return (
//         <div>
//           <h1> Pleses wait some time.... </h1>{' '}
//         </div>
//       );
//     } else {
//       return (
//         <div className="App">
//           <h1> Fetch data from an api in react </h1>
//           {data}
//           {/* {items.map((item) => (
//             // <ol key={item.id}>
//             //   User_Name: {item.username}, Full_Name: {item.name}, User_Email:{' '}
//             //   {item.email}
//             // </ol>
//           ))} */}
//         </div>
//       );
//     }
//   }
// }

// export default App;
