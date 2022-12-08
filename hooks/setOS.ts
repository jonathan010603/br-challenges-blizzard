const setOS = (userAgent: string) => {
  let OS = "Unknown";
  if (userAgent.indexOf("Mac") != -1) OS = "MacOS";
  if (userAgent.indexOf("Win") != -1) OS = "Windows";
  if (userAgent.indexOf("Linux") != -1) OS = "Linux";

  return OS;
};

export default setOS;
