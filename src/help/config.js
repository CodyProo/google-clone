export const APIKEY = "AIzaSyBXEETuG2agDXrB_dfd7nIRjmF2rxi4zSE";
export const CONTEXTKEY = "41dbd0886da022ad1";
export const BASEURL = (text, startIndex = 0) => `https://www.googleapis.com/customsearch/v1?key=${APIKEY}&cx=${CONTEXTKEY}&q=${text}&num=10&start=${startIndex}`;