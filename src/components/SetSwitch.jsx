import stylex from '@stylexjs/stylex';
import { createSignal } from 'solid-js';
import { comStyles, flexStyles, interactStyles } from '../common/Group.stylex';

const addStyles = stylex.create({
  box: {
    borderRadius: "14px",
    padding: "10px",
    gap: "10px",
    cursor: "pointer",
    fontSize: "15px",
  },
  switch: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "#e8eae9",
    pointerEvents: "none",
    overflow: "visible"
  },
  switchOut: {
    width: "50px",
    height: "25px",
    borderRadius: "12.5px",
    transition: {
      default: "background-color 0.3s linear, padding 1s var(--spring-easing)",
      "@media (max-width: 575px)": "background-color 0.25s linear, padding 0.6s var(--spring-mobile)",
    },
    backgroundColor: "#FBFBFB",
    padding: "1.5px 23.5px 1.5px 1.5px"
  },
  switchOutActive: {
    backgroundColor: "#E8EAE9",
    padding: "1.5px 11.5px 1.5px 1.5px"
  },
  switchOutChecked: {
    backgroundColor: "#9AC5F4",
    padding: "1.5px 1.5px 1.5px 23.5px"
  },
  switchOutCheckedActive: {
    backgroundColor: "#7faee0",
    padding: "1.5px 1.5px 1.5px 11.5px"
  },
  switchIn: {
    width: "100%",
    height: "100%",
    borderRadius: "11px",
    boxShadow: "0 0 0 0.65px rgba(0, 0, 0, 0.1), 0 2.5px 0 rgba(0, 0, 0, 0.08)",
    background: "#fdfdfd",
  },
});

export default function SetSwitch(props){
  const [active, setActive] = createSignal(false);

  return(
    <div
      {...stylex.attrs(flexStyles.garo, addStyles.box, interactStyles.common, !!props.disabled && comStyles.disabled)}
      onClick={() => {setActive(false); props.setValue();}}
      onMouseDown={()=> setActive(true)}
      onMouseLeave={()=> setActive(false)}
      onTouchStart={()=> setActive(true)}
      onTouchCancel={()=> setActive(false)}
    >
      <div 
        {...stylex.attrs(addStyles.switch, addStyles.switchOut,
          (active() && !props.value) && addStyles.switchOutActive,
          (!active() && props.value) && addStyles.switchOutChecked,
          (active() && props.value) && addStyles.switchOutCheckedActive,
        )}
      >
        <div {...stylex.attrs(addStyles.switch, addStyles.switchIn)}>
          &nbsp;
        </div>
      </div>
      {props.text}
    </div>
  );
}