describe('as a witcher I want to be able to choose elixir ingredients:', function(){
    beforeEach(function(){
        browser.get('/#/create-potion');
    })

    function getPotionRow(index){
        var name = element(by.repeater('ingredient in potion.ingredients').row(index).column('{{ingredient.name}}')).getText()
        var count = element(by.repeater('ingredient in potion.ingredients').row(index).column('{{ingredient.count}}')).getText()
        var actionButton = element(by.repeater('ingredient in potion.ingredients').row(index)).$('button:not(.ng-hide)')

        return {
            name : name,
            count : count,
            actionButton : actionButton
        }
    }

    iit('should allow to add ingredients to elixir by clicking on [+] button', function(){
        var abominationLymphAddButton = element(by.repeater('ingredient in availableIngredients').row(0)).$('button')
        var alpFangsAddButton = browser.findElement(by.xpath("//*[text()='Alp fangs']/../button"))

        abominationLymphAddButton.click()
        alpFangsAddButton.click()
        alpFangsAddButton.click()

        // Doesn't work for directives :(
        // var name = element(by.repeater('ingredient in potion.ingredients').row(0).column('{{ingredient.name}}'))
        // var count = element(by.repeater('ingredient in potion.ingredients').row(0).column('{{ingredient.count}}'))

        var potionTable = [0,1].map(function(index){
            return getPotionRow(index)
        })

        expect(potionTable[0].name).toContain('Abomination lymph')
        expect(potionTable[1].name).toContain('Alp fangs')
    })

    xit('when adding two ingredients of the same type it should stack them together', function(){

    })
})