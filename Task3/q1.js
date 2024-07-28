
let states = ["Andhra Pradesh", "Bihar", "Goa", "Karnataka", "Uttar Pradesh"];


let filteredStates = states.filter(state => {
    let firstChar = state.charAt(0).toLowerCase();
    return !['a', 'e', 'i', 'o', 'u'].includes(firstChar);
});

console.log(filteredStates); 
