        <StatusBar
         backgroundColor="blue"
         barStyle="light-content"
        />

                        <TouchableOpacity onPress={() => this.setState((prevState) => ({counter: prevState.counter + 1}))} ><Text>TEST</Text></TouchableOpacity>


                        this.props.dispatch(AddQuizResults(this.props.data.title,this.state.result))



            const newResult = Math.round(this.state.noCorrect/this.props.data.questions.length * 100).toFixed(2);
            console.log(newResult);
            this.setState({ result: newResult });


            
    // const dummyData = {
    //   React: {
    //     title: 'React',
    //     questions: [
    //       {
    //         question: 'What is React?',
    //         answer: 'A library for managing user interfaces',
    //       },
    //       {
    //         question: 'Where do you make Ajax requests in React?',
    //         answer: 'The componentDidMount lifecycle event',
    //       },
    //     ],
    //   },
    //   JavaScript: {
    //     title: 'JavaScript',
    //     questions: [
    //       {
    //         question: 'What is a closure?',
    //         answer: 'The combination of a function and the lexical environment within which that function was declared.',
    //       },
    //     ],
    //   },
    // };

    // AsyncStorage.setItem('MobileFlashCards:decks', JSON.stringify(dummyData));
    // try {
    //   let value = await AsyncStorage.getItem('MobileFlashCards:decks');
    //   if (value !== null){
    //     let val = JSON.parse(value)
    //     Object.keys(val).map((key) => {
    //       // console.debug(key, val[key])
    //       this.props.dispatch(receiveDecks(val[key]));
    //       // using local state instead of reducx store
    //       // this.setState(prevState => ({
    //       //   deckData: [...prevState.deckData, val[key]]
    //       // }))
    //     })
    //   } else {
    //   }
    // } catch (error) {
    //   console.log("error here")
    // }



                    //     <TouchableOpacity 
                    //     style={styles.addBtn}
                    //     onPress={() => this.props.navigation.navigate('AddCard')}
                    //     >
                    //     <Text style={styles.addBtnText}>Add Card</Text>
                    // </TouchableOpacity>
                    // <TouchableOpacity 
                    //     style={styles.addBtn}
                    //     onPress={() => this.props.navigation.navigate('AddCard')}
                    //     >
                    //     <Text style={styles.addBtnText}>Start Quiz</Text>
                    // </TouchableOpacity>