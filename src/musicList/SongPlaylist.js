import React, { Component } from 'react'
import SongData from '../form/Song.json'
import Button from '../components/Button.js';
import '../Style.scss'

class SongPlaylist extends Component {
  constructor(props) {
    super(props)
    this.list = []
    this.state = {
      SongData: SongData,
      resultlist: this.list,
      SearchTerm: "",
      searchString: []

    }
  }

  handleSearchBox = (e) => {

    this.setState({
      SearchTerm: e.target.value
    })
    console.log({ SearchTerm: e.target.value })

  }

  handleSearchFunction = () => {

    console.log(this.state.SearchTerm);
    const termlist = this.state.SongData.filter(i => i.name === this.state.SearchTerm);
    console.log(termlist)
    this.setState({
      SearchTerm: "",
      searchString: termlist
    })

    console.log(this.state.searchString)


  }

  event = value => {

    const songPlay = this.state.resultlist.concat(value);

    const unique = [...new Set(songPlay)];
    this.list.push(unique);

    this.setState({
      resultlist: unique
    });

    console.log(this.state.resultlist);
  };



  render() {
    return (
      <div >
        <div className="searchbox">
          <input type="text"
            placeholder="Search.."
            name="search"
            value={this.state.SearchTerm}
            onChange={this.handleSearchBox}
          />
          <Button
            action={e => {
              this.handleSearchFunction();
            }
            } title={"Search"} />
        </div>
        {this.state.searchString.map((searchString, index) => {
          return <div className="searchSong" key={index}>
            <strong>SONGNAME:</strong>{searchString.name}<br></br>
            <strong>ARTIST:</strong>{searchString.artist}<br></br>
            <strong>LOCATION:</strong>{searchString.loaction}<br></br>
            <strong>ALBUM:</strong>{searchString.loaction}<br></br>
            <strong>DURATION:</strong>{searchString.duration}<br></br>
            <strong>TAGS:</strong>{searchString.tags}<br></br>

          </div>
        })}

        <h1>SongList</h1>

        {SongData.map((songDetails, index) => {
          return <div className="style" key={index}>
            <strong>SONGNAME:</strong>{songDetails.name}<br></br>
            <strong>ARTIST:</strong>{songDetails.artist}<br></br>
            <strong>LOCATION:</strong>{songDetails.loaction}<br></br>
            <strong>ALBUM:</strong>{songDetails.album}<br></br>
            <strong>DURATION:</strong>{songDetails.duration}<br></br>
            <strong>TAGS:</strong>{songDetails.tags}<br></br>
            <Button
              action={e => {
                this.event(songDetails.name);
              }

              } title={"+"} />
          </div>
        })}
        {this.state.resultlist.map((resultlist, index) => {
          return <div className="col-sm-3 col-md-3 col-lg-3 sidebar" key={index}>{resultlist}</div>
        })}
      </div>
    )
  }
}

export default SongPlaylist

