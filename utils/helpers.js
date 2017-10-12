import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

export const DECK_STORAGE_KEY = 'MobileFlashCards:decks';

export function getDecks() {

  const dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
        },
      ],
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.',
        },
      ],
    },
  };

  AsyncStorage.getItem(DECK_STORAGE_KEY, (err, result) => {
    if (result !== null) {
      console.debug('Data Found', result);
      let freshData = JSON.parse(result);
      return freshData;
    } else {
      console.debug('Data Not Found');
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData));
      return dummyData;
    }
  });

}