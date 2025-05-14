const btn = $('button');  
const totalPriceElement = $('totalPrice');

$("btn").on('click', () => {  
    const name = $('input_name');  
    const price = $('input_price');  
    const count = $('input_count');  

    const tbody = $('tbody');  
    const tr = append('tr');  

    const tdSharp = append('td');  
    const tdName = append('td');  
    const tdPrice = append('td');  
    const tdCount = append('td');  
    const tdTotalPrice = append('td');  

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

    $("tr").append($("tdSharp"));  
    $("tr").append($("tdName"));  
    $("tr").append($("tdPrice"));  
    $("tr").append($("tdCount"));  
    $("tr").append($("tdTotalPrice"));  

    $("tbody").append($("tr"));  

    // بهایت محسوب شده را به عنوان قیمت کل بروز می‌کند  
    updateTotalPrice();  

    // تخلیه ورودی‌ها  
    $("name").val() = "";  
    $("price").val() = "";  
    $("count").val() = "";  
}); 

$(function updateTotalPrice() {  
    const tbody = $('tbody');  
    const rows = $("tbody").$('tr');  
    let grandTotal = 0;  

    $("rows").each(row => {  
        const totalCell = $("row").children[4]; // ستون قیمت کل  
        const totalValue = parseFloat(totalCell.text().replace(/,/g, '')); // حذف کاما  
        grandTotal += totalValue;  
    });  

    totalPriceElement.text(grandTotal.toLocaleString("en-US")); // نمایش مجموع  
} );  