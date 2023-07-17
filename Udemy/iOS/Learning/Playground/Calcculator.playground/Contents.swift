func calculator() {
  let a = Int(readLine()!)! //First input
  let b = Int(readLine()!)! //Second input
  
  add(n1: a, n2: b)
  subtract(n1: a, n2: b)
  multiply(n1: a, n2: b)
  divide(n1: a, n2: b)
  
}


func add(n1: Int, n2 : Int){
    print("Soma:", n1,"+",n2,"=", n1 + n2)
    
}

func subtract(n1: Int , n2: Int){
    print("Subtração:", n1,"-",n2,"=", n1 - n2)
}

func multiply(n1: Int, n2: Int){
    print("Multiplicação:", n1,"x",n2,"=", n1 * n2)
}

func divide(n1: Int, n2: Int){
    print("Divisão:", n1,"÷",n2,"=", n1 / n2)
}

add(n1: -8, n2: 12)
subtract(n1: 3, n2: 4)
multiply(n1: -2, n2: 4)
divide(n1: 5,n2: 9)
