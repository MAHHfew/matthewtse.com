  var elem = document.querySelector('.sidenav');
  var instance = new M.Sidenav(elem, {
      draggable: "true",
      edge: "left",
  });

  //  var elem = document.querySelector('.scrollspy');
  //  var instance = new M.ScrollSpy(elem, {
  //  });

  $(document).ready(function () {
      $('.scrollspy').scrollSpy();
  });