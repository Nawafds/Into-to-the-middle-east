const panels = document.querySelectorAll('.panel');

function togglePanel(e) {
    const delay = 50;
    let isOpen = this.classList.contains('open');

    let elseOne;
    let elseTwo;
    let elseThree;
    let elseFour;


    console.log()

    switch (this.classList.value) {
        case "panel one":
            elseOne = "two";
            elseTwo = "three";
            elseThree = "four";
            elseFour = "five";
            break;

        case "panel two":
            elseOne = "one";
            elseTwo = "three";
            elseThree = "four";
            elseFour = "five";
            break;

        case "panel three":
            elseOne = "one";
            elseTwo = "two";
            elseThree = "four";
            elseFour = "five";
            break;

        case "panel four":
            elseOne = "one";
            elseTwo = "two";
            elseThree = "three";
            elseFour = "five";
            break;


        case "panel five":
            elseOne = "one";
            elseTwo = "two";
            elseThree = "three";
            elseFour = "four";
            break;

        case "panel one entertainment":
            elseOne = "two";
            elseTwo = "three";
            elseThree = "four";
            elseFour = "five";
            break;

        case "panel two entertainment":
            elseOne = "one";
            elseTwo = "three";
            elseThree = "four";
            elseFour = "five";
            break;

        case "panel three entertainment":
            elseOne = "one";
            elseTwo = "two";
            elseThree = "four";
            elseFour = "five";
            break;

        case "panel four entertainment":
            elseOne = "one";
            elseTwo = "two";
            elseThree = "three";
            elseFour = "five";
            break;


        case "panel five entertainment":
            elseOne = "one";
            elseTwo = "two";
            elseThree = "three";
            elseFour = "four";
            break;

    }
    if (isOpen) {
        this.classList.remove('active');
        setTimeout(() => this.classList.remove('open'), delay);
        return;
    }

    this.classList.add('open');
    setTimeout(() => this.classList.add('active'), delay);
    setTimeout(() => document.getElementById(elseOne).classList.remove('active', 'open'), delay);
    setTimeout(() => document.getElementById(elseTwo).classList.remove('active', 'open'), delay);
    setTimeout(() => document.getElementById(elseThree).classList.remove('active', 'open'), delay);
    setTimeout(() => document.getElementById(elseFour).classList.remove('active', 'open'), delay);

}

panels.forEach(panel => panel.addEventListener('click', togglePanel));