import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 1, title: 'First post', content: 'Hello' },
    { id: 2, title: 'Second post', content: 'Welcome to Redux' },
    { id: 3, title: 'Third post', content: 'Hello everybody' },
    { id: 4, title: 'Long story', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis deleniti molestias nulla eum, perferendis distinctio autem. Modi rem blanditiis deleniti quaerat et obcaecati nam aliquid rerum. Delectus corrupti at tempora.' }
];

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
});

export default postSlice.reducer;
