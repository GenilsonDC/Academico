//
//  ViewController.swift
//  Quizzler-iOS13
//
//  Created by Angela Yu on 12/07/2019 and modified by Genilson do Carmo on 20/07/2023.
//  Copyright © 2019 The App Brewery. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var questionLAbel: UILabel!
    @IBOutlet weak var progresBar: UIProgressView!
    @IBOutlet weak var trueButton: UIButton!
    @IBOutlet weak var falseButton: UIButton!
    
   
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        updateUI()
    }
    
    @IBAction func btnAnswerPressd(_ sender: UIButton) {
        let userAnswer = sender.currentTitle
//        let actualQuestion = quizList[numQuestion]
//        let actualAnswer = actualQuestion.answer
        let actualAnswer = quizList[numQuestion].answer // Dessa forma fica mais curto que o metodo comentado acima
        var acertou = 0
        var errou = 0
        
        if userAnswer == actualAnswer{
            acertou += 1
            questionLAbel.backgroundColor = UIColor.green.withAlphaComponent(0.5)
            
        }
        else
        {
            errou += 1
            questionLAbel.backgroundColor = UIColor.red.withAlphaComponent(0.5)
            

        }
        
        if numQuestion + 1 < quizList.count {
            numQuestion += 1
            
        }
        else{
            numQuestion = 0
        }
        
        Timer.scheduledTimer(withTimeInterval: 0.23, repeats: false){ [self]_ in
                    questionLAbel.backgroundColor = UIColor.clear
       
                   }
     updateUI()
        
    }
    
    
    
    
    func   updateUI(){
        questionLAbel.text = quizList[numQuestion].text
        progresBar.progress = Float(quizList.count) / Float(numQuestion)
        
       
      
        
    }
    
}

