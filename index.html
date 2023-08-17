<?php
//Creating database connection
$insert = false;
$update = false;
$delete = false;
$conn = mysqli_connect('localhost', 'root', 'ctor', 'phpt_demo');
if(!$conn)
{
  echo '<div class="alert alert-danger d-flex align-items-center" role="alert">
          <div>
            <strong> Error!</strong> Connection was not successfull.
          </div>
        </div>';
}

if($_SERVER['REQUEST_METHOD']=='POST')
{
  $title = $_POST['title'];
  $desc = $_POST['desc'];
 
  if(isset($_POST['snoEdit']))
  {
    $sn = $_POST['snoEdit'];
    $sql = "UPDATE notes SET title = '$title', descrp = '$desc' WHERE sno = '$sn' ";
    if(mysqli_query($conn, $sql))
    {
      $update = true;
    }
  }
  else
  {
      $res = mysqli_query($conn, "INSERT INTO notes(title,descrp) VALUES ('$title', '$desc')");
      if(!$res)
      {
        echo '<div class="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                  <strong> Error!</strong> The note could not be added.
                </div>
              </div>';
      }
      else {
        $insert = true;
      }
  }
}

if(isset($_GET['delete']))
{
  $sno = $_GET['delete'];
  $sql = "DELETE FROM notes WHERE sno = '$sno'";
  if(mysqli_query($conn, $sql))
  {
    $delete = true;
  }
}

?>

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Notes API</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel="stylesheet" href="//cdn.datatables.net/1.13.5/css/jquery.dataTables.min.css">
  </head>
  <body>
    <script src="https://code.jquery.com/jquery-3.7.0.js" integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM=" crossorigin="anonymous"></script>
    <script src="https://cdn.datatables.net/1.13.5/js/jquery.dataTables.min.js"></script>
    <script>
      $(document).ready( function () {
        $('#myTable').DataTable();
      } );
    </script>


    <!-- Button trigger modal -->

    <!-- <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
      Launch demo modal
    </button> -->

<!-- Modal -->

    <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="editModalLabel">Edit Notes</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form action="/php_crud/index.php" method="post">
              <input type="hidden" id="snoEdit" name="snoEdit">
              <div class="my-3">
                <label for="title" class="form-label">Edit Title</label>
                <input type="text" class="form-control" id="titleEdit" aria-describedby="emailHelp" name="title">
              </div>
              <div class="my-3">
                  <label for="description" class="form-label">Edit Description</label>
                  <textarea class="form-control" id="descEdit" rows="3" name="desc"></textarea>
                </div>
                
            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-primary">Update Note</button>
          </form>
          </div>
        </div>
      </div>
    </div>


<!--   NAVBAR  -->

    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Notes</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Contact</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<?php
  if($insert)
  {
    echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success!</strong> The note has been inserted.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>';
  }
  if($update)
  {
    echo '<div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Saved Changes!</strong> Your note has been updated.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>';
  }
  if($delete)
  {
    echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Deleted!</strong> Your note has been removed.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>';
  }
?>

<!-- INPUT FORM -->

<div class="container mt-4">
    <h2>Add a Note</h2>
    <form action="/php_crud/index.php" method="post">
        <div class="my-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" id="title" aria-describedby="emailHelp" name="title">
        </div>
        <div class="my-3">
            <label for="description" class="form-label">Notes Description</label>
            <textarea class="form-control" id="desc" rows="3" name="desc"></textarea>
          </div>
        <button type="submit" class="btn btn-primary">Add Note</button>
      </form>
</div>


<!-- NOTES DISPLAY -->

<div class="container my-3 mb-4">
    <hr>
    <table class="table my-3" id="myTable">
      <thead>
        <tr>
          <th scope="col">S.No</th>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
      <?php
      $sql = "SELECT * FROM notes";
      $res = mysqli_query($conn, $sql);
      $numRows = mysqli_num_rows($res);
      $sno=0;
      if($numRows>0)
      {
        while($rows = mysqli_fetch_assoc($res))
        {
          $sno+=1;
          echo '<tr>
                  <th scope="row">' . $sno .'</th>
                  <td class="title">' . $rows['title'] .'</td>
                  <td class="desc">' . $rows['descrp'] .'</td>
                  <td><button class="edit btn btn-primary" id="'.$rows['sno'].'" type="button" data-bs-toggle="modal" data-bs-target="#editModal"> Edit </button> <button class="delete btn btn-primary" id="d'.$rows['sno'].'" type="button"> Delete </button></td>
                </tr>';
          /* echo $rows['sno'] . ". " . "Title : " . $rows['title'] . " Description : " . $rows['descrp']; */
        }
      }
      ?>
      </tbody>
    </table>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <script>
      edits = document.getElementsByClassName('edit');
      Array.from(edits).forEach((element)=>{
        element.addEventListener("click", function(e){
          /* console.log(e.target.parentNode.parentNode); */
          tr=e.target.parentNode.parentNode;
          title = tr.getElementsByTagName('td')[0].innerText;
          desc = tr.getElementsByTagName('td')[1].innerText;
          console.log(title, desc);
          descEdit = document.getElementById('descEdit');
          titleEdit = document.getElementById('titleEdit');
          snoEdit = document.getElementById('snoEdit');
          descEdit.value=desc;
          titleEdit.value=title;
          snoEdit.value = e.target.id;
        })
      });

      deletes = document.getElementsByClassName('delete');
      Array.from(deletes).forEach((element)=>{
        element.addEventListener("click", function(e){
          sno = e.target.id.substr(1);
          if(confirm("Do you want to delete the note?"))
          {
            window.location=`/php_crud/index.php?delete=${sno}`;
          }

        })
      });

      </script>
  </body>
</html>