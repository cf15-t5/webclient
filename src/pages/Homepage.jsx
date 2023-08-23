import imageHome from "../assets/imgHomepage.png";

import EventList from "../Lists/EventList";

function Homepage() {
  return (
    <section className="h-[80vh]">
      <img
        src={imageHome}
        className="h-2/4 w-full object-cover object-center"
        alt="poster"
      />
      <div className="w-screen relative">
        <div className="bg-white w-full md:absolute mx-auto md:left-40 md:right-40 md:-top-12 md:rounded-lg md:w-fit ">
          <form className="flex gap-5 p-5 flex-wrap md:flex-nowrap">
            <div className="flex-grow">
              <label
                for="nameEvent"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Nama Event
              </label>
              <input
                type="text"
                id="nameEvent"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d"
              />
            </div>
            <div className="flex-grow">
              <label
                for="category"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Kategori
              </label>
              <select
                defaultValue={null}
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option >pilih kategori</option>
                <option value="US">United States</option>
              </select>
            </div>
            <div className="flex-grow">
              <label
                for="date"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tanggal
              </label>
              <input
                type="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 d"
              />
            </div>
            <div className="flex-grow">
              <label
                for="location"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Kategori
              </label>
              <select
                defaultValue={null}
                id="location"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              >
                <option >pilih kategori</option>
                <option value="US">United States</option>
              </select>
            </div>
          </form>
        </div>
      </div>
      <div className="md:px-16 py-3 md:py-20 bg-gray-200">
        <EventList/>
      </div>
    </section>
  );
}
export default Homepage;
