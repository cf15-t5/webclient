import imageHome from "../assets/imgHomepage.png";
import CardEvent from "../components/CardEvent";

import imageEvent1 from "../assets/exposter.png";
import imageEvent2 from "../assets/imgHomepage.png";
import imageEvent3 from "../assets/exposter2.png";
import imageEvent4 from "../assets/exposter3.jpeg";
import imageEvent5 from "../assets/exposter4.jpeg";
import { NavLink } from "react-router-dom";

function Homepage() {
  const EventData = [
    {
      id:1,
      Img: imageEvent1,
      EventTitle:
        "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG sdakkdkashdkhaskd haskhdjkashdjkash jkhdkjashdkjashjkdhasjkhdkjashdkh as",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
    {
      id:2,
      Img: imageEvent2,
      EventTitle: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
    {
      id:3,
      Img: imageEvent3,
      EventTitle: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
    {
      id:4,
      Img: imageEvent4,
      EventTitle: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
    {
      id:5,
      Img: imageEvent5,
      EventTitle: "DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date: "19 Agt 2023",
      Location: "Bandung",
      Price: "200.000",
      Status: "Tersedia Sekarang",
    },
  ];
  return (
    <section style={{ height: "80vh" }}>
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
      <div className="md:px-16 py-3 md:py-20">
        <div className="flex flex-wrap justify-center gap-5">
          {EventData.map((event) => {
            return (
              <NavLink to={"/eventDetail"} key={event.id}>
                <CardEvent {...event} />
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Homepage;
