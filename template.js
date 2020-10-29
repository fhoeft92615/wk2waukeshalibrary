$(document).ready(
    function () {
        //event handlers
        $("#totalLateFeeCosts").click(calculateLateFee);

        //other functions
        function calculateLateFee()
        {
            //get all input from boxes and parse to number data type

            var books = $("#numberOfLateBooks").val();
            books = parseFloat(books);

            var bookDays = $("#daysBooksLate").val();
            bookDays = parseFloat(bookDays);

            var dvds = $("#numberOfLateDvds").val();
            dvds = parseFloat(dvds);

            var dvdDays = $("#daysDvdsLate").val();
            dvdDays = parseFloat(dvdDays);

            //calculate cost of late fees

            var costForBooks = (bookDays * 0.25) * books;

            var costForDvds = (dvdDays * 0.50) * dvds;

            var totalLibraryFees = costForBooks + costForDvds

            //put output into paragraphs

            $("#bookFeeOutput").text(`Your cost for late books is ${costForBooks.toFixed(2)}`);

            $("#dvdFeeOutput").text(`Your cost for late DVDs is ${costForDvds.toFixed(2)}`);

            $("#totalFeeOutput").text(`You owe ${totalLibraryFees.toFixed(2)} in library fees.`)

            $(".output").show();
        }
    }
);