//
//  ViewController.swift
//  BMI Calculator
//
//  Created by Angela Yu on 21/08/2019.
//  Copyright © 2019 Angela Yu. All rights reserved.
//

import UIKit

class CalculateViewController: UIViewController {

    @IBOutlet weak var textLabel: UILabel!
    @IBOutlet weak var heightLabel: UILabel!
    @IBOutlet weak var wightLabel: UILabel!
    @IBOutlet weak var slideAltura: UISlider!
    @IBOutlet weak var heightSlider: UISlider!
    @IBOutlet weak var slidePeso: UISlider!
    @IBOutlet weak var weightSlider: UISlider!
    
 var calculatorLogic = CalculatorLogic()
    
  
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func sliderAlturaChange(_ sender: UISlider) {
        let sliderAltura = String(format:"%.2f", sender.value)
       
        heightLabel.text = "\(sliderAltura)m"
    }
    
    @IBAction func sliderPesoChange(_ sender: UISlider) {
        let sliderPeso = String(format:"%.0f",sender.value)
        
        
        wightLabel.text = "\(sliderPeso)kg"
        
    }
    @IBAction func calculateBtn(_ sender: UIButton) {
        let altura = heightSlider.value
        let peso = weightSlider.value
        
        calculatorLogic.CalculatorLogic(peso: peso, altura: altura)
        performSegue(withIdentifier: "goToResult", sender: self)
    
    }
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "goToResult"{
            let destinationVC = segue.destination as! ResultViewController
            destinationVC.imcResultado = calculatorLogic.getIMCResultado()
            destinationVC.advertencia = calculatorLogic.getAdvertencia()
            destinationVC.cores = calculatorLogic.getCores()
        }
    }
}

