const ocenaUcznia = (ocena) => {
    if (ocena === 1) {
        return "Niedostateczny";
    } else if (ocena === 2) {
        return "Dopuszczający";
    } else if (ocena === 3) {
        return "Dostateczny";
    } else if (ocena === 4) {
        return "Dobry";
    } else if (ocena === 5) {
        return "Bardzo dobry";
    } else if (ocena === 6) {
        return "Celujący";
    } else {
        return "Nieprawidłowa ocena";
    }
};

console.log(ocenaUcznia(3));

const OcenaUcznia = (ocena) => {
    switch (ocena) {
        case 1:
            return "Niedostateczny";
        case 2:
            return "Dopuszczający";
        case 3:
            return "Dostateczny";
        case 4:
            return "Dobry";
        case 5:
            return "Bardzo dobry";
        case 6:
            return "Celujący";
        default:
            return "Nieprawidłowa ocena";
    }
};

console.log(OcenaUcznia(4));