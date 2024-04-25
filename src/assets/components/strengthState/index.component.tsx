import { useEffect, useState } from "react";
import "./strength.scss";

const StrengthState = ({ strength }: IStrengthState) => {
  const [strengthState, setStrengthState] = useState(strength);
  const [strengthLabel, setStrengthLabel] = useState("Too Weak");

  const getBars = () => {
    if(strengthState === 1) {
      return (
        <div className="wrap tooweak">
          <div className="bar tint "></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      );
    }
    if(strengthState === 2) {
      return (
        <div className="wrap weak">
          <div className="bar tint"></div>
          <div className="bar tint"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      );
    }
    if(strengthState === 3) {
      return (
        <div className="wrap medium">
          <div className="bar tint"></div>
          <div className="bar tint"></div>
          <div className="bar tint"></div>
          <div className="bar"></div>
        </div>
      );
    }
    if(strengthState === 4) {
      return (
        <div className="wrap strong">
          <div className="bar tint"></div>
          <div className="bar tint"></div>
          <div className="bar tint"></div>
          <div className="bar tint"></div>
        </div>
      );
    }
  };

  const setStrength = (strength: number) => {
    if(strength === 1) {
      setStrengthLabel("Too Weak");
    }
    if(strength === 2) {
      setStrengthLabel("Weak");
    }
    if(strength === 3) {
      setStrengthLabel("Medium");
    }
    if(strength === 4) {
      setStrengthLabel("Strong");
    }
  }

  useEffect(() => {
    setStrengthState(strength);
    getBars()
  }, [strength]);
  useEffect(() => {
    setStrength(strengthState)
  }, [strengthState]);

  return (
    <div className="strength-wrap">
      <span className="strengh-label">Strength</span>
      <div className="state-wrap">
        <h4>{strengthLabel}</h4>
        {getBars()}
      </div>
    </div>
  );
};

export default StrengthState;

interface IStrengthState {
  strength: number;
}
