import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

// Create Collection
feedback = new Mongo.Collection('feedback');

// Only allow inert to collection if userId is true (logged in)
feedback.allow({
  insert: function() {
    return true;
  }
});

// DB Schema for Quickform
feedbackSchema = new SimpleSchema({
  overallScore: {
    type: Number,
    autoform: {
      type: 'select-radio',
      options: function (){return[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4", value:4},{label:"5",value: 5}]}
    }
  },
  foodtype: {
    type: String,
    autoform: {
      type: 'select',
      options: function (){return[{label:"Breakfast Sandwich",value:"Breakfast Sandwich"},{label:"Burger",value:"Burger"},{label:"Signature Crafted Sandwich",value:"Signature Crafted Sandwich"},{label:"Coffee", value:"Coffee"},{label:"Ice Cream",value: "Ice Cream"}]}
    }
  },
  clean: {
    type: Number,
    autoform: {
      type: 'select-radio',
      options: function (){return[{label:"1",value:1},{label:"2",value:2},{label:"3",value:3},{label:"4", value:4},{label:"5",value: 5}]}
    }
  },
  createdAt: {
    type: Date,
    autoform: {
      type: "hidden"
    },
    autoValue() {
      if (this.isInsert) return new Date();
    },
  }
});

feedback.attachSchema(feedbackSchema);
