export type BackgroundProps = {
  color1: string;
  color2: string;
};

const Background = (props: BackgroundProps) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <div
        className="absolute w-[100px] h-[100px] rounded-full blur-3xl mr-[200px] mb-[100px]"
        style={{
          background: props.color1,
        }}
      ></div>
      <div
        className="absolute w-[100px] h-[100px] rounded-full blur-3xl ml-[200px] mt-[100px]"
        style={{
          background: props.color2,
        }}
      ></div>
    </div>
  );
};

export default Background;
