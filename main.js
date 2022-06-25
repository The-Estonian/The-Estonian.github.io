var pictureContainer = document.querySelectorAll('.picture-container img');

var oldBorder = (i) => {
  return (pictureContainer[i].style.border = '1px white solid');
};

var newBorder = (i) => {
  return (pictureContainer[i].style.border = '5px solid blue');
};

// for (let index = 0; index < pictureContainer.length; index++) {
//     pictureContainer[index].addEventListener("mouseover", function(){
//         pictureContainer[index].style.zIndex = "1"
//         pictureContainer[index].style.transition = "1s"
//         pictureContainer[index].style.border = "4px solid red"
//         pictureContainer[index].style.transform = "rotate(1deg) scale(1.05)"
//     })
//     pictureContainer[index].addEventListener("mouseout", function(){
//         pictureContainer[index].style.border = "1px solid white"
//         pictureContainer[index].style.transform = "rotate(0deg) scale(1)"
//         pictureContainer[index].style.zIndex = "0"
//     })
// }

for (let i = 0; i < pictureContainer.length; i++) {
  pictureContainer[i].style.transition = '1s';
  pictureContainer[i].addEventListener('mouseover', function () {
    pictureContainer[i].style.zIndex = '1';
    pictureContainer[i].style.transform = 'rotate(5deg) scale(1.1)';
    for (let index = 0; index < pictureContainer.length; index++) {
      if (pictureContainer[i] != pictureContainer[index]) {
        pictureContainer[i].style.zIndex = '0';
        pictureContainer[index].style.transform = ' scale(0.8)';
      }
    }
  });
  
  pictureContainer[i].addEventListener('mouseout', function () {
    pictureContainer[i].style.transform = 'rotate(0deg) scale(1)';
    for (let index = 0; index < pictureContainer.length; index++) {
      if (pictureContainer[i] != pictureContainer[index]) {
        pictureContainer[index].style.transform = 'scale(1)';
      }
    }
  });
}
