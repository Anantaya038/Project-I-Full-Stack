$(document).ready(function () {

    var url = "http://localhost:3000/information";
    

    $("#btnU").click(function () {
        console.log();
        
        $.get(url + "/"+$("#id").val(), function (data, status) {
            console.log(data);
            console.log($("#nameu").val());
            var newuser = {};
            newuser.id = data.id;
            newuser.username = $("#user").val();
            newuser.password = $("#pass").val();
            newuser.name = $("#nameu").val();
            newuser.status = "user";
            console.log(JSON.stringify(newuser));
            var updateUrl = url + "/"+data.id;
            $.ajax({
                url: updateUrl,
                type: 'PUT',
                data: newuser,
                success: function (result) {
                    console.log('Updated!');
                    alert("Update complete!");
                    location.replace('weather.html');
                }
            });
        });
    });
});
