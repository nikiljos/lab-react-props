import './App.css';

function App(props) {
  return (
      <div className="App">
          <h3>Kalvium Gallery using Function Component</h3>
          <div className="gallery">
              {props.imageData.map((elt) => {
                  return <img src={elt.img} alt="elephant" key={elt.id} />;
              })}
          </div>
      </div>
  );
}

export default App;
