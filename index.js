var a = {
    b: {
        c: {
            d: {

            }
        }
    }
}
var a = JSON.parse(text);
var b = a.b;
if (b) {
    //handle level b
    var c = b.c;
    if (c) {
        //handle level c
        var d = c.d;
        if (d) {
            //handle level d
        }
    }
}