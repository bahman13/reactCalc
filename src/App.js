import React, {Component} from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends Component {

/*
  constructor(props) {
    super(props);
    this.state = {
      transaction: [],
    }
}
*/

  state = {
    transactions: [],
    description: '',
    amount: '',
  }

  addTransaction = (add) => {
// ... спреад оператор
    const transactions = [...this.state.transactions,   
      {
      id: `cmr${(+new Date).toString(16)}`,  //получить дату текущую
      description: this.state.description,
      amount: this.state.amount,
      add
      }
    ];

    this.setState({
      transactions,
      description: '',
      amount: '',
    });
  }

  addAmount= (e) => {
    this.setState({ amount: e.target.value }); //обновить состояние
  }

  addDescription = (e) => {
    this.setState({ description: e.target.value }); //обновить состояние
  }


  render() {
    return (
      <React.Fragment >

        <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>

        <main>
          <div className="container">

            <Total />
            <History transactions/>
            <Operation
              addTransaction={this.addTransaction}
              addAmount={this.addAmount}
              addDescription={this.addTransaction}
              description = {this.state.description}
              amount={this.state.amount}
            />

          </div>
        </main>


      </React.Fragment>
    );
  }
}

export default App;
