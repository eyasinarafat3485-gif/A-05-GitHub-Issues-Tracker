console.log('heooo java tava');
//// Home page js--------------------

const cardContainer = document.getElementById('cardContainer')

async function loadIssues() {
    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues");
    console.log(res);
    const data = await res.json();
    displayIssues(data.data);

    console.log(cardContainer);
};
function displayIssues(issues){
    console.log(issues);
    issues.forEach(issues=>{
        console.log(issues);

        const card= document.createElement('div');
        card.className=" mt-1 p-3 sm:col md:grid-cols-4 gap-2 bg-white space-y-2";
        card.innerHTML=`
          <div class="card bg-base-100 p-[15px]  border-t-8 border-green-500 shadow-sm shadow-gray-600">
                    <figure class=" justify-between">
                        <img src="assets/Open-Status.png" alt="">
                        <div
                            class="badge bg-red-100 w-[70px] rounded-full text-red-600 text-[16px] py-[15px] px-[35px]">
                            High</div>
                    </figure>
                    <h2 class="text-[23px] font-semibold">Fix navigation menu on mobile devices</h2>
                    <h3 class="hello text-[15px] ">The navigation menu doesn't collapse properly on mobile devices...
                    </h3>
                    <div class="card-body ">
                        <div>
                            <div class="btn bg-red-100 w-[75px] rounded-full text-red-600 text-[9px] py-[15px] px-[30px]  border-red-500"><span><i class="fa-brands fa-linux"></i></span>BUG</div>

                            <div class="btn bg-orange-100 w-[130px] rounded-full text-orange-600 text-[9px] py-[15px] px-[30px] border-orange-500"><span><i class="fa-brands fa-gg-circle"></i></span>HELP WANTED</div>

                        </div> 
                        <br>
                        <hr class="hello">
                        <p class="hello text-[14px]">#1 by john_doe</p>
                        <p class="hello text-[14px]">1/15/2024</p>
                    </div> 
                    
        `;
        cardContainer.appendChild(card);
    });
};

loadIssues();

