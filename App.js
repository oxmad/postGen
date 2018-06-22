import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Clipboard, Picker } from 'react-native';

export default class App extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
    	teamOne: '',
    	teamTwo: '',
    	select: 1};
  }

	gen() {

  	let team1 = this.state.teamOne;

  	let team2 = this.state.teamTwo;

  	let select = this.state.select;

  	if (select == 1) {

  		select = team1;

  		team1 = "👊 " + team1;

		} else {

			select = team2;

			team2 = team2 + " 👊";

		}

		let msg = "🔥" + team1 + " vs " + team2 + " 🔥" + "\n" + "\n" +
		"Ставим 5% от банка на первый пистолетный раунд " + select + 
		", в случае поражения увеличиваем ставку до 12% от банка на 2-ой пистолетный раунд " + select + ", чтобы отыграться и выйти в плюс, а в случае победы пропускаем и довольствуемся хорошим выигрышем! 💰"  + "\n"+ "\n" +
		"Всем удачи и сладких кэфов💪💪💪" + "\n" + "\n" + "Поддержим лайками! ❤❤❤";
		
		if (select == team1) {

			team1 = "👊 " + team1;

		} else {

			team2 = team2 + " 👊";
			
		}

		Clipboard.setString(msg);

		alert("Готово!");
  }

  render() {

    return (

      <View style={styles.container}>

	      <Text>Первая команда</Text>
		    <TextInput
          style={styles.input}
          underlineColorAndroid='#fff'
          selectionColor='#0046ac'
          onChangeText={(text) => this.setState({teamOne: text})}
	        />

	      <Text>Вторая команда</Text>
		    <TextInput
          style={styles.input}
          underlineColorAndroid='#fff'
          selectionColor='#0046ac'
          onChangeText={(text) => this.setState({teamTwo: text})}
	        />

	        <Text>Победитель:</Text>

	        <Picker
					  selectedValue={this.state.select}
					  style={styles.picker}
					  onValueChange={(itemValue, itemIndex) => this.setState({select: itemValue})}>
					  <Picker.Item label="1" value="1" />
					  <Picker.Item label="2" value="2" />
					</Picker>

	      <Button 
					style={styles.btn}
		      title="Сгенерировать пост!"
		      color='#0046ac'
		      onPress={() => this.gen() }/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
  	width: '90%',
  	padding: 10,
  	marginTop: 20,
  	marginBottom: 20,
  	borderRadius: 5,
  	borderColor: '#0046ac',
  	borderWidth: 2,
  },
  picker: {
  	height: 50,
  	width: 80,
    marginTop: 20,
    marginBottom: 20,
    color: '#0046ac',
  },
  btn: {
		padding: 20,
		marginTop: 20,
  },
});
