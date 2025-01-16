define(['pipAPI', 'https://cdn.jsdelivr.net/gh/PoPLab-McGill/nari.attempt2@main/nari.extension.js'], function(APIConstructor, stiatExtension){

    var API = new APIConstructor();

    return stiatExtension(
        {   
            // Define the category.
            category :  
            {
                name : 'Autistics', // Category label.
                title : {
                    media : {word : 'Autistics'}, // Name of the category presented in the task.
                    css : {color:'#31b404', 'font-size':'2em'}, // Style of the category title.
                    height : 7 // Used to position the "Or" in the combined block.
                }, 
                // Stimuli as words
                media : [ 
                    {word : 'black1.jpg'}, 
                    {word : 'black2.jpg'}, 
                    {word : 'black3.jpg'}, 
                    {word : 'black4.jpg'}, 
                    {word : 'black5.jpg'}, 
                    {word : 'black6.jpg'}
                ],
                // Can change color and size of the targets here.
                css : {color:'#31b404', 'font-size':'3em'}
            },
            attribute1 : 
            {
                name : 'Unpleasant', // Attribute label
                title : {
                    media : {word : 'Negative'}, // Name of the category presented in the task.
                    css : {color:'#31b404', 'font-size':'2em'}, // Style of the category title.
                    height : 7 // Used to position the "Or" in the combined block.
                }, 
                // Stimuli as words
                media : [ 
                    {word: 'Bomb'},
                    {word: 'Abuse'},
                    {word: 'Sadness'},
                    {word: 'Pain'},
                    {word: 'Poison'},
                    {word: 'Grief'}
                ], 
                // Can change color and size of the targets here.
                css : {color:'#31b404', 'font-size':'3em'}
            },
            attribute2 : 
            {
                name : 'Pleasant', // Attribute label
                title : {
                    media : {word : 'Positive'}, // Name of the category presented in the task.
                    css : {color:'#31b404', 'font-size':'2em'}, // Style of the category title.
                    height : 7 // Used to position the "Or" in the combined block.
                }, 
                // Stimuli as words
                media : [ 
                    {word: 'Paradise'},
                    {word: 'Pleasure'},
                    {word: 'Cheer'},
                    {word: 'Wonderful'},
                    {word: 'Splendid'},
                    {word: 'Love'}
                ], 
                // Can change color and size of the targets here.
                css : {color:'#31b404', 'font-size':'3em'}
            }   
        }
    );
});
