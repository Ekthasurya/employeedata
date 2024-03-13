// fill in javascript code here
var arr =[];

var form = document.querySelector("form")
form.addEventListener("submit",function(){
    formData()
})

function formData(){
    console.log(event)
    event.preventDefault()
    var name = document.getElementById("name").value
    var employeeid = document.getElementById("employeeID").value
    var department = document.getElementById("department").value
    var exp = document.getElementById("exp").value
    var email = document.getElementById("email").value
    var mbl = document.getElementById("mbl").value
      
    var obj ={
        name : name,
        employeeid: employeeid,
        department: department,
        exp :exp,
        email: email,
        mbl :mbl
    }
    arr.push(obj)

   displayData(arr);
    
}

function displayData(arr){
    document.querySelector("tbody").innerHTML="";
    arr.forEach(function(ele,i){
        var tr = document.createElement("tr")
        var  td1 = document.createElement("td")
        td1.textContent = ele.name;
        var  td2 = document.createElement("td")
        td2.textContent = ele.employeeid;
        var  td3 = document.createElement("td")
        td3.textContent = ele.department;
        var  td4 = document.createElement("td")
        td4.textContent = ele.exp;
        var  td5 = document.createElement("td")
        td5.textContent = ele.email;
        var  td6 = document.createElement("td")
        td6.textContent = ele.mbl;
        var td7 = document.createElement("td")
        // var h1 = "senior"
        // var h2 = "junior"
        // var h3 = "freshers"
        if(ele.exp >5){
            td7.textContent ="Senior"
        }
        else if( ele.exp >=2 && exp<=5){
            td7.textContent ="Junior"
        }
        else if(ele.exp>=1){
            td7.textContent ="Fresher"
        }
        var btn = document.createElement("button");
        btn.textContent = "Delete"

        btn.addEventListener("click",function(){
            deleteData(i)
        })
        function deleteData(i){
          arr.splice(i,1)
          displayData(arr)
        }
         
        // var car = document.querySelector("tbody")
        // car.append(tr)
        tr.append(td1,td2,td3,td4,td5,td6,td7,btn)
       // tbody.append(tr)
       document.querySelector("tbody").append(tr)
    })
}