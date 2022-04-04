import { shallow } from 'enzyme';
import React from "react";
import CounterApp from "../CounterApp";

describe('Pruebas en <CounterApp/>', () => {

    let wrapper = shallow( <CounterApp/> );
    
    beforeEach(()=>{
        wrapper = shallow(<CounterApp/>);
    });

    test('Debe renderizar el contador', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe mostrar el valor enviado por defecto de 100', () => {
        const counter = 100;
        const wrapper = shallow( 
            <CounterApp 
                value={counter}
            />
        );

        const number = wrapper.find('p').text();
        expect( parseInt(number)  ).toBe(counter);
        
    });

    test('should increment with the button +1', () => { 
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('p').text().trim();

        expect(counterText).toBe('1');
     });

     test('should decrement with the button -1', () => { 

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('p').text().trim();

        expect(counterText).toBe('-1');
     });

     test('should reset to default value whit the reset button', () => { 

        const counter = 105;

        const wrapper = shallow( 
            <CounterApp 
                value={counter}
            />
        );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('p').text().trim();

        expect(counterText).toBe('105');
     });
 });