'use strict';

function collectSameElements(collectionA, objectB) {
  return [...objectB.value, ...collectionA].filter((item, index, arr) => arr.indexOf(item) !== index);
}
