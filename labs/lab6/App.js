import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import questions from "./components/questions/questions.json";

const TITLE_STATE = 0
const QUESTION_STATE = 1
const FINAL_STATE = 2

class Quiz extends React.Component{
  render(){
    return(
      <View style= {styles.container}>
        <Text
          style= {styles.text}>
          {this.props.question}
        </Text>
        
        <View style= {{
          width: 250,
          flex: 1,
          flexDirection: 'column',
          padding: 10,
          }}>
          
          {this.props.answers.map((v,i)=>
          <Button 
            color= "#415A77"
            title= {v.text} 
            onPress= {()=> this.props.nextQuestion(v.correct)} key={i}>
          </Button>)}
        </View>
      </View>
    )
  }
}

class LandingPage extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      score: 0,
      title: "Do You Know Your Food?",
      currentState: TITLE_STATE,
      currentQuestion: 0,
      questionIndices: [0,1,2,3,4,5,6]
    }
  }

  nextQuestion(correct){
    console.log("answered")

    if(correct){
      this.setState({score: this.state.score + 1})
    }
    if(this.state.questionIndices.length === 0){
        console.log("answers logged")
        this.setState({currentState: FINAL_STATE})
    } else{
      console.log(this.state.currentQuestion)
      const index = Math.floor(Math.random() * this.state.questionIndices.length)
      const questionNumber = this.state.questionIndices[index]
      const newArray = this.state.questionIndices.filter(
          (v, i) => index != i)

      this.setState({
        title: "You answered X",
        currentState: QUESTION_STATE,
        currentQuestion: questionNumber,
        questionIndices: newArray
      })
    }
  }

  start(){
    console.log("Starting Up")
    const array = questions.map((v,i) => {
      return i
    })

    const index = Math.floor(Math.random() * array.length)
    const questionNumber = array[index]
    const newArray = array.filter(
      (v, i) => index != i)
    this.setState({
      title: "Starting Quiz", 
      counter: 0, 
      currentState: QUESTION_STATE, 
      currentQuestion: questionNumber, 
      questionIndices: newArray 
    })
  }
  
  render(){
    return(
      <View style= {styles.container}>
        <Text style= {styles.topbar}>
          Points: {this.state.score}
        </Text>,
        {(
          (this.state.currentState === TITLE_STATE) 
          ? 
          <>
            <Text style= {styles.text}>
              {this.state.title}
            </Text>
            <Button
              color= "#415A77"
              title= "Lettus Go!" 
              onPress= {() => this.start()}/>
          </>
          :
            (this.state.currentState === QUESTION_STATE) 
              ? 
              <Quiz 
                answers= {questions[this.state.currentQuestion].answerOptions}  
                question= {questions[this.state.currentQuestion].question}
                nextQuestion= {(correct)=> this.nextQuestion(correct)}/>
              : 
              <Button
                color= "#415A77"
                title= "Restart Quiz"
                onPress= {() => this.start()}/>
        )}
        
      </View>
    )
  }
}

function App() {
  return (
    <View style= {styles.container}>
      <LandingPage></LandingPage>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2A2D34",
    flex: 1,
    alignItems: "center",
    borderRadius: 30,
    margin: 5
  },

  topbar:{
    color: "#FCDCC7",
    alignSelf: "center",
    fontSize: 15,
    marginTop: 5,
    marginBottom: 20,
  },

  text:{
    color: "#F2EFEF",
    alignSelf: "center",
    fontStyle: "helvetica",
    fontSize: 25,
    padding: 5,
    marginTop: 30,
    marginBottom: 100,
  }
});