export function compareStrings(s1:string, s2:string) {
// The method returns: 
// 0 if both the strings are equal, 
// -1 if string 1 is sorted before string 2 
// 1 if string 2 is sorted before string 1.

  return s1 === s2 ? 0 : s1 > s2 ? 1 : -1;
}
