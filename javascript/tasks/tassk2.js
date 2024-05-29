


function dateandtime(){
    var da= new Date();
    var d = da.toLocaleDateString();
    var t = da.toLocaleTimeString();
    document.getElementById("dates").innerHTML= d + " " + t; + "<br>"}
    
    
    
    var students_grade=[60, 100,10,15,85];
    students_grade.sort(function(a,b){
        return b-a;
    })
    document.write(students_grade +"<br>");
    
    var degee=[{name:'ali',degree:80},{name:'sarah',degree:90},{name:'mohamed',degree:50}];
    
    for(var i=0;i<degee.length;i++){
    if(degee[i].degree>=90){
        document.write("more than 90"+" "+degee[i].name + "<br>");
    }}
    
    for(var i=0;i<degee.length;i++){
        if(degee[i].degree<=60){
            document.write( "less than 60"+" "+  degee[i].name + "<br>");
        }}
    
        degee.push({name:'shery',degree:58});
        for (var x=0;x<degee.length;x++){
            document.write(degee[x].name + " " + degee[x].degree + "<br>");
        }
    
        degee.pop();
        for (var p=0;p<degee.length;p++){
            document.write(degee[p].name + " " + degee[p].degree + "<br>");
        }