function makeStory() {
    // get form values (2 points)
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var noun5 = document.getElementById('noun5').value;
    var noun6 = document.getElementById('noun6').value;
    var noun7 = document.getElementById('noun7').value;
    var verb1 = document.getElementById('verb1').value;
    var verb2 = document.getElementById('verb2').value;
    var verb3 = document.getElementById('verb3').value;
    var verb4 = document.getElementById('verb4').value;
    var verb5 = document.getElementById('verb5').value;
    var verb6 = document.getElementById('verb6').value;
    var verb7 = document.getElementById('verb7').value;
    var verb8 = document.getElementById('verb8').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var name1 = document.getElementById('name1').value;


    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "Chaos at J.L. Mann";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "One day" + noun1 + "and a group of students" + verb1 + "up to J.L. Mann. They" + verb2 + "through the doors of the school and" + verb3 + "a pie into" + noun2 + "face. Everyone was" + adjective1 + "The teachers began to" + verb4 +  "The police" + verb5 + "their way through the" + noun3 + "Students began to" + verb6 + "and the" + noun4 + "shouted and ran away.";
    var paragraph2 = "Mr. Cooper was at the scene also. He" + verb7 + "the kids and ran away to his office to do some coding" + name1 + "found Mr. Cooper and threw a" + noun5 + "at his computer. All his coding was deleted. Mr. Cooper began to" + verb8 + "and went back to observe the choas downstairs.";
    var paragraph3 = "The students began to form a" + noun6 + "to gang up against the teachers. The students began throwing" + noun7 + "at the faculty until they heard sirens in the distance." + adjective2 + "police arrived at the scene and began participating in the battle";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
document.getElementById('title').innerHTML = title;
document.getElementById('one').innerHTML = paragraph1;
document.getElementById('two').innerHTML = paragraph2;
document.getElementById('three').innerHTML = paragraph3;

}
