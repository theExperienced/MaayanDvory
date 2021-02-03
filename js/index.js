
      
VanillaTilt.init(document.querySelectorAll('.header__niche'), {

    // reverse:                false,  // reverse the tilt direction
    max:                    14,     // max tilt rotation (degrees)
    // startX:                 0,      // the starting tilt on the X axis, in degrees.
    // startY:                 0,      // the starting tilt on the Y axis, in degrees.
    perspective:            1500,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:                  1.06,      // 2 = 200%, 1.5 = 150%, etc..
    speed:                  500,    // Speed of the enter/exit transition
    //transition:             true,   // Set a transition on enter/exit.
    // axis:                   null,   // What axis should be disabled. Can be X or Y.
    // reset:                  true,    // If the tilt effect has to be reset on exit.
    easing:                 "cubic-bezier(.28,1.02,.71,.94)",    // Easing on enter/exit.
    glare:                  true,   // if it should have a "glare" effect
    'max-glare':            .4
});

// document.querySelector('.container').style.height = document.querySelector('.container').getBoundingClientRect.height + window.innerHeight

const headings = ['gore', 'shmore', 'lore'];
for (let i = 0; i < 15; i++) {
    const div = document.createElement('div');
    div.className = `gallery__gem gallery__gem--${i + 1}`;
    
    const container = document.createElement('div');
    container.className = `gallery__gem-container gallery__gem-container--${i + 1}`;

    const h3 = document.createElement('h3');
    h3.className = `gallery__gem-heading gallery__gem-heading--${i + 1}`;
    h3.innerHTML = headings[Math.floor(Math.random() * 3)];

    const p = document.createElement('p');
    p.innerHTML = 'Lorem ipsum dolor sit amet.'
    p.className = `gallery__gem-desc gallery__gem-desc--${i + 1}`;

    const p2 = document.createElement('p2');
    p2.innerHTML = 'ש"ח ' + `${Math.floor(Math.random() * 350)}`;
    p2.className = `gallery__gem-price gallery__gem-price--${i + 1}`;

    const img = document.createElement('img');
    if(i > 7) {
        img.className = `gallery__gem-img gallery__gem-img--${i + 1}`;
        img.setAttribute('src', `https://picsum.photos/id/${i * 2 + 1}/450/450`);
    }
    else {
        img.className = `gallery__gem-img gallery__gem-img--${i + 1}`;
        img.setAttribute('src', `./imgs/gems/gem${i + 1}.jpeg`);
    }

    container.appendChild(h3);
    container.appendChild(p);
    container.appendChild(p2);
    div.appendChild(img);

    div.appendChild(container);
    document.querySelector('.gallery__grid').appendChild(div);
}