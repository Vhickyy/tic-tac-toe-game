import Start from "./Start/Start";
import { useTicTacContext } from "./TicTacToeContext";
import AppCss from './App.module.css'
import Choose from "./Choose/Choose";
import TicTacToe from "./TicTacToe/TicTacToe";

function App() {
  const {start,playing,choose,...state} = useTicTacContext();
 return (
    <div className={AppCss.container}>
      <h1>Tic Tac Toe</h1>
     {start && <Start/>}
     {choose && <Choose/>}
     {playing && <TicTacToe/>}
    </div>
  );
}

export default App;
