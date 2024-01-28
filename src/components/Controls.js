import { useMemo } from "react";

const Controls = ({ propOpacity, onSizemdIconLeftTypePrimaClick }) => {
  const sizemdIconLeftTypePrimaStyle = useMemo(() => {
    return {
      opacity: propOpacity,
    };
  }, [propOpacity]);

  return (
    <div className="w-[622px] flex flex-row items-start justify-start py-0 pr-[26px] pl-0 box-border max-w-full text-center text-base text-light-trunks font-paragraph-ui-type-text-2xl-s">
      <div className="flex-1 rounded-lg bg-light-gohan flex flex-col items-center justify-start p-4 box-border gap-[21px] max-w-full">
        <div className="self-stretch rounded-lg box-border flex flex-col items-center justify-start pt-[98px] pb-[84px] pr-5 pl-[21px] gap-[16px] max-w-full z-[1] border-[1px] border-dashed border-light-beerus-hover">
          <img
            className="w-9 h-9 relative"
            loading="eager"
            alt=""
            src="/frame-7682.svg"
          />
          <div className="relative leading-[24px]">
            <span>{`Drop your excel sheet here or `}</span>
            <span className="text-mediumslateblue-200">browse</span>
          </div>
          <div className="w-[564px] h-[258px] relative rounded-lg box-border hidden max-w-full border-[1px] border-dashed border-light-beerus-hover" />
          <div className="w-[464px] hidden max-w-full" />
        </div>
        <button
          className="cursor-pointer [border:none] py-4 px-5 bg-mediumslateblue-200 self-stretch rounded-lg overflow-hidden flex flex-row items-start justify-center gap-[8px] opacity-[0.4] hover:bg-mediumslateblue-100"
          style={sizemdIconLeftTypePrimaStyle}
          onClick={onSizemdIconLeftTypePrimaClick}
        >
          <img
            className="h-6 w-6 relative min-h-[24px]"
            alt=""
            src="/icon.svg"
          />
          <div className="relative text-sm leading-[24px] font-semibold font-paragraph-ui-type-text-2xl-s text-light-gohan text-left">
            Upload
          </div>
        </button>
      </div>
    </div>
  );
};

export default Controls;
