struct computerSell {
    var cpu : [String]
    let gpu : String
    var brandGPU : [String]
    var datas : [String: Int]
    
//    pode ser: init(processador: String, placadeVideo:String, marcaGPU:String, dados:[String: Int])
    init(cpu: [String], gpu:String, brandGPU:[String], datas:[String: Int]){
        
//        processador = cpu
//        placadeVideo = gpu
//        marcaGPU = brandGPU
//        dados = datas
        
        self.cpu = cpu // self se refere ao eventual objeto que sera criado
        self.gpu = gpu
        self.brandGPU = brandGPU
        self.datas = datas
    }
    
    func venda(){
        print("Uma function dentro de uma estrutura é chamada de método")
    }
    
}

var GenilsonsPC = computerSell(cpu: ["Ryzen 9"], gpu: "AMD", brandGPU: ["Asus"], datas: ["Devolucao": 1])
var computador_Barbye = computerSell(cpu: ["celeron"], gpu: "Nvidia", brandGPU: [], datas:["estoque": 20])
print(computador_Barbye)
computador_Barbye.brandGPU.append("evga")
print(computador_Barbye)
