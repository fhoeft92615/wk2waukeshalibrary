function calculateLateFee()
{
    //get number of books being returned late
    var numberBooksReturned = prompt("How many books are being returned late?");

    //convert to number
    numberBooksReturned = parseFloat(numberBooksReturned);

    //get number of days books are late
    var daysBooksLate = prompt("How many days late are the books?");

    //convert to number
    daysBooksLate = parseFloat(daysBooksLate);

    //get number of dvds being returned late
    var numberDvdsReturned = prompt("How many DVDs are being returned late?");

    //convert to number
    numberDvdsReturned = parseFloat(numberDvdsReturned);

    //get number of days dvds are late
    var daysDvdsLate = prompt("How many days late are the DVDs?");

    //convert to number
    daysDvdsLate = parseFloat(daysDvdsLate);

    //multiply days books are late by $0.25 and multiply answer by number of books
    var totalBookFee = (daysBooksLate * .25) * numberBooksReturned;

    //multiply days dvds are late by $0.50 and multiply answer by number of dvds
    var totalDvdFee = (daysDvdsLate * 0.50) * numberDvdsReturned;

    //add total book late fee and total dvd late fee
    var totalLibraryLateFee = totalBookFee + totalDvdFee;

    //display total library late fee
    alert("Your total late fee is $" + totalLibraryLateFee.toFixed(2));

}