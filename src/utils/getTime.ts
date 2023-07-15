export const timeFormat = (time: any) => {
  const dateTime = new Date(time);

  let hours = dateTime.getUTCHours();
  const minutes = dateTime.getUTCMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  const formattedTime = `${hours}:${minutes
    .toString()
    .padStart(2, "0")} ${amOrPm}`;

  const year = dateTime.getUTCFullYear();
  const month = dateTime.getUTCMonth() + 1;
  const date = dateTime.getUTCDate();

  const mainDate = `${month}-${date}-${year}`;
  return {
    mainDate,
    formattedTime,
  };
};
