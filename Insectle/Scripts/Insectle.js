let moth = new Insect("Fungus Moth");

generatePlay(moth)

function generatePlay(insect)
{
    let mainDiv = document.getElementById("insectle-play");

    let blocks = Letter.generateRow(insect.name);

    mainDiv.append(blocks)

    blocks = Letter.generateRow(insect.name);

    mainDiv.append(blocks)
    blocks = Letter.generateRow(insect.name);

    mainDiv.append(blocks)
    blocks = Letter.generateRow(insect.name);

    mainDiv.append(blocks)
    blocks = Letter.generateRow(insect.name);

    mainDiv.append(blocks)

}

document.getElementsByTagName("html")[0].addEventListener('keyup', function (event)
{
    let row = document.getElementsByClassName("letter-row")[0];

    Letter.addLetterToRow(row, 0, event.key);

    console.log(event.key);
    console.log(isValidKey(event.key))
});

function isValidKey(key) {
    const alphabet = /^[a-zA-Z]$/;
    return alphabet.test(key) || key === 'Delete' || key === 'Backspace' || key === 'Enter';
}
