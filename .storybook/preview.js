import "minireset.css";
import "../styles/globals.css";
import "../styles/tokens.css";

const styles = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "auto",
  justifyContent: "flex-start",
  alignContent: "flex-start",
  flexWrap: "wrap",
  height: "100%",
  gap: "10px 30px",
};

export const decorators = [
  (Story) => (
    <div style={styles}>
      <Story />
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
