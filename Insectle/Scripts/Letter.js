class Letter
{
    static addLetterToRow(row, pos, character)
    {
        let blocks = row.children;

        let p = blocks.item(pos).getElementsByTagName('p')[0];

        p.innerHTML = character;
    }

    static generateRow(name)
    {
        let blocks = Array();
        let i = 0;

        for (let character of name)
        {
            if (character !== " ")
            {
                let block = this.createLetter();
                block.id = "char-" + i;

                blocks[i] = block;
            }
            else
            {
                let block = this.createSpace();
                block.id = "space-" + i;

                blocks[i] = block;
            }

            i++;
        }

        let div = document.createElement('div');

        div.className = "letter-row"

        for (let block of blocks)
        {
            div.append(block)
        }

        return div;
    }

    static createLetter()
    {
        let letterBox = document.createElement('div');

        letterBox.className = 'insectle-letter';

        let letter = document.createElement('p');

        letterBox.append(letter);

        return letterBox;
    }

    static createSpace()
    {
        let letterBox = document.createElement('div');

        letterBox.className = 'insectle-letter insectle-letter-space';

        let letter = document.createElement('p');

        letterBox.append(letter);

        return letterBox;
    }
}
