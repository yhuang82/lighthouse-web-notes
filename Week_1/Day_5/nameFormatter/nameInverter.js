const nameInverter = function (name) {
  if (name === undefined) {
    throw "Error";
  }
  // trim extra whitespace
  const trimmedName = name.trim();

  // if name is empty string, return empty string
  if (trimmedName === "") {
    return "";
  }

  //split the name into parts using space
  const nameParts = trimmedName.split(" ");

  // Check if the name starts with an honorific
  const honorifics = ["Mr.", "Mrs.", "Ms.", "Dr."]; // Add more if needed

  if (honorifics.includes(nameParts[0]) && nameParts.length === 2) {
    return `${nameParts[0]} ${nameParts[1]}`;
  }

  //checkthe number of parts and do something accordingly
  if (nameParts.length === 1 && honorifics.includes(nameParts[0])) {
    return "";
  } else if (nameParts.length === 1) {
    return nameParts[0];
  } else if (nameParts.length === 2) {
    return `${nameParts[1]}, ${nameParts[0]}`;
  } else {
    return `${nameParts[0]} ${nameParts[2]}, ${nameParts[1]}`;
  }

  
};

module.exports = nameInverter;
