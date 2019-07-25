import React from 'react';
import './Style.scss';
import Nav from './musicList/Nav';
import SongPlaylist from './musicList/SongPlaylist';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddSong from './musicList/AddSong';


function App() {
  return (
    <div className="App">
        <Router>
          <div className="p">
            <Nav />
            <Route path="/" exact component={SongPlaylist} />
            <Route path="/AddSong" component={AddSong} />
          </div>
        </Router>
    </div>

  );
}

export default App;
