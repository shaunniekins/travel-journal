import Head from './Head';
import Content from './Content';
import data from './data';

function App() {
  const sec = data.map(item => {
    return (
      <Content 
        item = {item}
      />
    )
  })

  return (
    <div className="App">
      <Head />
      <section>
        {sec}
      </section>
    </div>
  );
}

export default App;
