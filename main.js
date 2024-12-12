var code = ''; 
for (let i = 1; i < 10; i++) {
    const elementClass = 'key' + i.toString(); 
    document.getElementById(elementClass).addEventListener('click', function () {
        if (code.length < 4) {
            code += i.toString(); 
        } else {
            code = i.toString(); 
        }
    });
}

function direct() {
    if (code === '3141') { 
        window.location.href = 'mainHouse.html';
    }
}
function Identify() {
    
}

document.getElementById('dir').onclick = direct; 


