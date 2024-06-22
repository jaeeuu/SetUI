import stylex from '@stylexjs/stylex';
import { comStyles, flexStyles, interactStyles } from './common/Group.stylex';
import { createSignal } from 'solid-js';
import SetSwitch from './components/SetSwitch';
import SetCheckbox from './components/SetCheckbox';

const addStyles = stylex.create({
  root: {
    width: "100vw",
  },
  box: {
    margin: "20px",
    padding: "100px 20px 100px 20px",
    gap: "30px",
    borderRadius: "15px",
    background: "linear-gradient(120deg, rgba(254,247,243,1) 0%, rgba(249,241,250,1) 15%, rgba(237,245,254,1) 50%, rgba(238,251,243,1) 100%)",
  },
  text: {
    fontFamily: "'SF Font'",
    fontSize: "26px",
    color: "#666",
    textAlign: "center",
    wordBreak: "keep-all",
    paddingBottom: "40px",
  },
  input: {
    width: "200px",
    height: "45px",
    paddingLeft: "20px",
    paddingRight: "20px",
  }
});

export default function App() {
  const [switchValue, setSwitchValue] = createSignal(false);
  const [checkboxValue, setCheckboxValue] = createSignal(false);

  return (
    <div {...stylex.attrs(addStyles.root)}>
      <div {...stylex.attrs(flexStyles.sero, addStyles.box)}>
        <span {...stylex.attrs(addStyles.text)}>SetUI : Solid & Fluent UI Framework</span>
        <SetSwitch value={switchValue()} setValue={() => setSwitchValue((prev) => !prev)} text="Normal Switch" />
        <SetSwitch value={false} setValue={() => true} text="Disabled Switch" disabled={true} />
        <SetCheckbox isChecked={checkboxValue} setIsChecked={setCheckboxValue} text="Normal Checkbox" />
        <input type="text" placeholder="Normal Input" {...stylex.attrs(comStyles.common, comStyles.input, interactStyles.input, addStyles.input)} />
      </div>
    </div>
  );
}