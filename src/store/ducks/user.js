const INITIAL_STATE = {
  users: [
    {
      name: 'Lucas Teixeira',
      login: 'LucasATeixeira',
      avatar: 'https://avatars3.githubusercontent.com/u/69631?v=4',
      latitude: -16.707807198721373,
      longitude: -49.25617857138211,
    },
    {
      name: 'Marina Gabriela',
      login: 'MarinaGabriela',
      avatar: 'https://avatars3.githubusercontent.com/u/139426?v=4',
      latitude: -16.70287470284281,
      longitude: -49.24997730412947,
    },
  ],
  modal: false,
  clickedLocalization: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
