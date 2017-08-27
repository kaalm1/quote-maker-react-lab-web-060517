import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import QuoteCard from '../components/QuoteCard';
import {removeQuote, upVote, downVote} from '../actions/quotes'

class Quotes extends Component {


  render() {
    console.log(this.props.quotes)
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {this.props.quotes.map((quote)=><QuoteCard quote={quote} removeQuote={this.props.removeQuote} upVote={this.props.upVote} downVote={this.props.downVote}/>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    removeQuote: removeQuote,
    upVote: upVote,
    downVote: downVote
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
