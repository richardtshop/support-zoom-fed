# Notes

```js
const oldUrl = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&generator=search&exchars=${extractLength}&exlimit=${maxResults}&exintro&exsectionformat=plain&gsrlimit=${maxResults}&origin=_&gsrsearch=${searchItem}&gsrprop=snippet``https://en.wikipedia.org/w/api.php
  ?action=query // Query
  &format=json // Format to return
  &prop=extracts // Get article extracts
  &generator=search // Full text sear=ch
  &utf8=1 // utf8 encoded
  &exchars=${extractLength}  // Length of extract
  &exlimit=${maxResults} // Max extracts to return
  &exintro=1 // only return content from intro
  &exsectionformat=plain // Extract formatting
  &gsrlimit=${maxResults} // How many total results to return
  &origin=* // Allow cross origin request
  &gsrsearch=${searchItem}`; // Search for titles matching this value
```
