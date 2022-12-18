const tabl = document.getElementById('tabl');
const clearbut = document.getElementById('clear-but');





function AddRow(text1,text2,text3,text4,text5)
{
    
    const item = document.createElement('tr');
  
    const itm1 = document.createElement('td');
    itm1.innerText = text1;
    tabl.append(itm1); 
    const itm2 = document.createElement('td');
    itm2.innerText = text2;
    tabl.append(itm2); 
    const itm3 = document.createElement('td');
    itm3.innerText = text3;
    tabl.append(itm3); 
    const itm4 = document.createElement('td');
    itm4.innerText = text4;
    tabl.append(itm4); 
    const itm5 = document.createElement('td');
    itm5.innerText = text5;
    tabl.append(itm5); 

    tabl.appendChild(item);

}
clearbut.onclick = () =>
{
    tabl.innerHTML = "";
};

const input1 = document.getElementById('input-text1');
const input2 = document.getElementById('input-text2');
const input3 = document.getElementById('input-text3');
const input4 = document.getElementById('input-text4');
const input5 = document.getElementById('input-text5');
const addBtn = document.getElementById('add-btn');
addBtn.onclick = () =>
{
    const text1 = input1.value;
    const text2 = input2.value;
    const text3 = input3.value;
    const text4 = input4.value;
    const text5 = input5.value;
    if (text1!=""&&text2!=""&&text3!=""&&text4!=""&&text1!="") {
        AddRow(text1,text2,text3,text4,text5);
    }
    
};  