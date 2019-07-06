const calculateBottle = (drank, bottle) => {

    let curr_drank = drank;
    //DRINK BOTTLE ENOUGH TO EXCHANGE
    const exchange = Math.floor(bottle / 3);
    curr_drank += bottle - (bottle % 3);

    const last = (bottle % 3) + exchange;


    return (last >= 3) ? calculateBottle(curr_drank, last) : curr_drank + last;
};


const result = calculateBottle(0, 1500);


console.log(result);