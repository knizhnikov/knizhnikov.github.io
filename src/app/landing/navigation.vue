<template>
    <nav id="navbar" class="navbar transparent fixed-top navbar-expand navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-item nav-link" href="#hero">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#about">About</a>
            <a class="nav-item nav-link" href="#projects">Projects</a>
            <a class="nav-item nav-link" href="#contacts">Contacts</a>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    mounted: ()=>{
        var hero    = document.getElementById('hero-root');
        var navbar  = document.getElementById('navbar');

        window.onscroll = ()=> {
            if (window.pageYOffset+navbar.offsetHeight >= hero.offsetHeight){
                navbar.classList.replace('transparent', 'bg-primary');
            } else {
                navbar.classList.replace('bg-primary', 'transparent');
            }
        }; 
    }
}
</script>

<style lang="scss" scoped>
    .navbar.transparent {
        background-color: transparent !important; 
        color: white;

        -webkit-transition: all 0.3s linear;
        -moz-transition: all 0.3s linear;
        -o-transition: all 0.3s linear;
        transition: all 0.3s linear;
    }

    .navbar.bg-primary {
        -webkit-transition: all 0.3s linear;
        -moz-transition: all 0.3s linear;
        -o-transition: all 0.3s linear;
        transition: all 0.3s linear;
    }
</style>

