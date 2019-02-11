import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", lat: 35.661777, lon: 139.704051 };
    navigator.geolocation.getCurrentPosition(location => {
      this.setState({
        lat: location.coords.latitude,
        lon: location.coords.longitude
      });
    });
  }

  render() {
    const { buttonText } = this.props;
    console.log(JSON.stringify(this.state, undefined, 2));

    return (
      <div className="search-box">
        <form onSubmit={this.handleSubmit}>
          <input
            className="input-lunch-name"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="例：cafe"
          />
          <button className="search-button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    const { getUrls } = this.props;
    event.preventDefault();
    getUrls(this.state.title, this.state.lat, this.state.lon);
    this.setState({ title: "" });
  };
}

export default Search;
