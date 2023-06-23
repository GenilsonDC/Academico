//
//  LoginScreenView.swift
//  Meu Empreendimento
//
//  Created by Genilson do Carmo Silva on 04/06/23.
//

import UIKit


class LoginScreenView: UIView {
    // Background image
    lazy var subImageView: UIImageView = {
        let image = UIImageView()
        image.translatesAutoresizingMaskIntoConstraints = false
        image.image = UIImage(named: "backgrnd1")
        return image
    }()
    // png brand/company
    lazy var logoImageVew: UIImageView = {
        let image = UIImageView()
        image.translatesAutoresizingMaskIntoConstraints = false
        image.image = UIImage(named: "logo1")
        return image
        
    }()
    // Label brand/company
    lazy var meuEmpreedimentoLabel:UILabel = {
        let label = UILabel() 
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .white
        label.font = UIFont.boldSystemFont(ofSize: 35)
        label.text = "Meu Empreendimento"
        return label
    }()
    // Label presentation
    lazy var apresentacaoLabel:UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textAlignment = .center
        label.numberOfLines = 3
        label.textColor = .darkGray
        label.font = UIFont.systemFont(ofSize: 14)
        label.text = "EGS3 FATEC \n Prototipo dinanimo Meu Empreendimento"
        return label
        
    }()
    // TextField Login email
    lazy var logintextField:UITextField = {
        let txtfld = UITextField()
        txtfld.translatesAutoresizingMaskIntoConstraints = false
        txtfld.autocorrectionType = .no
        txtfld.backgroundColor = UIColor(red: 52/255, green: 52/255, blue: 52/255, alpha: 0.8)
        txtfld.borderStyle = .roundedRect
        txtfld.keyboardType = .emailAddress
        txtfld.attributedPlaceholder = NSAttributedString(string: "Nome", attributes: [NSAttributedString.Key.foregroundColor:UIColor.white.withAlphaComponent(0.4)])
        txtfld.textColor = .white
        txtfld.clipsToBounds = true
        txtfld.layer.cornerRadius = 10
        txtfld.layer.borderWidth = 1.0
        txtfld.layer.borderColor = UIColor.white.cgColor
        return txtfld
    }()
    // TextField password
    lazy var senhatextField:UITextField = { // password
        let txtfld = UITextField()
        txtfld.translatesAutoresizingMaskIntoConstraints = false
        txtfld.autocorrectionType = .no
        txtfld.backgroundColor = UIColor(red: 52/255, green: 52/255, blue: 52/255, alpha: 0.8)
        txtfld.borderStyle = .roundedRect
        txtfld.keyboardType = .default
        txtfld.isSecureTextEntry = true
        txtfld.attributedPlaceholder = NSAttributedString(string: "senha", attributes: [NSAttributedString.Key.foregroundColor:UIColor.white.withAlphaComponent(0.4)])
        txtfld.textColor = .white
        txtfld.clipsToBounds = true
        txtfld.layer.cornerRadius = 10
        txtfld.layer.borderWidth = 1.0
        txtfld.layer.borderColor = UIColor.white.cgColor
        return txtfld
    }()
    // Button recover password
    lazy var recuperaSenhabtn:UIButton = {
        let btn = UIButton(type: .system)
        btn.translatesAutoresizingMaskIntoConstraints = false
        btn.setTitle("Esqueci senha", for: .normal)
        btn.titleLabel?.font=UIFont.systemFont(ofSize: 14)
        btn.setTitleColor(UIColor(red: 231/255, green: 232/255, blue: 24/255, alpha: 0.9), for: .normal)
        return btn
    }()
    // Button enter
    lazy var entrarbtn:UIButton = {
        let btn = UIButton(type: .system)
        btn.translatesAutoresizingMaskIntoConstraints = false
        btn.setTitle("Entrar", for: .normal)
        btn.titleLabel?.font=UIFont.systemFont(ofSize: 20)
        btn.setTitleColor(.systemPink, for: .normal)
        btn.backgroundColor = UIColor(red: 252/255, green: 182/255, blue: 52/255, alpha: 1)
        btn.clipsToBounds = true
        btn.layer.cornerRadius = 10
        btn.titleLabel?.textAlignment = .center
        return btn
    }()
    // Line separator buttons
    lazy var lineVew: UIView={
        let view = UIView()
        view.translatesAutoresizingMaskIntoConstraints = false
        view.backgroundColor = .white
        return view
    }()
    
    
    // Button enter with Google
    lazy var entrarComGooglebtn:UIView = {
        let btn = UIView()
        btn.translatesAutoresizingMaskIntoConstraints = false
        btn.clipsToBounds = true
        btn.backgroundColor = UIColor(red: 52/255, green: 52/255, blue: 52/255, alpha: 0.9)
        btn.layer.borderColor = UIColor(red: 52/255, green: 52/255, blue: 52/255, alpha: 0.7).cgColor
        btn.layer.cornerRadius = 10
        btn.layer.borderWidth = 2
        return btn
    }()
    // image/logo enter with Google
    lazy var googleLogoImageView: UIImageView = {
        let image = UIImageView()
        image.translatesAutoresizingMaskIntoConstraints = false
        image.image = UIImage(named: "googleLogo")
        return image
    }()
    // Label enter with Google
    lazy var entrarcomLabelView:UILabel = {
        let label = UILabel()
        label.translatesAutoresizingMaskIntoConstraints = false
        label.textColor = .white
        label.font = UIFont.boldSystemFont(ofSize: 14)
        label.text = "Entrar com Google"
        return label
    }()
    
    
    // MARK: - Initialization
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupViews()
        configureConstraints()
    }
    
    required init?(coder: NSCoder) {
        super.init(coder: coder)
       setupViews()
        configureConstraints()
    }
    
    // MARK: - NSCoding
    
    override func encode(with coder: NSCoder) {
        coder.encode(subImageView.image, forKey: "subImageViewImage")
        coder.encode(logoImageVew.image, forKey: "logoImageVewImage")
        coder.encode(meuEmpreedimentoLabel.text, forKey: "meuEmpreedimentoLabelText")
        coder.encode(apresentacaoLabel.text, forKey: "apresentacaoLabelText")
        coder.encode(logintextField.attributedPlaceholder?.string, forKey: "logintextFieldPlaceholder")
        coder.encode(senhatextField.attributedPlaceholder?.string, forKey: "senhatextFieldPlaceholder")
        coder.encode(recuperaSenhabtn.title(for: .normal), forKey: "recuperaSenhabtnTitle")
        coder.encode(entrarbtn.title(for: .normal), forKey: "entrarbtnTitle")
        coder.encode(entrarcomLabelView.text, forKey: "entrarcomLabelViewText")
    }
    

    
    // MARK: - Private Methods
    
    private func setupViews() {
        addSubview(subImageView)
                addSubview(logoImageVew)
                addSubview(meuEmpreedimentoLabel)
                addSubview(apresentacaoLabel)
                addSubview(logintextField)
                addSubview(senhatextField)
                addSubview(recuperaSenhabtn)
                addSubview(entrarbtn)
                addSubview(lineVew)
                addSubview(entrarComGooglebtn)
                entrarComGooglebtn.addSubview(googleLogoImageView)
                entrarComGooglebtn.addSubview(entrarcomLabelView)
              
    }
    
    
   
   
    
    
    private func configureConstraints(){
        NSLayoutConstraint.activate([
            //    ********* BACKGOUND image da tela Ligin ************************************************
            self.subImageView.leadingAnchor.constraint(equalTo: self.leadingAnchor), //Zerando lado Esquerdo(Leading)
            self.subImageView.trailingAnchor.constraint(equalTo: self.trailingAnchor),//Zerando lado direito(trailing)
            self.subImageView.topAnchor.constraint(equalTo: self.topAnchor),//Zerando top
            self.subImageView.bottomAnchor.constraint(equalTo: self.bottomAnchor),//Zerando botton
            //    ********* LOGO da empresa na tela Ligin *************************************************
            self.logoImageVew.topAnchor.constraint(equalTo: self.safeAreaLayoutGuide.topAnchor,constant: 55),
            self.logoImageVew.heightAnchor.constraint(equalToConstant: 108),
            self.logoImageVew.widthAnchor.constraint(equalToConstant: 108),
            self.logoImageVew.centerXAnchor.constraint(equalTo: self.centerXAnchor),
            //    ********* Label NOME da EMPRESA da tela Ligin ******************************************
            self.meuEmpreedimentoLabel.topAnchor.constraint(equalTo: self.logoImageVew.bottomAnchor,constant: 16),
            self.meuEmpreedimentoLabel.centerXAnchor.constraint(equalTo: self.centerXAnchor),
            //    ********* label APRESENTACAO **********************************************************
            self.apresentacaoLabel.topAnchor.constraint(equalTo:self.meuEmpreedimentoLabel.bottomAnchor,constant: 4),
            self.apresentacaoLabel.leadingAnchor.constraint(equalTo: self.leadingAnchor,constant: 10),
            self.apresentacaoLabel.trailingAnchor.constraint(equalTo: self.trailingAnchor,constant: -10),
            //    ********* textField EMIAL **********************************************************
            self.logintextField.topAnchor.constraint(equalTo:self.apresentacaoLabel.bottomAnchor,constant: 43),
            self.logintextField.leadingAnchor.constraint(equalTo: self.leadingAnchor,constant: 20),
            self.logintextField.trailingAnchor.constraint(equalTo: self.trailingAnchor,constant: -20),
            self.logintextField.heightAnchor.constraint(equalToConstant: 40),
            //    ********* textField SENHA **********************************************************
            self.senhatextField.topAnchor.constraint(equalTo:self.logintextField.bottomAnchor,constant: 20),
            self.senhatextField.leadingAnchor.constraint(equalTo: self.leadingAnchor,constant: 20),
            self.senhatextField.trailingAnchor.constraint(equalTo: self.trailingAnchor,constant: -20),
            self.senhatextField.heightAnchor.constraint(equalToConstant: 40),
            //    ********* Button RECUPERAR SENHA **********************************************************
            self.recuperaSenhabtn.topAnchor.constraint(equalTo:self.senhatextField.bottomAnchor,constant: 30),
            self.recuperaSenhabtn.trailingAnchor.constraint(equalTo: self.logintextField.trailingAnchor),
            self.recuperaSenhabtn.heightAnchor.constraint(equalToConstant: 18),
            //    ********* Button ENTRAR **********************************************************
            self.entrarbtn.topAnchor.constraint(equalTo:self.recuperaSenhabtn.bottomAnchor,constant: 30),
            self.entrarbtn.leadingAnchor.constraint(equalTo: self.logintextField.leadingAnchor), // referenciando ao textfiel
            self.entrarbtn.trailingAnchor.constraint(equalTo: self.logintextField.trailingAnchor),// referenciando ao textfiel
            self.entrarbtn.heightAnchor.constraint(equalToConstant: 40),
            //    ********* LINHA separar botoes **********************************************************
            self.lineVew.topAnchor.constraint(equalTo: self.entrarbtn.bottomAnchor,constant: 40),
            self.lineVew.leadingAnchor.constraint(equalTo: self.leadingAnchor,constant: 64),
            self.lineVew.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -64),
            self.lineVew.heightAnchor.constraint(equalToConstant: 0.5),
            //    ********* Button ENTRAR COM **********************************************************
            self.entrarComGooglebtn.topAnchor.constraint(equalTo:self.lineVew.bottomAnchor,constant: 30),
            self.entrarComGooglebtn.leadingAnchor.constraint(equalTo: self.logintextField.leadingAnchor), // referenciando ao textfield
            self.entrarComGooglebtn.trailingAnchor.constraint(equalTo: self.logintextField.trailingAnchor),// referenciando ao textfield
            self.entrarComGooglebtn.heightAnchor.constraint(equalToConstant: 40),
            //    ********* LOGO/imagem ENTRAR COM **********************************************************
            self.googleLogoImageView.leadingAnchor.constraint(equalTo: self.entrarComGooglebtn.leadingAnchor,constant: 53),
            self.googleLogoImageView.centerYAnchor.constraint(equalTo: self.entrarComGooglebtn.centerYAnchor),
            self.googleLogoImageView.heightAnchor.constraint(equalToConstant: 20),
            self.googleLogoImageView.widthAnchor.constraint(equalToConstant: 20),
            //    ********* LABEL ENTRAR COM **********************************************************
            self.entrarcomLabelView.leadingAnchor.constraint(equalTo: self.googleLogoImageView.trailingAnchor,constant: 17),
            self.entrarcomLabelView.centerYAnchor.constraint(equalTo: self.entrarComGooglebtn.centerYAnchor),
            
            
        ])
        
    }
}
