//
//  CalculatorLogic.swift
//  BMI Calculator
//
//  Created by Genilson do Carmo Silva on 06/08/23.
//  Copyright © 2023 Angela Yu. All rights reserved.
//

import UIKit

struct CalculatorLogic {
    
    var imc: IMC?
    
    func getIMCResultado() -> String {
        let imcSaidaFormatada = String(format: "%.1f", imc?.Resultado ?? 0.0)
        return imcSaidaFormatada
    }
    
    func getAdvertencia() -> String{
        return imc?.Advertencia ?? "Sem alertas!"
    }
    
    func getCores() -> UIColor {
        return imc?.cores ?? UIColor.white
    }
    mutating func CalculatorLogic(peso: Float, altura: Float)  {
        let imcResultado = peso / (powf(altura, 2))
        
        if imcResultado < 18.5{
            imc = IMC(Resultado: imcResultado, Advertencia: "⚠️ Ingerir mais calorias. \nVocê esta abaixo do peso!", cores: UIColor(red: 1, green: 0.851, blue: 0.2667, alpha: 1))
        }else if imcResultado < 24.9{
            imc = IMC(Resultado: imcResultado, Advertencia: "✨ Continue assim. \nVocê esta dentro do peso!", cores: UIColor(red: 0.4627, green: 0.8392, blue: 1.0, alpha: 1))
        }
        else{
            imc = IMC(Resultado: imcResultado, Advertencia: "⚠️ Ingerir menos calorias. \nVocê esta acima do peso!", cores: UIColor.systemPink)
        }
        
    }
    
}
