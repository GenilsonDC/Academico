//
//  ViewController.swift
//  Quizzler-iOS13
//
//  Created by Angela Yu on 12/07/2019 and modified by Genilson do Carmo on 20/07/2023.
//  Copyright © 2019 The App Brewery. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var topButton: UIButton!
    @IBOutlet weak var pontuacaoLabel: UILabel!
    @IBOutlet weak var questionLAbel: UILabel!
    @IBOutlet weak var progresBar: UIProgressView!
    @IBOutlet weak var trueButton: UIButton!
    @IBOutlet weak var falseButton: UIButton!
    
    var quizLogica = QuizLogica()
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        updateUI()
    }
    
    @IBAction func btnAnswerPressd(_ sender: UIButton) {
        let userAnswer = sender.currentTitle!

        let recebeCertoErrado = quizLogica.checkAnswer(userAnswer)
        
        
        if recebeCertoErrado { //True or False do Model - QuizLogica
            
            questionLAbel.backgroundColor = UIColor.green.withAlphaComponent(0.5)
            
        }
        else
        {
            questionLAbel.backgroundColor = UIColor.red.withAlphaComponent(0.5)
        }
        
        quizLogica.proximaPergunta()
        
        
        Timer.scheduledTimer(withTimeInterval: 0.23, repeats: false){ [self]_ in
            questionLAbel.backgroundColor = UIColor.clear
            
        }
        updateUI()
        
    }
    
    
    
    
    func   updateUI(){
        questionLAbel.text = quizLogica.getTextoResposta()
        progresBar.progress = quizLogica.getProgres()
        pontuacaoLabel.text = "Acertos: \(quizLogica.getAcertos())"
        
        
        
    }
    
}

