<script>
    import Sidebar from "../../components/Sidebar";
    import Topnav from "../../components/Topnav";
    import Footer from "../../components/Footer";
    import { onMount } from 'svelte';
    import QuestionPreview from"../../components/QuestionPreview";
    onMount(()=>{
      CKEDITOR.replace( 'questioneditor' );
      CKEDITOR.replace( 'opt1editor' );
      CKEDITOR.replace( 'opt2editor' );
      CKEDITOR.replace( 'opt3editor' );
      CKEDITOR.replace( 'opt4editor' );
    });
    var data={correctAnswer:"1"};
    var units=[{id:0,name:"sample unit1"},{id:1,name:"sample unit2"},{id:2,name:"sample unit3"}];
    function fetchUnits(){
      units=[{id:0,name:"sample unit1"},{id:1,name:"sample unit2"}]
    }
    function handleSubmit(){
        //todo
    }
    function previewQuestion(){
      data.question=CKEDITOR.instances.questioneditor.getData();
      data.option1=CKEDITOR.instances.opt1editor.getData();
      data.option2=CKEDITOR.instances.opt2editor.getData();
      data.option3=CKEDITOR.instances.opt3editor.getData();
      data.option4=CKEDITOR.instances.opt4editor.getData();
      console.log(data);
    }
</script>

<style>
  .btn{
    margin-right: 16px;
  }
  .col-10-adj{
      max-width: 10%;
  }
  .container-fluid{
      max-width: 100%;
  }
  label{
      font-weight: bold;
      font-size:20px;
  }
</style>


<svelte:head>
  <title>Question</title>
</svelte:head>

<body id="page-top">
    <div id="wrapper">
        <Sidebar />
        <div class="d-flex flex-column" id="content-wrapper">
            <div id="content">
              <Topnav />
            <div class="container-fluid">
            <QuestionPreview data={data} />
            <div class="card">
                <div class="card-body">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col"><label class="col-form-label">Class</label></div>
                            </div>
                            <div class="row">
                                <div class="col">
                                  <select bind:value={data.class}>
                                    <optgroup label="Select Class">
                                      <option value="0" selected="">Class 11</option>
                                      <option value="1">class 12</option>
                                    </optgroup>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col"><label class="col-form-label">Subject</label></div>
                            </div>
                            <div class="row">
                                <div class="col">
                                  <select bind:value={data.subject}>
                                    <optgroup label="Select Subject">
                                      <option value="0" selected="">Mathematics</option>
                                      <option value="1">Physics</option>
                                      <option value="2">Chemistry</option>
                                    </optgroup>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col"><label class="col-form-label">Unit</label></div>
                            </div>
                            <div class="row">
                                <div class="col">
                                  <select bind:value={data.unit}>
                                    <optgroup label="Select Unit">
                                      {#each units as unit}
                                        {#if unit.id===0}
                                          <option value={unit.id} selected="">{unit.name}</option>
                                        {:else}
                                          <option value={unit.id}>{unit.name}</option>
                                        {/if}
                                      {/each}
                                    </optgroup>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col"><label class="col-form-label">Difficulty</label></div>
                            </div>
                            <div class="row">
                                <div class="col">
                                  <select bind:value={data.difficulty}>
                                    <optgroup label="Select Difficulty">
                                      <option value="0" selected="">Easy</option>
                                      <option value="1">Medium</option>
                                      <option value="2">Hard</option>
                                    </optgroup>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col col-10-adj"><label class="col-form-label">Question</label></div>
                                <div class="col"><textarea name="questioneditor" id="questioneditor"></textarea></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col col-10-adj"><label class="col-form-label">Option A</label></div>
                                <div class="col"><textarea name="opt1editor" id="opt1editor"></textarea></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col col-10-adj"><label class="col-form-label">Option B</label></div>
                                <div class="col"><textarea name="opt2editor" id="opt2editor"></textarea></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col col-10-adj"><label class="col-form-label">Option C</label></div>
                                <div class="col"><textarea name="opt3editor" id="opt3editor"></textarea></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col col-10-adj"><label class="col-form-label">Option D</label></div>
                                <div class="col"><textarea name="opt4editor" id="opt4editor"></textarea></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <div class="row">
                                <div class="col col-10-adj"><label class="col-form-label">Correct Answer</label></div>
                                <div class="col">
                                  <select bind:value={data.correctAnswer}>
                                    <optgroup label="Select Correct Answer">
                                      <option value="1" selected="">A</option>
                                      <option value="2">B</option>
                                      <option value="3">C</option>
                                      <option value="4">D</option>
                                    </optgroup>
                                  </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <button class="btn btn-primary" type="button" data-toggle="modal" data-target="#previewModel" on:click={previewQuestion}>Preview</button>
                        <button class="btn btn-primary" type="button" on:click={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        <Footer />
    </div><a class="border rounded d-inline scroll-to-top" href="#page-top"><i class="fas fa-angle-up"></i></a></div>
</body>