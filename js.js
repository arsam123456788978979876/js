var filimo=[
    {
        name:"bradppit",
        imageUrl:"https://static.cdn.asset.filimo.com/flmt/rvw_cast_616_168-s.jpg",
        heIsCarector:true,
        link:"https://en.wikipedia.org/wiki/Brad_Pitt",
    },
    {
        name:"Robert Downey Jr.",
        imageUrl:"https://static.cdn.asset.filimo.com/flmt/rvw_cast_641_474-s.jpg",
        heIsCarector:true,
        link:"https://www.filimo.com/crew/Robert-Downey-Jr",
    },
    {
        name:"Gwyneth Paltrow",
        imageUrl:"https://static.cdn.asset.filimo.com/flmt/rvw_cast_2572_1-s.jpg",
        heIsCarector:true,
        link:"https://www.filimo.com/crew/Gwyneth-Paltrow",
    },
    {
        name:"Jeff Bridges",
        imageUrl:"https://static.cdn.asset.filimo.com/flmt/rvw_cast_1457_1-s.jpg",
        heIsCarector:true,
        link:"https://www.filimo.com/crew/Jeff-Bridges",
    },
    {
        name:"Terrence Howard",
        imageUrl:"https://static.cdn.asset.filimo.com/flmt/rvw_cast_10182_1-s.jpg",
        heIsCarector:true,
        link:"https://www.filimo.com/crew/Terrence-Howard",
    },
    {
        name:"Jeremy Piven",
        imageUrl:"https://static.cdn.asset.filimo.com/flmt/rvw_cast_10484_1-s.jpg",
        heIsCarector:true,
        link:"https://www.filimo.com/crew/Jeremy-Piven",
    },
]
var result="<ul>"
for(var i=0; i<filimo.length;i++){
    result += "<a href=" + filimo[i].link  + ">" + "<li>" +  "<img src=" +filimo[i].imageUrl +"/>"+ "<h2>" + filimo[i].name  + "</h2>" + "</li>" + "</a>"
}
result += "</ul>"
document.getElementById("part1").innerHTML  = result