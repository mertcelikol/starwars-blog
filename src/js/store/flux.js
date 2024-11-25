const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadPlanets: () => {
        fetch("https://www.swapi.tech/api/Planets")
          .then((res) => res.json())
          .then((data) => {
            setStore({ Planets: data });
            console.log(getStore());
          })
          .catch((err) => console.error(err));
      },
      loadPeople: () => {
        fetch("https://www.swapi.tech/api/People")
          .then((res) => res.json())
          .then((data) => {
            setStore({ People: data });
            console.log(getStore());
          })
          .catch((err) => console.error(err));
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
