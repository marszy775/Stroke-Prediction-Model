function getHyper() {
    var uiHyper = document.getElementsByName('uiHyper');
    for(var i in uiHyper) {
        if(uiHyper[i].checked) {
            return parseInt(i);
        }
    }

    return -1;
}

function getHeart() {
    var uiHeart = document.getElementsByName('uiHeart');
    for(var i in uiHeart) {
        if(uiHeart[i].checked) {
            return parseInt(i);
        }
    }

    return -1;
}

function getMarried() {
    var uiMarry = document.getElementsByName('uiMarry');
    for(var i in uiMarry) {
        if(uiMarry[i].checked) {
            return parseInt(i);
        }
    }

    return -1;
}

function getChild() {
    var uiChild = document.getElementsByName('uiChild');
    for(var i in uiChild) {
        if(uiChild[i].checked) {
            return parseInt(i);
        }
    }

    return -1;
}

function getAge() {
    var slider = document.getElementById("uiAge");
    var output = document.getElementById("uiValue");
    output.innerHTML = '<h1>' + 'Value: ' + slider.value.toString() + '</h1>';

    slider.oninput = function() {
    output.innerHTML =  '<h1>' + 'Value: ' + this.value.toString() + '</h1>';
    }
}

function onClickPredictedClass() {
    console.log("Predict class button clicked");
    var age = document.getElementById('uiAge');
    var hyper = getHyper();
    var heart = getHeart();
    var glucose = document.getElementById('uiGlucose');
    var Marry = getMarried();
    var child = getChild();
    var predClass = document.getElementById('uiClass');

    var url = "http://127.0.0.1:5000/predict_stroke";

    $.post(url, {
        age: age.value,
        hypertension: hyper,
        heart_disease: heart,
        avg_glucose_level: glucose.value,
        married: Marry,
        children: child
    }, function(data, status) {
        console.log(data.predicted_class);
        predClass.innerHTML = "<h2>" + data.predicted_class.toString() + "</h2>";
        console.log(status);
    });
}

window.onload = getAge;