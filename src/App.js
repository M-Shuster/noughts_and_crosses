import './App.css';
import {Header} from "./Components/Header"
import {SubHeader} from "./Components/SubHeader"

function App() {
    return [
        <div className="App">
            <Header />
        </div>,
        <div className="App">
            <SubHeader />
        </div>
    ]
};

export default App;