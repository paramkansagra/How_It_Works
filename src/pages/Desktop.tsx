import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import CryptoFlow from "../components/CryptoFlow";

const Desktop = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[50px] px-[197px] pb-20 box-border gap-[57px] leading-[normal] tracking-[normal] mq925:gap-[28px] mq925:pl-[49px] mq925:pr-[49px] mq925:box-border mq1400:pl-[98px] mq1400:pr-[98px] mq1400:box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
      <FrameComponent1 />
      <section className="self-stretch flex flex-col items-end justify-start gap-[4px] max-w-full">
        <FrameComponent />
        <CryptoFlow />
      </section>
    </div>
  );
};

export default Desktop;
