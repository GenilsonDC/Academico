//
//  ResultViewController.swift
//  BMI Calculator
//
//  Created by Genilson do Carmo Silva on 04/08/23.
//  Copyright © 2023 Angela Yu. All rights reserved.
//

import UIKit

class ResultViewController: UIViewController {

    var imcResultado: String?
    var advertencia: String?
    var cores: UIColor?
    
    @IBOutlet weak var imcLabel: UILabel!
    @IBOutlet weak var advertenciaLabel: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        imcLabel.text = imcResultado
        advertenciaLabel.text = advertencia
        view.backgroundColor = cores

        
    }
    
    @IBAction func recalculatePressed(_ sender: UIButton) {
        self.dismiss(animated: true, completion: nil)
    }
    
   

}
