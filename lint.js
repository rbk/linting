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

});
