const randomButton = document.getElementById("random");
const imageChange = document.getElementById("image-change");
const textChange = document.getElementById("text-change");
const resetButton = document.getElementById("reset");

const choice = ['korn','gunkai','kadad'];


const choiceTranslate = {
    korn: 'ค้อน',
    gunkai: 'กรรไกร',
    kadad: 'กระดาษ'
};


function getRandomChoice(){
    const randomIndex = Math.floor(Math.random()*choice.length);
    return choice[randomIndex];
}

randomButton.addEventListener('click',function(){
    const choice = getRandomChoice();
    const choiceT = choiceTranslate[choice];

    imageChange.src = 'images/' + choice + '.png';
    textChange.innerHTML = 'สุ่มได้ : ' + choiceT;

    randomButton.style.display = 'none';
    resetButton.style.display = 'inline';

    }
)


resetButton.addEventListener('click',function(){

    imageChange.src = 'images/start.jpg';

    textChange.innerHTML = 'กดปุ่ม "สุ่ม !" เพื่อ สุ่ม ค้อน กรรไกร กระดาษ';

    randomButton.style.display = 'inline';
    resetButton.style.display = 'none';

    }
)