import React, { Component } from "react";
import apiFetch from "@wordpress/api-fetch";


import Icons from "../helpers/icons";

class RenderResort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resort: {},
      loaded: false,
      loadedBackend: false,
    };
  }
  async componentDidMount() {
    const { resortName, loadedBackend } = this.props;
    if (loadedBackend) {
      this.setState({ loadedBackend: true });
    }
    apiFetch({ path: `/fnugg/v1/resorts?q=${resortName}` }).then((response) => {
      if (response.hits.total > 0) {
        this.setState({ resort: response.hits.hits[0], loaded: true });
      }
    });
  }

  weatherCondition(weather) {
    switch (weather) {
      case "Cloud":
        return "Overskyet";
        break;
      case "PartlyCloud":
        return "For det meste sol";
        break;
      case "Rain":
        return "Det regner";
        break;
      case "LightCloud":
        return "Lette skyer";
        break;
      case "Sun":
        return "Strålende sol";
        break;
      case "Snow":
        return "Det snør";
        break;
      default:
        "-";
    }
  }
  weatherIcon(weather) {
    switch (weather) {
      case "Cloud":
        return Icons.Clouds;
        break;
      case "PartlyCloud":
        return Icons.PartlyCloud;
        break;
      case "Rain":
        return Icons.Rain;
        break;
      case "LightCloud":
        return Icons.LightCloud;
        break;
      case "Sun":
        return Icons.Sun;
        break;
      case "Snow":
        return Icons.Snow;
        break;
      default:
        "-";
    }
  }

  render() {
    const { resort, loaded, loadedBackend } = this.state;
    if (!loaded) return <div>Vennligst vent..</div>;
    const { conditions, images } = resort._source;

    const {
      wind,
      last_updated,
      condition_description,
      symbol,
      temperature,
    } = conditions.combined.top;

    const windDegreeCss = {
      transform: `rotate(${wind.degree}deg)`,
      msTransform: `rotate(${wind.degree}deg)`,
      WebkitTransform: `rotate(${wind.degree}deg)`,
      MozTransform: `rotate(${wind.degree}deg)`,
      OTransform: `rotate(${wind.degree}deg)`,
    };

    const date = new Date(last_updated);
    const year = date.getFullYear();
    const month = `0${date.getMonth() + 1}`.substr(-2);
    const day = `0${date.getDate()}`.substr(-2);
    const hour = `0${date.getHours()}`.substr(-2);
    const min = `0${date.getMinutes()}`.substr(-2);

    const children = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        index,
        updateRender: () => console.log("re-render"),
      });
    });

    return (
      <div
        className="resort-block-container"
        style={{ backgroundImage: `url(${images.image_full})` }}
      >
        <div className="resort-block-inner">
          <h3>{loadedBackend ? children : resort._source.name}</h3>
          <div className="resort-block-temp">{temperature.value}</div>
          <div className="resort-block-wrapper">
            <div className="resort-icon resort-column-expand">
              <figure>
                <img src={this.weatherIcon(symbol.name)} alt={symbol.name} />
              </figure>
              <span>{this.weatherCondition(symbol.name)}</span>
            </div>
            <div className="resort-icon">
              <figure className="resort-icon-adj" style={windDegreeCss}>
                <img src={Icons.Wind} />
              </figure>
              <div className="resort-icon-text">
                {wind.mps} <span>m/s</span>
              </div>
              <span>{wind.speed}</span>
            </div>
            <div className="resort-icon">
              <figure>
                <img src={Icons.Conditions} />
              </figure>
              <span>{condition_description}</span>
            </div>
          </div>
          <div className="resort-block-footer">
            <strong>Siste oppdatering:</strong>{" "}
            {`${day}.${month}.${year} - ${hour}:${min}`}
          </div>
        </div>
      </div>
    );
  }
}

export default RenderResort;
