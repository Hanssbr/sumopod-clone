import ServiceCard from "./ServiceCard";

function Service() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="w-2xl">
          <h4 className="text-3xl font-bold text-center mb-4 pt-20">
            Everything you need in one platform
          </h4>
          <p className="text-xl text-gray-600 text-center mb-14">
            SumoPod offers comprehensive solutions for container and application
            management
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-7 mb-20">
        <ServiceCard
          title="Container Marketplace"
          description="Explore and purchase from our extensive container library, all verified and ready for instant deployment."
          logo="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
        />
        <ServiceCard
          title="One-Click Deployment"
          description="Deploy containers to your infrastructure with one click, eliminating complex configuration processes."
          logo="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
        <ServiceCard
          title="Automatic Updates"
          description="Keep your containers and applications up to date with automatic version updates and security patches."
          logo="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
        />
      </div>
    </>
  );
}

export default Service;
