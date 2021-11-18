import './App.css';
import {Header} from "./Components/Header"
import {SubHeader} from "./Components/SubHeader"
import {Board} from "./Components/Board/Board"
import { Footer } from './Components/Footer';

function App() {
    return [
        <div className="App">
            <Header />
        </div>,
        <div className="App">
            <SubHeader />
        </div>,
        <div className="App">
            <Board />
        </div>,
        <div className="App">
            <Footer />
        </div>
    ]
};

export default App;