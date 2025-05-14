const btn = document.querySelector('button');  
const totalPriceElement = document.getElementById('totalPrice'); // عنصر نمایش مجموع  

btn.addEventListener('click', () => {  
    const name = document.getElementById('input_name');  
    const price = document.getElementById('input_price');  
    const count = document.getElementById('input_count');  

    const tbody = document.querySelector('tbody');  
    const tr = document.createElement('tr');  

    const tdSharp = document.createElement('td');  
    const tdName = document.createElement('td');  
    const tdPrice = document.createElement('td');  
    const tdCount = document.createElement('td');  
    const tdTotalPrice = document.createElement('td');  
    const op= document.createElement('td');

    // محاسبه تعداد ردیف  
    tdSharp.append(tbody.childElementCount + 1);  
    tdName.append(name.value);  
    
    // استفاده از parseFloat برای قیمت  
    const priceValue = parseFloat(price.value);  
    const countValue = parseInt(count.value);  
    
    tdPrice.append(priceValue.toLocaleString("en-US"));  
    tdCount.append(countValue.toLocaleString("en-US"));  
    
    // محاسبه قیمت کل  
    const totalPrice = priceValue * countValue;  
    tdTotalPrice.append(totalPrice.toLocaleString("en-US")); 

    btnUpdate = document.createElement('button');
    btnUpdate.id = "btnUpdate";
    btnDelete = document.createElement('button');
    btnDelete.id = "btnDelete";

    btnUpdate.innerText = "Edit";
    btnDelete.innerText = "Delete";
    btnUpdate.classList.add('btnUpdate');
    btnDelete.classList.add('btnDelete')

    op.append(btnUpdate);
    op.append(btnDelete);

    tr.appendChild(tdSharp);  
    tr.appendChild(tdName);  
    tr.appendChild(tdPrice);  
    tr.appendChild(tdCount);  
    tr.appendChild(tdTotalPrice); 
    tr.appendChild(op); 

    tbody.appendChild(tr);  

    // بهایت محسوب شده را به عنوان قیمت کل بروز می‌کند  
    updateTotalPrice();  

    // تخلیه ورودی‌ها  
    name.value = "";  
    price.value = "";  
    count.value = "";  
});  

// تابع برای بروزرسانی مجموع قیمت ها  
function updateTotalPrice() {  
    const tbody = document.querySelector('tbody');  
    const rows = tbody.querySelectorAll('tr');  
    let grandTotal = 0;  

    rows.forEach(row => {  
        const totalCell = row.children[4]; // ستون قیمت کل  
        const totalValue = parseFloat(totalCell.innerText.replace(/,/g, '')); // حذف کاما  
        grandTotal += totalValue;  
    });  

    totalPriceElement.innerText = grandTotal.toLocaleString("en-US"); // نمایش مجموع  
}   

$(document).on("click", "#btnDelete", function(){
   if(confirm("Are you sure to Delete?")){
    $(this).parent().parent().remove();
    }
});

$(document).on("click", "#btnUpdate", function(){
    tds = $(this).parent().parent();
     $("#input_name").val(tds[0].childNodes[1].innerText);
     $("#input_price").val(tds[0].childNodes[2].innerText);
     $("#input_count").val(tds[0].childNodes[3].innerText);
})