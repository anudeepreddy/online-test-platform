<script>
    export let data;
</script>
<div class="modal fade bd-example-modal-lg" id="previewModel" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Preview</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      Question: {@html data.question}<br>
        <label>
	      <input type=checkbox  value="1" bind:group={data.correctAnswer}>
	        {@html data.option1}
        </label><br>
        <label>
	    <input type=checkbox  value="2" bind:group={data.correctAnswer}>
	        {@html data.option2}
        </label><br>
        <label>
	    <input type=checkbox  value="3" bind:group={data.correctAnswer}>
	        {@html data.option3}
        </label><br>
        <label>
	    <input type=checkbox  value="4" bind:group={data.correctAnswer}>
	        {@html data.option4}
        </label><br>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>