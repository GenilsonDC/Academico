//
//  ViewController.swift
//  EggTimer
//
//  Created by Angela Yu on 08/07/2019 and modified by Genilson do Carmo on 18/07/2023.
//  Copyright © 2019 The App Brewery. All rights reserved.
//

import UIKit
import AVFoundation

class ViewController: UIViewController {
    
    @IBOutlet weak var topTitleLabel: UILabel!
    
    @IBOutlet weak var progresBar: UIProgressView!
    
    let pontoGema = ["Soft": 3, "Média": 5, "Dura": 7]
    var timer = Timer()
    var totaltimer = 0
    var segundosPassados = 0
    var player: AVAudioPlayer!
    
    
    @IBAction func eggPointSelect(_ sender: UIButton) {
        
        UIView.animate(withDuration: 0.3){
            sender.alpha = 0.3
        }
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3){
            UIView.animate(withDuration: 0.5){
                sender.alpha = 1
            }
        }
        
        func playSound(){
            let url = Bundle.main.url(forResource: "alarm_sound", withExtension: "mp3")
            player = try! AVAudioPlayer(contentsOf: url!)
            player.play()
        }

        let escolha = sender.currentTitle!
        totaltimer = pontoGema[escolha]!
        
        progresBar.progress = 0.0
        segundosPassados = 0
        topTitleLabel.text = escolha
        timer.invalidate()
    
       
        
        timer = Timer.scheduledTimer(withTimeInterval: 1.0, repeats: true){
            (timer) in
            if self.segundosPassados < self.totaltimer {
                self.segundosPassados += 1
                self.progresBar.progress = Float(self.segundosPassados) / Float( self.totaltimer)
                
              
               }
            else{
                playSound()
                timer.invalidate()
                self.topTitleLabel.text = "Pronto! \nVamos comer 🥚🧂"
                playSound()
            }
        }
        
        
        
        }
    }

