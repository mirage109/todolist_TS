export type TodoItem = {
  id: string,
  title: string;
  status: boolean;
  time?: string;
  date?: string;
};

export interface Lists{
  id:string;
  listname:string}
  

export type GlobalState = {
  todos: TodoItem[];
  inputValue: string;
  images:string[];
  page:number;
  lists:Lists[]
};
export const state: GlobalState = {
  todos: [
    /*{
      id: "1",
      title: "something to do",
      status: false,
    },
    {
      id:"2",
      title: "something to do 1",
      status: true,
    },
    {
      id:"3",
      title: "something to do more",
      status: false,
    },
    {
      id:"4",
      title: "something to do",
      status: false,
    // */
  ],
  inputValue: "",
  images: [
    "https://picsum.photos/seed/1/200/300",
    "https://picsum.photos/seed/2/200/300",
    "https://picsum.photos/seed/3/200/300",
    "https://picsum.photos/seed/4/200/300",
    "https://picsum.photos/seed/5/200/300",
    "https://picsum.photos/seed/6/200/300",
    "https://picsum.photos/seed/7/200/300",
    "https://picsum.photos/seed/8/200/300",
    "https://picsum.photos/seed/9/200/300",
    "https://picsum.photos/seed/10/200/300",
  ],
  page: 0,
  lists:[]
};
