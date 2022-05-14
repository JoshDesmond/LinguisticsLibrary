const primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,
	83,89,97,101];
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
	'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let dict = {};

for (const [i,l] of letters.entries()) {
	dict[l] = primes[i];
}

const tempWords = ["hello", "hi", "howdy", "dywoh", "owdyh"];

/**
 * Hashes a word using prime-letter pairs, (such that anagrams have equal hashes).
 */
function primify(word) {
	let product = 1;
	for (c of word) {
		product = product * dict[c];
	}

	return product;
}

for (const word of tempWords) {
	console.log(`primify(${word}) = ${primify(word)}.`);
}
