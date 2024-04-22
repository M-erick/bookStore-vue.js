import { mount } from '@vue/test-utils';
import { createStore } from 'vuex'; 
import Jobs from '../../views/jobs/JobsView.vue'; 

describe('JobsView.vue', () => {
  it('renders title and displays job list from mock store', async () => {
    const mockJobs = [
      { id: 1, title: 'Software Engineer' },
      { id: 2, title: 'Data Scientist' },
    ];

    const store = createStore({
      state: {
        jobs: mockJobs,
      },
    });

    const wrapper = mount(Jobs, {
      global: {
        plugins: [store], 
      },
    });

    await new Promise((resolve) => setTimeout(resolve, 0)); 
    

    // Assert title
    const title = wrapper.find('h1');
    expect(title.text()).toBe('Available jobs');

    // Assert job list
    const jobList = wrapper.findAll('.job');
    expect(jobList.length).toBe(mockJobs.length); 

   
  });
});
