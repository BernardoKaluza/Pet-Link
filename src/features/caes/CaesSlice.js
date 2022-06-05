import { createSlice } from '@reduxjs/toolkit';

if (localStorage.getItem('caes') == null ) {
    localStorage.setItem('caes', JSON.stringify([
    {   Animal : 1, 
        Tratamento : "Supecunol Spray - 3x por dia durante 4 dias", 
        Nutricao : "Nutrilus Pro misturado com Advnce Active Defense - De manha e a noite", 
        Nome : "Fuzz",
        Peso : "15kg",
        UltimaConsulta : "04/06/2022",
        Chip : "Sim",
        Raca : "Husky",
        Especie : "Cão",
        url : "https://cdn.discordapp.com/attachments/631543998422581248/983074609832280124/husky.jpg?size=4096"
    }]));
}

const initialState =  {
    caes: JSON.parse(localStorage.getItem('caes'))
};

export const CaesSlice = createSlice( {
    name: 'caes',
    initialState: initialState,
    reducers: {
        updatecao: (state, action) => {
            // { "Animal": 1, changes: [{"Nome": "Joana"}, {"Raça": "Não sei"}]} 
            const animal= action.payload.Animal;
            const changes = action.payload.changes;
            let cao = state.caes[animal-1];
            for (let i = 0; i < changes.length; i++) {
                cao[Object.keys(changes[i])] = changes[i][Object.keys(changes[i])];
            }
            state.caes[animal-1] = cao;
            localStorage.setItem('caes', JSON.stringify(state.caes));
        },
        addcao: (state, action) => {
            state.caes.push(action.payload);
            localStorage.setItem('caes', JSON.stringify(state.caes));
        },
        deletecao: (state, action) => {
            const animal = action.payload.Animal;
            state.caes.splice(animal-1, 1);

            for (let i = 0; i < state.caes.length; i++) {
                state.caes[i].Animal = i+1;
            }
            localStorage.removeItem('caes');
            localStorage.setItem('caes', JSON.stringify(state.caes));
        }
    }
});

export const { updatecao, addcao, deletecao } = CaesSlice.actions;
export default CaesSlice.reducer;