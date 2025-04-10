const callRanges = {
    "MP": {
        "UTG": [ "65s","88","99","65s"]
    },
    "CO": {
        "UTG": [ "ATs","A9s","A7s","A3s","KQs","KJs","99","88","65s"],
        "MP":  [ "ATs","A9s","A7s","A3s","KQs","KJs","99","88","65s"]
    },
    "BU": {
        "UTG": [  "ATs","A9s","A8s","A4s","A2s","KQs","KJs","QJs","JJ","JTs","TT","99","88","77","66"],
        "MP": [ "ATs","A9s","A8s","A4s","A2s","KQs","KJs","QJs","JJ","JTs","TT","99","88","77","66"],
        "CO": ["ATs","A9s","A8s","A4s","A2s","KQs","KJs","KTs","QJs","QTs","JTs","TT","99","88","77","66","65s"]
    },
    "SB": {
        "UTG": ["ATs","A9s","A8s","A3s","KQs","KJs","KTs","AQo","QJs","QTs","JJ","TT","99","88","77","66","65s"],
        "MP": [ "AJs","ATs","A9s","A7s","KQs","KJs","KTs","AQo","QJs","QTs","JJ","JTs","99","88","77","66"],
        "CO": ["ATs","A9s","A7s","A6s","A3s","A2s","KJs","KTs","K9s","K8s","K7s","QTs","Q9s","QJo","JTs","J9s","KTo","TT","T9s","99","88","77","66"],
        "BU": ["ATs","A9s","A7s","A6s","A3s","A2s","KJs","KTs","K9s","K8s","K7s","QTs","Q9s","QJo","JTs","J9s","KTo","TT","T9s","99","88","77","66"]
    },
    "BB": {
        "UTG": [ "AQs","AJs","ATs","A9s","A8s","A7s","A6s","A3s","A2s","KQs","KJs","KTs","K9s","K8s","K7s","K6s","K5s","K4s","K3s","K2s","AQo","KQo","QJs","QTs","Q9s","Q8s","Q7s","Q6s","Q5s","Q3s","Q2s","AJo","KJo","QJo","JJ","Jts","J9s","J8s","J7s","J6s","J5s","J4s","ATo","KTo","QTo","JTo","TT","T9s","T8s","T7s","T6s","A9o","T9o","99","98s","97s","96s","95s","A8o","98o","88","87s","86s","85s","84s","87o","77","75s","74s","76o","66","64s","63s","55","54s","53s","52s","44","43s","42s","33","32s","22"],
        "MP": ["AQs","AJs","ATs","A9s","A8s","A7s","A6s","A3s","A2s","KQs","KJs","KTs","K9s","K8s","K7s","K6s","K5s","K4s","K3s","K2s","AQo","KQo","QJs","QTs","Q9s","Q8s","Q7s","Q6s","Q5s","Q3s","Q2s","AJo","KJo","QJo","JJ","Jts","J9s","J8s","J7s","J6s","J5s","J4s","ATo","KTo","QTo","JTo","TT","T9s","T8s","T7s","T6s","A9o","T9o","99","98s","97s","96s","95s","A8o","98o","88","87s","86s","85s","84s","87o","77","75s","74s","76o","66","64s","63s","55","54s","53s","52s","44","43s","42s","33","32s","22"],
        "CO": ["ATs","A9s","A8s","A7s","A6s","A3s","A2s","KJs","KTs","K9s","K8s","K7s","K6s","K5s","K4s","K3s","K2s","AQo","KQo","QJs","QTs","Q9s","Q8s","Q7s","Q6s","Q5s","Q4s","Q3s","Q2s","AJo","KJo","QJo","JTs","J9s","J8s","J7s","J6s","J5s","J4s","J3s","J2s","ATo","KTo","QTo","JTo","T8s","T7s","T6s","T5s","A9o","K9o","Q9o","J9o","T9o","99","98s","97s","96s","95s","A8o","98o","88","86s","85s","A7o","87o","77","75s","74s","A6o","76o","66","65s","64s","63s","A5o","55","54s","53s","52s","44","43s","42s","33","22"],
        "BU": ["ATs","A9s","A8s","A7s","A6s","A3s","A2s","KJs","KTs","K9s","K8s","K7s","K6s","K5s","K4s","K3s","K2s","AQo","KQo","QJs","QTs","Q9s","Q8s","Q7s","Q6s","Q5s","Q4s","Q3s","Q2s","AJo","KJo","QJo","JTs","J9s","J8s","J7s","J6s","J5s","J4s","J3s","J2s","ATo","KTo","QTo","JTo","T8s","T7s","T6s","T5s","A9o","K9o","Q9o","J9o","T9o","99","98s","97s","96s","95s","A8o","98o","88","86s","85s","A7o","87o","77","75s","74s","A6o","76o","66","65s","64s","63s","A5o","55","54s","53s","52s","44","43s","42s","33","22"],
        "SB": ["ATs","A9s","A8s","A7s","A6s","A3s","A2s","KJs","KTs","K9s","K8s","K7s","K6s","K5s","K4s","K3s","K2s","KQo","QTs","Q9s","Q8s","Q7s","Q6s","Q5s","Q4s","Q3s","Q2s","AJo","KJo","Qjo","JTs","J9s","J8s","J7s","J6s","J5s","J4s","J3s","J2s","ATo","KTo","QTo","JTo","T9s","T8s","T7s","T6s","T5s","T4s","T3s","T2s","A9o","K9o","Q9o","J9o","T9o","99","98s","97s","96s","95s","94s","93s","92s","A8o","K8o","Q8o","J8o","T8o","98o","88","87s","86s","85s","84s","A7o","K7o","T7o","97o","87o","77","76s","75s","74s","73s","A6o","K6o","76o","66","65s","64s","63s","62s","A5o","K5o","65o","55","54s","53s","52s","A4o","54o","44","43s","42s","33","32s","22"]

    }
}



