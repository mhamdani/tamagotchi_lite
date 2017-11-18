$(function() {
  $(".change-action").on("click", function(event) {
    var id = $(this).data("id");
    var newComplete = $(this).data("newcomplete");

    var newCompleteState = {
      completed: newComplete
    };

    // Send the PUT request.
    $.ajax("/api/actions/" + id, {
      type: "PUT",
      data: newCompleteState
    }).then(
      function() {
        console.log("changed to", newComplete);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newAction = {
      action_name: $("#ac").val().trim(),
      completed: $("[name=complete]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/actions", {
      type: "POST",
      data: newComplete
    }).then(
      function() {
        console.log("created new action");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
