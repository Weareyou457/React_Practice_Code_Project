function customRender(reactElement,container){
   
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.herf)
    // domElement.setAttribute('target',reactElement.props.target)


    // container.appendChild(domElement)

    // -------------------

    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for (const prop in props) {
        if(prop == childern) continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {  //type uske andr ki property and uska text child
    type :'a',
    props:{
        herf :"https://goggle.com",
        target : "_blank"
    },
    children :'click me to visit Goggle'
}

const mainContainer =document.getElementById("root");

customRender(reactElement,mainContainer);

