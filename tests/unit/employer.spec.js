import {mount} from '@vue/test-utils';
import employer from '../../src/views/Employer.vue'

describe(' Employer Component unit test',()=>{
    test('is a vue instance',()=>{
        const wrapper = mount(employer,{
            propData:{
                employer:{ name:'employer 1',
                  completed:false}
            }
        });
        expect(wrapper.isVueIsntance()).toBeTruthy();
    });
   
})