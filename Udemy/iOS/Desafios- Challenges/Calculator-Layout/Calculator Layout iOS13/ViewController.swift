//
//  ViewController.swift
//  Calculator Layout iOS13
//
//  Created by Angela Yu on 01/07/2019 Modified by 👑 Genilson do Carmo on 15/07/2023.
//  Copyright © 2019 The App Brewery. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var DisplayView: UILabel!
    
    @IBAction func btnDivisaoView(_ sender: UIButton) {
        DisplayView.text = "÷"
        
    }
    @IBAction func btnMultiplicarView(_ sender: UIButton) {
        DisplayView.text = "x"
    }
    
    @IBAction func btnSubtrairView(_ sender: UIButton) {
        DisplayView.text = "-"
    }
    
    @IBAction func btnAdicionarView(_ sender: UIButton) {
        DisplayView.text = "+"
    }
    
    @IBAction func btnPercentView(_ sender: UIButton) {
        DisplayView.text = "%"
    }
    @IBAction func btnMoreLessView(_ sender: UIButton) {
        DisplayView.text = "+/-"
    }
    
    @IBAction func btnClearView(_ sender: UIButton) {
        DisplayView.text = ""
    }
    
}

