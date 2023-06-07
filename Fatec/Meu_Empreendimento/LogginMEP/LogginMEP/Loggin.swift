//
//  ViewController.swift
//  Meu Empreendimento
//
//  Created by Genilson do Carmo Silva on 04/06/23.
//

import UIKit

class Loggin: UIViewController {
    var screem: LoginScreen?
    override func loadView() {
        self.screem =  LoginScreen()
        self.view = self.screem
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
//        self.view.backgroundColor = .systemPink
    }

     override func viewDidAppear(_ animated: Bool) {
        self.navigationController?.setNavigationBarHidden(true, animated: false)
        
    }
}

