# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a JavaScript library that is geared toward quickly and efficiently building dynamic user interfaces. React looks to solve the problems introduced by the addition of live data updates. Specifically, React looks to update only tiny pieces of the website at a time instead of rebuilding the whole site from scratch every time data is updated from an API or other source. An example of this (appropriately taken from Facebook) is the News Feed. When you browse a Facebook news feed, you have the option of refreshing just that aspect of the page which has updated (the feed itself) as opposed to having to re-render the menu, navigation elements, etc. This enables the page to load more quickly and to allow dynamic data to be displayed.

1. What does it mean to think in react?

    To think in React is to think in a modular fashion. Before, the work we were doing was largely descriptive, imperative programming that would describe specific actions and expect a specific result. In the case of React, we break down the function of our entire page into smaller components which can operate independently and then be combined to form the whole page we envision.

1. Describe state.

    State describes the current status of the page's data. State describes data's current value. The 'state' of the current temperature in Illinois is 71º and mostly sunny. 71º is the property value of temperature and mostly sunny is the property value of the cloud cover.

1. Describe props.

    Props in React are essentially the same as attributes. It allows us to pull in data from a JSON object or other source and to change data based on characteristics we set. As in the above example with the weather in Illinois, the props would be "props.temperature" and "props.cloudCover". We could create a component which would render differently depending on the value of props.temperature and props.cloudCover.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    A side effect in React is anything that effects something outside of the function's scope. An example of a side effect would be an API call. By communicating with an outside server, sometimes we can pull back data that is formatted or will render in ways we don't expect (or not render at all in the case of null values). We sync effects in a react component to state or prop changes by using a dependency array. 

    useEffect(() => {
        axios.get('http://www.someurl.com/API')
        .then(response =>  {
            console.log(response.data);
            setData(response.data)
        })
        .catch(function(error) {
            console.log(error)
        });
    }, [*some placeholder value here or empty array if we want to cancel updates after 1 render*])

        In line 32, the placeholder value could be left blank if we didn't want the component to update or we could input the name of a prop or our state variable to synchronize the update function setData. Any time that prop or state is updated, we'd get a re-render of our component.