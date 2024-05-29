
$(document).ready(function() {
    // Mapping of characters to their corresponding image URLs
    var charToImage = {
        'A': 'aa.jpg',
        'B': 'bb.jpg',
        'C': 'cc.jpg',
        'D': 'dd.jpg',
        'E': 'ee.jpg',
        'F': 'ff.jpg',
        'G': 'ggg.jpg',
        'H': 'he.png',
        'I': 'ice.jpg',
        'J': 'ja.jpg',
        'K': 'ke.jpg',
        'L': 'll.jpg',
        'M': 'mm.jpg',
        'N': 'nn.jpg',
        'O': 'oo.jpg',
        'P': 'pp.jpg',
        'Q': 'qq.jpg',
        'R': 'rr.jpg',
        'S': 'ss.jpg',
        'T': 'tt.jpg',
        'U': 'uu.jpg',
        'V': 'vv.jpg',
        'W': 'ww.jpg',
        'X': 'xx.jpg',
        'Y': 'yy.jpg',
        'Z': 'zz.jpg'
    };

    $("#generateButton").click(function() {
        var numberInput = $("#numberInput").val();
        if (isNaN(numberInput)) {
            alert("You must enter a single number!");
            return;
        }
        if (numberInput > 26) {
            alert("There is no character for numbers greater than 26.");
            return;
        }
        
        var randomChars = "";
        var generatedChars = [];

        // Generate unique random characters
        while (generatedChars.length < numberInput) {
            var randomChar = String.fromCharCode(65 + Math.floor(Math.random() * 26));
            if (!generatedChars.includes(randomChar)) {
                generatedChars.push(randomChar);
                randomChars += "<button class='character' data-char='" + randomChar + "'>" + randomChar + "</button>";
            }
        }

        $("#characterOutput").html(randomChars);

        // Add click event handler to the dynamically created buttons
        $(".character").click(function() {
            var char = $(this).data("char");

            // Remove any existing images
            $(".character-image").remove();

            // Show the corresponding image
            var imgSrc = charToImage[char];
            $(this).after("<img src='" + imgSrc + "' class='character-image'>");
        });
    });
});
