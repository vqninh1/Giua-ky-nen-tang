window.addEventListener("load", function () {
    var mouseOver = [...document.querySelectorAll('.app__infor_items_links')];

    mouseOver.forEach( item => item.addEventListener('mouseover', handleOverLink));

    const bannerDocument = document.createElement('div');
    bannerDocument.className = 'app__infor_banner';
    document.body.appendChild(bannerDocument);
    // bannerDocument.innerHTML = `<section class="app__infor">
    //                                 <div class="container">
    //                                     <div class="row mb-4">
    //                                         <div class="col-9">
    //                                             <div class="row">
    //                                                 <div class="col-7">
    //                                                     <div class="app__infor_first">
    //                                                         <div class="app__infor_img">
    //                                                             <a href="" class="app__infor_img_link">
    //                                                                 <img src="./assets/img/sinhviendocsach.jpg" alt="img-1" srcset="">
    //                                                             </a>
    //                                                         </div>

    //                                                         <div class="app__infor_body">
    //                                                             <a href="" class="app__infor_title">
    //                                                                 Thông báo tuyển sinh năm 2023 của Trường Đại học Thủy lợi
    //                                                             </a>
    //                                                             <img src="./assets/img/hot.gif" alt="gif-hot" srcset="">
    //                                                         </div>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div> 
    //                             </section>`;
    function handleOverLink(event) { 
        const {left, top} = event.target.getBoundingClientRect();
        bannerDocument.style.left = `${left}px`;
        bannerDocument.style.top = `${top}px`;

    }
})