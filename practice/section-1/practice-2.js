'use strict';

function collectSameElements(collectionA, collectionB) {
  return [...collectionB.flat(), ...collectionA].filter((item, index, arr) => arr.indexOf(item) !== index);
}
