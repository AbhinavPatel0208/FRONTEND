import { useMemo } from "react";
import "./UploadFrame.css";

const UploadFrame = ({
  menuAlignSelf,
  menuHeight,
  bGAlignSelf,
  fRAMEAlignSelf,
}) => {
  const uploadFrameStyle = useMemo(() => {
    return {
      alignSelf: menuAlignSelf,
      height: menuHeight,
    };
  }, [menuAlignSelf, menuHeight]);

  const menuStyle = useMemo(() => {
    return {
      alignSelf: bGAlignSelf,
    };
  }, [bGAlignSelf]);

  const fRAMEStyle = useMemo(() => {
    return {
      alignSelf: fRAMEAlignSelf,
    };
  }, [fRAMEAlignSelf]);

  return (
    <div className="upload-frame" style={uploadFrameStyle}>
      <nav className="menu" style={menuStyle}>
        <div className="bg" />
        <div className="f-r-a-m-e" style={fRAMEStyle}>
          <div className="f-r-a-m-e1">
            <div className="f-r-a-m-e2">
              <img className="subtract-icon1" alt="" src="/subtract.svg" />
              <img
                className="subtract-icon2"
                loading="eager"
                alt=""
                src="/subtract.svg"
              />
            </div>
            <h2 className="base1">Base</h2>
          </div>
        </div>
        <div className="upload-frame1">
          <div className="f-r-a-m-e3">
            <img
              className="iconlyboldcategory"
              loading="eager"
              alt=""
              src="/iconlyboldcategory@2x.png"
            />
            <div className="dashboard">Dashboard</div>
          </div>
          <div className="table-row-frame1">
            <div className="data-type-frame1">
              <div className="chip-holder-frame2">
                <img
                  className="chart-icon"
                  loading="eager"
                  alt=""
                  src="/chart@2x.png"
                />
                <div className="popover-frame" />
              </div>
              <div className="upload1">Upload</div>
            </div>
          </div>
        </div>
        <div className="upload-frame2">
          <div className="menu-frame">
            <div className="frame-frame">
              <img
                className="iconlyboldticket"
                loading="eager"
                alt=""
                src="/iconlyboldticket@2x.png"
              />
            </div>
            <div className="invoice">Invoice</div>
          </div>
        </div>
        <div className="f-r-a-m-e4">
          <div className="f-r-a-m-e5">
            <img
              className="iconlybolddocument"
              loading="eager"
              alt=""
              src="/iconlybolddocument@2x.png"
            />
            <div className="schedule">Schedule</div>
          </div>
        </div>
        <div className="f-r-a-m-e6">
          <div className="calendar-parent">
            <img
              className="calendar-icon"
              loading="eager"
              alt=""
              src="/calendar@2x.png"
            />
            <div className="calendar">Calendar</div>
          </div>
        </div>
        <div className="f-r-a-m-e7">
          <div className="iconlyboldnotification-parent">
            <img
              className="iconlyboldnotification"
              loading="eager"
              alt=""
              src="/iconlyboldnotification@2x.png"
            />
            <div className="notification">Notification</div>
          </div>
        </div>
        <div className="f-r-a-m-e8">
          <div className="iconlyboldsetting-parent">
            <img
              className="iconlyboldsetting"
              loading="eager"
              alt=""
              src="/iconlyboldsetting@2x.png"
            />
            <div className="settings">Settings</div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UploadFrame;
