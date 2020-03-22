import React from 'react';

class Basketball extends React.Component {

    state = {
        basketballgames: []
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("test");
        fetch("http://localhost:5000/games/Basketball")
            .then(res => res.json())
            .then(
                (result) => {
                    this.state.basketballgames = result;
                    this.setState({}, console.log(result));
                },
                (error) => {
                    console.log(error);
                });
    }

    FootballComponent(){
        this.props.history.push("/");
    }

    ShowGame(gameid){
        this.props.history.push(`/${gameid}`);
    }

    render() {
        if (this.state.basketballgames.length > 0) {
            var test = this.state.basketballgames.map((game, index) => {
                return (
                    <tr key={index} onClick={this.ShowGame.bind(this,game.id)}>
                        <td>
                    {game.id}
                        </td>
                        <td>
                        {game["team-a"]}
                        </td>
                        <td>
                        {game["team-b"]}
                        </td>
                        <td>
                        {game["score-a"]}
                        </td>
                        <td>
                        {game["score-b"]}
                        </td>
                        <td>
                        {game._date}
                        </td>
                        <td>
                        {game.category}
                        </td>
                    </tr>
                )
            });
        }
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>Basketball-Games</h1>
                </div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th>
                                ID:
                            </th>
                            <th>
                                TEAM-A:
                            </th>
                            <th>
                                TEAM-B:
                            </th>
                            <th>
                                TEAM-A-SCORE:
                            </th>
                            <th>
                                TEAM-B-SCORE:
                            </th>
                            <th>
                                Time:
                            </th>
                            <th>
                                Category:
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.basketballgames.length >0 ? test : <div>Content Not Found!</div>}
                    </tbody>
                </table>
                <div className="btn btn-success" onClick={this.FootballComponent.bind(this)}>Football-Games</div>
            </div>
        )
    }
}

export default Basketball;
