//
//  ViewController.swift
//  Destini
//
//  Created by Genilson do Carmo Silva on 27/07/23.
//

import UIKit

class ViewController: UIViewController {
    @IBAction func choiceButton1(_ sender: UIButton) {
    }//Wrong @IBAction selected 😅
    
    @IBOutlet weak var storyLabel: UILabel!
    @IBOutlet weak var choiceButton1: UIButton!
    @IBOutlet weak var choiceButton2: UIButton!
    
    var storyBrain = StoryBrain()
    
    override func viewDidLoad() {
        super.viewDidLoad()
       updateUI()
    }
    
    @IBAction func choiseMade(_ sender: UIButton) {
        storyBrain.nextStory(userChoice: sender.currentTitle!)
        updateUI()
    }
    
    func updateUI(){
        storyLabel.text = storyBrain.getStoryTitle()
        choiceButton1.setTitle(storyBrain.getChoice1(), for: .normal)
        choiceButton2.setTitle(storyBrain.getChoice2(), for: .normal)
    }

}

