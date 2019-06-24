'use strict';

function collectSameElements(collectionA, objectB) {
  return collectionA.filter(item => objectB.value.indexOf(item) > -1);
}
