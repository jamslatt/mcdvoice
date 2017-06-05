Meteor.publish('feedback', function () {
      return feedback.find({});
});
Meteor.publish('feedBackOverall', function(){
  var connect = ({
    "$group": {
      "_id": null,
      "avg_score": { "$avg": "$overallScore" },
      "avg_dollar": { "$avg": "$dollar" }
    }
  })

  var result = feedback.aggregate(connect);
  console.log(result);
  return result;
});
