const teamObj = require("./team.js");

test("it returns Meke when the team name is called", () => {
  const teamOne = teamObj("Meke", 5);

  expect(teamOne.teamName).toEqual("Meke");
});

test("it returns 5 when the level is called", () => {
  const teamTwo = teamObj("Meke", 5);

  expect(teamTwo.level).toEqual(5);
});

test("it returns 0 when the points is called", () => {
  const teamThree = teamObj("Meke", 5);

  expect(teamThree.points).toEqual(0);
});

test("it returns the expected values when the function is called", () => {
  const teamFour = teamObj("John", 3);

  expect(teamFour).toEqual({teamName: "John", level: 3, points: 0});
});
