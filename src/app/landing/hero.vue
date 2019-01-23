<template>
    <div id="hero-root">
        <div id="particles"></div>
        <div class="hero row m-0">
            <div class="title m-auto" fade-in>
                <h1 class="text-success">Vasiliy Knizhnikov</h1>
                <h3 class="typewriter">full-stack web developer</h3>
                <div class="mt-3">
                    <span v-for="tech in techs" :key="tech" class="badge badge-secondary mr-1">
                        {{tech}}
                    </span>
                </div>
                <div class="mt-4">
                    <a href="#about" class="btn btn-outline-secondary">Tell me more <i class="fa fa-caret-down"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                techs: [ 'c#', 'js', '.net core', 'angular', 'web api', 'sql', 'nosql' ]
            }
        }
    }
</script>

<style lang="scss">
    .hero {
        height: 100vh;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;

        color: #fff;
    }

    @media (max-width: 768px) {
        .hero .title {
            text-align: center;
        }
    }

    #particles {
        height: 100vh;
        width: 100vw;

        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;

        background: linear-gradient(228deg, #000000, #230631);
        background-size: 400% 400%;

        -webkit-animation: AnimationName 14s ease infinite;
        -moz-animation: AnimationName 14s ease infinite;
        animation: AnimationName 14s ease infinite;

        @-webkit-keyframes AnimationName {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }
        @-moz-keyframes AnimationName {
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }
        @keyframes AnimationName { 
            0%{background-position:0% 50%}
            50%{background-position:100% 50%}
            100%{background-position:0% 50%}
        }   
    }

    h3.typewriter {
        color: #fff;
        overflow: hidden; /* Ensures the content is not revealed until the animation */
        border-right: .15em solid orange; /* The typwriter cursor */
        white-space: nowrap; /* Keeps the content on a single line */
        margin: 0 auto; /* Gives that scrolling effect as the typing happens */
        animation: 
            typing 3.5s steps(30, end),
            blink-caret .5s step-end infinite;
    }

    /* The typing effect */
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }

    /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: orange }
    }
</style>