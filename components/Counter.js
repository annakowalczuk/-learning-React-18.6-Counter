var Counter = React.createClass({
    getDefaultProps: function () {
        console.log('getDefaultProps');
    },

    getInitialState: function () {
        return {
            counter: 0
        };
    },

    componentWillMount: function () {
        console.log('componentWillMount');
    },

    componentDidMount: function () {
        console.log('componentDidMount');
    },

    componentWillReceiveProps: function () {
        console.log('componentWillReceiveProps');
    },

    shouldComponentUpdate: function () {
        console.log('shouldComponentUpdate');
        return true;
    },

    componentWillUpdate: function () {
        console.log('componentWillUpdate');
    },

    componentDidUpdate: function () {
        console.log('componentDidUpdate');
    },

    componentWillUnmount: function () {
        console.log('componentWillUnmount');
    },

    increment: function () {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function () {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function () {
        console.log('render');
        return React.createElement('li', {},
            React.createElement('button', {
                onClick: this.increment
            }, +1),
            React.createElement('button', {
                onClick: this.decrement
            }, -1),
            React.createElement('span', {}, ' Licznik ' + this.state.counter)
        );
    }
});