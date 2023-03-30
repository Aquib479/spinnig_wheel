import React from 'react';
import { render } from '@testing-library/react';
import Index from './Index'
import axios from 'axios';

jest.mock('axios');

describe('user component', () => {
    describe('when the button is clicked with the input filled out, the new user should be added to the state', () => {
        it('a post request should be made', () => {
            const toDoListInstance = render(<Index />);
            const postSpy = jest.spyOn(axios, 'post');

            const newTask = 'new user';
            const taskInput = toDoListInstance.find('input');
            taskInput.simulate('change', { target: { value: newTask } });

            const button = toDoListInstance.find('button');
            button.simulate('click');

            const postPromise = postSpy.mock.results.pop().value;

            return postPromise.then((postResponse) => {
                const currentState = toDoListInstance.state();
                expect(currentState.user.includes((postResponse.data.user))).toBe(true);
            })
        });
    });
});
