$(document).ready(function() {
  $('#mainnav').affix({
    offset: {
      top: 136
    }
  });

  $('body').scrollspy({ target: '#mainnav' });
});