import { summary } from './summary.js'


window.document.addEventListener("DOMContentLoaded",function(){
    const LIST_SUMMARY_PARENT = document.getElementById("summary")

    for (const data in summary) {
        let bold = document.createElement("b")
        bold.className = "bold-color"
        let summary_child = document.createElement("li")
        summary_child.className = "summary__child"

        let summary_icon = document.createElement("img")
        summary_icon.src = summary[data].icon
        summary_icon.className = "summary__icon"
        summary_icon.alt = "icon " + summary[data].category

        let summary_category= document.createElement("p")
        summary_category.textContent = summary[data].category
        summary_category.className = "summary__category"

        let summary_score = document.createElement("p")
        summary_score.className = "summary__score flex-full"
        summary_score.textContent = " / 100"
        bold.textContent = summary[data].score

        if(summary[data].category == "Reaction"){
            summary_category.classList.add("summary__category-red")
            summary_child.classList.add("red-transparent")
        }else if(summary[data].category == "Memory"){
            summary_category.classList.add("summary__category-yellow")
            summary_child.classList.add("yellow-transparent")
        }else if(summary[data].category == "Verbal"){
            summary_category.classList.add("summary__category-green")
            summary_child.classList.add("green-transparent")
        }else{
            summary_category.classList.add("summary__category-blue")
            summary_child.classList.add("blue-transparent")
        }

        
        LIST_SUMMARY_PARENT.insertAdjacentElement('beforeend',summary_child)
        summary_child.insertAdjacentElement('beforeend',summary_icon)
        summary_child.insertAdjacentElement('beforeend',summary_category)
        summary_child.insertAdjacentElement('beforeend',summary_score)
        summary_score.insertAdjacentElement('afterbegin',bold)
        
    }

});