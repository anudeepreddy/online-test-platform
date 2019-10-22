<script>
  import { post } from "utils.js";
  import { stores, goto } from "@sapper/app";
  const { session } = stores();
  let username, password;
  $: login = true;
  $: error = false;
  async function handleLogin() {
    login=false;
    const data = {
      username: username,
      password: password
    }
      const response = await post('/auth/login',data);
      if (response.status==false) {
        login = true;
        error = true;
        setTimeout(function(){ error = false; }, 5000);   
      }
      else{
        $session.user = response.user;
        goto("/");
      }
  }
</script>

<body class="bg-gradient-primary">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-9 col-lg-12 col-xl-10">
        <div class="card shadow-lg o-hidden border-0 my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-6 d-none d-lg-flex">
                <div
                  class="flex-grow-1 bg-login-image"
                  style="background-image:
                  url(&quot;/assets/img/dogs/image3.jpeg&quot;);" />
              </div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h4 class="text-dark mb-4">Student Login</h4>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        class="form-control form-control-user"
                        type="text"
                        id="inputUser"
                        placeholder="Enter Username"
                        name="Username"
                        bind:value={username} />
                    </div>
                    <div class="form-group">
                      <input
                        class="form-control form-control-user"
                        type="password"
                        id="inputPassword"
                        placeholder="Password"
                        name="password"
                        bind:value={password} />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <div class="form-check">
                          <input
                            class="form-check-input custom-control-input"
                            type="checkbox"
                            id="formCheck-1" />
                          <label
                            class="form-check-label custom-control-label"
                            for="formCheck-1">
                            Remember Me
                          </label>
                        </div>
                      </div>
                    </div>
                    {#if error}
                    <div class="alert alert-warning" role="alert">
                      Oops! Something went wrong, Please Try Again
                    </div>
                    {/if}
                    <button
                      class="btn btn-primary btn-block text-white btn-user"
                      on:click|preventDefault={handleLogin}>
                      {#if !login}<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>{/if}
                      {#if login}
                      Login
                      {/if}
                    </button>
                    <hr />
                  </form>
                  <div class="text-center">
                    <a class="small" href="/forgot-password.html">
                      Forgot Password?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
