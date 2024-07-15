import { useMemo } from "react";
import PropTypes from "prop-types";

const FeeSubdetails = ({
  className = "",
  image,
  algorithm,
  propAlignSelf,
  propGap,
  propWidth,
}) => {
  const feeSubdetailsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      gap: propGap,
      width: propWidth,
    };
  }, [propAlignSelf, propGap, propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-start justify-start gap-[30px] text-left text-2xl-5 text-black font-inter mq925:flex-wrap ${className}`}
      style={feeSubdetailsStyle}
    >
      <img
        className="h-[70px] w-[90px] relative object-cover z-[1]"
        loading="lazy"
        alt=""
        src={image}
      />
      <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[199px]">
        <div className="self-stretch relative font-semibold z-[1] mq450:text-mid">
          {algorithm}
        </div>
      </div>
    </div>
  );
};

FeeSubdetails.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  algorithm: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
};

export default FeeSubdetails;
