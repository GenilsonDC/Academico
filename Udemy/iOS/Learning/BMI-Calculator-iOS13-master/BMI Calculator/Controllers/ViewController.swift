//
//  ViewController.swift
//  BMI Calculator
//
//  Created by Angela Yu on 21/08/2019.
//  Copyright © 2019 Angela Yu. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var textLabel: UILabel!
    @IBOutlet weak var heightLabel: UILabel!
    @IBOutlet weak var wightLabel: UILabel!
    @IBOutlet weak var slideAltura: UISlider!
    @IBOutlet weak var heightSlider: UISlider!
    @IBOutlet weak var slidePeso: UISlider!
    @IBOutlet weak var weightSlider: UISlider!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func slideSet(_ sender: UISlider) {
        let sliderAltura = String(format:"%.2f", sender.value)
       
        heightLabel.text = "\(sliderAltura)m"
    }
    
    @IBAction func sliderPeso(_ sender: UISlider) {
        let sliderPeso = String(format:"%.0f",sender.value)
        
        
        wightLabel.text = "\(sliderPeso)kg"
        
    }
    @IBAction func calculateBtn(_ sender: UIButton) {
        let altura = heightSlider.value
        let peso = weightSlider.value
        let imc = peso / (powf(altura, 2))
        let saida = String(format:"%.2f",imc)
        
        textLabel.text = "Seu IMC é: \(saida)"
        
    }
}

