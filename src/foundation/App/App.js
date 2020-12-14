import '../../styles/App.scss';
import { Nav, Footer } from './components';
import { User } from '../../features';

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <User />
      </main>
      <Footer />
    </div>
  );
}

export default App;
