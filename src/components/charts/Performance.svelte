<script>
    import { afterUpdate } from "svelte";
    export let data;
    const options = {
      maintainAspectRatio: false,
      legend: { display: false },
      title: {},
      scales: {
        xAxes: [
          {
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              drawTicks: false,
              borderDash: ["2"],
              zeroLineBorderDash: ["2"],
              drawOnChartArea: false
            },
            ticks: { fontColor: "#858796", padding: 20 }
          }
        ],
        yAxes: [
          {
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              drawTicks: false,
              borderDash: ["2"],
              zeroLineBorderDash: ["2"]
            },
            ticks: { fontColor: "#858796", padding: 20 }
          }
        ]
      }
    }
    function buildChart(){
        const ctx = document.getElementById('performance-chart');
        const myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    }
    afterUpdate(buildChart);
</script>
<div class="col-lg-7 col-xl-8">
  <div class="card shadow mb-4">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h6 class="text-primary font-weight-bold m-0">Performance</h6>
      <div class="dropdown no-arrow">
        <button
          class="btn btn-link btn-sm dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          type="button">
          <i class="fas fa-ellipsis-v text-gray-400" />
        </button>
        <div
          class="dropdown-menu shadow dropdown-menu-right animated--fade-in"
          role="menu">
          <p class="text-center dropdown-header">dropdown header:</p>
          <a class="dropdown-item" role="presentation" href=".">&nbsp;Action</a>
          <a class="dropdown-item" role="presentation" href=".">
            &nbsp;Another action
          </a>
          <div class="dropdown-divider" />
          <a class="dropdown-item" role="presentation" href=".">
            &nbsp;Something else here
          </a>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="chart-area">
        <!--<canvas data-bs-chart={JSON.stringify(graph)} />-->
        <canvas id="performance-chart" />
      </div>
    </div>
  </div>
</div>
