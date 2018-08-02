 $("#btnPrint").on("click", function () {

        var divContents = $("#dvContainer").html();
        var printContents = divContents;
        var originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.focus();
        window.print();

        document.body.innerHTML = originalContents;
        window.location.href = window.location;

    });
function validate()
{
    var error = 0;
    $("form").find("input").each(function () {
        if ($(this).prop("required")) {
            var data = $(this).val();
            if (data == "") {
                $(this).attr("style", "border:1px solid red");
                error++;
            }
            else {
                $(this).attr("style", "border:1px solid #ccc");
            }
        }
    });
    $("form").find("textarea").each(function () {
        if ($(this).prop("required")) {
            var data = $(this).val();
            if (data == "") {
                $(this).attr("style", "border:1px solid red");
                error++;
            }
            else {
                $(this).attr("style", "border:1px solid #ccc");
            }
        }
    });
    $("form").find("select").each(function () {
        if ($(this).prop("required")) {
            var data = $(this).attr("id");

            if ($(this).val() == "") {
                $("." + data + " .sol-inner-container").attr("style", "border:1px solid red");
                error++;
            }
            else {
                $(this).attr("style", "border:1px solid #ccc");
            }
        }
        $(this).attr("style", "display:none;width:100%;");
    });
   
        
    if (error > 0) {
        return false;
    }
}
