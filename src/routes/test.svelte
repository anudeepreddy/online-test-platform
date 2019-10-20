<script>
  import Sidebar from "../components/Sidebar.svelte";
  import Topnav from "../components/Topnav.svelte";
  import Footer from "../components/Footer.svelte";
  import axios from "axios";
  function fetchTestData() {
    console.log("TODO");
  }
  $: testData = [
    {
      id: "123",
      name: "sample test",
      from: "monday",
      to: "tuesdat",
      duration: "2h",
      status: "completed"
    }
  ];
  function getTest(id) {
    console.log(id);
  }
</script>

<svelte:head>

  <title>Curriculum Test</title>
</svelte:head>
<body id="page-top">
  <div id="wrapper">
    <Sidebar />
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <Topnav />
        <div class="container-fluid">
          <h3 class="text-dark mb-1">
            <strong>Curriculum Test</strong>
            <br />
          </h3>
        </div>
        <div class="container">
          <div class="table-responsive flex-grow-0 flex-shrink-0">
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Duration</th>
                  <th>Status</th>
                  <th>Take Test</th>
                </tr>
              </thead>
              <tbody class="flex-grow-0">
                {#each testData as test}
                  <tr>
                    <td>
                      {test.name}
                      <br />
                    </td>
                    <td>
                      {test.from}
                      <br />
                    </td>
                    <td>
                      {test.to}
                      <br />
                    </td>
                    <td>
                      {test.duration}
                      <br />
                    </td>
                    <td>
                      <strong>{test.status}</strong>
                      <br />
                    </td>
                    <td>
                      <button
                        on:click={() => getTest(test.id)}
                        class="btn btn-primary"
                        type="button">
                        Start Test
                      </button>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <a class="border rounded d-inline scroll-to-top" href="#page-top">
      <i class="fas fa-angle-up" />
    </a>
  </div>
</body>
