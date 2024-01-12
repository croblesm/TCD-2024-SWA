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
