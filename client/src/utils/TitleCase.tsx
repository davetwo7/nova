export default function titleCase(str) {
  return str.replace(/(^|\W)(\w)/g, function(match) {
      return match.toUpperCase();
  });
}