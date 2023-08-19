// import Card from 'react-bootstrap/Card';

function CardEvent({ Img, EventTitle, Date, Location, Price, Status }) {

    const truncateTitle = (title) => {
        const maxTitle = 55;
        if (title.length > maxTitle) {
          return title.substring(0, maxTitle) + "...";
        }
        return title;
    };

  return (
    <div class="w-72 bg-white border rounded-lg shadow flex flex-col">
        <img class="rounded-t-lg object-cover h-40 w-full" src={Img} alt="poster" />
        <div class="p-3">
            <h5 class="mb-2 text-base font-bold tracking-tight">
            {truncateTitle(EventTitle)}
            </h5>
            <p class="text-sm">{Date}</p>
            <p class="mb-3 text-sm">{Location}</p>
            <h6 className="text-red-300 font-bold text-lg mt-10">IDR {Price}</h6>
            <p className="text-green-400 text-sm font-bold">{Status}</p>
        </div>
    </div>
  );
}

export default CardEvent;
