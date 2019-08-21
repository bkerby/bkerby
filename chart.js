var ctx = document.getElementById("myChart");

var skills = [];
var skillLevels = [];
var colors = [];

var skillList = [
    { skillName: "Java",                  skillLevel: 5, skillColor: "#3F51B5" },
    { skillName: "C++",                   skillLevel: 2, skillColor: "#3F51B5" },
    { skillName: "JavaScript/TypeScript", skillLevel: 5, skillColor: "#3F51B5" },
    { skillName: "SQL",                   skillLevel: 3, skillColor: "#3F51B5" },
    { skillName: "Phyton",                skillLevel: 2, skillColor: "#3F51B5" },
    { skillName: "Angular 6+",            skillLevel: 5, skillColor: "#3F51B5" },
    { skillName: "Ionic 4+",              skillLevel: 4, skillColor: "#3F51B5" },
    { skillName: "Stencil",               skillLevel: 3, skillColor: "#3F51B5" },
    { skillName: "Spring Boot",           skillLevel: 3, skillColor: "#3F51B5" },
    { skillName: "myBatis",               skillLevel: 2, skillColor: "#3F51B5" },
    { skillName: "Github",                skillLevel: 5, skillColor: "#3F51B5" },
    { skillName: "Gitlab",                skillLevel: 4, skillColor: "#3F51B5" },
    { skillName: "SVN",                   skillLevel: 3, skillColor: "#3F51B5" },
    { skillName: "Microsoft Office",      skillLevel: 5, skillColor: "#3F51B5" },
    { skillName: "Google Firebase",       skillLevel: 3, skillColor: "#3F51B5" },
    { skillName: "REST Service Tech",     skillLevel: 2, skillColor: "#3F51B5" },
    { skillName: "Web Component Tech",    skillLevel: 3, skillColor: "#3F51B5" },
]

skillList.forEach((skill) => {
    skills.push(skill.skillName);
    skillLevels.push(skill.skillLevel);
    colors.push(skill.skillColor);
});

var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: skills,
        datasets: [{
            label: 'Skill Level',
            data: skillLevels,
            backgroundColor: colors,
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Skills Chart'
        },
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                defaultFontSize: 16
            }],
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'Skill Level'
                },
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});