import React from "react";
import { registerBlockType } from "@wordpress/blocks";
import SelectResort from "./components/selectResort";
import RenderResort from "./components/renderResort";
import Icons from "./helpers/icons";

registerBlockType("fnugg/ski-resort-block", {
  title: "Fnugg Ski Resort",
  icon: Icons.SkiLift,
  category: "common",
  attributes: {
    selectedResort: {
      type: "string",
      source: "html",
      selector: ".resort-name",
      default: "",
    },
  },
  edit: ({ attributes, setAttributes }) => {
    const handleChange = (newSelectedResort) => {
      setAttributes({ selectedResort: newSelectedResort });
      setAttributes({ UpdateBlock: Date.now() });
    };

    return (
      <div className="resort-block-wrapper">
        <div className="resort-name">
          <RenderResort
            resortName={attributes.selectedResort}
            loadedBackend={true}
          >
            <SelectResort
              doChange={handleChange}
              resortValue={attributes.selectedResort}
              UpdateBlock={(props) => UpdateBlock(props)}
            />
          </RenderResort>
        </div>
      </div>
    );
  },
  save: (props) => {
    return (
      <div
        className="resort-block-wrapper"
        data-resortname={props.attributes.selectedResort}
      >
        <div className="resort-name">{props.attributes.selectedResort}</div>
      </div>
    );
  },
});
