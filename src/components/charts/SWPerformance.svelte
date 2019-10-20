<script>
    import { afterUpdate } from "svelte";
    export let data;
    const options = {
      maintainAspectRatio: false,
      legend: { display: false },
      title: {}
    }
    function buildChart(){
        const ctx = document.getElementById('swperformance-chart');
        const myLineChart = new Chart(ctx, {
            type: 'doughnut',
            data: data,
            options: options
        });
    }
    afterUpdate(buildChart);
</script>
<div class="col-lg-5 col-xl-4">
  <div class="card shadow mb-4">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h6 class="text-primary font-weight-bold m-0">
        Subject wise performance
      </h6>
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
        <!--<canvas data-bs-chart={JSON.stringify(pie)} />-->
        <canvas id="swperformance-chart"></canvas>
      </div>
      <div class="text-center small mt-4">
        <span class="mr-2">
          <i class="fas fa-circle text-primary" />
          &nbsp;Physics
        </span>
        <span class="mr-2">
          <i class="fas fa-circle text-success" />
          &nbsp;Chemistry
        </span>
        <span class="mr-2">
          <i class="fas fa-circle text-info" />
          &nbsp;Mathematics
        </span>
      </div>
    </div>
  </div>
</div>
