//reate a program that takes a number (Int) as an input and prints the corresponding day of the week using a Switch statement.
//
//e.g. If the input was 6
//
//Then the function should print:
//
//"Friday"
//
//If the input number does not match a day of the week then your program should print "Error".

func dayOfTheWeek(day: Int) {
    switch day {
    case 1:
        print("Sunday")
    case 2:
        print("Monday")
    case 3:
        print("Tuesday")
    case 4:
        print("Wednesday")
    case 5:
        print("Thursday")
    case 6:
        print("Friday")
    case 7:
        print("Saturday")
    default:
        print("Error: Day out of tha range 1 ... 7")
    }
    
}
dayOfTheWeek(day: 9)
