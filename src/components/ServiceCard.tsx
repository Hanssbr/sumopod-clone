interface Serv {
  title: string;
  logo: string;
  description: string;
}
function ServiceCard({ title, logo, description }: Serv) {
  return (
    <>
      <div className="flex flex-col justify-start gap-10">
        <div className="w-[24rem] bg-white rounded-2xl border-2 border-gray-200 flex-col flex justify-start transition-all duration-300 hover:shadow-md">
          <div className="py-10 px-7">
            <div className="mb-7 bg-blue-100 p-3 inline-block rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 text-blue-600"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={logo} />
              </svg>
            </div>
            <p className="text-2xl font-medium mb-7">{title}</p>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
