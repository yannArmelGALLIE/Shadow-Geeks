const tagLi1 = document.querySelector('.tagLi1');
const toolTip1 = document.querySelector('.toolTip1');
const tagLi2 = document.querySelector('.tagLi2');
const toolTip2 = document.querySelector('.toolTip2');
const tagLi3 = document.querySelector('.tagLi3');
const toolTip3 = document.querySelector('.toolTip3');
const tagLi4 = document.querySelector('.tagLi4');
const toolTip4 = document.querySelector('.toolTip4');
const tagLi5 = document.querySelector('.user-btn');
const toolTip5 = document.querySelector('.toolTip5');

const iconName = (argument1, argument2) => {
    window.addEventListener('resize', () => {
         if (window.innerWidth <= 700) {
    argument1.addEventListener('mouseover', () => {
        argument2.style.display= "block"
    })
    argument1.addEventListener('mouseout', () => {
        argument2.style.display= "none"
    })  } 
    } )
   
}

iconName(tagLi1, toolTip1);
iconName(tagLi2, toolTip2);
iconName(tagLi3, toolTip3);
iconName(tagLi4, toolTip4);
iconName(tagLi5, toolTip5);