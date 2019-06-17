'use strict';

function collectSameElements(collectionA, collectionB) {
  return [...collectionB, ...collectionA].filter((item, index, arr) => arr.indexOf(item) !== index);
}
