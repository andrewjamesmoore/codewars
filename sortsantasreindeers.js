"use strict";

sortReindeer = (reindeerNames) => {
  reindeerNames.sort((a, b) => a.split(" ")[1].localeCompare(b.split(" ")[1]));
  return reindeerNames;
};
