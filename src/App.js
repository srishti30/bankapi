import React, {
  Component
} from 'react';
import './App.css';
import Banks from './components/banks';
class App extends Component {
  render() {
    return ( 
      <div>
        <main className = "container" >
          <Banks/>
        </main>
      </div> 
    );
  }
}

export default App;