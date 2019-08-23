function submit(){
    document.getElementById("form-wrapper").classList.add("result");
    $("body").scrollTop(0);
    
    var query=document.getElementById("select-question");
    var answer=document.getElementById("answer-text");
    var queryResult=document.getElementById("question-result");
    var answerResult=document.getElementById("answer-result");

    var qNode=document.createTextNode(query.value);
    var aNode=document.createTextNode(answer.value);
    
    queryResult.removeChild(queryResult.firstChild);
    answerResult.removeChild(answerResult.firstChild);

    queryResult.appendChild(qNode);
    answerResult.appendChild(aNode);
}

function return_answer(){
    document.getElementById("form-wrapper").classList.remove("result");
    $("body").scrollTop(0);
}

document.getElementById("submit-button").addEventListener("click",submit);
document.getElementById("return-button").addEventListener("click",return_answer);
//prevent iOS scroll
document.addEventListener('touchmove', function(e) {e.preventDefault();}, {passive: false});
