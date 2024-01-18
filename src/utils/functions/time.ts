export const formatToTimeZone = (dateString: string): string => {
  // Asegúrate de que la fecha se interprete como UTC
  const date = new Date(dateString);

  // Opciones para formatear la hora en formato de 12 horas con AM/PM en UTC
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  };

  // Formatear la fecha en la zona horaria UTC
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

export const formatDuration = (duration: number): string => {
  // Ensure that duration is a non-negative integer
  if (duration < 0 || !Number.isInteger(duration)) {
    return "hh:mm";
  }

  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  // Pad the hours and minutes with leading zeros if needed
  const paddedHours = hours.toString().padStart(2, "0");
  const paddedMinutes = minutes.toString().padStart(2, "0");

  return `${paddedHours}:${paddedMinutes}`;
};
