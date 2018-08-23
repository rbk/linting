jQuery(document).ready(function($) {


  function breakLinks() {
    $("a").attr("href", "#");
  }

  if (document.referrer === "google.com") {
    breakLinks();
  }

  function go_to_test_page()
  {
    window.location.href = "/test";
  }
  go_to_test_page();

});

function hello() {
  return "Hello!";
}

function goodbye(){
  return "Goodbye!";
}

function goodDay() {
  return "Good day to you!";
}
