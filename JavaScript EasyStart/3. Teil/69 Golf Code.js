var names = ["Hole in one", "eagl", "birdie", "par", "bogey", "double bogey"]

function golfScore(par, strokes) {
    if(strokes == 1) {
        return names[0]
    } else if (strokes <= par -2) {
        return names[1]
    } else if (strokes == par -1) {
        return names[2]
    } else if (strokes == par) {
        return names[3]
    } else if (strokes == par + 1) {
        return names[4]
    }else if (stroke == par + 2) {
        return names[5]
    }else if (strokes >= par + 3) {
        return names[6]
    }

    
}

console.log(golfScore(5, 6));
