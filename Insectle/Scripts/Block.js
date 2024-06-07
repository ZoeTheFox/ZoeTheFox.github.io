class Block
{
    static generate(name)
    {
        let blocks = Array();
        let i = 0;

        for (let character of name)
        {
            if (character !== " ")
            {
                let block = this.createActive();
                block.id = "char-" + i;

                blocks[i] = block;
            }
            else
            {
                let block = this.createDisabled();
                block.id = "space-" + i;

                blocks[i] = block;
            }

            i++;
        }

        for (let j = 0; j < blocks.length; j++)
        {
            blocks[j].onkeyup = function ()
            {
                if (blocks[j + 1].disabled === true)
                {
                    blocks[j + 2].focus();
                }
                else
                {
                    blocks[j + 1].focus();
                }
            }
        }

        for (let k = 0; k < blocks.length; k++)
        {
            blocks[k].addEventListener('keyup', function (event)
            {
                let key = event.key;

                if (key === "Backspace" || key === "Delete")
                {
                    if (k === 0)
                    {
                        blocks[k].focus();
                    }
                    else if (blocks[k - 1].disabled === true)
                    {
                        blocks[k - 2].focus();
                    }
                    else
                    {
                        blocks[k - 1].focus();
                    }
                }
            });
        }

        return blocks;
    }

    static createActive()
    {
        let squareInput = document.createElement('input');

        squareInput.type = 'text';

        squareInput.className = 'square-input';

        squareInput.maxLength = 1;

        return squareInput;
    }

    static createDisabled()
    {
        let squareInput = document.createElement('input');

        squareInput.type = 'text';

        squareInput.className = 'square-input square-input-disabled';

        squareInput.maxLength = 1;

        squareInput.disabled = true;

        return squareInput;
    }
}
