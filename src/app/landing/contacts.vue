<template>
    <div class="container">
        <h2>Contacts</h2>
        <div class="text-center">
            <h5>
                You can find me there
            </h5>
            <p class="my-4">
                <a class="mr-4" v-for="media in socials" :key="media.link" :href="media.link" target="_blank">
                    <span class="fa-stack fa-2x">
                        <i class="fa fa-circle fa-stack-2x"></i>
                        <i class="fa fa-fw fa-stack-1x fa-inverse" :class="media.icon"></i>
                    </span>
                </a>
            </p>
            <h5 class="my-4">Or send me a message with the form below</h5>
        </div>
        <div class="row">
            <form class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="basic-addon1"><i class="fa fa-at"></i></span>
                    </div>
                    <input type="email" class="form-control" placeholder="Email" required>
                </div>
                <div class="form-group">
                    <textarea placeholder="Message" rows="8" class="form-control" required></textarea>
                </div>
                <p>
                    <button class="btn btn-block btn-success">Send <i class="fa fa-envelope"></i></button>
                </p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            socials: [{
                    icon: 'fa-github',
                    link: 'https://github.com/knizhnikov'
                }, {    
                    icon: 'fa-facebook',
                    link: 'https://facebook.com/knizhnikov'
                }, {    
                    icon: 'fa-linkedin',
                    link: 'https://linkedin.com/knizhnikov'
                }, {
                    icon: 'fa-telegram',
                    link: 'https://www.t.me/knizhnikov'
                }, {
                    icon: 'fa-instagram',
                    link: 'https://instagram.com/knizhnikov'
                }, {
                    icon: 'fa-vk',
                    link: 'https://vk.com/vknizhnikov'
                }
            ]
        };
    }
}
</script>
