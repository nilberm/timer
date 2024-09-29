import { useState } from "react";
import { FormContainer } from "./style";
import Select from "../Select";
import { Itimer } from "../../pages";
import { toast } from "react-toastify";

interface FormProps {
  setTimer: (v: Itimer) => void;
  setToggleForm: (v: boolean) => void;
}
export default function Form({ setTimer, setToggleForm }: FormProps) {
  const [prepareTime, setPrepareTime] = useState("");
  const [exerciceTime, setExerciceTime] = useState("");
  const [restTime, setRestTime] = useState("");
  const [repeatCount, setRepeatCount] = useState("0");

  const handleStart = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !prepareTime ||
      Number(prepareTime) === 0 ||
      !exerciceTime ||
      Number(exerciceTime) === 0 ||
      !restTime ||
      Number(restTime) === 0 ||
      !repeatCount ||
      Number(repeatCount) === 0
    ) {
      toast.error("Error: All fields must be filled with valid values.");
      return;
    }

    const data: Itimer = {
      prepareTime: Number(prepareTime),
      exerciceTime: Number(exerciceTime),
      restTime: Number(restTime),
      repeatCount: Number(repeatCount),
    };

    setTimer(data);
    setToggleForm(false);
  };

  return (
    <FormContainer onSubmit={handleStart} action="">
      <h1>Timer</h1>
      <div className="input">
        <label htmlFor="prepare">Prepare</label>
        <Select id="prepare" setValue={setPrepareTime} />
      </div>

      <div className="input">
        <label htmlFor="exercice">Exercice</label>
        <Select id="exercice" setValue={setExerciceTime} />
      </div>

      <div className="input">
        <label htmlFor="rest">Rest</label>
        <Select id="rest" setValue={setRestTime} />
      </div>

      <div className="input">
        <label htmlFor="repeat">Repeat</label>
        <select
          name="repeat"
          id="repeat"
          value={repeatCount}
          onChange={(v) => setRepeatCount(v.target.value)}
          required
        >
          <option value="0" disabled>
            Select
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <button type="submit">Start</button>
    </FormContainer>
  );
}
