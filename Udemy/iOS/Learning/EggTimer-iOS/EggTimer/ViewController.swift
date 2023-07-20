//
//  ViewController.swift
//  EggTimer
//
//  Created by Angela Yu on 08/07/2019 and modified by Genilson do Carmo on 18/07/2023.
//  Copyright © 2019 The App Brewery. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var topTitleLabel: UILabel!
    
    let pontoGema = ["Soft": 300, "Média": 480, "Dura": 720]
    var timer = Timer()
    
    
    @IBAction func eggPointSelect(_ sender: UIButton) {
        UIView.animate(withDuration: 0.3){
            sender.alpha = 0.3
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3){
            UIView.animate(withDuration: 0.5){
                sender.alpha = 1
            }
        }
       
        timer.invalidate()
        let escolha = sender.currentTitle!
        var resultado = pontoGema[escolha]!
        
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true){
            (timer) in
            if resultado >= 0{
               
                print(resultado,"s")
                resultado -= 1

            }
            else{
                timer.invalidate()
                self.topTitleLabel.text = "Pronto!"
            }
        }
        
        
        
        }
    }

