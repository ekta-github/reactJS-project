import React from "react";
import $ from "jquery";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import Button from ".";
storiesOf("Button", module)
  .add("Disabled button", () => (
    <Button className="btn btn-primary" disable={true} title="Disabled">disabled </Button>
  )).add("normal button", () => (
    <Button className="btn btn-primary"  onClick={action("clicked")}>confirm</Button>
  )).add("mouse hover", () => (
    <Button name="mousehover" className="btn btn-primary" onHover={action("mouse on")}>Find</Button>
  ))
  .add("mouse leave", () => (
    <Button name="mousehover" className="btn btn-primary" onHoverOff={action("mouse off")}>Find</Button>
  ))
  .add("On Mixed events", () => (
    <Button id="buttonFocus" name="validation" className="btn btn-primary" onFocus={validate} onHover={action("mouse on")} onClick={action("clicked event")} onHoverOff={action("mouse off")}>QUOTE</Button>
  ))
  
