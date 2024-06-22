import stylex from "@stylexjs/stylex";

export const comStyles = stylex.create({
  common: {
    borderStyle: "none",
    outlineStyle: "none",
    borderRadius: "12.5px",
    fontFamily: "'Gowun Dodum'",
  },
  button: {
    color: {
      default: "#ffffff",
      ":disabled": "rgb(150, 150, 150)",
    },
    backgroundColor: {
      default: "#FFB07F",
      ":disabled": "rgb(210,210,210)",
    },
    cursor: {
      default: "pointer",
      ":disabled": "default",
    },
  },
  button2: {
    color: {
      default: "#ff6161",
      ":disabled": "rgb(150, 150, 150)",
    },
    backgroundColor: {
      default: "rgba(255, 212, 212,0.4)",
      ":disabled": "rgb(210,210,210)",
    },
    cursor: {
      default: "pointer",
      ":disabled": "default",
    },
  },
  input: {
    userSelect: "auto",
    overflow: "hidden",
    "::placeholder": {
      fontFamily: "'Gowun Dodum'",
      color: "#cfcfd0",
    },
  },
  plain: {
    width: "100vw",
    height: "100vh",
    position: 'absolute',
    overflow: "hidden",
  },
});

export const interactStyles = stylex.create({
  common: {
    willChange: "transform",
    transition: {
      default: 'background-color 0.3s ease, transform 0.8s var(--spring-easing)',
      ':active': 'background-color 0.3s ease, transform 0.25s ease',
    },
    backgroundColor: {
      default: 'transparent',
      ':not(:active):hover': 'rgba(200, 200, 200, 0.3)',
      ':active': 'rgba(200, 200, 200, 0.5)',
    },
    transform: {
      default: 'scale(1)',
      ':not(:active):hover': 'scale(1.03)',
      ':active': 'scale(0.96)',
    },
  },
  button: {
    willChange: "transform",
    transition: {
      default: 'background-color 0.4s linear, color 0.4s linear, transform 0.8s var(--spring-easing), filter 0.4s ease, box-shadow 0.4s ease',
      ':active': 'background-color 0.4s linear, color 0.4s linear, transform 0.25s ease, filter 0.25s ease, box-shadow 0.4s ease',
    },
    filter: {
      default: null,
      ":active": "brightness(0.95)",
    },
    transform: {
      default: 'scale(1)',
      ':not(:disabled):not(:active):hover': 'scale(1.03)',
      ':active': 'scale(0.96)',
    },
    boxShadow: {
      default: "5px 5px 10px rgba(120, 120, 120, 0.15), -5px -5px 10px rgba(255, 255, 255, 0.6)",
      ":not(:disabled):hover": "5px 5px 10px rgba(120, 120, 120, 0.25), -5px -5px 10px rgba(255, 255, 255, 0.95)",
      ":disabled": null,
    },
  },
  button2: {
    willChange: "transform",
    transition: {
      default: 'background-color 0.4s linear, color 0.4s linear, transform 0.8s var(--spring-easing), filter 0.4s ease, box-shadow 0.4s ease',
      ':active': 'background-color 0.4s linear, color 0.4s linear, transform 0.25s ease, filter 0.25s ease, box-shadow 0.4s ease',
    },
    filter: {
      default: null,
      ":active": "brightness(0.9)",
    },
    transform: {
      default: 'scale(1)',
      ':not(:disabled):not(:active):hover': 'scale(1.04)',
      ':active': 'scale(0.96)',
    },
    boxShadow: {
      default: "2px 2px 5px rgba(120, 120, 120, 0.1), -2px -2px 5px rgba(255, 255, 255, 0.3)",
      ":not(:disabled):hover": "2px 2px 5px rgba(120, 120, 120, 0.2), -2px -2px 5px rgba(255, 255, 255, 0.5)",
      ":disabled": null,
    },
  },
  input: {
    willChange: "transform",
    transition: {
      default: "background-color 0.4s linear, transform 0.8s var(--spring-easing), box-shadow 0.4s ease",
      ":focus-within": "background-color 0.3s linear, transform 0.3s ease, box-shadow 0.3s ease",
    },
    backgroundColor: {
      default: "#fafafa",
      ":not(:disabled):not(:focus-within):hover": "#fcfcfc",
      ":focus-within": "#ffffff",
      ":disabled": "#cfcfd0",
    },
    boxShadow: {
      default: "0px 0px 15px 0px rgba(101, 100, 124, 0.1)",
      ":not(:disabled):not(:focus-within):hover": "0px 0px 15px 0px rgba(101, 100, 124, 0.2)",
      ":focus-within": "0px 0px 15px 0px rgba(101, 100, 124, 0.25)",
      ":disabled": null,
    },
    transform: {
      default: "scale(1)",
      ":not(:disabled):not(:focus-within):hover": "scale(1.01)",
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