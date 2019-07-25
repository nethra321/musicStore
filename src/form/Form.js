import React, { Component } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import '../Style.scss'

class Form extends Component {
  constructor(props) {
    super(props);

    this.list = [];

    this.state = {
      fields: {
        name: '',
        artist: '',
        location: '',
        album: '',
        duration: '',
        tags: '',
        datadisplay: this.list
      },
      errors: {
        name: '',
        artist: '',
        location: '',
        album: '',
        duration: '',
        tags: ''
      }
    };


    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.baseState = this.state;
  }

  handleInput = (e) => {
    console.log(e.target.value);
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value
    this.setState({ fields });
    console.log({ [e.target.name]: e.target.value });

  }

  appenddata = () => {

    this.list.push(this.state.fields.name);
    console.log(this.state.fields.name)
    this.list.push(this.state.fields.artist);
    this.list.push(this.state.fields.location);
    this.list.push(this.state.fields.album);
    this.list.push(this.state.fields.duration);
    this.list.push(this.state.fields.tags);
    this.setState({
      datadisplay: this.list
    });
    console.log(this.state.fields.datadisplay)
  }


  handleFormSubmit = (e) => {
    e.preventDefault();

    if (this.handleValidation()) {
      this.appenddata();
    }
  }
  handleChange = (field, e) => {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }


  handleValidation = () => {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["name"]) {
      formIsValid = false;
      errors["name"] = " *Cannot be empty";
    }
    if (!fields["artist"]) {
      formIsValid = false;
      errors["artist"] = "*Cannot be empty";
    }
    if (!fields["location"]) {
      formIsValid = false;
      errors["location"] = "*Cannot be empty";
    }
    if (!fields["album"]) {
      formIsValid = false;
      errors["album"] = "*Cannot be empty";
    }
    if (!fields["duration"]) {
      formIsValid = false;
      errors["duration"] = "*Cannot be empty";
    }
    if (!fields["tags"]) {
      formIsValid = false;
      errors["tags"] = "*Cannot be empty";
    }

    this.setState({ errors: errors });
    return formIsValid;
  }


  handleClearForm = () => {
    console.log(this.state.artist);
    this.setState(this.baseState);
  };

  render() {
    return (
      <div>
        <form className="container-fluid" onClick={() => this.handleFormSubmit}>
          <div className="div">
            <Input
              inputType={'text'}
              title={'Song Title:'}
              value={this.state.fields["name"]}
              name={"name"}
              handleChange={this.handleInput}
            />
          </div>
          <div className="error">{this.state.errors.name}</div>
          <div className="div">
            <Input
              inputType={"text"}
              title={"Artist:"}
              value={this.state.fields["artist"]}
              name={"artist"}
              handleChange={this.handleInput}
            />
          </div>
          <div className="error">{this.state.errors.artist}</div>
          <div className="div">
          <Input
            inputType={"text"}
            title={"Location:"}
            value={this.state.fields["location"]}
            name={"location"}
            handleChange={this.handleInput}
          />
          </div>
          <div className="error">{this.state.errors.location}</div>
          <div className="div">
          <Input
            inputType={"text"}
            title={"Album:"}
            value={this.state.fields["album"]}
            name={"album"}
            handleChange={this.handleInput}
          /></div>
          <div className="error">{this.state.errors.album}</div>
          <div className="div">
          <Input
            inputType={"time"}
            title={"Duration:"}
            value={this.state.fields["duration"]}
            name={"duration"}
            handleChange={this.handleInput}
          /></div>
          <div className="error">{this.state.errors.duration}</div>
          <div className="div">
          <Input
            inputType={"text"}
            title={"Tags:"}
            value={this.state.fields["tags"]}
            name={"tags"}
            handleChange={this.handleInput}
          /></div>
          <div className="error">{this.state.errors.tags}</div>
          <Button action={this.handleClearForm} title={"Clear"} />
          <Button action={this.handleFormSubmit} title={"Submit"} />


        </form>

        <div>{this.state.datadisplay}</div>
      </div>
    );
  }
}

export default Form;