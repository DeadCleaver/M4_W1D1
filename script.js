/* 1. Crea una funzione che controlli due numeri interi. Ritorna 'true' se uno dei due è 50 o se la somma dei due è 50.*/

/* let num1 = 50;
let num2 = 0;
function exOne(num1, num2) {
    let answer = false;
    if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
console.log(exOne(num1, num2)); */


/* 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata. */

/* let myString = "carroarmato";
let remChar = 4;
function exTwo(myString, remChar) {
    myString = myString.slice(0, remChar) + myString.slice(remChar+1);
    return myString;
}
console.log(exTwo(myString, remChar)); */


/* 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna
'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'. */

/* let num1 = 45;
let num2 = 75;
function exThree(num1, num2) {
    if (((num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100)) && ((num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100))) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
console.log(exThree(num1, num2)); */

/* 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con
"Los" O "New", altrimenti ritorni 'false'. */

/* let cityName = "Los Biecos Malignos";
function exFour(cityName) {
    if ((cityName.includes("Los")) || (cityName.includes("New"))) {
        answer = true; 
    } else {
        answer = false;
    }
    return answer;
}
console.log(exFour(cityName));
 */

/* 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
L'array deve essere passato come parametro. */

/* let myNumbers = [4, 5, 6, 2, 4, 9, 0];
function exFive(myNumbers) {
    let sum = 0;
    for (let myNumber of myNumbers) {
        sum += myNumber;
    }
    return sum;
}
console.log(exFive(myNumbers)); */

/* 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorne
'true, altrimenti ritorna 'false */

/* let myNumbers = [4, 5, 1, 2, 4, 9, 0];
function exSix(myNumbers) {
    if (myNumbers.includes(1) || myNumbers.includes(3)) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
console.log(exSix(myNumbers)); */


/* 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 90° → ritorna "acuto"
Angolo ottuso: tra i 90° e i 180° gradi → ritorna "ottuso"
Angolo retto: 90° → ritorna "retto"
Angolo piatto: 180° → ritorna "piatto" */

/* let myAngle = 56;
function exSeven(myAngle) {
    if (myAngle < 90) {
        answer = "acuto";
    } else if ((myAngle > 90) && (myAngle < 180)) {
        answer = "ottuso";
    } else if (myAngle = 90) {
        answer = "retto";
    } else if (myAngle = 180) {
        answer = "piatto";
    } else {
        answer = "valore non angolare";
    }
    return answer;
}
console.log(exSeven(myAngle)); */


/* 8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili
Torino" deve ritornare "FIAT". */

/* let myString = "Fabbrica Italiana Automobili Torino";
let myWords = [];
let myAcronim = "";
function acronim(myString) {
    myWords = myString.split(" ");
    for (let i = 0; i <myWords.length; i++) {
        myAcronim += myWords[i].slice(0, 1);
    }

    return myAcronim;
} 
console.log(acronim(myString)); */


/* EXTRA
NOTA: tutti gli esercizi devono essere svolti usando le funzioni */

/* 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.*/

/* let myString = "Ho le Ciabattttte"

function extraOne(myString) {
    let myStrCount = 0;
    let myStrMax = 0;
    for (let i = 0; i < myString.length; i++) {
        myStrCount = 0;
        for (let x = 1; x < myString.length; x++) {
            if (myString[i] === myString[x]) {
                myStrCount++;
            }    
        } 
        if (myStrCount > myStrMax) {
            answer = myString[i];
            myStrMax = myStrCount;
        } 
    }
    return answer;
}
console.log(extraOne(myString)); */

/* 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.*/

/* DA FARE */

/* 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”]. */

/* DA FARE */

/* 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.*/

/* let myString = "Anna";
function extraFour(myString) {
    let myString1 = myString.toLowerCase();
    let myString2 = "";
    for (let i = myString1.length - 1; i >= 0; i--) {
        myString2 += myString1[i];
    }
    if (myString2 === myString1) {
        answer = true;
    } else {
        answer = false;
    }
    return answer;
}
console.log(extraFour(myString)); */

/* 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981*/

/* let myNum = 189;
function extraFive(myNum) {
    let numStrInv = "";
    let numStr = "" + myNum;
    for (let i = numStr.length - 1; i >= 0; i--) {
        numStrInv += numStr[i];
    }
    let answer = Number(numStrInv);
    return answer;
}
console.log(extraFive(myNum)); */

/* 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
Es.
X = 2
'# '
'##'
X = 3
'# '
'## '
'###' */

/* let x = 5;
function extraSix(x) {
    let char = "";
    for (let i = 0; i < x; i++) {
       char += "#";
       console.log(char); 
    }
}
extraSix(x); */

/* 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”*/

/* let myString = "Ciao";
function extraSeven(myString) {
    let myStrInv = "";
    for (let i = myString.length - 1; i >= 0; i--) {
       myStrInv += myString[i];
    }
    let answer = myStrInv;
    return answer;
}
console.log(extraSeven(myString)); */

/* 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]] */

/* let myArray = [1, 2, 3, 4, 5];
let myCount = 2;

for (let i = 0; i < myArray.length; i+myCount) {
    let 
    
} */

/* let myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let y = 3;

function extraEight(myArray, y) {
    let answer = [];
    for (let i = 0; i < myArray.length; i += y) {
        answer.push(myArray.slice(i, i+y));
    }
    if (!(myArray.length % y === 0)) {
        answer.push(myArray.slice(answer.length * y));
        answer.pop();
    }
    return answer;
}
console.log(extraEight(myArray, y)); */


/* 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
Es.
X = 3
' # '
' ### '
'#####' */

/* let x = 5;
function extraNine(x) {
    let char = "#";
    console.log(char);
    for (let i = 0; i < x-1; i++) {
            char += "##";
        console.log(char);
    }
}
extraNine(x); */


/* 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
Es. N = 2
[[1, 2],[4, 3]]
N = 3
[[1, 2, 3],[8, 9, 4],[7, 6, 5]]
N = 4
[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]] */

/* DA FARE */

