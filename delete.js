$(function(){
    var url = "http://localhost:3000/information";
    $.get(url, function(data){
        console.log(data);  
        var template = $('#template').html();
        var select;
        for(var i=0;i<data.length;i++){
            
           select += "<option value='"+ data[i].id+"'>"+data[i].name+"</option>"
           console.log(select);
           
        }
        $("#sel").append(select);
    });
    
        var url = "http://localhost:3000/information";
        $("#delete").click(function () {
            console.log($("#sel").val());
            $.ajax({
                url: url + "/"+$("#sel").val(), // 2  is id you want to delete
                method: "DELETE",
                success: function (data, status, xhr) {
                  console.log(data);
                  alert('delete complete');
                  location.replace('weather.html');
                }
              })
      });
    
});