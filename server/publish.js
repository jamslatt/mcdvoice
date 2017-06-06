Meteor.publish('feedback', function () {
      return feedback.find({});
});
Meteor.publish('feedBackOverall', function(){
  var connect = ({
    "$group": {
      "_id": "$overallScore",
      "avgScore": { "$avg": "$overallScore" }
    }
  });

  var result = feedback.aggregate(connect);
  console.log(result);
  return result;
});
