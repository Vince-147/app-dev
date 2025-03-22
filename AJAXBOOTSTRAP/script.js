$(document).on('submit', '#saveStudent' ,function(e)
{   
    e.preventDefault(); 

    var formData = new FormData(this); 
    formData.append("save_student", true);  

    $.ajax({    
       type: "POST" ,
       url:  "action.php",
       data: formData, 
       processData: false, 
       contentType:false,
       success: function(response)
       {    
         var res = jQuery.parseJSON(response);  
         if(res.status == 422)
         {  
            $("#errorMessage").removeClass('d-none'); 
            $("#errorMessage").text(res.message);
         }else if (res.status == 200){
            $("#addUser").modal('hide');
            $("#saveStudent")[0].reset();
            $("#errorMessage").removeClass('d-none'); 

            $("#myTable").load(location.href + " #myTable")
            Swal.fire({
               position: "center",
               icon: "success",
               title: res.message,
               showConfirmButton: false,
               timer: 1500
             });
         }
       }
    });
});