Router.configure({
    layoutTemplate: 'base'
});

// URL Routes
Router.route('/', function() {
  this.render('main');
  Router.onAfterAction(function() {
    document.title = "feedback"
  })
});
Router.route('/submitted', function() {
  this.render('confirmSubmit');
  Router.onAfterAction(function() {
    document.title = "confirmed submission"
  })
});
Router.route('/results',function(){
  this.render('results');
  Router.onAfterAction(function() {
    document.title = "Feedback Results"
  })
});
