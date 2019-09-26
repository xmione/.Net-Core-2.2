import $ from './node_modules/jquery';
import './node_modules/jquery-ui/ui/widgets/slider';

class Slider extends React.Component {
    componentDidMount() {
        this.$node = $(this.refs.Slider);
        this.$node.Slider({
            opacity: this.props.opacity,
            change: (event, ui) => this.props.onChange(event, ui)
        });
    }

    shouldComponentUpdate() { return false; }

    componentWillReceiveProps(nextProps) {
        if (nextProps.enable !== this.props.enable)
            this.$node.Slider(nextProps.enable ? 'enable' : 'disable');
    }

    renderItems() {
        return this.props.data.map( (item, i) =>
            <li key={i} className="ui-state-default">
                <span className="ui-icon ui-icon-arrowthick-2-n-s"></span>
                { item }
            </li>
        );
    }
    render() {
        return (
            <ul ref="Slider">
                { this.renderItems() }
            </ul>
        );
    }

    componentWillUnmount() {
        this.$node.Slider('destroy');
    }
};