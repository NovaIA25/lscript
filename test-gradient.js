// Quick test to verify categoryColors is working
const { getCategoryGradient, getCategoryIcon } = require('./lib/categoryColors.ts');

console.log('Testing category color system:');
console.log('');
console.log('bases:', getCategoryGradient('bases'));
console.log('web:', getCategoryGradient('web'));
console.log('carriere:', getCategoryGradient('carriere'));
console.log('mobile:', getCategoryGradient('mobile'));
console.log('');
console.log('Icons:');
console.log('bases:', getCategoryIcon('bases'));
console.log('carriere:', getCategoryIcon('carriere'));
