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
    var numQuestion = 0
    let quizList = [
        ["5 + 1 = 6", "Verdadeiro"],
        ["A Amazon é uma emrpesa brasileira", "Falso"],
        ["Campo Grande é a capital do Mato Grosso", "Falso" ],
        ["O trevo da sorte é um trevo de quatro folhas", "Verdadeiro"]
    ]
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        updateUI()
    }
    
    @IBAction func btnAnswerPressd(_ sender: UIButton) {
        let userAnswer = sender.currentTitle
        let actualAnswer = quizList[numQuestion][1]
        var acertou = 0
        var errou = 0
        
        if userAnswer == actualAnswer{
            acertou += 1
            print ( "✅ Acertou 😎")
        }
        else
        {
            errou += 1
            print( "❌ Errou 😭")
        }
        
        if numQuestion + 1 < quizList.count {
            numQuestion += 1
            
        }
        else{
            numQuestion = 0
        }
        updateUI()
    }
    
    
    func   updateUI(){
        questionLAbel.text = quizList[numQuestion] [0]
        
    }
    
}

