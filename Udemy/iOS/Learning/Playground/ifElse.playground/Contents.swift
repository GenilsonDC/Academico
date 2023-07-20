var aYear =  1996
func isLeap(year: Int) {
  
    if year % 4 == 0{
        
        if year % 4 == 0 && year % 100 == 0{
                        
            if year % 400 != 0{
                print(year, "não é um ano bissexto")
            }
            else if year % 400 == 0{
                print(year, "é um ano bissexto")
            }
        }
        else
        {
            print(year, "é um ano bissexto")
        }
        
    }
    
    else{
        print(year, "não é um ano bissexto")
    }
    
}
isLeap(year: aYear)
