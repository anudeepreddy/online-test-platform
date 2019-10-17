<script context="module">
  export async function preload({params}, {user}) {  
    if (!user) {
      return this.redirect(302, "login");
    }
  }
</script>
<script>
  import Topnav from "../components/Topnav.svelte";
  import Footer from "../components/Footer.svelte";
  import { questions, answers } from "../stores/exam.js";
  import {stores} from "@sapper/app";
  var countDownDate = new Date("Oct 31, 2019 22:37:25").getTime();
  var time = "0:00:00";
  var Active = {
    no: $questions[0].no,
    question: $questions[0].data
  };
  function printAnswers() {
    console.log($answers);
  }
  var len = $questions.length;
  function changeActive(qN) {
    for (let i = 0; i < len; i++) {
      if ($questions[i].no == qN) {
        qN = i;
        break;
      }
    }
    Active.no = $questions[qN].no;
    Active.question = $questions[qN].data;
  }
  var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    time = hours + "h " + minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      time = "Test Ended";
    }
  }, 1000);
</script>

<body id="page-top">
  <div id="wrapper">
    <div class="d-flex flex-column" id="content-wrapper">
      <div id="content">
        <div class="container-fluid">
          <h3 class="text-dark mb-1">
            <strong>Sample Test</strong>
          </h3>
        </div>
        <div class="container">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Timer</h4>
              <h6 class="text-muted card-subtitle mb-2" id="timer">{time}</h6>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Question {Active.no}</h4>
              <p class="card-text">{Active.question}</p>
              <div class="form-check" id="option1">
                <input
                  class="form-check-input"
                  type="radio"
                  id="formCheck-1"
                  bind:group={$answers[Active.no]}
                  value={1} />
                <label class="form-check-label" for="formCheck-1">A</label>
              </div>
              <div class="form-check" id="option2">
                <input
                  class="form-check-input"
                  type="radio"
                  id="formCheck-2"
                  bind:group={$answers[Active.no]}
                  value={2} />
                <label class="form-check-label" for="formCheck-1">B</label>
              </div>
              <div class="form-check" id="option3">
                <input
                  class="form-check-input"
                  type="radio"
                  id="formCheck-3"
                  bind:group={$answers[Active.no]}
                  value={3} />
                <label class="form-check-label" for="formCheck-1">C</label>
              </div>
              <div class="form-check" id="option4">
                <input
                  class="form-check-input"
                  type="radio"
                  id="formCheck-4"
                  bind:group={$answers[Active.no]}
                  value={4} />
                <label class="form-check-label" for="formCheck-1">D</label>
              </div>
              <div class="btn-group" role="group">
                <button class="btn btn-primary" type="button">
                  Mark for Review
                </button>
                <button
                  class="btn btn-primary"
                  type="button"
                  on:click={printAnswers}>
                  Debug
                </button>
              </div>
            </div>
          </div>
          <div class="card" id="questions-list">
            <div class="card-body">
              {#each $questions as question}
                <button
                  class="btn btn-primary"
                  type="button"
                  style="margin-right:16px"
                  on:click={() => changeActive(question.no)}>
                  {question.no}
                </button>
              {/each}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <a class="border rounded d-inline scroll-to-top" href="#page-top">
      <i class="fas fa-angle-up" />
    </a>
  </div>
  <script src="/assets/js/jquery.min.js">

  </script>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.js">

  </script>
  <script src="/assets/bootstrap/js/bootstrap.min.js">

  </script>
  <script src="/assets/js/chart.min.js">

  </script>
  <script src="/assets/js/bs-charts.js">

  </script>
  <script src="/assets/js/theme.js">

  </script>
</body>
