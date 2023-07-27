//
//  QuizLogica.swift
//  Quizzler-iOS13
//
//  Created by Genilson do Carmo Silva on 24/07/23.
//  Copyright © 2023 The App Brewery. All rights reserved.
//

import Foundation
struct QuizLogica{
    let quizList = [
        Question(q: "5 + 1 = 6", a: "Verdadeiro"),
        Question(q: "A Amazon é uma emrpesa brasileira", a: "Falso"),
        Question(q: "Campo Grande é a capital do Mato Grosso", a: "Falso"),
        Question(q: "O trevo da sorte é um trevo de quatro folhas", a: "Verdadeiro"),
        Question(q: "A França é a capital de Paris", a: "Falso"),
    ]
    var numQuestion = 0
    var acertos = 0
    
    mutating func checkAnswer(_ userAnswer: String) -> Bool{
        if userAnswer == quizList[numQuestion].answer{
            acertos += 1
            return true
        }
        else{
            return false
        }
    }
    
    func getTextoResposta() -> String{
        return quizList[numQuestion].text
    }
    
    mutating func proximaPergunta(){
        if numQuestion + 1 < quizList.count {
            numQuestion += 1
            
        }
        else{
            numQuestion = 0
            acertos = 0
        }
    }
    
    func getAcertos() -> Int{
      
        return acertos
    }
    
    func getProgres() -> Float{
        let progress = Float(numQuestion ) / Float(quizList.count)
        return progress
    }
    
}
