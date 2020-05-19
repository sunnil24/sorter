import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([1000, 300, -5, 0, 1]);
numbersCollection.sort();

console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xcydea');

charactersCollection.sort();

console.log(charactersCollection.data);
