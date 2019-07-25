import React from 'react';
import './Style.scss';
import Nav from './musicList/Nav';
import SongPlaylist from './musicList/SongPlaylist';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import AddSong from './musicList/AddSong';

function App() {
  return (
    <div className="App">
     <Router>
      <div className="App">
        <Nav />
        
        <Route path="/AddSong" component={AddSong} />
        <Route path="/SongPlaylist" component={SongPlaylist} />
      </div>
    </Router>
    </div>
  );
}

export default App;
