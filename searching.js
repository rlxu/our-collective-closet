function searchFunction() {
    
    // Declare variables
    var input, filter, ul, li, a, i;
    int count= 0; 
    //read in all search bar values
    lInput = document.getElementById('locInput');
    filter = lInput.value.toUpperCase();
    wInput = document.getElementById('wantInput');
    filter = wInput.value.toUpperCase();
    oInput = document.getElementById('offerInput');
    filter = oInput.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            count++; 
        } else {
            li[i].style.display = "none";
        }
    }
}
