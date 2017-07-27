var id = 1

function Cat(name, picture) {
    this.id = id
    this.name = name;
    this.picture = picture;
    this.status = ['Happy', 'Bite-y'];
    this.petCount = 0
    
    id++
}
var catLady = {
    cats: []
}

var cat1 = new Cat('mr. Snibbly', "http://cutecatsinhats.com/wp-content/uploads/2016/01/monocle-top-hat-cat.jpg")
var cat2 = new Cat('Angry Kitty', "http://memedad.com/memes/22182.jpg")
var cat3 = new Cat('Mittens', "https://s-media-cache-ak0.pinimg.com/736x/3e/3f/01/3e3f013641123bc24797b845107b5b29--funny-vintage-photos-funny-cats.jpg")

catLady.cats.push(cat1, cat2, cat3)

function draw(cats) {
    //draw all cats to screen in given html format
    var template = ''
    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];
        //to check number of pets to determine status
        var statusIndex = 0;

        if (cat.petCount > 5) {
            statusIndex = 1;
        }
        template += `
        <div class = "cat">
            <img src="${cat.picture}" alt="">
            <h3>Name:${cat.name}</h3>
            <p>Status:${cat.status[statusIndex]} </p>
            <p>Number of Pets:${cat.petCount}</p>
            <button type="button" onclick="pet(${cat.id})">Pet Me!</button>
    </div>
        
        `
    }
    document.getElementById("cats").innerHTML = template

}
draw(catLady.cats)



function pet(catId){

    var catToPet = findCatByID(catLady.cats, catId)
    catToPet.petCount++;
    draw(catLady.cats)
}

function findCatByID( catArray, catId){
    for (var i = 0; i < catArray.length; i++) {
        var cat = catArray[i];
        if (catId===cat.id) {
            return cat
        }
    } 
    console.error("no such cat!")
}