<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta http-equiv="x-ua-compatible" content="ie=edge" />
  <title>Todo List</title>
  <link rel="icon" href="img/mdb-favicon.ico" type="image/x-icon" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" />
  <link rel="stylesheet" href="css/bootstrap-to-do-list.min.css" />
</head>

<body>
  <section class="vh-100" style="background-color: #e2d5de;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col col-xl-10">
  
          <div class="card" style="border-radius: 15px;">
            <div class="card-body p-5">
  
              <h6 class="mb-3">Todo List</h6>
  
              <form class="d-flex justify-content-center align-items-center mb-4">
                <div class="form-outline flex-fill">
                  <input type="text" id="form3" class="form-control form-control-lg" />
                  <label class="form-label" for="form3">Que dois-tu faire aujourd'hui ?</label>
                </div>
                <button type="submit" class="btn btn-primary btn-lg ms-2">Ajouter</button>
              </form>
  
              <ul class="list-group mb-0">
                <li class="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2">
                  <div class="d-flex align-items-center">
                    <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." />
                    Exemple de tâche
                  </div>
                </li>
              </ul>
            	<button type="button" class="btn btn-danger">Supprimer toutes les tâches</button>
            </div>
          </div>
  
        </div>
      </div>
    </div>
  </section>

  <script type="text/javascript" src="js/mdb.min.js"></script>
</body>

</html>