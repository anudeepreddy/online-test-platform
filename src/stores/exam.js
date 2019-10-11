import { writable, readable } from 'svelte/store';

export const questions = readable([
        {no:"1",data:"this is questions 1"},
        {no:"2",data:"this is questions 2"},
        {no:"3",data:"this is questions 3"},
        {no:"4",data:"this is questions 4"},
        {no:"5",data:"this is questions 5"},
        {no:"6",data:"this is questions 6"}
    ]
);
export const answers = writable([]);