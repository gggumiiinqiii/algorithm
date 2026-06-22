const { solve } = require('./keyboard.js');

function test(name, N, K, S, expected) {
    const result = solve(N, K, S);
    const status = expected ? (result === expected ? '✓' : '✗') : '?';
    console.log(`${status} ${name}: ${result}`);
    if (expected && result !== expected) {
        console.log(`  Expected: ${expected}`);
    }
}

test('Example', 7, 2, 'LOSTKEY', 'EYEYLLOSOSTKTK');
test('N=2 AB', 2, 3, 'AB');
test('N=2 BA', 2, 2, 'BA');
test('N=3 BCA', 3, 2, 'BCA');
test('N=1 A', 1, 5, 'A');
test('N=4 ABCD', 4, 2, 'ABCD');
test('N=5 ABCDE', 5, 1, 'ABCDE');
test('N=3 ABC', 3, 3, 'ABC');
test('N=6 ABCDEF', 6, 2, 'ABCDEF');
