new fullpage('#fullpage', {
    autoScrolling: true,
    navigation: true,
    scrollOverflowReset: true,
    scrollOverflow: true,
    dragAndMove: true,
    verticalCentered: true,
    navigationTooltips: ['صفحه اصلی', 'طراحی سایت', 'خدمات سایت', 'تولید محتوا', 'شبکه اجتماعی', 'ارتباط با ما'],
    onLeave: (origin, destination, direction) => {
        const section = destination.item;
        let links = document.querySelectorAll('a');
        let array = Array.from(links);
        const tl = new TimelineMax({ delay: 0.5 });
        const video = section.querySelector(".video");
        let logo = document.querySelectorAll('.logo');
        let icons = document.querySelectorAll('.bar1' + ',' + '.bar2' + ',' + '.bar3')
        let iconArray = Array.from(icons);
        let iconboarder = document.querySelector('.icon-container');


        tl.fromTo(logo, 1, { y: "50", opacity: 0 }, { y: "0", opacity: 1 });
        //Post item 1
        if (destination.index == 0) {
            video.play();
            array.forEach(cur => {
                cur.style.color = 'white'
            })
            iconArray.forEach(cur => {
                cur.style.backgroundColor = 'white'
            })
            iconboarder.style.border = 'solid 1px white';
        }
        //Post item 2
        else if (destination.index == 1) {
            array.forEach(cur => {
                cur.style.color = 'white'
            })
            iconArray.forEach(cur => {
                cur.style.backgroundColor = 'white'
            })
            iconboarder.style.border = 'solid 1px white';
            let secondmainpicture = document.querySelector(".second-main-picture");
            let text = document.querySelectorAll('.text');
            tl.fromTo(secondmainpicture, 0.5, { x: "-80", opacity: 0 }, { x: "0", opacity: 1 })
                .fromTo(text, 0.5, { x: "80", opacity: 0 }, { x: "0", opacity: 1 })
        }
        //Post item 3
        else if (destination.index == 2) {
            array.forEach(cur => {
                cur.style.color = 'black'
            })
            iconArray.forEach(cur => {
                cur.style.backgroundColor = 'black'
            })
            iconboarder.style.border = 'solid 1px black';
            let postItems = document.querySelector(".description-picture");
            let postItemSecond = document.querySelector(".description-picture-second")
            let postIemsThird = document.querySelector(".description-picture-Third")
            tl.fromTo(postItems, 0.4, { x: 50, opacity: 0 }, { x: 0, opacity: 1 })
                .fromTo(postItemSecond, 0.4, { y: 50, opacity: 0 }, { y: 0, opacity: 1 })
                .fromTo(postIemsThird, 0.4, { x: -50, opacity: 0 }, { x: 0, opacity: 1 })

        }
        //Post item 4
        else if (destination.index == 3) {
            array.forEach(cur => {
                cur.style.color = 'white'
            })
            iconArray.forEach(cur => {
                cur.style.backgroundColor = 'white'
            })
            iconboarder.style.border = 'solid 1px white';
            let Fourthmainpicture = document.querySelector(".Fourth-main-picture");
            let text2 = document.querySelectorAll('.text');
            tl.fromTo(Fourthmainpicture, 0.5, { x: "-80", opacity: 0 }, { x: "0", opacity: 1 })
                .fromTo(text2, 0.5, { x: "80", opacity: 0 }, { x: "0", opacity: 1 })
        }
        //Post item 5
        else if (destination.index == 4) {
            array.forEach(cur => {
                cur.style.color = 'black'
            })
            iconArray.forEach(cur => {
                cur.style.backgroundColor = 'black'
            })
            iconboarder.style.border = 'solid 1px black';
            let Fifthmainpicture = document.querySelector(".Fifth-main-picture");
            let text3 = document.querySelectorAll('.text');
            tl.fromTo(Fifthmainpicture, 0.5, { x: "-80", opacity: 0 }, { x: "0", opacity: 1 })
                .fromTo(text3, 0.5, { x: "80", opacity: 0 }, { x: "0", opacity: 1 })
        }
        //Post item 6
        else if (destination.index == 5) {
            array.forEach(cur => {
                cur.style.color = 'white'
            })
            iconArray.forEach(cur => {
                cur.style.backgroundColor = 'white'
            })
            iconboarder.style.border = 'solid 1px white';
            let mainlogo = document.querySelector(".img");
            let text4 = document.querySelector('.Sixth-main-text')
            tl.fromTo(mainlogo, 0.5, { x: "-80", opacity: 0 }, { x: "0", opacity: 1 })
                .fromTo(text4, 0.5, { y: "80", opacity: 0 }, { y: "0", opacity: 1 })
        }
    }

})