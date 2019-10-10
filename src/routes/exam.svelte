<script>
import Topnav from '../components/Topnav.svelte'
import Footer from '../components/Footer.svelte'
var countDownDate = new Date("Oct 9, 2019 22:37:25").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("timer").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s "; 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Test Ended";
  }
}, 1000);
</script>
<body id="page-top">
    <div id="wrapper">
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
                <div class="container-fluid">
                    <h3 class="text-dark mb-1"><strong>Sample Test</strong></h3>
                </div>
                <div class="container">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Timer</h4>
                            <h6 class="text-muted card-subtitle mb-2" id="timer">00:00:00</h6>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Question 1</h4>
                            <p class="card-text">This is a sample Question?</p>
                            <div class="form-check" id="option1"><input class="form-check-input" type="radio" id="formCheck-1"><label class="form-check-label" for="formCheck-1">Label</label></div>
                            <div class="form-check" id="option2"><input class="form-check-input" type="radio" id="formCheck-1"><label class="form-check-label" for="formCheck-1">Label</label></div>
                            <div class="form-check" id="option3"><input class="form-check-input" type="radio" id="formCheck-1"><label class="form-check-label" for="formCheck-1">Label</label></div>
                            <div class="form-check" id="option4"><input class="form-check-input" type="radio" id="formCheck-1"><label class="form-check-label" for="formCheck-1">Label</label></div>
                            <div class="btn-group" role="group"><button class="btn btn-primary" type="button">Mark for Review</button></div>
                        </div>
                    </div>
                    <div class="card" id="questions-list">
                        <div class="card-body"><button class="btn btn-primary" type="button" style="margin-right:16px">1</button><button class="btn btn-primary" type="button" style="margin-right:16px">2</button><button class="btn btn-primary" type="button" style="margin-right:16px">3</button>
                            <button
                                class="btn btn-primary" type="button" style="margin-right:16px">4</button><button class="btn btn-primary" type="button" style="margin-right:16px">5</button></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a></div>
    <script src="/assets/js/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js"></script>
    <script src="/assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="/assets/js/chart.min.js"></script>
    <script src="/assets/js/bs-charts.js"></script>
    <script src="/assets/js/theme.js"></script>
</body>