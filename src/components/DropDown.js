import React ,{ Component } from 'react';
import PlotlyChart from './PlotlyChart';


class DropDown extends Component{

    constructor(){
        super();

        this.state={
            selectedCar:'',
            selectedModel:'',
           
        }
        
        this.cars={
           Audi : ["A3","A4","A5"],
           BMW: ["B1","B2","B3"],
           Apache: ["Ap1","Ap2","Ap3"],
           Mercedes: ["M1","M2","M3"]

        }
    }


    handleChange=(e)=>{
        console.log(e.target.value)
        
        // e.target.value==="BMW"? console.log("BMW") : console.log("NOCAR");

        this.setState({selectedCar:e.target.value})
    }

    onVariant=(h)=>{

       this.setState({Variant:h.target.value})
    }

    render() {       
        return(         
                <div>
                <fieldset>
                
                <legend>DropDown</legend>
                <label for="cars">Select a car : </label>
                <select name="cars" id="cars" onChange={this.handleChange}>
                    <option value="Select" selected disabled>Select</option>
                    <option value="Audi">Audi</option>
                    <option value="Apache">Apache</option>
                    <option value="Mercedes">Mercedes</option>
                    <option value="BMW">BMW</option>
                </select>
                <br></br>
                <br></br>

                <label for="cars">Select Model : </label>
                <select name="cars" id="cars" onChange={(e)=>this.setState({selectedModel:e.target.value})}>
                    <option value='select' selected disabled>Select</option>
                    {this.state.selectedCar!=''? 
                    this.cars[this.state.selectedCar].map((eachOption)=>(
                    <option value={eachOption} >  {eachOption}</option>
                    )):
                    console.log("")}
                </select><br></br>
                <br></br>
                <label for="pd" ><b>Variant </b></label>
                <input type="text" placeholder= "Petrol/Diesel"  id="pd" required onChange={this.onVariant}></input>
                    <button type="Submit" ><a href="##"> Submit</a> </button>
                </fieldset>

                    {this.state.selectedModel?
                    <PlotlyChart value={this.state.selectedModel}/>
                :
                console.log()}

                </div>    
                );
                }
                }
                export default DropDown;

               