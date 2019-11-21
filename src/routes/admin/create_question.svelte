<script>
    import Sidebar from "../../components/Sidebar";
    import Topnav from "../../components/Topnav";
    import Footer from "../../components/Footer";
    import { onMount } from 'svelte';
    onMount(()=>{CKEDITOR.replace( 'editor1' );});
</script>

<svelte:head>

  <title>Create Question</title>
</svelte:head>
<body id="page-top">
  <div id="wrapper">
    <Sidebar />
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <Topnav />
       <form>
            <textarea name="editor1" id="editor1" rows="10" cols="80">
                Type your question here include options as well
            </textarea>
        </form>
        
      </div>
      <Footer />
    </div>
    <a class="border rounded d-inline scroll-to-top" href="#page-top">
      <i class="fas fa-angle-up" />
    </a>
  </div>
</body>
