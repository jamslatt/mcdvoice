Meteor.publish('feedback', function () {
      return feedback.find({});
});
Meteor.publish('feedBackOverall', function(args){
  var connect = [
    {
      "$group": {
        "_id": "$overallScore",
        "avgScore": { "$avg": "$overallScore" }
      }
    }
  ];

  var result = feedback.aggregate(connect)
  

  return result;
});
