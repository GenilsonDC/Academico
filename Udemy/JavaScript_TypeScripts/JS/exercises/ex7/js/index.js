function showDate() {
    const texts = document.querySelector('.text');

    function daysOfWeek(day) {
        let dayText;
        switch (day) {
            case 0:
                dayText = `Domingo`
                return dayText;
            case 1:
                dayText = `Segunda feira`
                return dayText;
            case 2:
                dayText = `Terça feira`
                return dayText;
            case 3:
                dayText = `Quarta feira`
                return dayText;
            case 4:
                dayText = `Quinta feira`
                return dayText;
            case 5:
                dayText = `Sexta feira`
                return dayText;
            case 6:
                dayText = `Sábado`
                return dayText;
        }
    }

    function monthsOfYear(month) {
        let monthText;
        switch (month) {
            case 0:
                monthText = `janeiro`
                return monthText;
            case 1:
                monthText = `fevereiro`
                return monthText;
            case 2:
                monthText = `março`
                return monthText;
            case 3:
                monthText = `abril`
                return monthText;
            case 4:
                monthText = `maio`
                return monthText;
            case 5:
                monthText = `junho`
                return monthText;
            case 6:
                monthText = `julio`
                return monthText;
            case 7:
                monthText = `agosto`
                return monthText;
            case 8:
                monthText = `setembro`
                return monthText;
            case 9:
                monthText = `outubro`
                return monthText;
            case 10:
                monthText = `novembro`
                return monthText;
            case 11:
                monthText = `dezembro`
                return monthText;
        }
    }

    function zeroEsquerda(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function getDates(dates) {
        const sec = zeroEsquerda(dates.getSeconds());
        const min = zeroEsquerda(dates.getMinutes());
        const hor = zeroEsquerda(dates.getHours());


        return `${hor}:${min}:${sec}`;
    }
    const dates = new Date();
    const day = dates.getDay();
    const month = dates.getMonth();
    const year = dates.getFullYear();
    const dayText = daysOfWeek(day);
    const monthText = monthsOfYear(month);
    const brazilHors = getDates(dates);

    texts.innerHTML = '';
    texts.innerHTML = `<p class="timerContainer"> ${dayText}, ${day} de ${monthText} de ${year} - ${brazilHors}</p>`


};
showDate();