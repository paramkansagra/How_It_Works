import FeeSubdetails from "./FeeSubdetails";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start max-w-full text-left text-2xl-5 text-black font-inter ${className}`}
    >
      <div className="w-[1659px] bg-snow-200 box-border flex flex-row items-start justify-between pt-[42px] pb-[37px] pr-[275px] pl-[272px] max-w-full gap-[20px] border-[4px] border-solid border-maroon-100 mq925:flex-wrap mq925:pl-[68px] mq925:pr-[68px] mq925:box-border mq1400:flex-wrap mq1400:pl-[136px] mq1400:pr-[137px] mq1400:box-border mq450:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border mq1875:flex-wrap">
        <div className="h-[163px] w-[1659px] relative bg-snow-200 box-border hidden max-w-full border-[4px] border-solid border-maroon-100" />
        <div className="h-[70px] w-[380px] flex flex-col items-start justify-start max-w-full">
          <img
            className="w-[90px] flex-1 relative max-h-full object-cover z-[1]"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className="w-[426px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border max-w-full">
          <FeeSubdetails image="/image-2@2x.png" algorithm="Algorithm" />
        </div>
        <img
          className="h-[70px] w-[90px] relative object-contain z-[1]"
          alt=""
          src="/image-3@2x.png"
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
