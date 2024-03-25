export function shuffle(list) {
    /**
     * Scramble the order of items in a list
     */
    const templist = list;

    let currentIndex = templist.length;
    let randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        const temp = templist[currentIndex];
        templist[currentIndex] = templist[randomIndex];
        templist[randomIndex] = temp; 
    }
    return templist;
}

export function getCard() {
    /**
     * Get answer card name
     */
    return getCardNode().alt;
}

export function getCardNode() {
    /**
     * Get answer card image node
     */
    return document.querySelector('img');
}

export function getCheckbox() {
    /**
     * Get checkbox node
     */
    return document.querySelector('#tries-checkbox');
}

export function getContinueBtn() {
    /**
     * Get 'continue/try again' button node
     */
    return document.querySelector('#continue');
}

export function getNumberInput() {
    /**
     * Get number input node
     */
    return document.querySelector('input[type="number"]');
}

export function getOutput() {
    /**
     * Get output node
     */
    return document.querySelector('output');
}

export function getPanel() {
    /**
     * Get card selection panel node
     */
    return document.querySelector('main > div:last-child');
}

export function getTiles() {
    /**
     * Get the card tiles
     */
    return document.querySelectorAll('.tiles input');
}

export function getTries() {
    /**
     * Get the current value of number of guesses
     */
    return getNumberInput().value;
}

export function getRestartBtn() {
    /**
     * Get 'restart' button node
     */
    return document.querySelector('#restart');
}

export function getShowBtn() {
    /**
     * Get 'show' button node
     */
    return document.querySelector('#show-btn');
}

export function setCard() {
    /**
     * Randomly choose a card and load it into
     * the answer image element.
     * Initially, hide the card from the player
     */
    const cards = [ 
        "2 of spades", 
        '3 of diamonds', 
        '6 of clubs', 
        '10 of hearts', 
        'ace of clubs', 
        'jack of hearts', 
        'jack of spades', 
        'king of diamonds', 
        'queen of spades'
    ];

    const idx = Math.floor(Math.random() * cards.length); // Use cards.length for flexibility
    const card = cards[idx];
    const cardNode = getCardNode();
    const path = card.split(' ').join('_');
    cardNode.src = `images/${path}.svg`;
    cardNode.alt = card;

    // Explicitly hide the card
    cardNode.classList.add('hidden');

    // Cancel any prior animation
    cardNode.classList.remove('fade');
    cardNode.parentElement.classList.remove('flip');
}


export function showCard() {
    const cardNode = getCardNode();
    // Animate the card
    cardNode.parentElement.classList.add('flip');
    cardNode.classList.add('fade');
    
    // Wait for the animation to be applied before showing the card
    setTimeout(() => {
        cardNode.classList.remove('hidden');
    }, 100); // Adjust timing as necessary to sync with CSS animation

    getShowBtn().setAttribute('disabled', 'true');
}

export function toggleInputState(e) {
    /**
     * Toggle active state of the number input node
     * This depends on whether the checkbox is checked or note.
     * The information is available in the event object passed to the
     * function at call time.
     */
    getNumberInput().toggleAttribute('disabled', !e.target.checked);
    // if (e.target.checked === true) {
    //     getNumberInput().removeAttribute('disabled');
    // } else {
    //     getNumberInput().setAttribute('disabled');
    // }

}

