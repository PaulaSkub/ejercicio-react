
import './App.css';
import avatar from './dummy-avatar.jpg';
import NavItem from './​components/Navitem'
import Metrics from './​components/Metrics';
import Categories from './​components/Categories';
import product from './product_dummy.svg';

function App() {
  return (
    <div className="App">
    
    <head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<title>Corporate Dashboard - Admin</title>

	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>

	
	<link href="assets/css/app.css" rel="stylesheet"/>
</head>

<body>

	<div id="wrapper">

	
		<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
		
			<a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div class="sidebar-brand-icon">
					<i class="fas fa-chart-line"></i>
				</div>
				<div class="sidebar-brand-text mx-3">Admin</div>
			</a>

					<hr class="sidebar-divider my-0" />

          <div >
             <NavItem />
         </div>

		
			<hr class="sidebar-divider d-none d-md-block" />
		</ul>
		
		<div id="content-wrapper" class="d-flex flex-column">

		
			<div id="content">

				
				<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

				
					<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
						<i class="fa fa-bars"></i>
					</button>

				
					<ul class="navbar-nav ml-auto">

					
						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i class="fas fa-bell fa-fw"></i>
							
								<span class="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

					
						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i class="fas fa-envelope fa-fw"></i>
							
								<span class="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div class="topbar-divider d-none d-sm-block"></div>

					
						<li class="nav-item dropdown no-arrow">
							<a class="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span class="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
                <img class="img-profile rounded-circle" src= {avatar} width="60" />
						
							</a>
						</li>

					</ul>

				</nav>
			

			
				<div class="container-fluid">

				
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					
					<div class="row">
         
           <Metrics />
    
        
				
					<div class="row">
					
						<div class="col-lg-6 mb-4">
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div class="card-body">
									<div class="text-center">
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4"  src= {product} alt="image dummy" />
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>

						
						<div class="col-lg-6 mb-4">						
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div class="card-body">
									<div class="row">
                      <Categories />
                  
                    
								
								</div>
							</div>
						</div>
					</div>
				</div>
        </div>
			</div>
			</div>


			<footer class="sticky-footer bg-white">
				<div class="container my-auto">
					<div class="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2020</span>
					</div>
				</div>
			</footer>
	

		</div>
		

	
  </div>
</body>


   
    </div>
  );
}

export default App;
