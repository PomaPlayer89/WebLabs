function openCity(evt, cityName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
var firstc = 0;
function result1(firstc) {
	console.warn(`Ты передал ${firstc}`)
	var div = document.getElementById('task1')
	while(div.firstChild) div.removeChild(div.firstChild)
	var h3 = document.createElement('h3')
	h3.innerText = `Ты нажал ${firstc} раз`
	firstc = 0;
	div.append(h3)
}

var task21=0;
var task22=0;
function result2(){
	task21 = parseInt(document.getElementById("task21").value ) 
	task22 = parseInt(document.getElementById("task22").value ) 
	var div=document.getElementById('task2')
	while(div.firstChild) div.removeChild(div.firstChild)
	var h3 = document.createElement('h3')
	h3.innerText =`Получилось ${task21+task22}`
	div.append(h3)
}

function result3(){
    var arrray=new Array(5);
    var digit = "task3"

    for (var i = 1; i<6; i++)
    {
        console.log(digit + i)
        var elem = document.getElementById(digit+i)
        if (!isNaN(elem.value))
        {
            arrray[i-1] = parseInt(elem.value)
        }
        else
        {
            elem.value = 0;
            arrray[i-1] = 0
        }
    }

    // arrray[0]=document.getElementById("task31").value
	// arrray[1]=parseInt(document.getElementById("task32").value)
	// arrray[2]=parseInt(document.getElementById("task33").value)
	// arrray[3]=parseInt(document.getElementById("task34").value)
	// arrray[4]=parseInt(document.getElementById("task35").value)
	for(var i=0; i<5; i ++)
	if(isNaN(Number (arrray[i]))) arrray=0;
	var div=document.getElementById('task3')
	while(div.firstChild) div.removeChild(div.firstChild)
	var h3 = document.createElement('h3')
	h3.innerText =`Получилось ${arrray.map((t)=>t*t)}`
	div.append(h3)
}