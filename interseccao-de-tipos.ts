type Users = {
  id: number;
  name: string;
}

type Char = {
  nickname: string;
  level: number;
}

type PlayerInfo = Users & Char;
let info: PlayerInfo = {
  name: 'Leandro',
  id: 10,
  nickname: 'Araujo',
  level: 7
}