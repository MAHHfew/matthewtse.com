  var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem, {
      draggable: "true",
      edge: "left",
  });

  $(document).ready(function () {
      $('.scrollspy').scrollSpy();
  });