import { useMemo } from "react";
import "./Controls.css";

const Controls = ({ propOpacity, onSizemdIconLeftTypePrimaClick }) => {
  const sizemdIconLeftTypePrimaStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div className="controls">
      <div className="input-container1">
        <div className="label24">
          <img
            className="icon25"
            loading="eager"
            alt=""
            src="/frame-7682.svg"
          />
          <div className="placeholder-text2">
            <span>{`Drop your excel sheet here or `}</span>
            <span className="browse">browse</span>
          </div>
          <div className="label-child" />
          <div className="label-item" />
        </div>
        <button
          className="sizemd-iconleft-typeprima1"
          style={sizemdIconLeftTypePrimaStyle}
          onClick={onSizemdIconLeftTypePrimaClick}
        >
          <img className="icon26" alt="" src="/icon.svg" />
          <div className="value">Upload</div>
        </button>
      </div>
    </div>
  );
};

export default Controls;
