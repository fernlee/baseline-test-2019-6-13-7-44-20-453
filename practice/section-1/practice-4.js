'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.map((value)=> value.key).filter(item => objectB.value.indexOf(item) > -1);
}
