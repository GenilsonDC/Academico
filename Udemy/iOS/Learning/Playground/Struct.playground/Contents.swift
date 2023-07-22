struct computerSell {
    var cpu = ["i5", "i7", "i9", "Ryzen 5", "Ryzen 7", "Ryzen 9"]
    let gpu = ["Nvidia", "AMD"]
    var brandGPU = ["Gigabyte", "MSi", "evga", "Galaxy"]
    var data = ["estoque": 2000, "vendidos": 0, "devolucao": 0]
    
    func venda(){
        print("Uma function dentro de uma estrutura é chamada de método")
    }
    
}

var transaction = computerSell()

print(transaction.brandGPU)
transaction.brandGPU.append("Asus")
print(transaction.brandGPU)
print(transaction.venda())
print("Venda de uma GPU \(transaction.gpu[0]) da marca \(transaction.brandGPU[4]) e processador \(transaction.cpu[1]) agora o esque é de \(transaction.data["estoque"]!)")
