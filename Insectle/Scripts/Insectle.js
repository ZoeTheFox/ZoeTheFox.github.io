let moth = new Insect("Fungus Moth");

generatePlay(moth);

function generatePlay(insect)
{
    let mainDiv = document.getElementById("insectle-play");

    let blocks = Block.generate(insect.name);

    for (let block of blocks)
    {
        mainDiv.append(block)
    }
}