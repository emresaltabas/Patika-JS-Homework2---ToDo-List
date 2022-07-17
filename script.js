/*Tasks:
1. + Listeye boş karakter eklenemiyor. 
2. + Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
3. + Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlaya bir fonksiyon, 
4. + Yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
5. + Element silmeyi sağlayan bir fonksiyon olması gerekiyor
6. + Element eklendiğinde ve hata verirken sağ üstte doğru uyarı gösterilsin.
7. + Yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağla.
*/

let input=document.getElementById("task");
let ulDOM=document.getElementById("list");
let liCurrent=document.querySelectorAll("li");
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
localStorage.setItem('items', JSON.stringify(itemsArray));
let data=JSON.parse(localStorage.getItem('items'))



//Default yapılacaklar listesine "yapıldı" özelliği eklendi
for(let i=0; i<liCurrent.length; i++){
    liCurrent[i]
    liCurrent[i].addEventListener("click",function(){
    liCurrent[i].classList.toggle("checked")

    })
}

//Default yapılacaklar listesine "X" ikonu eklendi ve "X" tıklandığında itemı silinebiliyor.
for(let i=0; i<liCurrent.length; i++){
    let iCurrent=document.createElement("i");
    iCurrent.setAttribute("class", "fa-solid fa-xmark");
    iCurrent.classList.add("close");
    iCurrent.addEventListener("click",function(){
        liCurrent[i].remove()
    })
    liCurrent[i].appendChild(iCurrent);
}

//"Onclick" metoduyla, yeni "li" ekleyen, "yapıldı" classını aktif eden, "X" ikonu ekleyen, "X" tıklandığında itemı silen fonksiyon
function newElement(){
    if(input.value.length > 0 && input.value[0]!==" "){
        $(".success").toast("show");//Başarılı ekleme yapıldığında olumlu toast devreye giriyor.
        let li=document.createElement("li");
        li.textContent=input.value;
        let icon=document.createElement("i");
        icon.setAttribute("class", "fa-solid fa-xmark");
        icon.classList.add("close");
        icon.addEventListener("click",function(){
            li.remove();
            })
        li.appendChild(icon);
        li.addEventListener("click",function(){
            li.classList.toggle("checked")  
            })
        ulDOM.appendChild(li);
        itemsArray.push(input.value)
        localStorage.setItem("items",JSON.stringify(itemsArray))//localstorage'e kaydedildi
        input.value="";
    }
    else{
        $(".error").toast("show");//Boş karakter veya hiçbirşey yazılmadan ekleme yapıldığında error toast devreye giriyor.
        input.value="";
    }
    }





