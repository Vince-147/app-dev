<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="./vendor/bootstrap.min.css" rel="stylesheet">
    <title>Document</title>
</head>

<body>      
    <?php   
        include './modal.php';
    ?>
    <div class="container">    
        <div class="row">   
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header">
                        <h4>Ajax And Bootstrap</h4> 
                <!-- Button trigger modal -->
                     <button type="button" 
                        class="btn btn-primary" id="btnAddUser" data-bs-toggle="modal" data-bs-target="#addUser">
                        Launch demo modal
                    </button>
                    </div>
                    <div class="card-body">
                        <table id="myTable" class="table table-dark table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Course</th>
                                </tr>
                            </thead>
                            <tbody>
                            <?php
                                $con = mysqli_connect("localhost", "root", "", "blog"); 

                                $query = "SELECT * FROM students";
                                $result = mysqli_query($con, $query);

                                if(mysqli_num_rows($result) > 0)
                                {
                                    foreach($result as $data)
                                    {
                                        ?>
                                        <tr>
                                            <td>
                                                <?php echo $data['id'] ?>
                                            </td>
                                            <td>
                                                <?php echo $data['name'] ?>
                                            </td>
                                            <td>
                                                <?php echo $data['email'] ?>
                                            </td>
                                            <td>
                                                <?php echo $data['phone'] ?>
                                            </td>
                                            <td>
                                                <?php echo $data['course'] ?>
                                            </td>
                                        </tr>
                                        <?php
                                    }
                                }
                            ?>


                            </tbody>
                        </table>></table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="./vendor/bootstrap.bundle.min.js"></script>
    <script src="./vendor/jquery.min.js"></script> 
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="./script.js"></script>
</body>

</html>