import React from "react";

export default class Form extends React.Component {
    state = {
        title: 'TEST',
        textarea: 'javascript is a Awesome!',
        library: 'React',
        checkboxCheck: true,
        radioCheck: false
    }

    handleChange = (e) => {
        console.log(e.target.type)
        // Dynamic State set
        // this.setState({
        //     [e.target.name] = e.target.value
        // });

        if(e.target.type === 'text'){
            this.setState({
                title: e.target.value
            })
                
        } else if(e.target.type === 'textarea'){
            this.setState({
                textarea: e.target.value
            })
        } else if(e.target.type === 'select-one'){
            this.setState({
                library: e.target.value
            })
        } else if(e.target.type === 'checkbox'){
            this.setState({
                checkboxCheck: e.target.checked
            })
        } else if(e.target.type === 'radio'){
            this.setState({
                radioCheck: e.target.checked
            })
        } else {
            console.log('Nothing here')
        }
    }

    submitHandle = (e) => {
        const {title, textarea, library, checkboxCheck, radioCheck} = this.state;
        e.preventDefault();
        console.log(title, textarea, library, checkboxCheck, radioCheck)
    };
    
    render(){
        const {title, textarea, library, checkboxCheck, radioCheck} = this.state;
        return (
            <form onSubmit={this.submitHandle}>
                <input type="text" name="hell_test" value={null} />
                <input 
                    type="text" 
                    name="title"
                    placeholder="Enter title" 
                    value={title} 
                    onChange={this.handleChange} 
                />
                <br />
                <br />
                <textarea name="textarea" value={textarea} onChange={this.handleChange}/>
                <br />
                <br />
                <select name="library" value={library} onChange={this.handleChange}>
                    <option value="React">React</option>
                    <option value="Angular">Angular</option>
                </select>
                <br />
                <br />
                <input type="checkbox" name="checkboxCheck" checked={checkboxCheck} onChange={this.handleChange} value="Test Check" /> Test Check
                <br />
                <br />
                <input type="radio" name="radioCheck" checked={radioCheck} onChange={this.handleChange} value="Dhaka"/> Dhaka
                <br />
                <br />
                <input type="radio" name="radioCheck" checked={radioCheck} onChange={this.handleChange} value="Kushtia" /> Kushtia
                <br />
                <br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}