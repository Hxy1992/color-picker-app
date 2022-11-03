// 十六进制转rgb值
function hexToRgb(string) {
    let sColor = string.toLowerCase()
    // let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
    let sColorChange = []
    // if (sColor && reg.test(sColor)) {
    for (let i=1; i<7; i+=2) {
        sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));    
    }
    // }
    return sColorChange
}
// hsb[hsv]转rgb
function hsbToRgb(h, s, v) {
    // var h = arr[0], s = arr[1], v = arr[2];
    s = s / 100;
    v = v / 100;
    var r = 0, g = 0, b = 0;
    var i = parseInt((h / 60) % 6);
    var f = h / 60 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);
    switch (i) {
        case 0:
            r = v; g = t; b = p;
            break;
        case 1:
            r = q; g = v; b = p;
            break;
        case 2:
            r = p; g = v; b = t;
            break;
        case 3:
            r = p; g = q; b = v;
            break;
        case 4:
            r = t; g = p; b = v;
            break;
        case 5:
            r = v; g = p; b = q;
            break;
        default:
            break;
    }
    r = parseInt(r * 255.0)
    g = parseInt(g * 255.0)
    b = parseInt(b * 255.0)
    // return [r, g, b];
    return `rgb(${r},${g},${b})`
}
// rgb转hsb[hsv]
function rgbToHsb(arr) {
    var h = 0, s = 0, v = 0;
    var r = arr[0], g = arr[1], b = arr[2];
    arr.sort(function (a, b) {
        return a - b;
    })
    var max = arr[2]
    var min = arr[0];
    v = max / 255;
    if (max === 0) {
        s = 0;
    } else {
        s = 1 - (min / max);
    }
    if (max === min) {
        h = 0;//事实上，max===min的时候，h无论为多少都无所谓
    } else if (max === r && g >= b) {
        h = 60 * ((g - b) / (max - min)) + 0;
    } else if (max === r && g < b) {
        h = 60 * ((g - b) / (max - min)) + 360
    } else if (max === g) {
        h = 60 * ((b - r) / (max - min)) + 120
    } else if (max === b) {
        h = 60 * ((r - g) / (max - min)) + 240
    }
    h = parseInt(h);
    s = parseInt(s * 100);
    v = parseInt(v * 100);
    return [h, s, v]
}
//rgb 转rgba
function rgbToRgba(rgb, a = 1) {
    var aColor = rgb.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",")
    return `rgba(${aColor[0]}, ${aColor[1]}, ${aColor[2]}, ${a})`
}
// rgb转16进制
function rgbToColor(rgb){
    var aColor = rgb.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    var strHex = "#";
    for (var i=0; i<aColor.length; i++) {
        var hex = Math.round(Number(aColor[i])).toString(16);
        if (hex.length < 2) {
            hex = '0' + hex;    
        }
        strHex += hex;
    }
    return strHex
}
// rgb转hsl
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min){ 
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [Number(h.toFixed(2)), Number(s.toFixed(2)), Number(l.toFixed(2))];
}

// hsl转rgb
// function hslToRgb(h, s, l) {
//     var r, g, b;
//     if(s == 0) {
//         r = g = b = l; // achromatic
//     } else {
//         var hue2rgb = function hue2rgb(p, q, t) {
//             if(t < 0) t += 1;
//             if(t > 1) t -= 1;
//             if(t < 1/6) return p + (q - p) * 6 * t;
//             if(t < 1/2) return q;
//             if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
//             return p;
//         }
//         var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//         var p = 2 * l - q;
//         r = hue2rgb(p, q, h + 1/3);
//         g = hue2rgb(p, q, h);
//         b = hue2rgb(p, q, h - 1/3);
//     }
//     // return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
//     return `rgb(${r * 255},${g * 255},${b * 255})`
// }
// 颜色增加明度
// function addBright(string) {
//     if (!string) return
//     let colorRgbValue = hexToRgb(string)
//     let hsl = rgbToHsl(colorRgbValue[0], colorRgbValue[1], colorRgbValue[2])
//     hsl[2] = hsl[2] + 0.15  // 明度增加
//     let rgb = hslToRgb(hsl[0], hsl[1], hsl[2])
//     let color = rgbToColor(rgb)
//     return color
// }

export {
    hexToRgb,
    rgbToHsl,
    // hslToRgb,
    // hsbToRgb,
    // rgbToHsb,
    // rgbToRgba,
    // rgbToColor,
}