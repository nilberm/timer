import { useEffect, useState } from "react";
import { MainComponent } from "./styles";
import Form from "../components/Form";
import { Progress } from "rsuite";
import { toast } from "react-toastify";
import { countdown } from "../utils/countdown";

export interface Itimer {
  prepareTime: number;
  exerciceTime: number;
  restTime: number;
  repeatCount: number;
}

export default function MainPage() {
  const [toggleForm, setToggleForm] = useState(true);
  const [timer, setTimer] = useState<Itimer | undefined>();
  const [countdownTimer, setCountdownTimer] = useState(0);
  const [stage, setStage] = useState<"prepare" | "exercice" | "rest">(
    "prepare"
  );
  const [percent, setPercent] = useState(100);

  const stageColors: { [key in typeof stage]: string } = {
    prepare: "#ffc107",
    exercice: "#28a745",
    rest: "#17a2b8",
  };

  const startTimer = (timer: Itimer) => {
    const { prepareTime, exerciceTime, restTime, repeatCount } = timer;

    // Start the countdown timer
    const executeCountdown = (
      time: number,
      stageName: "prepare" | "exercice" | "rest",
      callback: () => void
    ) => {
      setStage(stageName);
      setCountdownTimer(time);
      setPercent(100);

      countdown(
        time,
        (timeLeft) => {
          setCountdownTimer(timeLeft);
          setPercent((timeLeft / time) * 100);
        },
        callback
      );
    };

    // Execute the countdowns with callbacks
    executeCountdown(prepareTime, "prepare", () => {
      executeCountdown(exerciceTime, "exercice", () => {
        let repeatCounter = repeatCount;
        const exerciseRestLoop = () => {
          if (repeatCounter > 1) {
            repeatCounter--;
            executeCountdown(restTime, "rest", () => {
              executeCountdown(exerciceTime, "exercice", exerciseRestLoop);
            });
          } else {
            executeCountdown(exerciceTime, "exercice", () => {
              toast.success("Timer finish!");
              setToggleForm(true);
            });
          }
        };
        exerciseRestLoop();
      });
    });
  };

  useEffect(() => {
    if (!toggleForm && timer) {
      startTimer(timer);
    }
  }, [toggleForm, timer]);

  return (
    <MainComponent>
      {/* Show form or timer */}
      {toggleForm ? (
        <Form setTimer={setTimer} setToggleForm={setToggleForm} />
      ) : (
        <div className="progress">
          <div className="time">{countdownTimer}</div>
          <div className="stage">{stage}</div>
          <Progress.Circle
            percent={percent}
            strokeColor={stageColors[stage]}
            showInfo={false}
          />
        </div>
      )}
    </MainComponent>
  );
}
