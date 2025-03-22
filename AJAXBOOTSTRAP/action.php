<?php       
    $con = mysqli_connect("localhost", "root", "", "blog"); 

    if(!$con)
    {   
        die('connection Failed' . mysqli_connect_error());
    } 

    if(isset($_POST['save_student']))
    {       
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $name = mysqli_real_escape_string($con, $_POST['name']); 
        $phone = mysqli_real_escape_string($con, $_POST['phone']);
        $course = mysqli_real_escape_string($con, $_POST['course']); 

        if($email == NULL || $name == NULL || $phone == NULL || $course == NULL )
        {   
          $res = [ 
            'status' => 422, 
            'message' => 'All fields are mandatory.'
          ];
          echo json_encode($res); 
          return;      
        }
        $query = "INSERT INTO students (email, name, phone, course)
        VALUES ('$email', '$name', '$phone', '$course')";

        $result = mysqli_query($con, $query);

        if($result)
        {
          $res = [ 
            'status' => 200, 
            'message' => 'Sumakses ka boiiiii.'
          ];
          echo json_encode($res); 
          return;      
        } 
        else
        {
          $res = [ 
            'status' => 500, 
            'message' => 'Error ka boiiiii.'
          ];
          echo json_encode($res); 
          return;      
        }

    }

?>