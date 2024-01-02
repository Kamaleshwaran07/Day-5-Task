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

const parsedResume = JSON.parse(resumeJSON);

for (let key in parsedResume) {
  
  if (typeof parsedResume[key] === "object") {
    console.log(`${key}`);
    
    for (let nestedKey in parsedResume[key]) {
      console.log(`${nestedKey}: ${parsedResume[key][nestedKey]}`);
    }
  } else {
    console.log(`${key}, ${parsedResume[key]}`);
  }
}

console.log("Hobbies:");
for (let i = 0; i < parsedResume.hobbies.length; i++) {
  console.log(`  ${i + 1}. ${parsedResume.hobbies[i]}`);
}
