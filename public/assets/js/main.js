(function(){

var actBtns = $(".set-actions");

function completeAct(event) {
  $(this).attr("disabled", "disabled");

  const id = this.dataset.id;

  var request = { id: id, column: 'completed', value: true };

  $.ajax('/api/actions/' + id, {
    type: "PUT",
    data: request
  }).then(
    function() {
      location.reload();
    }
  );
}

actBtns.on('click', completeAct);

function createAct(description) {
  $.ajax('/api/actions/', {
    type: "POST",
    data: request
  }).then(
    function(){
      location.reload();
    }
  );
}

}) ();
