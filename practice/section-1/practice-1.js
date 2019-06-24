'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(item => collectionB.indexOf(item) > -1);
}
