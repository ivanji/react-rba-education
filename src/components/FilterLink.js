import React from 'react';

const FilterLink = (props) => {
    let normalisedText = props.children.map((element) =>{ // All elements in the received array need to be transformed into lowercase, in order to create links
        return props.type + '/' + element.toLowerCase().replace(" ", '-');
    })
    return(
        props.children.map((element, index) =>
            <li key={index}><a onClick={props.filter} href={normalisedText[index]}>{element}</a></li>
        )
    )
}


/*class FilterLink extends React.Component {
    constructor(props) {
        super(props);
        this.filter = this.filter.bind(this);
    }

    filter(event) {
        event.preventDefault();
        console.log(event.target.innerHTML);
    }

    render() {
        let normalisedText = this.props.children.map((element) =>{ // All elements in the received array need to be transformed into lowercase, in order to create links
            return this.props.type + '/' + element.toLowerCase().replace(" ", '-');
        })

        return(
            this.props.children.map((element, index) =>
                <li key={index}><a onClick={this.filter} href={normalisedText[index]}>{element}</a></li>
            )
        )
    }


}*/


export default FilterLink;