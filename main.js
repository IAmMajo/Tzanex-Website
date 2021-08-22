import { MDCRipple } from "@material/ripple";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/400.css";
import "./style.scss";

document.querySelectorAll(".mdc-card").forEach((element) => {
  new MDCRipple(element);
});
