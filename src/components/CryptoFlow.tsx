import FeeSubdetails from "./FeeSubdetails";
import PropTypes from "prop-types";

const CryptoFlow = ({ className = "" }) => {
  return (
    <div
      className={`w-[1620px] flex flex-col items-end justify-start max-w-full text-left text-2xl-5 text-black font-inter ${className}`}
    >
      <div className="self-stretch flex flex-row items-end justify-start [row-gap:20px] max-w-full mq1875:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[74px] max-w-full mq925:gap-[18px] mq1400:gap-[37px] mq1400:min-w-full">
          <div className="w-[567px] flex flex-row items-start justify-start relative max-w-full">
            <img
              className="h-[152px] w-[29.5px] absolute !m-[0] bottom-[-74px] left-[203px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/arrow-4.svg"
            />
            <div className="flex-1 flex flex-row items-start justify-end max-w-full mq1875:flex-1">
              <div className="w-[306px] relative font-semibold flex items-center shrink-0 mq450:text-mid">
                (-) Fiat Deposit Fee
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-[12px] max-w-full mq1400:flex-wrap">
            <div className="w-[434px] bg-snow-200 box-border flex flex-col items-start justify-start pt-[22px] px-[106px] pb-[49px] min-w-[434px] max-w-full border-[0px] border-solid border-maroon-100 mq925:pt-5 mq925:px-[53px] mq925:pb-8 mq925:box-border mq925:min-w-full mq1400:flex-1 mq450:pl-5 mq450:pr-5 mq450:box-border">
              <img
                className="w-[434px] h-[473px] relative hidden max-w-full z-[1]"
                alt=""
                src="/rectangle-2.svg"
              />
              <div className="w-[417px] flex flex-col items-start justify-start gap-[12px] max-w-[188%] shrink-0">
                <div className="flex flex-row items-start justify-start py-0 px-[52px]">
                  <img
                    className="h-[70px] w-[90px] relative object-cover z-[1]"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
                <div className="self-stretch h-[302.5px] relative">
                  <div className="absolute top-[62px] left-[111px] font-semibold flex items-center w-[306px] h-[62px] z-[1] mq450:text-mid">
                    (-)Trading Fee Buy
                  </div>
                  <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-[194px]">
                    <div className="absolute top-[145.5px] left-[0px] bg-snow-200 w-[194px] h-[157px] z-[1]">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full hidden"
                        alt=""
                        src="/rectangle-4.svg"
                      />
                      <img
                        className="absolute top-[35.5px] left-[67px] w-[60px] h-[88px] object-contain z-[2]"
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <img
                      className="absolute top-[0px] left-[97px] w-[29.5px] h-[146px] object-contain z-[2]"
                      loading="lazy"
                      alt=""
                      src="/arrow-8.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-2 mt-[-8.5px]">
                <div className="relative font-semibold z-[2] mq450:text-mid">
                  Cryptocurrency
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[34px] min-w-[454px] max-w-full mq925:gap-[17px] mq925:min-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="w-[583px] h-[162px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                  <div className="self-stretch w-px relative box-border border-r-[1px] border-dashed border-black" />
                </div>
                <div className="self-stretch flex flex-row items-start justify-center gap-[34px] max-w-full mq925:flex-wrap mq925:gap-[17px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border min-w-[220px] max-w-full">
                    <div className="self-stretch h-[103px] relative">
                      <img
                        className="absolute top-[15px] left-[261px] w-[60px] h-[88px] object-contain"
                        alt=""
                        src="/image-5@2x.png"
                      />
                      <div className="absolute top-[0px] left-[0px] w-full flex flex-col items-start justify-start">
                        <div className="self-stretch h-[59px] flex flex-row items-start justify-start py-0 pr-0 pl-[33px] box-border">
                          <div className="h-[62px] flex-1 relative font-semibold flex items-center z-[2] mq450:text-mid">
                            (-)Withdrawal Fee
                          </div>
                        </div>
                        <img
                          className="w-[242px] h-[22.1px] relative"
                          loading="lazy"
                          alt=""
                          src="/arrow-6.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[326px] flex flex-col items-start justify-start gap-[36px] max-w-full mq450:gap-[18px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5">
                      <div className="flex-1 relative font-semibold z-[1] mq450:text-mid">
                        (-)Deposit Fee
                      </div>
                    </div>
                    <img
                      className="w-[218px] h-[22.1px] relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/arrow-7.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[583px] h-[162px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
                <div className="self-stretch w-px relative [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] box-border border-r-[1px] border-dashed border-black" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[583px] flex flex-col items-start justify-end pt-0 px-0 pb-[13px] box-border min-w-[583px] max-w-full ml-[-108px] mq1400:min-w-full mq1400:ml-0 mq1875:flex-1">
          <div className="self-stretch flex flex-col items-end justify-start max-w-full">
            <FeeSubdetails
              image="/arrow-5.svg"
              algorithm="(-) Fiat Withrawal Fee"
              propAlignSelf="unset"
              propGap="49px"
              propWidth="356px"
            />
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <div className="w-[445px] flex flex-row items-start justify-start relative max-w-full">
                <div className="w-[306px] absolute !m-[0] top-[125px] right-[-92px] font-semibold flex items-center z-[1] mq450:text-mid">
                  (-)Trading Fee Sell
                </div>
                <div className="flex-1 bg-snow-200 box-border flex flex-col items-center justify-start pt-3 pb-[31px] pr-5 pl-[31px] gap-[14px] max-w-full border-[4px] border-solid border-maroon-100 mq450:pt-32 mq450:pb-5 mq450:box-border">
                  <div className="w-[445px] h-[460px] relative bg-snow-200 box-border hidden max-w-full border-[4px] border-solid border-maroon-100" />
                  <div className="w-[194px] flex flex-row items-start justify-start py-0 pr-14 pl-12 box-border">
                    <div className="flex-1 flex flex-col items-end justify-start gap-[3px]">
                      <img
                        className="self-stretch h-[70px] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                        alt=""
                        src="/image-1@2x.png"
                      />
                      <div className="flex flex-row items-start justify-end py-0 px-4">
                        <img
                          className="h-[146px] w-[29.5px] relative object-contain z-[2]"
                          loading="lazy"
                          alt=""
                          src="/arrow-9.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[194px] flex flex-col items-start justify-start">
                    <div className="self-stretch bg-snow-200 flex flex-row items-start justify-start pt-[31px] pb-7 pr-[60px] pl-[66px] z-[1] border-[4px] border-solid border-maroon-100">
                      <div className="h-[157px] w-[194px] relative bg-snow-200 box-border hidden border-[4px] border-solid border-maroon-100" />
                      <img
                        className="h-[88px] w-[60px] relative object-contain z-[2]"
                        alt=""
                        src="/image-5@2x.png"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 px-1.5 mt-[-9px]">
                      <div className="relative font-semibold z-[2] mq450:text-mid">
                        Cryptocurrency
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1597px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="w-[1387px] flex flex-row items-start justify-between gap-[20px] max-w-full mq925:flex-wrap">
          <div className="w-[306px] relative font-semibold flex items-center shrink-0 z-[1] mq450:text-mid">
            Exchange 1
          </div>
          <div className="w-[306px] relative font-semibold flex items-center shrink-0 mq450:text-mid">
            Exchange 2
          </div>
        </div>
      </div>
    </div>
  );
};

CryptoFlow.propTypes = {
  className: PropTypes.string,
};

export default CryptoFlow;
