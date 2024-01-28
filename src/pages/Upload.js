import UploadFrame from "../components/UploadFrame";
import VectorFrame from "../components/VectorFrame";
import "./Upload.css";

const Upload = () => {
  return (
    <div className="upload">
      <div className="white">
        <div className="button6" />
      </div>
      <div className="upload-inner">
        <UploadFrame
          menuAlignSelf="stretch"
          menuHeight="1025px"
          bGAlignSelf="stretch"
          fRAMEAlignSelf="stretch"
        />
      </div>
      <VectorFrame />
    </div>
  );
};

export default Upload;
