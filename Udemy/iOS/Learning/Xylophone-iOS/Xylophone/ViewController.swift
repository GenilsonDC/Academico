//
//  ViewController.swift
//  Xylophone
//
//  Created by Angela Yu on 28/06/2019 and Modified by 👑 Genilson do Carmo on 16/07/2023.
//  Copyright © 2019 The App Brewery. All rights reserved.
//

import UIKit
import AVFoundation

class ViewController: UIViewController {
    
    var player: AVAudioPlayer!

    override func viewDidLoad() {
        super.viewDidLoad()
    }

    @IBAction func keyPressed(_ sender: UIButton) {
    // Animação de opacidade com delay efeito smooth ✨
        UIView.animate(withDuration: 0.3){
            sender.alpha = 0.3
        }
        
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3){
            UIView.animate(withDuration: 0.3){
                sender.alpha = 1
            }
            
        }
        
        playSound(nameSound: sender.currentTitle!)
        
    }
    
    func playSound(nameSound: String) {
        
        let url = Bundle.main.url(forResource: nameSound, withExtension: "wav")
        player = try! AVAudioPlayer(contentsOf: url!)
        player.play()
                
    }
}

