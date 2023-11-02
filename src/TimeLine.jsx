import { Chrono } from "react-chrono";
import { items } from "./data";
export default function TimeLine() {
  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      hideControls
      itemWidth={200}
      slideItemDuration={5000}
      slideShow
      theme={{
        primary: "#ffff",
        secondary: "#e1cdcd",
        cardBgColor: "#ffffff",
        cardForeColor: "#e1cdcd",
        titleColor: "#e1cdcd",
        cardTitleColor: "#1f2124",
        titleColorActive: "#1f2124",
      }}
    />
  );
}
