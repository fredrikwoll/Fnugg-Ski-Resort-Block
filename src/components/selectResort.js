import React, { Component } from "react";
import apiFetch from "@wordpress/api-fetch";
import Field from "./field";

class SelectResort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resorts: [],
    };
    this.getResort = this.getResort.bind(this);
    this.removeResorts = this.removeResorts.bind(this);
  }

  getResort(value) {
    if (value) {
      apiFetch({ path: `/fnugg/v1/resorts/autocomplete?q=${value}` }).then((response) => {
        if (response.total > 0) {
          this.setState({ resorts: response.result });
        } else {
          this.setState({ resorts: [] });
        }
      });
    }
  }

  removeResorts() {
    this.setState({ resorts: [] });
  }

  render() {
    const { resorts } = this.state;
    const { doChange, resortValue, updateRender } = this.props;

    return (
      <div className="resort-autocomplete">
        <Field
          resorts={resorts}
          resortValue={resortValue}
          onChange={(event) => {
            doChange(event.target.value);
            this.getResort(event.target.value);
          }}
          onClick={(resortName) => {
            doChange(resortName);
            this.removeResorts();
            updateRender();
          }}
        />
      </div>
    );
  }
}

export default SelectResort;
