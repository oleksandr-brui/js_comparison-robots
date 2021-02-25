'use strict';

const robot1 = {
  serialNo: 1234,
  chipVer: 12,
  wheels: 2,
};

const robot2 = {
  serialNo: 142,
  chipVer: 15,
  wheels: 1,
};

delete robot1.serialNo;
delete robot2.serialNo;

const robot1EntriesString = Object.entries(robot1).sort().join();
const robot2EntriesString = Object.entries(robot2).sort().join();

console.log(robot1EntriesString);
console.log(robot2EntriesString);

if (robot1EntriesString == robot2EntriesString) {
  console.log(true);
} else {
  console.log(false);
}