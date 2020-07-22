var mongoose                    =   require("mongoose");

var quizSchema                  =   new mongoose.Schema({
    uniqueID    : String,
    topic       : String,
    description : String,
    date        : {type: Date},
    endDate     : {type: Date},
    duration    : Number,
    image       : String,
    questions   : [{
        question    : String,
        image       : String,
        options     : [{
            image   : String,
            text    : String,
            isAnswer: Boolean
        }],
        editorial   : String
    }],
    author    : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    password    : String
});

module.exports  =   mongoose.model('Quiz', quizSchema);