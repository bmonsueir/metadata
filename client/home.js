Template.home.events({
    "click input"(event){
        //event.preventDefault();
        console.log("upload this");
        var input = document.querySelector("input");

        input.addEventListener("change", function() {
            if (input.files.length > 0) {
                var file = input.files[0];
                console.log(file.name);
                if (file.type)
                Session.set("filesize", file.size);
                    console.log(file.size);
            }
        });
    }
});

Template.home.helpers({
    filesize(){
        return Session.get("filesize");
    }
});
