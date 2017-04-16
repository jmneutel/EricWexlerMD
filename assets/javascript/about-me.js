$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTabs a[href="#introduction"]').tab('show');
$('#myTabs a[href="#biography"]').tab('show');
$('#myTabs a[href="#cv"]').tab('show');