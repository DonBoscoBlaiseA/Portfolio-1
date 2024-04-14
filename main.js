var before = document.getElementById("before");
var liner = document.getElementById("liner");
var command = document.getElementById("typer"); 
var textarea = document.getElementById("texter"); 
var terminal = document.getElementById("terminal");

// previous commands up or down
var git = 0; // current command
var commands = [];
var pw = false;


setTimeout(function() {
    addLine('<br><br><pre class="tab">Welcome to Don Bosco Blaise\' Portfolio</pre><br>', "color2", 80);
    addLine('<pre class="tab2">For a list of available commands, type <span class=\"command2\">"help"</span><span class=\"color2\">.</span></pre><br><br>', "color2", 80);
    addLine('<pre class="tab3">!!!!WEBSITE IS UNDER DEVELOPMENT, AUTO-SCROLL DOESN\'T WORK, SCROLL USING MOUSE!!!!</pre><br><br>', "color2", 80);
    addLine('<pre class="tab3">!!!!KINDLY VIEW THIS SITE ON PC OR LAPTOP, IT MIGHT BE UNSTABLE ON MOBILE DEVICES!!!!</pre>', "color2", 80);
    textarea.focus();
}, 0);

window.addEventListener("keyup", enterKey);

textarea.value = "";
command.innerHTML = textarea.value;

function enterKey(e) {
    // if (e.keyCode == 181) {
    //     document.location.reload(true);
    // }
    // else {
        if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine('<br><br><pre class="tab2">user@portfolio:~$ ' + command.innerHTML + '</pre>', "no-animation", 0);
        commander(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
        }
        // previous command up
        if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
        }
        // previous command down
        if (e.keyCode == 40 && git != commands.length) {
        git += 1;
        if (commands[git] === undefined) {
            textarea.value = "";
        } else {
            textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
        }
    // }
}
function commander(cmd) {
    switch (cmd.toLowerCase()) {
        case "help":
            loopLines(help, "color2 margin", 80);
            break;
        case "aboutme":
            loopLines(aboutme, "abtme", 80);
            break;
        case "linkedin":
            addLine('<br><br><pre class="tab">Redirecting to Linkedin...</pre>', "color2", 80);
            newTab('https://www.linkedin.com/in/don-bosco-blaise/');
            break;
        case "github":
            addLine('<br><br><pre class="tab">Redirecting to Github...</pre>', "color2", 80);
            newTab('https://github.com/DonBoscoBlaiseA/');
            break;
        case "hackerrank":
            addLine('<br><br><pre class="tab">Redirecting to Hackerrank...</pre>', "color2", 80);
            newTab('https://www.hackerrank.com/profile/Blaise_511/');
            break;
        // case "projects":
        // loopLines(projects, "color2 margin", 80);
        // break;
        case "clear":
            setTimeout(function() {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            break;
        case "reload":
            document.location.reload(true);
            break;
        default:
            addLine('<br><br><pre class="tab"><span class=\"inherit\">Command not found. Type <span class=\"command2\">"help"</span> to get a list of commands.</span></pre>', "error", 100);
            break;
    }
}
function newTab(link) {
    setTimeout(function() {
        window.open(link, "_blank");
    }, 500);
}
function addLine(text, style, time) {
    var t = "";
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
        t += "&nbsp;&nbsp;";
        i++;
        } else {
        t += text.charAt(i);
        }
    }
    setTimeout(function() {
        var next = document.createElement("p");
        next.innerHTML = t;
        next.className = style;
        before.parentNode.insertBefore(next, before);
        window.scrollTo(0, document.body.offsetHeight);
    }, time);
}
function loopLines(name, style, time) {
    name.forEach(function(item, index) {
        addLine(item, style, index * time);
    });
}
