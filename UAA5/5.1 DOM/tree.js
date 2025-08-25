// Fonction pour générer l'arbre DOM en SVG
function createTreeSvg(node, x, y, svg, level, xOffset) {
    const rectWidth = 120;
    const rectHeight = 80;
    const verticalGap = 20;
    const horizontalGap = 20;
    const previous = node.previousElementSibling;
    if(previous){
        const additionalSpace = (previous.children.length) * 50; // Ajoute plus d'espace entre les éléments frères
        x += additionalSpace;
    }


    // Crée un rectangle pour représenter le nœud
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', rectWidth);
    rect.setAttribute('height', rectHeight);
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('fill', '#c0c0c0');
    rect.setAttribute('stroke', 'black'); // Ajoute une bordure noire
    rect.setAttribute('rx', '10'); // Ajoute des coins arrondis
    rect.setAttribute('ry', '10');



    // Récupère les attributs CSS de l'élément
    const cssAttributes = getComputedStyle(node);

    // Applique la couleur de fond du texte à la boîte
    const backgroundColor = cssAttributes.backgroundColor === 'rgba(0, 0, 0, 0)' ? 'lightgrey' : cssAttributes.backgroundColor;
    rect.setAttribute('fill', backgroundColor);

    svg.appendChild(rect);

    // Ajoute le nom de la balise en tant que texte
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x + rectWidth / 2);
    text.setAttribute('y', y + rectHeight / 2 - 15);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('dominant-baseline', 'middle');
    text.setAttribute('font-weight', 'bold');
    text.setAttribute('font-size', '20px');
    text.textContent = "<" + node.tagName.toLowerCase() + ">";
    // Récupère la couleur du texte de l'élément
    const textColor = cssAttributes.color;

    // Applique la couleur du texte de l'élément au texte dans la boîte
    text.setAttribute('fill', textColor);

    // Ajoute le texte à la boîte
    svg.appendChild(rect);
    svg.appendChild(text);

    const idText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    idText.setAttribute('x', x + rectWidth / 2);
    idText.setAttribute('y', y + rectHeight / 2 + 10); // Décalage pour afficher l'identifiant sous le nom de balise
    idText.setAttribute('text-anchor', 'middle');
    idText.setAttribute('dominant-baseline', 'middle');
    idText.textContent = `ID: ${node.id || 'N/A'}`;
    svg.appendChild(idText);
    // Ajoute la classe en dessous de l'ID
    const classText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    classText.setAttribute('x', x + rectWidth / 2);
    classText.setAttribute('y', y + rectHeight / 2 + 30); // Décalage supplémentaire pour afficher la classe sous l'identifiant
    classText.setAttribute('text-anchor', 'middle');
    classText.setAttribute('dominant-baseline', 'middle');
    classText.textContent = `Class: ${node.className || 'N/A'}`;
    svg.appendChild(classText);

    // Calcule les positions pour les enfants
    const childY = y + rectHeight + verticalGap;

    if (node.children.length > 0) {
        // Calcule le décalage total pour centrer les enfants
        const totalWidth = node.children.length * rectWidth + (node.children.length - 1) * horizontalGap;
        const startX = x - totalWidth / 2 + xOffset;

        // Trace une ligne vers chaque enfant et crée les enfants
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            let childXPosition = startX + i * (rectWidth + horizontalGap);
            
            // Trace une ligne vers chaque enfant
            const childLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            childLine.setAttribute('x1', x + rectWidth / 2);
            childLine.setAttribute('y1', y + rectHeight);
            childLine.setAttribute('x2', childXPosition + rectWidth / 2);
            childLine.setAttribute('y2',  childY);
            childLine.setAttribute('stroke', '#000');
            svg.appendChild(childLine);

            createTreeSvg(child, childXPosition, childY, svg, level + 1, xOffset);
        }
    }
}

// Sélectionne la racine
const rootElement = document.getElementById('racine');

// Crée un conteneur SVG
const svgContainer = document.getElementById('tree-svg');


// Crée une fonction pour mettre à jour l'arbre SVG
function updateTree() {
    // Efface le contenu actuel du SVG
    svgContainer.innerHTML = '';

    // Crée l'arbre à partir de la racine avec un décalage initial
    createTreeSvg(rootElement, svgContainer.clientWidth / 2, 20, svgContainer, 0, 0);
}

// Crée un observateur de mutation qui appelle la fonction de mise à jour
const treeObserver = new MutationObserver(() => {
    updateTree();
});

// Configure l'observateur pour écouter les changements dans les enfants de la racine
const config = { childList: true, subtree: true, attributes: true };
treeObserver.observe(rootElement, config);

