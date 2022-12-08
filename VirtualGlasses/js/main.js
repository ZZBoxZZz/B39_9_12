let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

class Glasses{
    constructor(_id, _src, _virtualImg, _brand, _name, _color, _price, _description){
        this.id = _id;
        this.src = _src;
        this.virtualImg = _virtualImg;
        this.brand = _brand;
        this.name = _name;
        this.color = _color;
        this.price = _price;
        this.description = _description;
    }
}
class glassServices{
    callApi(url, method, data){
        return axios({
            url:`${URL}/${url}`,
            method: `${method}`,
            data: `${data}`,
        });
    }
}
const getEle = (id) => {
    return document.getElementById(id);
}

const renderHTML = (data) => {
    let content =``;
    data.forEach((product)=>{
        content += `<tr>
            <td>${product.id}</td>
            <td>${product.src}</td>
            <td>${product.brand}</td>
            <td>${product.name}</td>
            <td>${product.color}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
            <td>
        
        </tr>`
    })

}

const renderPic = (data) => {
    let content =``;
    if(data && data.length > 0) {
        data.forEach((product)=>{
            content +=`
            
            <a href="#"><img style="display: flex; width:140px;margin-left:28px;margin-bottom:30px;" src="${product.virtualImg}"/></a>
            
            `;
        });
    getEle("vglassesList").innerHTML = content;
    }
}

renderPic(dataGlasses);
console.log(dataGlasses);