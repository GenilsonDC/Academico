//If you have a dictionary with 3 student names and their test scores, can you print the highest score?
//
//e.g. if
//
//studentsAndscores = ["Amy": 88, "James": 55, "Helen": 99]
//Then your function should print 99.
//
var studentsAndScores = ["Amy": 0, "James": 0, "Helen": 0]

func highestScore(scores: [String: Int]) {
    var highestScoreStudent = ""
    var highestScore = 0
    
    studentsAndScores.updateValue(88, forKey: "Amy")
    studentsAndScores.updateValue(55, forKey: "James")
    studentsAndScores.updateValue(99, forKey: "Helen")
    

    
    for (studant, score) in studentsAndScores{
        if score > highestScore{
            highestScore = score
            highestScoreStudent = studant
        }
    }
    print("A maior puntuação é:",highestScore,"do Alun(a)(e)(o):",highestScoreStudent)
}
highestScore(scores: studentsAndScores)
