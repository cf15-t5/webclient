export function truncateTitle(title) {
  const maxTitle = 55;
  if (title.length > maxTitle) {
    return title.substring(0, maxTitle) + "...";
  }
  return title;
}

export function dateToDDMonthYYYY(dateString) {
  const dateObj = new Date(dateString);
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return `${dateObj.getDate()} ${
    monthNames[dateObj.getMonth()]
  } ${dateObj.getFullYear()}`;
}

export function dateToHHMMSS(dateString, timezone) {
  const date = new Date(dateString);
  const timezoneDate = new Date(date.getTime() + timezone * 60 * 60 * 1000);
  return timezoneDate.toLocaleTimeString();
}

export function formatToIDRCurrency(number) {
  // Check if the input is a valid number
  if (isNaN(number)) {
    return "Invalid Number";
  }

  // Use the toLocaleString() function to format the number as currency
  const formattedCurrency = number.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return formattedCurrency.split(",")[0];
}

export function formatPosterURL(posterUrl) {
  return process.env.REACT_APP_SERVER_URL + posterUrl?.replace(/public/, "");
}

export function capitalizeFirstLetter(string) {
  if (string)
    return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

export function sliceAddress(address) {
  if (address) {
    const [detail, sub, city, prov] = address.split(",");
    return {
      detail: detail,
      sub: sub,
      city: city,
      prov: prov,
    };
  }
}
