<script context="module">
  export async function preload({params}, {user}) {  
    if (!user) {
      return this.redirect(302, "login");
    }
  }
</script>

<script>
  import { stores,goto } from "@sapper/app";
  import Sidebar from "../components/Sidebar";
  import Topnav from "../components/Topnav";
  import Footer from "../components/Footer";
  import PerformanceChart from "../components/charts/Performance";
  import SWPerformanceChart from "../components/charts/SWPerformance"
  import { post } from "utils.js"
  const {session} = stores();
  async function handleFunction(event){
    if(event.detail.function=='logout'){
      const response = await post('/auth/logout');
        if(response.status){
          $session.user = null;
          goto(response.redirect);
        }
    }
  }
  const PerformanceData = {
      labels: ["Test1", "Test2", "Test3", "Test4", "Test5", "Test6", "Test7", "Test8"],
      datasets: [
        {
          label: "Mathematics",
          fill: true,
          data: [120,110,56,78,100,89,66,85],
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "rgba(78, 115, 223, 1)"
        },
        {
          label: "Physics",
          fill: true,
          data: [50,110,89,45,66,120,77,77],
          backgroundColor: "rgba(255,0,80,0.05)",
          borderColor: "rgba(255,0,80,1)"
        },
        {
          label: "Chemistry",
          fill: true,
          data: [100,120,110,78,23,10,45,56],
          backgroundColor: "rgba(255,235,80,0.05)",
          borderColor: "rgba(255,235,80,1)"
        }
      ]
    };
    const SWPerformanceData = {
      labels: ["Physics", "Chemisrty", "Mathematics"],
      datasets: [
        {
          label: "",
          backgroundColor: ["#4e73df", "#1cc88a", "#36b9cc"],
          borderColor: ["#ffffff", "#ffffff", "#ffffff"],
          data: ["56", "30", "15"]
        }
      ]
    };  
</script>

<svelte:head>
  <title>Dashboard</title>
</svelte:head>
<body id="page-top">
  <div id="wrapper">
    <Sidebar />
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <Topnav on:message={handleFunction}/>
        <div class="container-fluid">
          <div
            class="d-sm-flex justify-content-between align-items-center mb-4">
            <h3 class="text-dark mb-0">Dashboard</h3>
            <a
              class="btn btn-primary btn-sm d-none d-sm-inline-block"
              role="button"
              href=".">
              <i class="fas fa-download fa-sm text-white-50" />
              &nbsp;Generate Report
            </a>
          </div>
          <div class="row">
            <div class="col-md-6 col-xl-3 mb-4">
              <div class="card shadow border-left-primary py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col mr-2">
                      <div
                        class="text-uppercase text-primary font-weight-bold
                        text-xs mb-1">
                        <span>Tests taken</span>
                      </div>
                      <div class="text-dark font-weight-bold h5 mb-0">
                        <span>5</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-chart-bar fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3 mb-4">
              <div class="card shadow border-left-success py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col mr-2">
                      <div
                        class="text-uppercase text-success font-weight-bold
                        text-xs mb-1">
                        <span>Best Score</span>
                      </div>
                      <div class="text-dark font-weight-bold h5 mb-0">
                        <span>240</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-thumbs-up fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3 mb-4">
              <div class="card shadow border-left-info py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col mr-2">
                      <div
                        class="text-uppercase text-info font-weight-bold text-xs
                        mb-1">
                        <span>Percentage</span>
                      </div>
                      <div class="row no-gutters align-items-center">
                        <div class="col-auto">
                          <div class="text-dark font-weight-bold h5 mb-0 mr-3">
                            <span>50%</span>
                          </div>
                        </div>
                        <div class="col">
                          <div class="progress progress-sm">
                            <div
                              class="progress-bar bg-info"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="width: 50%;">
                              <span class="sr-only">50%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-clipboard-list fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-3 mb-4">
              <div class="card shadow border-left-warning py-2">
                <div class="card-body">
                  <div class="row align-items-center no-gutters">
                    <div class="col mr-2">
                      <div
                        class="text-uppercase text-warning font-weight-bold
                        text-xs mb-1">
                        <span>Rank</span>
                      </div>
                      <div class="text-dark font-weight-bold h5 mb-0">
                        <span>18</span>
                      </div>
                    </div>
                    <div class="col-auto">
                      <i class="far fa-gem fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <PerformanceChart data={PerformanceData}/>
            <SWPerformanceChart data={SWPerformanceData}/>
          </div>
          <div class="row">
            <div class="col-lg-6 mb-4">
              <div class="card shadow mb-4">
                <div class="card-header py-3">
                  <h6 class="text-primary font-weight-bold m-0">
                    Subject wise Cummulative Performace
                  </h6>
                </div>
                <div class="card-body">
                  <h4 class="small font-weight-bold">
                    Physics
                    <span class="float-right">20%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar bg-danger"
                      aria-valuenow="20"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 20%;">
                      <span class="sr-only">20%</span>
                    </div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Chemistry
                    <span class="float-right">40%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar bg-warning"
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 40%;">
                      <span class="sr-only">40%</span>
                    </div>
                  </div>
                  <h4 class="small font-weight-bold">
                    Mathematics
                    <span class="float-right">60%</span>
                  </h4>
                  <div class="progress mb-4">
                    <div
                      class="progress-bar bg-primary"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: 60%;">
                      <span class="sr-only">60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <a class="border rounded d-inline scroll-to-top" href=".page-top">
      <i class="fas fa-angle-up" />
    </a>
  </div>
</body>
