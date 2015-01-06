$(document).ready(function() {
  // Insert nav items based on major sections
  var mainnav = $('#mainnav > ul');
  $('.majorsection').each(function(index, element) {
      var sectionName = $(element).text();
      var sectionId = $(element).attr('id');
      mainnav.append('<li><a href=#' + sectionId + '>' + sectionName + '</a></li>');
  });

  $('#mainnav').affix({
    offset: {
      top: 136
    }
  });

  $('body').scrollspy({ target: '#mainnav' });
});