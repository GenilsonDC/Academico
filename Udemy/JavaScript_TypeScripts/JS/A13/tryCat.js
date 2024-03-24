try {
    // console.log(a);
    console.log('Passei  tray 1 --1');
    console.log('Passei  tray 2 --2');
    try {
        console.log(b);
        console.log('---- Passei tray 2 --1');
        console.log('---- Passei tray 2 --2');

    } catch (e) {
        console.log('Tratando erro interno erro B');

    }
    finally {
        console.log('---- finally interno sempre mostra');
    }
} catch (e) {
    console.log('Tratando erro externo erro A');
} finally {
    console.log('finally externo sempre mostra');

}
