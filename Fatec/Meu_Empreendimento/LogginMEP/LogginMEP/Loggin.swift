//
//  ViewController.swift
//  Meu Empreendimento
//
//  Created by Genilson do Carmo Silva on 04/06/23.
//

import UIKit
import WebKit

class Loggin: UIViewController {
    var screen: LoginScreenView?

    override func loadView() {
        self.screen = LoginScreenView()
        self.view = self.screen
    }

    override func viewDidLoad() {
        super.viewDidLoad()

        setupLoginButtonTarget()
    }

    override func viewDidAppear(_ animated: Bool) {
        self.navigationController?.setNavigationBarHidden(true, animated: false)
    }

    private func setupLoginButtonTarget() {
        screen?.entrarbtn.addTarget(self, action: #selector(loginButtonTapped), for: .touchUpInside)
    }

    @objc private func loginButtonTapped() {
        guard let NOME = screen?.logintextField.text,
              let SENHA = screen?.senhatextField.text else {
            return
        }

        // Crie os componentes de URL para os parâmetros de nome de usuário e senha
        var components = URLComponents()
        components.queryItems = [
            URLQueryItem(name: "NOME", value: NOME),
            URLQueryItem(name: "SENHA", value: SENHA)
        ]

        // Obtenha a string de consulta dos componentes de URL
        guard let queryString = components.query else {
            return
        }

        // Codifique a string de consulta como dados
        guard let queryData = queryString.data(using: .utf8) else {
            return
        }

        // Crie uma solicitação HTTP POST para o endpoint de login
        guard let url = URL(string: "http://localhost:8000/login/") else {
            return
        }
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.httpBody = queryData

        // Obtenha o token CSRF do cookie
        let csrfCookie = HTTPCookieStorage.shared.cookies?.first(where: { $0.name == "csrftoken" })

        // Verifica se o token CSRF existe e adicione-o ao cabeçalho da solicitação
        if let csrfCookie = csrfCookie {
            request.setValue(csrfCookie.value, forHTTPHeaderField: "X-CSRFToken")
        }

        // Crie uma sessão URLSession e envie a solicitação
        let session = URLSession.shared
        let task = session.dataTask(with: request) { (data, response, error) in
            // Verifica se ocorreu algum erro durante a solicitação
            if let error = error {
                print("Erro na solicitação: \(error.localizedDescription)")
                return
            }

            // Verifique o código de status da resposta HTTP
            guard let httpResponse = response as? HTTPURLResponse else {
                print("Resposta inválida do servidor")
                return
            }

            if httpResponse.statusCode == 200 {
                // Login bem-sucedido, exiba uma mensagem de sucesso ou navegue para outra tela
                print("Login bem-sucedido!")
            } else {
                // Login falhou, exiba uma mensagem de falha
                print("Credenciais inválidas!")
            }
        }

        // Inicie a tarefa
        task.resume()
    }
}
