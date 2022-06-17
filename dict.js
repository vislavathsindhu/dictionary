
function getdef() {
    // document.getElementById('searchResult').style.visibility = 'visible';
    let wordToSearch = document.getElementById('input1').value;
    console.log(wordToSearch);
    console.log("Started getData")
    url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`;
    // url=link;
    fetch(url).then((response) => {
        // console.log("Inside first then")
        return response.json();
    }).then((data) => {
        // console.log("Inside second then")

        data.forEach(function (element) {

            let word = document.getElementById('word');

            word.innerHTML = `<h1> WORD </h1>${wordToSearch}`;
            let str = '';
            if((element.meanings.length)>0)
           { for (let i = 0; i < (element.meanings.length); i++) {
                str += `<p>${i+1})  ${element.meanings[i].definitions[0].definition}</p>`;
                 console.log(str);
            }definition.innerHTML = `<h1> DEFINITION </h1>${str}`;
        }else{
                definition.innerHTML = `<h1> SYNONYMS </h1> UNDEFINED `;
            }
            // let definition=document.getElementById("definition");
            

        })
    })
}
// getdata();


function getsyn() {
    
    let wordToSearch = document.getElementById('input1').value;
    url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`;
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        data.forEach(function (element) {
            console.log(element);
            
            let str = '';
            if((element.meanings[0].synonyms.length)>0)
            {
            for (let i = 0; i < (element.meanings[0].synonyms.length); i++) 
            {
                str += `${element.meanings[0].synonyms[i]}, `;
                //    console.log(str);
            }
            console.log(str);
            
            syn.innerHTML = `<h1> SYNONYMS </h1>${str}`;
           }
           else if((element.meanings[0].synonyms.length)<0) {
               
                syn.innerHTML = `<h1> SYNONYMS </h1> UNDEFINED `;
            }
           

        })
    })
}




function getpos() {
    // document.getElementById('searchResult').style.visibility = 'visible';
    let wordToSearch = document.getElementById('input1').value;
    console.log(wordToSearch);
    console.log("Started getData")
    url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`;
    // url=link;
    fetch(url).then((response) => {
        // console.log("Inside first then")
        return response.json();
    }).then((data) => {
        // console.log("Inside second then")

        data.forEach(function (element) {

           console.log(element);
           console.log(element.meanings[0].partOfSpeech);
           let str='';
            if((element.meanings.length)>0){
                for (let i = 0; i < (element.meanings.length); i++) {
                    str += `${element.meanings[i].partOfSpeech}, `;
                   
                       console.log(str);
                    
                }
                // let pos=document.getElementById('pos');
                pos.innerHTML = `<h1> PARTS OF SPEECH </h1>${str}`;
            }
                else{
                   
                    pos.innerHTML = `<h1> PARTS OF SPEECH </h1> UNDEFINED `;
                }
               

        })
    })
}




function getant() {
    // document.getElementById('searchResult').style.visibility = 'visible';
    let wordToSearch = document.getElementById('input1').value;
    console.log(wordToSearch);
    console.log("Started getData")
    url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`;
    // url=link;
    fetch(url).then((response) => {
        // console.log("Inside first then")
        return response.json();
    }).then((data) => {
        // console.log("Inside second then")

        data.forEach(function (element) {

            
            if((element.meanings[0].antonyms.length)>0){
                for (let i = 0; i < (element.meanings[0].antonyms.length); i++) {
                    str += `${element.meanings[0].antonyms[i]}, `;
                    // console.log(element.meanings[0].synonyms[i]," ");
                       console.log(str);
                    //    example.innerHTML =`${element.meanings[0].synonyms[i]}, `;
                }
                // let syn=document.getElementById('syn');
                ant.innerHTML = `<h1> ANTONYMS </h1>${str}`;
            }
                else{
                   
                    ant.innerHTML = `<h1> ANTONYMS </h1> UNDEFINED `;
                }
               

        })
    })
}





function getpho() {
    // document.getElementById('searchResult').style.visibility = 'visible';
    let wordToSearch = document.getElementById('input1').value;
    console.log(wordToSearch);
   
    url = `https://api.dictionaryapi.dev/api/v2/entries/en/${wordToSearch}`;
    // url=link;
    fetch(url).then((response) => {
        // console.log("Inside first then")
        return response.json();
    }).then((data) => {
        // console.log("Inside second then")

        data.forEach(function (element) {

           
            if((element.phonetics.length)>0){
                let str='';
                for (let i = 0; i < (element.phonetics.length); i++) {
                    str += `${element.phonetics[i].text},  `;
                    // console.log(element.meanings[0].synonyms[i]," ");
                       console.log(str);
                    //    example.innerHTML =`${element.meanings[0].synonyms[i]}, `;
                }
                // let syn=document.getElementById('syn');
                pho.innerHTML = `<h1> PHONETICS </h1>${str}`;
            }
                else{
                   
                    pho.innerHTML = `<h1> PHONETICS </h1> UNDEFINED `;
                }
               

        })
    })
}