import Image from "next/image";

export default function Hero(){
    return(
        <section className="bg-gray-200 flex flex-col md:flex-row justify-between items-center px-8 py-16 md:px-16 lg:px-24">
      <div className="w-full md:w-1/2 md:text-left text-center mb-8 md:mb-0">
        <h1 className="text-2xl lg:text-4xl font-semi-bold text-gray-900 mb-4">
          Welcome to The Car Shop
        </h1>
        <p className="text-md lg:text-xl text-gray-600 mb-6">
            Explore the Finest Cars, Making Your Lifestyle Luxurious
        </p>
        <button className="bg-black text-white px-6 py-3 font-medium rounded-lg hover:bg-blue-600">
          Start Exploring!
        </button>
      </div>

      <div className="w-full md:w-1/2 px-4">
        <Image
          src="/images/cars.jpg"
          alt="Cars"
          width={600}
          height={400}
          className=" w-{600} h-{400} shadow-lg rounded-lg"
        />
      </div>
    </section>
  )
};