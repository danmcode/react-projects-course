import { shallow } from 'enzyme';
import React from 'react'
import { GifGridItem } from '../../components/GifGridItem'

describe('test to <GifGridItem />', () => {

    const title = "Un titulo";
    const url = "https://localhost/unaimagen.jpg";

    beforeEach(()=>{
        wrapper = shallow(        
        <GifGridItem 
            title={ title }
            url = { url }
        /> );
    });
    
    let wrapper = shallow( 
        <GifGridItem 
            title={ title }
            url = { url }
        /> 
    );

    test('should render correct the component', () => { 
        expect( wrapper ).toMatchSnapshot();
     });
 });