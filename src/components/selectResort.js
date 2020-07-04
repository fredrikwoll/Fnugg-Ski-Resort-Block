import React, { Component } from "react";
import apiFetch from "@wordpress/api-fetch";
import Field from "./field";

class SelectResort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resorts: [],
      searchStatus: false,
    };
    this.getResort = this.getResort.bind(this);
    this.removeResorts = this.removeResorts.bind(this);
  }

  getResort(value) {
    if (value) {
      apiFetch({ path: `/fnugg/v1/resorts/autocomplete?q=${value}` }).then((response) => {

        if (response.total > 0) {
          this.setState({ resorts: response.result, searchStatus: true });
        } else {
          this.setState({ resorts: [] });
        }
      }).catch((error) => {
        console.error('Error: ', error)
      });
    }
  }

  removeResorts() {
    this.setState({ resorts: [], searchStatus: false });
  }

  render() {
    const { resorts, searchStatus } = this.state;
    const { doChange, resortValue, updateRender } = this.props;

    return (
      <div className="resort-autocomplete">
        <Field
          resorts={resorts}
          searchStatus={searchStatus}
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
