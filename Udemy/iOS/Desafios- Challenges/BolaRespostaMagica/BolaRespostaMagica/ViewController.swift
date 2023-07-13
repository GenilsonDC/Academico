//
//  ViewController.swift
//  BolaRespostaMagica
//
//  Created by Genilson do Carmo Silva on 07/07/23.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var imageFundo: UIImageView!
    
    @IBAction func btnRespostas(_ sender: UIButton) {
        let randomRespostas = [#imageLiteral(resourceName: "yes"), #imageLiteral(resourceName: "no"), #imageLiteral(resourceName: "é sim"), #imageLiteral(resourceName: "misterio"), #imageLiteral(resourceName: "irineu")]
        
        imageFundo.image = randomRespostas.randomElement()
    }
}




