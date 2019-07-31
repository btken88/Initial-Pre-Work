//I really struggled with understanding this exercise, I think because the directions for what the challenege is trying to achieve  are very unclear. I eventually learned how to use various combinations of bracket and dot notation to make changes to the properties and values within an object, also using the logic of if/else statements to have certain outcomes depending on the quality and content of the data.
// Setup
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [
        "1999",
        "Little Red Corvette"
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop === "tracks" && value !== "") {
    if (collection[id][prop]) {
      collection[id][prop].push(value);
    } else {
      collection[id][prop]=[value];}
  } else if (value !== "") {
    collection[id][prop] = value;
  } else {
    delete collection[id][prop];
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
