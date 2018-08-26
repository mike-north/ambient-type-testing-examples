import extinguish from 'ambient-type-testing-examples';

const returnVal = extinguish(30 /*degrees*/, 45 /*degrees*/, 1000 /* kPa */); // $ExpectType Promise<void>
