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
      Question: {data.question}<br>
        <label>
	    <input type=checkbox bind:group={data.correctAnswer} value="1">
	        {data.otp1}
        </label>
        <label>
	    <input type=checkbox bind:group={data.correctAnswer} value="2">
	        {data.otp2}
        </label>
        <label>
	    <input type=checkbox bind:group={data.correctAnswer} value="3">
	        {data.otp3}
        </label>
        <label>
	    <input type=checkbox bind:group={data.correctAnswer} value="4">
	        {data.otp4}
        </label>  
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>