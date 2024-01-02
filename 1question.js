const resume = {
  name: "Kamaleshwaran",
  qualification: {
    degree: "B.E",
    branch: "Mechanical Engineering",
    passedOut: "2021",
  },
  dateOfBirth: "25/11/1999",
  place: "Chennai",
  hobbies: ["Gaming", "Driving", "Cooking", "Design"],
};

const resumeJSON = JSON.stringify(resume);
console.log(resumeJSON);
