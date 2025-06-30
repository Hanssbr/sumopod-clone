import GetStarted from "./GetStarted";

function Greeting() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 mx-auto min-h-screen w-full">
      <div className="text-5xl md:text-6xl lg:text-8xl font-bold text-center px-4">
        <h1>
          <span className="text-blue-600">Deploy your App</span> <br /> in 15
          Seconds!
        </h1>
      </div>
      <GetStarted />
    </div>
  );
}

export default Greeting;
