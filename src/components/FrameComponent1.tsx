import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`w-[1619px] flex flex-row items-start justify-end py-0 px-[77px] box-border max-w-full text-left text-2xl-5 text-black font-inter mq1400:pl-[38px] mq1400:pr-[38px] mq1400:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[51px] max-w-full mq925:gap-[25px]">
        <div className="w-[1317px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <img
            className="h-[95px] w-[85px] relative object-cover"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px]">
          <div className="w-64 flex flex-row items-start justify-start relative">
            <img
              className="h-[164px] w-[513px] absolute !m-[0] right-[-385px] bottom-[-106px] object-contain"
              loading="lazy"
              alt=""
              src="/arrow-3.svg"
            />
            <div className="flex-1 relative font-semibold whitespace-nowrap z-[1]">
              Fiat money (Deposit)
            </div>
          </div>
          <div className="w-[691px] flex flex-row items-start justify-start gap-[38px] max-w-full mq925:gap-[19px]">
            <div className="w-[292px] flex flex-col items-start justify-start pt-7 px-0 pb-0 box-border">
              <div className="self-stretch flex flex-row items-start justify-start relative">
                <img
                  className="h-[169.7px] w-[533.2px] absolute !m-[0] right-[-145.2px] bottom-[-60.7px] object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/arrow-2.svg"
                />
                <div className="flex-1 bg-snow-100 flex flex-row items-start justify-start pt-[3px] px-2 pb-4 whitespace-nowrap z-[2] border-[1px] border-solid border-maroon-200">
                  <div className="h-[49px] w-[292px] relative bg-snow-100 box-border hidden border-[1px] border-solid border-maroon-200" />
                  <div className="flex-1 relative font-semibold z-[3]">
                    30% Tax on Capital Gain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 relative font-semibold inline-block whitespace-nowrap max-w-full z-[2]">
              Fiat Money (Deposit + Profit)
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
