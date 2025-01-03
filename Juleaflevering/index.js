let classContainer;

function setup() {
    //Select the container for characters (dit it like this because i "select" did'nt work)
    classContainer = document.getElementById('class-container');

    //Create Human and Alien objects
    const characters = [
        new Human('Lucas', 25, 10),
        new Human('Simon', 30, 8),
        new Human('Emil', 40, 7),
        new Alien('Ablob', 300, 'Mars'),
        new Alien('Zingus', 500, 'Saturen'),
        new Alien('Wates', 120, 'Pluto'),
    ];

    //Render cards for each character
    characters.forEach((character, index) => {
        //Create a card
        const card = document.createElement('div');
        card.classList.add('card', character instanceof Human ? 'human' : 'alien');
        card.id = `character-${index}`;

        //Add content to the card
        card.innerHTML = `
            <h3>${character.name}</h3>
            <p>Age: ${character.age}</p>
        `;

        //Add click event to display introduction
        card.addEventListener('click', () => {
            character.introduce();
            const message = `Hi! I'm ${character.name}. I am ${
                character instanceof Human
                    ? `a human with ${character.nof} fingers.`
                    : `an alien from ${character.planet}.`
            }`;
            alert(message);
        });

        //Append card to the container
        classContainer.appendChild(card);
    });
}