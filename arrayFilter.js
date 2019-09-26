/**
 * https: //stackoverflow.com/questions/16747798/delete-duplicate-elements-from-an-array
 */
var unique = arr.filter(function(elem, index, self) {
	return index === self.indexOf(elem);
});
/**
 * https: //stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
 * @param {array} a
 * @return {array} seen
 */
function uniq(a) {
	var seen = {};
	return a.filter(function(item) {
		return seen.hasOwnProperty(item) ? false : (seen[item] = true);
	});
}
