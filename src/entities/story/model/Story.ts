// example story
// {
//     "by" : "todsacerdoti",
//     "descendants" : 52,
//     "id" : 40206752,
//     "kids" : [ 40207533, 40208077, 40207124, 40207603, 40208036, 40206950, 40207245, 40207444, 40207740, 40207412, 40207194, 40207097 ],
//     "score" : 236,
//     "time" : 1714445323,
//     "title" : "Why SQLite Uses Bytecode",
//     "type" : "story",
//     "url" : "https://sqlite.org/draft/whybytecode.html"
// }
export interface Story {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}
