<script>
  export let status;
  export let error;

  import Sidebar from "../components/Sidebar.svelte";
  import Topnav from "../components/Topnav.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<body id="page-top">
  <div id="wrapper">
    <Sidebar />
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <Topnav />
        <div class="container-fluid">
          <div class="text-center mt-5">
            <div class="error mx-auto" data-text={status}>
              <p class="m-0">{status}</p>
            </div>
            <p class="text-black-50 mb-0">
              It looks like you found a glitch in the matrix...
            </p>
            <a href="/">← Back to Dashboard</a>
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
