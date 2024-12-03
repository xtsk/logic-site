let isfindx = false;
const toggleisfindx = () => {
    isfindx = !isfindx;
    console.log(isfindx);
};

const displayText = (text) => {
    const displayedText = document.getElementById("current").innerHTML;
    document.getElementById("current").innerHTML = displayedText + text;
};

const backSpaceFunction = () => {
    const displayedText = document.getElementById("current").innerHTML;
    let backSpacedText = displayedText;
    backSpacedText = backSpacedText.slice(0, -1);
    document.getElementById("current").innerHTML = backSpacedText;
};

const deleteText = () => {
    document.getElementById("current").innerHTML = "";
    document.getElementById("previous").innerHTML = "";
}

const calculate = () => {
    const displayedText = document.getElementById("current").innerHTML;
    if (displayedText.indexOf("x") !== -1) {
        const [beforeEqual,afterEqual] = displayedText.split("≡");
        if (beforeEqual.indexOf("x") !== -1) {
            const beforeEqualTrue = beforeEqual.replace('x','true').replaceAll('T', 'true').replaceAll('F', 'false')
            .replaceAll('∧', '&&').replaceAll('∨', '||').replaceAll('↔', '===').replaceAll('→', '===false||').replaceAll('~', '!');
            const beforeEqualFalse = beforeEqual.replace('x','false').replaceAll('T', 'true').replaceAll('F', 'false')
            .replaceAll('∧', '&&').replaceAll('∨', '||').replaceAll('↔', '===').replaceAll('→', '===false||').replaceAll('~', '!');
            const resultTrue = eval(beforeEqualTrue);
            const resultFalse = eval(beforeEqualFalse);
            const resultAfter = eval(afterEqual.replaceAll('T', 'true').replaceAll('F', 'false').replaceAll('∧', '&&')
            .replaceAll('∨', '||').replaceAll('↔', '===').replaceAll('→', '===false||').replaceAll('~', '!'));
            if ((resultTrue === resultAfter) && (resultFalse === resultAfter)) {
                document.getElementById("current").innerHTML = "x can be both";
                document.getElementById("previous").innerHTML = displayedText;
            }
            else if (resultTrue === resultAfter) {
                document.getElementById("current").innerHTML = "x is true";
                document.getElementById("previous").innerHTML = displayedText;
            } else if (resultFalse === resultAfter) {
                document.getElementById("current").innerHTML = "x is   false";
                document.getElementById("previous").innerHTML = displayedText;
            }
            else {
                document.getElementById("current").innerHTML = "impossible";
                document.getElementById("previous").innerHTML = displayedText;
            } 
        }
        else {
            const afterEqualTrue = afterEqual.replace('x','true').replaceAll('T', 'true').replaceAll('F', 'false')
            .replaceAll('∧', '&&').replaceAll('∨', '||').replaceAll('↔', '===').replaceAll('→', '===false||').replaceAll('~', '!');
            const afterEqualFalse = afterEqual.replace('x','false').replaceAll('T', 'true').replaceAll('F', 'false')
            .replaceAll('∧', '&&').replaceAll('∨', '||').replaceAll('↔', '===').replaceAll('→', '===false||').replaceAll('~', '!');
            const resultTrue = eval(afterEqualTrue);
            const resultFalse = eval(afterEqualFalse);
            const resultBefore = eval(beforeEqual.replaceAll('T', 'true').replaceAll('F', 'false').replaceAll('∧', '&&')
            .replaceAll('∨', '||').replaceAll('↔', '===').replaceAll('→', '===false||').replaceAll('~', '!'));
            if ((resultTrue === resultBefore) && (resultFalse === resultBefore)) {
                document.getElementById("current").innerHTML = "x can be both";
                document.getElementById("previous").innerHTML = displayedText;
            }
            else if (resultTrue === resultBefore) {
                document.getElementById("current").innerHTML = "x is true";
                document.getElementById("previous").innerHTML = displayedText;
            } else if (resultFalse === resultBefore) {
                document.getElementById("current").innerHTML = "x is false";
                document.getElementById("previous").innerHTML = displayedText;
            }
            else {
                document.getElementById("current").innerHTML = "impossible";
                document.getElementById("previous").innerHTML = displayedText;
            } 
        }
    }
    else {
        let convertedText = displayedText.replaceAll('T', 'true').replaceAll('F', 'false').replaceAll('∧', '&&')
        .replaceAll('∨', '||').replaceAll('↔', '===').replaceAll('→', '===false||').replaceAll('~', '!');
        document.getElementById("current").innerHTML = eval(convertedText);
        document.getElementById("previous").innerHTML = displayedText;
    }
};