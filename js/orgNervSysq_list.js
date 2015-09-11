//only works if MC question is first 

var questions = [
    ["mc",
    "Which of the following is correct?",
    "This is an inferior view of a horizontal section of the brain.",
    "This is a superior view of a horizontal section of the brain.",
    "This is a medial view of a sagittal section of the brain.",
    "This is a lateral view of a sagittal section of the brain.",
    "This is an anterior view of a coronal section of the brain.",
    "A",
    "img/horizontalBrain.jpg"],
    ["diagram", 
    "Select the parietal lobe.", 
    "img/facesmall.png", 
    [false, false, false, false, false], 
    [false, true, false, false, false],  
    "327,79,323,75,317,74,313,68,308,65,302,65,296,63,283,63,275,62,268,65,264,65,260,63,250,61,243,62,234,66,228,66,222,66,213,67,200,71,193,72,187,76,179,77,173,81,164,87,151,92,143,100,138,104,133,112,125,116,118,125,112,128,114,132,113,140,111,145,108,153,107,160,106,168,109,176,114,181,116,188,118,194,122,199,127,206,132,213,139,218,150,225,162,226,166,227,171,227,173,219,180,212,189,207,196,201,206,197,218,195,224,191,231,189,237,188,244,188,255,186,265,186,270,183,272,181,272,177,273,172,274,169,274,161,276,156,280,152,281,149,285,142,292,135,294,135,299,131,299,127,299,122,299,117,300,113,300,107,304,100,306,95,311,92,316,91,320,89,323,87,326,82,327,80",
    "384,246,412,219,438,206,440,198,433,188,433,177,427,177,421,146,414,146,412,145,412,141,410,125,403,116,394,109,388,107,381,95,354,79,342,69,333,66,320,68,323,86,315,95,304,96,302,103,299,112,299,120,302,128,306,136,300,134,293,135,284,143,279,152,275,161,274,168,274,176,274,180,274,183,278,183,287,183,294,182,303,178,315,183,325,185,330,190,353,206,384,243",
    "351,307,354,302,359,293,363,282,365,273,367,271,372,268,375,263,377,256,379,252,383,249,385,245,388,241,391,238,393,234,397,231,400,229,403,226,408,223,412,219,415,217,418,215,424,212,429,209,433,206,436,203,440,202,440,206,441,210,443,214,444,220,446,227,446,234,447,241,447,246,444,259,443,263,441,266,439,273,437,275,434,278,432,279,432,282,431,287,430,292,428,296,425,298,423,300,420,302,417,305,414,308,411,311,407,312,400,312,396,312,391,313,387,315,382,315,377,315,375,313,370,309,365,309,359,309,354,308,353,306",
    "392,311,392,316,394,323,392,329,388,336,375,339,374,349,365,351,364,356,357,357,352,361,345,361,339,366,329,365,325,365,321,363,315,361,307,355,301,352,292,347,284,340,279,333,275,326,269,322,269,314,281,299,292,296,301,296,316,298,326,301,335,304,347,304,354,310,367,310,376,313,383,318",
    "284,296,292,294,298,293,308,294,313,296,320,297,324,299,329,301,333,301,338,301,345,303,348,307,350,308,355,303,357,294,361,287,363,281,365,274,371,266,374,261,376,257,378,253,379,250,383,247,385,245,382,241,378,236,372,229,366,223,362,218,359,214,357,211,353,207,348,204,343,198,336,192,330,188,326,187,319,186,314,182,307,179,304,177,297,181,289,181,284,181,279,181,272,183,264,185,254,186,250,186,248,183,244,186,236,185,230,186,224,189,218,193,201,199,194,202,186,207,178,211,174,218,172,225,172,229,172,235,172,241,175,245,178,248,177,253,177,259,177,265,182,268,187,271,193,273,193,279,197,284,201,287,207,290,214,292,218,292,283,297"],
    ["diagram",
    "Select the bilateral striatum of the basal ganglia.",
    "img/coronalBrain.png",
    [false, false, false, false, false, false, false, false],
    [true, true, false, false, false, false, true, true],
    "353,294,358,284,363,274,370,264,376,255,381,249,386,244,391,241,394,241,396,242,397,244,398,250,396,256,392,267,385,278,378,290,373,298,366,306,361,313,357,314,355,312,353,309,351,303,351,298,355,289",
    "424,339,421,329,416,319,411,310,409,303,410,296,412,289,419,286,428,285,435,287,443,293,450,301,454,308,457,316,458,325,458,334,458,342,456,352,454,359,451,365,446,373,438,377,432,381,426,381,422,377,421,371,423,359,424,347",
    "366,343,374,340,378,339,382,334,386,327,390,325,394,325,399,327,403,330,407,336,409,342,411,349,411,356,411,361,409,366,407,371,403,374,399,377,394,377,392,376,385,376,373,379,365,379,359,377,354,374,354,370,354,362,358,355,362,348,366,344",
    "459,413,468,423,476,439,476,449,474,453,467,462,446,463,432,459,413,455,412,450,413,441,428,429,445,424,456,414",
    "173,419,179,422,194,432,200,440,205,447,210,453,211,458,211,461,210,464,202,467,191,467,182,467,175,466,163,466,157,466,151,463,148,457,148,452,148,445,149,436,151,430,155,426,173,420",
    "264,364,261,369,255,370,249,372,234,375,225,377,218,377,213,376,212,373,211,367,213,362,216,349,217,338,218,328,218,321,220,312,220,309,224,306,227,305,233,305,237,308,239,313,242,316,246,339,252,350",
    "179,372,172,366,167,358,163,351,162,341,163,328,165,317,168,308,171,299,177,286,183,281,189,278,195,278,203,279,208,282,211,285,211,290,213,297,210,305,205,313,202,320,200,329,200,337,202,343,204,351,204,358,204,364,202,369,195,372,183,373",
    "271,275,273,280,276,287,279,298,279,305,279,311,279,316,277,319,269,310,262,300,252,286,243,273,236,262,233,254,232,250,232,246,234,243,238,242,243,245,252,252,257,259,267,270"],
    ["mc",
    "Which of the following is true?",
    "This is a lateral view of a sagittal section of the brain.",
    "This is an anterior view of a coronal section of the brain.",
    "This is a posterior view of a coronal section of the brain.",
    "This is a inferior view of a horizontal section of the brain.",
    "This is a medial view of a sagittal section of the brain.",
    "E",
    "img/sagittalBrain.jpg"],
    ["diagram",
    "Select the pons",
    "img/sagittalBrain.jpg",
    [false, false, false, false, false],
    [false, false, false, true, false],
    "327,200,345,203,363,208,378,213,391,228,390,237,390,243,384,250,375,255,369,262,356,266,345,271,329,274,318,274,304,272,292,271,278,266,267,261,260,251,255,241,253,230,255,220,260,212,271,208,282,201,297,198,310,198",
    "332,274,344,273,352,275,361,280,371,286,380,296,380,299,370,305,341,316,339,317,334,309,324,300,315,292,305,291,301,286,301,282,308,280,315,277,323,275,332,273",
    "236,269,261,257,268,261,277,265,287,268,298,270,310,273,313,274,306,277,297,281,290,286,285,290,282,294,282,298,277,294,273,292,265,292,253,294,254,286,254,277,254,268,254,265,257,264,261,259",
    "379,299,387,323,390,355,393,381,346,410,335,411,321,411,316,403,311,387,309,362,309,348,313,336,321,324,338,314,379,299",
    "394,381,410,460,388,480,379,469,370,462,356,452,347,438,344,421,347,411,392,382"],
    ["diagram",
    "Select the midbrain",
    "img/sagittalBrain.jpg",
    [false, false, false, false, false],
    [false, true, false, false, false],
    "327,200,345,203,363,208,378,213,391,228,390,237,390,243,384,250,375,255,369,262,356,266,345,271,329,274,318,274,304,272,292,271,278,266,267,261,260,251,255,241,253,230,255,220,260,212,271,208,282,201,297,198,310,198",
    "332,274,344,273,352,275,361,280,371,286,380,296,380,299,370,305,341,316,339,317,334,309,324,300,315,292,305,291,301,286,301,282,308,280,315,277,323,275,332,273",
    "236,269,261,257,268,261,277,265,287,268,298,270,310,273,313,274,306,277,297,281,290,286,285,290,282,294,282,298,277,294,273,292,265,292,253,294,254,286,254,277,254,268,254,265,257,264,261,259",
    "379,299,387,323,390,355,393,381,346,410,335,411,321,411,316,403,311,387,309,362,309,348,313,336,321,324,338,314,379,299",
    "394,381,410,460,388,480,379,469,370,462,356,452,347,438,344,421,347,411,392,382"],
    ["diagram",
    "Where is the internal capsule located?",
    "img/corticalSpinal.jpg",
    [false, false, false, false],
    [true, false, false, false],
    "179,75,182,77,182,83,182,89,179,96,176,98,172,98,170,97,170,90,172,87,173,82,178,79",
    "143,230,148,230,178,258,175,262,166,262,156,259,150,256,141,251,135,246,130,242,132,235,134,233,137,231,139,229",
    "107,341,107,346,101,348,98,348,96,344,98,341,102,339",
    "97,451,101,453,102,457,100,463,97,467,91,465,90,461,92,456,94,453"],
    ["diagram",
    "Select the right gracile nucleus",
    "img/postSensory.jpg",
    [false, false, false, false],
    [false, true, false, false],
    "133,246,137,247,140,249,140,254,136,261,132,264,126,265,122,261,123,254,126,250,131,248,133,247",
    "151,237,154,238,157,242,158,252,156,259,156,259,151,259,148,253,146,247,146,241,151,237",
    "161,263,171,263,176,266,171,275,161,279,152,279,148,276,147,271,150,267,159,263,163,263",
    "147,316,152,317,157,319,160,322,161,332,157,337,145,343,137,343,130,343,130,337,134,327,139,321,145,317"]
];











