import React from 'react';

class Specificgame extends React.Component {

    state = {
        value: '',
        gameid: '',
        comments: [],
        games: []
    }

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        let str = window.location.href;
        let strfix = str.split("").pop();
        this.state.gameid = strfix;
        this.setState({});
        console.log(strfix);

        this.GetComments();
        this.GetGame();
    }

    GetGame() {
        fetch(`http://localhost:5000/games/category/${this.state.gameid}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.state.games = result;
                    this.setState({}, console.log(result));
                },
                (error) => {
                    console.log(error);
                });
    }

    GetComments() {
        fetch(`http://localhost:5000/comments/${this.state.gameid}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.state.comments = result.data;
                    this.setState({}, console.log(this.state.comments));
                },
                (error) => {
                    console.log(error);
                });
    }

    FootballComponent() {
        this.props.history.push("/");
    }

    HandleChange(event) {
        this.setState({ value: event.target.value });
    }

    SendComment() {
        let data = {
            value: this.state.value,
            gameid: this.state.gameid
        }
        fetch("http://localhost:5000/comments", {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.refs.txtdot.value = "";
                    if (result.affectedRows > 0) {
                        this.GetComments();
                    }
                })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    render() {
        if (this.state.comments.length > 0) {
            var comments = this.state.comments.map((comment, index) => {
                return (
                    <div key={index} className="col-md-12 text-center">
                        <b>Comment:</b> {comment.comment}
                    </div>
                )
            });
        }
        if (this.state.games.length > 0) {
            var test = this.state.games.map((game, index) => {
                return (
                    <tr key={index}>
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
                    <h1>Specific-Game</h1>
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
                        {this.state.games.length > 0 ? test : <div>Error Occured!</div>}
                    </tbody>
                </table>
                <div className="col-md-12 mb-5">
                    <div className="btn btn-success" onClick={this.FootballComponent.bind(this)}>Back</div>
                </div>
                <div className="col-md-12 text-center mb-5">
                    <label for="w3mission" className="mr-5">Add Comment:</label>
                    <textarea id="w3mission" ref="txtdot" name="textarea" rows="4" cols="50" className="mr-5" onChange={this.HandleChange.bind(this)}>

                    </textarea>
                    <input type="submit" value="Add" onClick={this.SendComment.bind(this)} />
                    {/* <div className="btn btn-warning" onClick={this.SendComment.bind(this)}>Add</div> */}
                </div>
                {this.state.comments.length > 0 ? comments : <div className="col-md-12 text-center">No Comments Found!</div>}
                <div className="col-md-12 text-center">
                    Total Comments: {this.state.comments.length}
                </div>
            </div>
        )
    }
}

export default Specificgame;
