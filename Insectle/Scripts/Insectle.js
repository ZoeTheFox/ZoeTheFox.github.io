let moth = new Insect("Fungus Moth");


function generatePlay(insect)
{
    let mainDiv = document.getElementById("insectle-play");

    let blocks = Block.generate(insect.name);

    for (let block of blocks)
    {
        mainDiv.append(block)
    }
}

document.getElementsByTagName("html")[0].addEventListener('keyup', function (event)
{
    console.log(event.key);
    console.log(isValidKey(event.key))
});

function isValidKey(key) {
    const alphabet = /^[a-zA-Z]$/;
    return alphabet.test(key) || key === 'Delete' || key === 'Backspace';
}
