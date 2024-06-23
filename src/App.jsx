import stylex from '@stylexjs/stylex';
import { comStyles, flexStyles, interactStyles } from './common/Group.stylex';
import { createSignal } from 'solid-js';
import SetSwitch from './components/SetSwitch';
import SetCheckbox from './components/SetCheckbox';

const addStyles = stylex.create({
  root: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(120deg, rgba(254,247,243,1) 0%, rgba(249,241,250,1) 15%, rgba(237,245,254,1) 50%, rgba(238,251,243,1) 100%)",
    padding: "20px",
  },
  box: {
    padding: "100px 20px 100px 20px",
    gap: "30px",
    borderRadius: "20px",
    backgroundColor: "rgba(255,255,255,0.35)",
    backdropFilter: "blur(60px)",
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
    fontSize: "15px",
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
        <SetCheckbox value={checkboxValue()} setValue={() => setCheckboxValue((prev) => !prev)} text="Normal Checkbox" />
        <SetCheckbox value={false} setValue={() => true} text="Disabled Checkbox" disabled={true} />
        <input type="text" placeholder="Normal Input" {...stylex.attrs(comStyles.common, comStyles.input, interactStyles.input, addStyles.input)} />
        <input type="text" placeholder="Disabled Input" {...stylex.attrs(comStyles.common, comStyles.input, interactStyles.input, addStyles.input, comStyles.disabled)} />
      </div>
    </div>
  );
}