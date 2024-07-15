function addnewwefield() {
    //console.log("adding new field");

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');


    weOb.insertBefore(newNode, weAddButtonOb);
}

function addnewaqfield() {

    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');

    let weOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');

    weOb.insertBefore(newNode, aqAddButtonOb)

}



function generateresume() {

    
    let namefield=document.getElementById('namefield').value;
    let name1t=document.getElementById('name1t')

    name1t.innerHTML = namefield;
    
    document.getElementById('name2t').innerHTML = namefield;

   document.getElementById("contactt").innerHTML = document.getElementById('contactfield').value;
   document.getElementById("addresst").innerHTML = document.getElementById('addressfield').value;

   document.getElementById("fbt").innerHTML = document.getElementById('fbfield').value;
   document.getElementById("instat").innerHTML = document.getElementById('instafield').value;
   document.getElementById("linkedt").innerHTML = document.getElementById('linkedfield').value;



   document.getElementById("obt").innerHTML = document.getElementById('Objectivefield').value;

   let wes = document.getElementsByClassName('wefield');
   let str = "";

   for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
   }

   document.getElementById('wet').innerHTML = str;

   let aqs = document.getElementsByClassName('eqfield');
   let str1 = "";

   for (let e of aqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
   }

   document.getElementById('aqt').innerHTML = str1;

   document.getElementById('RB').style.display='none';
   document.getElementById('RT').style.display='block';
   

   let file=document.getElementById('imgf').files[0];
    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onloadend = function() {
        document.getElementById('imgt').src = reader.result;
    };

    



}

function PrintResume() {
    window.print();

}