import stylex from "@stylexjs/stylex";

export const comStyles = stylex.create({
  common: {
    borderStyle: "none",
    outlineStyle: "none",
    borderRadius: "12.5px",
    fontFamily: "'Gowun Dodum'",
  },
  input: {
    userSelect: "auto",
    overflow: "hidden",
    "::placeholder": {
      fontFamily: "'Gowun Dodum'",
      color: "#cfcfd0",
    },
  },
  disabled: {
    cursor: "default",
    pointerEvents: "none",
    opacity: 0.5,
  },
});

export const interactStyles = stylex.create({
  common: {
    willChange: "transform",
    transition: {
      default: "background-color 0.3s ease, transform 0.8s var(--spring-easing)",
      ":active": "background-color 0.3s ease, transform 0.25s ease",
      "@media (hover: none)": "background-color 0.2s ease, transform 0.3s var(--spring-mobile)",
    },
    backgroundColor: {
      default: "#fafafa",
      ":not(:active):hover": {
        default: "#fcfcfc",
        "@media (hover: none)": null,
      },
    },
    transform: {
      default: "scale(1)",
      ":not(:active):hover": {
        default: "scale(1.03)",
        "@media (hover: none)": null,
      },
      ":active": "scale(0.96)",
    },
  },
  input: {
    willChange: "transform",
    transition: {
      default: "background-color 0.4s linear, transform 0.8s var(--spring-easing), box-shadow 0.4s ease",
      ":focus-within": "background-color 0.3s linear, transform 0.3s ease, box-shadow 0.3s ease",
      "@media (hover: none)": "background-color 0.2s linear, transform 0.3s var(--spring-mobile), box-shadow 0.2s ease",
    },
    backgroundColor: {
      default: "#fafafa",
      ":not(:disabled):not(:focus-within):hover": {
        default: "#fcfcfc",
        "@media (hover: none)": null,
      },
      ":focus-within": "#ffffff",
      ":disabled": "#cfcfd0",
    },
    boxShadow: {
      default: "0px 0px 15px 0px rgba(101, 100, 124, 0.1)",
      ":not(:disabled):not(:focus-within):hover": {
        default: "0px 0px 15px 0px rgba(101, 100, 124, 0.2)",
        "@media (hover: none)": null,
      },
      ":focus-within": "0px 0px 15px 0px rgba(101, 100, 124, 0.25)",
      ":disabled": null,
    },
    transform: {
      default: "scale(1)",
      ":not(:disabled):not(:focus-within):hover": {
        default: "scale(1.01)",
        "@media (hover: none)": null,
      },
      ":focus-within": "scale(1.02)",
    },
  }
});

export const flexStyles = stylex.create({
  garo: {
    display: "flex",
    alignItems: "center",
  },
  sero: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});