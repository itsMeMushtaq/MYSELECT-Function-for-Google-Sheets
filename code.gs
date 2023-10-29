/**
 * Converts Human Readable sqlString into QUERY() Understandable Column Names
 * @param {sqlString} input Type-in the Column Names in [Column_Name].
 * @param {headerRange} input Type-in the No. of Rows for Header Range.
 * @return Human Readable sqlString into QUERY() Understandable Column Names.
 * @customfunction
*/
function MYSELECT(sqlString, headerRange) {
  let text = sqlString;
  let headers = headerRange[0];

  let results = text.matchAll(/\[.*?\]/g);
  let matches = [...results].map(match => match[0]);
  let uniqueMatches = [...new Set(matches)];
  let position, regExpText;

  uniqueMatches.forEach(match => {
    position = headers.indexOf(match.slice(1, -1));
    if (position !== -1) {
      regExpText = `\\[${ match.slice(1, -1) }\\]`;
      text = text.replace(new RegExp(regExpText, "g"), `Col${position + 1}`);
    }
  });
  return text;
} // end of MYSELECT
