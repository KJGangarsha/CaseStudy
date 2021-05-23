import React, { Component } from "react";
import { withRouter } from "react-router";
import SimpleReactValidator from "simple-react-validator";
import GuestService from "../../Services/GuestService";

class SuggestionBox extends Component {
  constructor(props) {
    super(props);

    this.validator = new SimpleReactValidator();

    /* state variables */
    this.state = {
      name: "",
      mailId: "",
      suggestion: "",
    };
    /* binding all handlers */
    this.changeNameHandler = this.changeNameHandler.bind(this);
    this.changeMailHandler = this.changeMailHandler.bind(this);
    this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
    this.saveSuggest = this.saveSuggest.bind(this);
    this.cancel=this.cancel.bind(this);
  }

  /* handler methods */

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  changeMailHandler = (event) => {
    this.setState({ mailId: event.target.value });
  };

  changeDescriptionHandler = (event) => {
    this.setState({ suggestion: event.target.value });
  };

  /* save method */
  saveSuggest = (e) => {
    e.preventDefault();
    if (this.validator.allValid()) {
      let suggest = {
        name: this.state.name,
        mailId: this.state.mailId,
        suggestion: this.state.suggestion,
      };

      GuestService.suggest(suggest).then((res) => {
        this.props.history.push("/home");
        alert("Your suggestion is received and we are on it!");
        window.location.reload();
      });
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  };
  /* cancel method */
  cancel = () => {
    this.props.history.push("/home");
    window.location.reload();
  };

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            {/* add suggestion form */}
            <div
              className="card col-md-6 offset-md-3 offset-md-3"
              style={{
                marginTop: "30px",
                backgroundColor: "blanchedalmond",
                fontSize: "15px",
                borderColor: "black",
                boxShadow: "2px 5px 30px 2px black",
                fontFamily: "cursive",
                borderWidth: "3px",
              }}
            >
              <h3 className="text-center">Suggestion Box</h3>
              <div
                className="card-body"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  backgroundColor: "white",
                  fontSize: "15px",
                  boxShadow: "2px 5px 30px 2px black",
                  fontFamily: "cursive",
                  color: "b#002147",
                  borderColor: "black",
                  borderWidth: "2px",
                }}
              >
                <form>
                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Name:</b>{" "}
                    </label>
                    <input
                      placeholder="Name"
                      name="Name"
                      className="form-control"
                      value={this.state.name}
                      onChange={this.changeNameHandler}
                    />
                    {this.validator.message(
                      "Name",
                      this.state.name,
                      "required|alpha_space|max:30",
                      { className: "text-danger" }
                    )}
                  </div>

                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Mail ID:</b>{" "}
                    </label>
                    <input
                      placeholder="Mail Id"
                      name="Mail Id"
                      className="form-control"
                      value={this.state.mailId}
                      onChange={this.changeMailHandler}
                    />
                    {this.validator.message(
                      "Mail Id",
                      this.state.mailId,
                      "required|email",
                      { className: "text-danger" }
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      {" "}
                      <b>Description:</b>{" "}
                    </label>
                    <textarea
                      placeholder="description"
                      name="description"
                      className="form-control"
                      value={this.state.suggestion}
                      onChange={this.changeDescriptionHandler}
                      cols="50"
                      rows="4"
                    />
                    {this.validator.message(
                      "Description",
                      this.state.suggestion,
                      "required|string|max:150",
                      { className: "text-danger" }
                    )}
                  </div>
                  <button
                    className="btn btn-success"
                    title="add"
                    onClick={this.saveSuggest}
                  >
                    <b>Submit</b>
                  </button>
                  <button
                    className="btn btn-warning"                    
                    onClick={this.cancel}
                    style={{ marginLeft: "10px" }}
                  >
                    <b> Cancel</b>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default withRouter(SuggestionBox);
