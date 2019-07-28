const nameInverter = function(name) {
  if (name === undefined) {
    throw 'Error';
  }
  
  const nameTrimEndSpaces = name.trim();
  const nameArray = nameTrimEndSpaces.split(' ');
  
  if (nameTrimEndSpaces === '' || (nameArray.length === 1 && nameArray.includes('Dr.', 'Mr.', 'Mrs.', 'Ms.') === true)) {
    return '';
  } else if (nameArray.length === 2 && nameArray.includes('Dr.', 'Mr.', 'Mrs.', 'Ms.') === false) {
    return `${nameArray[1]}, ${nameArray[0]}`;
  } else if (nameArray.length === 3 && nameArray.includes('Dr.', 'Mr.', 'Mrs.', 'Ms.') === true) {
    return `${nameArray[0]} ${nameArray[2]}, ${nameArray[1]}`;
  }
  
  return nameTrimEndSpaces;
};

module.exports = nameInverter;