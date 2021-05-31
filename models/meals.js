class Meal{
    constructor(
        id,categoryIds,title,affordability,
        complexity,imageUrl,duration,ingredients,
        steps,isGlutenfree,isVegan,isvegeterian,isLactoseFree){

            this.id=id;
            this.categoryIds=categoryIds;
            this.title=title;
            this.affordability=affordability,
            this.complexity=complexity,
            this.imageUrl=imageUrl,
            this.duration=duration,
            this.ingredients=ingredients,
            this.steps=steps,
            this.isGlutenfree=isGlutenfree;
            this.isVegan=isVegan;
            this.isvegeterian=isvegeterian;
            this.isLactoseFree=isLactoseFree
        }
}

export default Meal