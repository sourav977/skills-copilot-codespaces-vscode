function skillsMember() {
    var member = document.getElementById("member").value;
    var memberDiv = document.getElementById("memberSkills");
    var memberSkills = "";
    var skills = {
        "John": ["HTML", "CSS", "JavaScript"],
        "Jane": ["PHP", "MySQL", "Python"],
        "Doe": ["Ruby", "Ruby on Rails", "C++"]
    };
    if (skills[member]) {
        for (var i = 0; i < skills[member].length; i++) {
            memberSkills += "<li>" + skills[member][i] + "</li>";
        }
        memberDiv.innerHTML = "<ul>" + memberSkills + "</ul>";
    } else {
        memberDiv.innerHTML = "Member not found";
    }
}