// Appelle la fonction de mise à jour une fois au démarrage
updateTree();

// Crée un ensemble pour stocker les éléments détachés
const detachedNodes = new Set();

// Sauvegarde la fonction originale document.createElement
const originalCreateElement = document.createElement;

// Surcharge document.createElement
document.createElement = function (tagName) {
    // Appelle la fonction originale
    const newElement = originalCreateElement.call(document, tagName);

    // Ajoute l'élément créé à l'ensemble des éléments détachés
    detachedNodes.add(newElement);
    // Observe les changements sur l'élément détaché
    const mutationObserver = observeDetachedNodeChanges(newElement);
    newElement.mutationObserver = mutationObserver;
    updateDetachedTree(detachedSvgContainer);
    // Retourne l'élément nouvellement créé
    return newElement;
};



// Fonction pour mettre à jour le deuxième SVG avec les éléments détachés
function updateDetachedTree(detachedContainer) {
    detachedContainer.innerHTML = ''; // Efface le contenu actuel du SVG détaché

    // Crée un conteneur pour les éléments détachés
    const detachedGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    // Position initiale pour les éléments détachés
    let detachedY = 20;

    // Ajoute chaque élément détaché au conteneur
    detachedNodes.forEach(el => {
        const rectWidth = 120;
        const rectHeight = 80;
        const x = detachedSvgContainer.clientWidth / 2;
        const y = 20;

        // Crée un rectangle pour représenter le nœud
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('width', rectWidth);
        rect.setAttribute('height', rectHeight);
        rect.setAttribute('x', x);
        rect.setAttribute('y', y + detachedY);
        rect.setAttribute('stroke', 'black'); // Ajoute une bordure noire
        rect.setAttribute('fill', '#c0c0c0');
        rect.setAttribute('rx', '10'); // Ajoute des coins arrondis
        rect.setAttribute('ry', '10');

        detachedSvgContainer.appendChild(rect);

        // Ajoute le nom de la balise en tant que texte
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', x + rectWidth / 2);
        text.setAttribute('y', y + rectHeight / 2 - 15 + detachedY);
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('dominant-baseline', 'middle');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-size', '20px');
        text.textContent = "<" + el.tagName.toLowerCase() + ">";

        // Ajoute le texte à la boîte
        detachedSvgContainer.appendChild(rect);
        detachedSvgContainer.appendChild(text);

        const idText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        idText.setAttribute('x', x + rectWidth / 2);
        idText.setAttribute('y', y + rectHeight / 2 + 10 + detachedY); // Décalage pour afficher l'identifiant sous le nom de balise
        idText.setAttribute('text-anchor', 'middle');
        idText.setAttribute('dominant-baseline', 'middle');
        idText.textContent = `ID: ${el.id || 'N/A'}`;
        detachedSvgContainer.appendChild(idText);
        // Ajoute la classe en dessous de l'ID
        const classText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        classText.setAttribute('x', x + rectWidth / 2);
        classText.setAttribute('y', y + rectHeight / 2 + 30 + detachedY); // Décalage supplémentaire pour afficher la classe sous l'identifiant
        classText.setAttribute('text-anchor', 'middle');
        classText.setAttribute('dominant-baseline', 'middle');
        classText.textContent = `Class: ${el.className || 'N/A'}`;
        detachedSvgContainer.appendChild(classText);

        detachedY += 100; // Augmente la position Y pour le prochain élément détaché

    });

    // Ajoute le groupe des éléments détachés au SVG détaché
    detachedContainer.appendChild(detachedGroup);
}

// Sélectionne le conteneur SVG
const detachedSvgContainer = document.getElementById('detached-svg');

// Mise à jour de l'arbre des éléments détachés après l'ajout de l'élément depuis la console
updateDetachedTree(detachedSvgContainer);

const originalAppendChild = Node.prototype.appendChild;

Node.prototype.appendChild = function (childNode) {
    // Appelle la fonction originale
    const result = originalAppendChild.call(this, childNode);

    // Vérifie si l'élément ajouté est dans l'ensemble des éléments détachés
    if (detachedNodes.has(childNode)) {
        // Supprime l'élément du tableau des éléments détachés
        detachedNodes.delete(childNode);

        // Met à jour le SVG des éléments détachés
        updateDetachedTree(detachedSvgContainer);
    }

    // Retourne le résultat de l'opération d'appendChild
    return result;
};

function observeDetachedNodeChanges(detachedNode) {
    const observer = new MutationObserver(() => {
        updateDetachedTree(detachedSvgContainer);
    });

    observer.observe(detachedNode, { attributes: true });

    return observer;
}