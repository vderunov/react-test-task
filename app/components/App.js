import '../styles/application.scss';
import { connectData } from '../services';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import List from './List/List';
import ArrowPointer from './ArrowPointer/ArrowPointer';
import ShowPrice from './ShowPrice/ShowPrice';

class App extends PureComponent {
    componentDidMount() {
        connectData('AAPL', data => {
            const dataObj = JSON.parse(data);
            Number(this.props.data.price) < Number(dataObj.price) ? this.statusPrice = 1 : this.statusPrice = 0;
            this.props.updateData(dataObj);
        });
    }

    render() {
        const arrData = Object.entries(this.props.data);

        return (
            <div>
                <h1>Stock Blotter</h1>
                <div className="price-status">
                    <h3>Price status:&nbsp;</h3>
                    <ShowPrice price={this.props.data.price} />&nbsp;
                    <ArrowPointer status={this.statusPrice} />
                </div>
                <h4>More info:</h4>
                <List data={arrData} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        data: state
    };
};

const mapDispatchToProps = dispatch => {
    return {
        updateData: data => dispatch({ type: 'UPDATE_DATA', data })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
