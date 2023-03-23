function printQuote(){
    var img_q = document.getElementById('quote');
    let quote_path = "./motivation-img/motivation";
    quote_path += Math.floor((Math.random() * 201) + 1);
    img_q.src = quote_path + ".png";
    img_q.style.display = "block";
}