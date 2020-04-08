window.Questions = (function () {
    "use strict";

    /** DELTEST 1
     */
    var questions = [
        {
            id: 1,
            question: "Vad dricker kor?",
            options: ["Mjölk", "Vatten", "Juice"],
            answer: "Vatten"
        },
        {
            id: 2,
            question: "Om det tar 5 min för 5 maskiner att göra 5 prylar, " +
            "hur lång tid tar det för 100 maskiner att göra 100 prylar?",
            options: ["5 min", "100 min", "10 min"],
            answer: "5 min"
        },
        {
            id: 3,
            question: "Johanna är 16 år gammal och är 4 gånger äldre än sin bror. " +
            "Hur gammal är Johanna när hon är dubbelt så gammal som sin bror?",
            options: ["20", "24", "22"],
            answer: "24"
        },
        {
            id: 4,
            question: "Enligt Fibonaccis talföljd, vilket är det blanka numret " +
            "i följande talserie: 1, 1, 2, 3, 5, 8, 13, __ , 34, 55, ...?",
            options: ["23", "24", "21"],
            answer: "21"
        },
        {
            id: 5,
            question: "Om ordet JAVASCRIPT är 1012211931891620, vad är då TPIRCSAVAJ?",
            options: ["2016918319122110", "0111211317912082", "0261981391122101"],
            answer: "0261981391122101"
        },
    ];

    /** Returnar objekten för import i test.js.
     */
    return questions;
})();
