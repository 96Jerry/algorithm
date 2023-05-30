def solution(today, terms, privacies):
    date = list(map(int,today.split(".")))
    year = date[0]
    month = date[1]
    day = date[2]
    
    dict = {}
    for term in terms:
        term_ver = term.split()[0]
        term_period = int(term.split()[1])
        dict[term_ver] = term_period
    
    answer = []
    for i in range(len(privacies)):
        privacy_date = list(map(int, privacies[i].split()[0].split(".")))
        privacy_year = privacy_date[0]
        privacy_month = privacy_date[1]
        privacy_day = privacy_date[2]
        
        if privacy_year == year:
            if privacy_day <= day:
                gap = (month - privacy_month)*28 + (day - privacy_day)
            else:
                gap = (month - privacy_month)*28- (privacy_day - day)
        else:
            if privacy_month <= month:
                if privacy_day <= day:
                    gap = (year-privacy_year)*12*28 + (month-privacy_month)*28 + (day - privacy_day)
                else:
                    gap = (year-privacy_year)*12*28 + (month-privacy_month)*28 - (privacy_day - day)
            else:
                if privacy_day <= day:
                    gap = (year-privacy_year)*12*28- (privacy_month - month)*28 + (day - privacy_day)
                else:
                    gap = (year-privacy_year)*12*28 - (privacy_month - month)*28  - (privacy_day - day)
                    
        
        
        privacy_ver = privacies[i].split()[1]
        
        if gap >= dict[privacy_ver]*28:
            answer.append(i+1)
                          
    return answer