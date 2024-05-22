import underline from "../../assets/img/underline.png";

const Subscribe = () => {
  return (
    <div className="bg-[#161618] flex items-center justify-center py-16 font-dance">
      <div className="flex flex-col justify-center items-center max-w-lg p-4">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Subscribe Now
        </h2>
        <img src={underline} alt="" />
        <p className="mb-8 text-xl text-center">
          Stay updated with the latest news and exclusive offers from Southeast
          Asia. Subscribe to our newsletter now!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center ">
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto mb-4 bg-transparent text-blue-600 sm:mb-0 sm:mr-4 p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-b-4 focus:border-b-[#3498db] transition-colors duration-300"
            />
          </form>
          <button className="btn bg-transparent text-blue-600 w-full sm:w-auto font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
