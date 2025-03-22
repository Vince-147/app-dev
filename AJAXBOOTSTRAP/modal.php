   <!-- Add User Modal -->
   <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog modal-center">
           <div class="modal-content">
               <div class="modal-header">
                   <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                   <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
                   <form id="saveStudent">  
                        <div id="errorMessage" class="errorMessage alert alert-danger d-none"></div>
                       <div class="mb-3">
                           <label>Email address</label>
                           <input type="email" name="email" class="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp">               
                       </div>  

                       <div class="mb-3">
                           <label>Name</label>
                           <input  name="name" class="form-control">               
                       </div>
                                
                       <div class="mb-3">
                           <label>Phone</label>
                           <input  name="phone" class="form-control">               
                       </div> 

                       <div class="mb-3">
                           <label>Course</label>
                           <input  name="course" class="form-control">               
                       </div>  
                       <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit"class="btn btn-primary">Save changes</button>
                    </div>
                   </form>
               </div>            
           </div>
       </div>
   </div>