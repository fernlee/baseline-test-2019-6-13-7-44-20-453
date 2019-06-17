'use strict';

function collectSameElements(collectionA, objectB) {
  return [...objectB.value, ...collectionA.map((value)=> value.key)].filter((item, index, arr) => arr.indexOf(item) !== index);

}
