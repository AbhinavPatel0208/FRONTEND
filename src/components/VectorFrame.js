import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Controls from "./Controls";
import "./VectorFrame.css";

const VectorFrame = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/uploading");
  }, [navigate]);

  return (
    <section className="vector-frame">
      <div className="mask-group-instance">
        <div className="input-container-frame">
          <div className="upload-c-s-v-text">
            <div className="upload-c-s-v-text-inner">
              <div className="upload-csv-wrapper">
                <h3 className="upload-csv2">Upload CSV</h3>
              </div>
            </div>
          </div>
          <div className="vector-shape">
            <img
              className="frame-mask-group"
              loading="eager"
              alt=""
              src="/vector2.svg"
            />
            <img
              className="mask-group-icon4"
              loading="eager"
              alt=""
              src="/mask-group@2x.png"
            />
          </div>
        </div>
        <Controls
          propOpacity="unset"
          onSizemdIconLeftTypePrimaClick={onSizemdIconLeftTypePrimaClick}
        />
      </div>
    </section>
  );
};

export default VectorFrame;
