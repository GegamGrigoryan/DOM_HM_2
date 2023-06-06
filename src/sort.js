
export let heroys = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
]

export function sort(arr){
    return arr.sort((prev, next) => next.health - prev.health);
  }
  sort(heroys)