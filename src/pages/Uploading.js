import { useCallback } from "react";
import UploadFrame from "../components/UploadFrame";
import { useNavigate } from "react-router-dom";
import "./Uploading.css";

const Uploading = () => {
  const navigate = useNavigate();

  const onSizemdIconLeftTypePrimaClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="uploading">
      <UploadFrame
        menuAlignSelf="unset"
        menuHeight="unset"
        bGAlignSelf="unset"
        fRAMEAlignSelf="unset"
      />
      <section className="uploading-inner">
        <div className="subtract-group">
          <div className="subtract1">
            <div className="base">
              <div className="upload-c-s-v1">
                <div className="chart-frame">
                  <h3 className="upload-csv1">Upload CSV</h3>
                </div>
              </div>
            </div>
            <div className="vector">
              <img
                className="mask-group-icon1"
                loading="eager"
                alt=""
                src="/vector.svg"
              />
              <img
                className="mask-group-icon2"
                loading="eager"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
          </div>
          <div className="input-container-wrapper">
            <div className="input-container">
              <div className="placeholder-text-parent">
                <img
                  className="placeholder-text-icon"
                  loading="eager"
                  alt=""
                  src="/frame-76821.svg"
                />
                <div className="placeholder-text-wrapper">
                  <div className="placeholder-text">upload-template.xlsx</div>
                </div>
                <div className="frame-child" />
                <div className="input-frame">
                  <div className="placeholder-text1">Remove</div>
                </div>
              </div>
              <div
                className="sizemd-iconleft-typeprima"
                onClick={onSizemdIconLeftTypePrimaClick}
              >
                <div className="rectangle-node" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Uploading;
