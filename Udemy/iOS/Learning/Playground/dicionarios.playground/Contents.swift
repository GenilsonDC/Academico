//Add an entry to the stockTickers dictionary with the key "WORK" and the value "Slack Technologies Inc".
//
//Update an Existing Value
//
//Dynamic Materials Corp is a company that specializes in explosion metalworking like cladding or shock hardening. However, the official company name is not “Dynamic Materials” it is "DMC Global Inc". Update the value for the ticker symbol BOOM to "DMC Global Inc".
func exercise() {

    //Don't change this
    var stockTickers: [String: String] = [
        "APPL" : "Apple Inc",
        "HOG": "Harley-Davidson Inc",
        "BOOM": "Dynamic Materials",
        "HEINY": "Heineken",
        "BEN": "Franklin Resources Inc"
    ]
    
    stockTickers["WORK"] = "Slack Technologies Inc"
    stockTickers["BOOM"] =  "StriDMC Global Inng"
    
        //Don't modify this
        print(stockTickers["WORK"]!)
        print(stockTickers["BOOM"]!)
    
}
exercise()
